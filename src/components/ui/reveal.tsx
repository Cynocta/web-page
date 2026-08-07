"use client";

import { useEffect, useRef, useState } from "react";
import s from "./reveal.module.css";

/**
 * Fades content up once as it enters the viewport.
 *
 * Uses IntersectionObserver rather than a scroll listener so it costs nothing
 * while idle, and disconnects after firing — the reveal is a first impression,
 * not a permanent effect. Content is visible from the start when the user has
 * asked for reduced motion, and the CSS keeps it visible if JS never runs.
 */
export default function Reveal({
    delay = 0,
    className,
    children,
}: {
    /** Stagger in ms, for lists where items should arrive in sequence. */
    delay?: number;
    className?: string;
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShown(true);
                observer.disconnect();
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${s.reveal} ${shown ? s.shown : ""} ${className ?? ""}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
