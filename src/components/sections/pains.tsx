"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import s from "./pains.module.css";

const ArrowIcon = ({ dir }: { dir: "prev" | "next" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d={dir === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
);

export default function PainsSection() {
    const { copy } = useI18n();
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const items = copy.pains.items;

    // Track which card sits closest to the viewport center of the rail.
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const update = () => {
            const cards = Array.from(el.children) as HTMLElement[];
            if (!cards.length) return;
            const center = el.scrollLeft + el.clientWidth / 2;
            let closest = 0;
            let minDist = Infinity;
            cards.forEach((card, i) => {
                const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
                if (dist < minDist) {
                    minDist = dist;
                    closest = i;
                }
            });
            setIndex(closest);
        };

        el.addEventListener("scroll", update, { passive: true });
        update();
        return () => el.removeEventListener("scroll", update);
    }, [items.length]);

    const scrollToIndex = useCallback((target: number) => {
        const el = trackRef.current;
        if (!el) return;
        const cards = Array.from(el.children) as HTMLElement[];
        const card = cards[Math.max(0, Math.min(target, cards.length - 1))];
        if (!card) return;
        // CSS scroll-behavior is overridden by this call, so honour the user's
        // motion preference here too.
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollTo({
            left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
            behavior: reduced ? "auto" : "smooth",
        });
    }, []);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollToIndex(index + 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollToIndex(index - 1);
        }
    };

    return (
        <section id="problema" className={s.section}>
            <div className={`cyn-section ${s.inner}`}>
                <p className="cyn-section-tag">{copy.pains.tag}</p>
                <h2 className={`cyn-section-title ${s.title}`}>{copy.pains.title}</h2>
                <p className={s.intro}>{copy.pains.intro}</p>

                <div className={s.carousel}>
                    <button
                        type="button"
                        className={`${s.arrow} ${s.arrowPrev}`}
                        onClick={() => scrollToIndex(index - 1)}
                        disabled={index === 0}
                        aria-label={copy.pains.aria.prev}
                    >
                        <ArrowIcon dir="prev" />
                    </button>

                    <div
                        ref={trackRef}
                        className={s.track}
                        role="group"
                        aria-label={copy.pains.aria.carousel}
                        aria-roledescription="carousel"
                        tabIndex={0}
                        onKeyDown={onKeyDown}
                    >
                        {items.map((pain, i) => (
                            <article
                                key={pain.num}
                                className={s.card}
                                data-active={i === index}
                                aria-label={`${i + 1} / ${items.length}`}
                                aria-roledescription="slide"
                            >
                                <div className={s.cardTop}>
                                    <span className={s.num}>{pain.num}</span>
                                    <span className={s.counter}>
                                        {i + 1}/{items.length}
                                    </span>
                                </div>
                                <h3 className={s.cardTitle}>{pain.title}</h3>
                                <p className={s.cardText}>{pain.description}</p>
                            </article>
                        ))}
                    </div>

                    <button
                        type="button"
                        className={`${s.arrow} ${s.arrowNext}`}
                        onClick={() => scrollToIndex(index + 1)}
                        disabled={index === items.length - 1}
                        aria-label={copy.pains.aria.next}
                    >
                        <ArrowIcon dir="next" />
                    </button>
                </div>

                <div className={s.dots}>
                    {items.map((pain, i) => (
                        <button
                            key={pain.num}
                            type="button"
                            className={`${s.dot} ${i === index ? s.dotActive : ""}`}
                            onClick={() => scrollToIndex(i)}
                            aria-label={`${copy.pains.aria.goTo} ${i + 1}`}
                            aria-current={i === index}
                        />
                    ))}
                </div>

                <p className={s.closing}>{copy.pains.closing}</p>
            </div>
        </section>
    );
}
