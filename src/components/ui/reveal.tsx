"use client";

import { useEffect, useRef, useState } from "react";
import s from "./reveal.module.css";

/** How long to wait for the observer before showing the content anyway. */
const SAFETY_MS = 1200;

/**
 * Fades content up once as it enters the viewport.
 *
 * Fails open, deliberately. The content starts at `opacity: 0`, so anything
 * that stops the observer from firing — no IntersectionObserver, a background
 * tab that never composites a frame, a bug in this component — would otherwise
 * leave the section permanently invisible. Three guards prevent that: elements
 * already on screen at mount show immediately, a timer reveals anything the
 * observer hasn't reported on, and reduced-motion skips the whole mechanism.
 */
export default function Reveal({
    delay = 0,
    blur = false,
    className,
    children,
}: {
    /** Stagger in ms, for lists where items should arrive in sequence. */
    delay?: number;
    /**
     * Adds a short defocus to the entrance. Opt-in because animating `filter`
     * repaints, which is fine for a handful of columns and wasteful on a grid
     * of twenty cards.
     */
    blur?: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reveal = () => setShown(true);

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            typeof IntersectionObserver === "undefined"
        ) {
            reveal();
            return;
        }

        // Already on screen when mounted — no entrance to wait for.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal();
            return;
        }

        const safety = window.setTimeout(reveal, SAFETY_MS);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                window.clearTimeout(safety);
                reveal();
                observer.disconnect();
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(el);
        return () => {
            window.clearTimeout(safety);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${s.reveal} ${blur ? s.blur : ""} ${shown ? s.shown : ""} ${className ?? ""}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
