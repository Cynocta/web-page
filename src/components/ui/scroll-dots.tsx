"use client";

import { useEffect, useState, type RefObject } from "react";
import s from "./scroll-dots.module.css";

export function useScrollIndex(ref: RefObject<HTMLElement | null>) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => {
            const children = Array.from(el.children) as HTMLElement[];
            if (!children.length) return;
            const center = el.scrollLeft + el.clientWidth / 2;
            let closest = 0;
            let minDist = Infinity;
            for (let i = 0; i < children.length; i++) {
                const dist = Math.abs(
                    children[i].offsetLeft + children[i].offsetWidth / 2 - center,
                );
                if (dist < minDist) {
                    minDist = dist;
                    closest = i;
                }
            }
            setIndex(closest);
        };

        el.addEventListener("scroll", update, { passive: true });
        update();
        return () => el.removeEventListener("scroll", update);
    }, [ref]);

    return index;
}

export function ScrollDots({
    count,
    active,
    className,
}: {
    count: number;
    active: number;
    className?: string;
}) {
    return (
        <div
            className={`${s.dots} ${className ?? ""}`}
            aria-hidden="true"
        >
            {Array.from({ length: count }, (_, i) => (
                <span
                    key={i}
                    className={`${s.dot} ${i === active ? s.active : ""}`}
                />
            ))}
        </div>
    );
}
