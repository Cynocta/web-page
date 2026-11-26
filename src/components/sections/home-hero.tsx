"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useI18n } from "@/components/i18n-provider";
import { MagneticField } from "@/components/ui/magnetic-field";
import s from "./home-hero.module.css";

/**
 * Homepage opener: a magnetic field with the Cynocta knot as its magnet.
 *
 * The whole section is the field (see MagneticField), so there is no picture
 * in a box: the filings comb around the copy, draw the knot on the right, and
 * swing towards the primary action when it is hovered.
 *
 * The arrival is one coordinated moment: the ground opens from the bottom
 * right in an ellipse while each headline word springs out of its own mask
 * with an elastic overshoot, and the filings settle into the knot as the
 * ground reaches them. It runs once, when the hero first enters view, and all
 * active work stops by 1.5 s.
 *
 * The rest of the hero follows the headline as one wave (times from the start):
 *   ground     0–1100 ms  ellipse from the bottom right
 *   words      0–1490 ms  elastic, 88 ms apart (the lead)
 *   subtitle   520 ms     rises 12px out of a blur
 *   CTAs       640/700 ms rise 10px, scale up from 0.96
 *   scale rule 760 ms     the stroke draws left to right
 *   figures    790/900/1040 ms, each as the stroke reaches its tick
 * The navigation and the field never take part: the nav is used on every visit
 * and the field already has its own moment as the ground uncovers it.
 */

/** Elastic ease-out with real overshoot; p itself is never clamped. */
function elastic(raw: number) {
    if (raw <= 0) return 0;
    if (raw >= 1) return 1;
    return Math.pow(2, -10 * raw) * Math.sin(((raw - 0.72 / 4) * 2 * Math.PI) / 0.72) + 1;
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const WORD_STAGGER = 0.088;
const WORD_DURATION = 0.875;
const GROUND_DURATION = 1.1;

export default function HomeHero({
    primaryHref,
    secondaryHref,
}: {
    primaryHref: string;
    secondaryHref: string;
}) {
    const { copy } = useI18n();
    const { title } = copy.hero;
    const sectionRef = useRef<HTMLElement>(null);
    const groundRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<HTMLSpanElement[]>([]);

    // Two lines: the plain one, then the marked one, as in the brand's
    // one-highlight-per-headline rule.
    const plain = `${title.line1Em}${title.line1Text}`.trim().split(/\s+/);
    const marked = `${title.line2Text}${title.line2Em}.`.trim().split(/\s+/);
    const label = `${title.line1Em}${title.line1Text} ${title.line2Text}${title.line2Em}.`;

    useEffect(() => {
        const section = sectionRef.current;
        const ground = groundRef.current;
        const words = wordRefs.current.filter(Boolean);
        if (!section || !ground) return;

        const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
        let raf = 0;
        let started = false;

        const settle = () => {
            section.dataset.arrived = "true";
            ground.style.clipPath = "ellipse(150% 150% at 100% 100%)";
            for (const w of words) {
                w.style.transform = "none";
                w.style.opacity = "1";
            }
        };

        const play = () => {
            // The rest of the hero hangs off this same zero: setting the flag
            // starts the copy, buttons and scale on their CSS delays.
            section.dataset.arrived = "true";
            const t0 = performance.now();
            const frame = (now: number) => {
                const t = (now - t0) / 1000;
                const b = 1 - Math.pow(1 - clamp01(t / GROUND_DURATION), 3);
                ground.style.clipPath = `ellipse(${20 + 130 * b}% ${150 * b}% at 100% 100%)`;
                words.forEach((w, i) => {
                    const raw = clamp01((t - i * WORD_STAGGER) / WORD_DURATION);
                    const p = elastic(raw);
                    const q = 1 - p;
                    w.style.transform =
                        `translate(${40 * q}%, ${-10 * q}%) scale(${0.85 + 0.15 * p}, ${0.1 + 0.9 * p}) rotate(${8 * q}deg)`;
                    w.style.opacity = String(clamp01(raw * 5));
                });
                const end = (words.length - 1) * WORD_STAGGER + WORD_DURATION;
                if (t < Math.max(end, GROUND_DURATION)) raf = requestAnimationFrame(frame);
                else settle();
            };
            raf = requestAnimationFrame(frame);
        };

        if (reduceMq.matches) {
            settle();
            return;
        }

        // Once, when the hero first enters view.
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started) return;
                started = true;
                io.disconnect();
                play();
            },
            { threshold: 0.25 },
        );
        io.observe(section);

        // Switching to reduced motion mid-arrival jumps straight to the end.
        const onReduce = () => {
            if (!reduceMq.matches) return;
            cancelAnimationFrame(raf);
            started = true;
            io.disconnect();
            settle();
        };
        reduceMq.addEventListener("change", onReduce);

        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
            reduceMq.removeEventListener("change", onReduce);
        };
    }, []);

    let wi = 0;
    const word = (text: string, isMarked: boolean, last: boolean) => {
        const i = wi++;
        return (
            <span key={i} className={`${s.mask} ${isMarked ? s.markMask : ""}`}>
                <span
                    ref={(el) => {
                        if (el) wordRefs.current[i] = el;
                    }}
                    className={`${s.word} ${isMarked ? s.marked : ""}`}
                >
                    {/* Marked words carry their trailing space inside the marker,
                        so the highlight reads as one block, not four tiles. */}
                    {isMarked && !last ? `${text} ` : text}
                </span>
            </span>
        );
    };

    return (
        <section ref={sectionRef} className={s.hero} id="inicio" data-field-root>
            <div ref={groundRef} className={s.ground} aria-hidden="true">
                <MagneticField className={s.field} />
            </div>

            <div className={s.inner}>
                <div className={s.copy}>
                    {/* The label names the heading for assistive tech; the words
                        stay the only copy of the text, so search engines and
                        selection read it once. */}
                    <h1 className={s.title} data-field-avoid aria-label={label}>
                        <span aria-hidden="true" className={s.lines}>
                            <span className={s.line}>
                                {plain.map((w, i) => (
                                    <span key={`p${i}`}>
                                        {word(w, false, i === plain.length - 1)}
                                        {i < plain.length - 1 ? " " : null}
                                    </span>
                                ))}
                            </span>{" "}
                            <span className={s.line}>
                                {marked.map((w, i) => (
                                    <span key={`m${i}`}>
                                        {word(w, true, i === marked.length - 1)}
                                        {i < marked.length - 1 ? <wbr /> : null}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>

                    <p className={s.subtitle} data-field-avoid>
                        {copy.hero.subtitle}
                    </p>

                    <div className={s.actions} data-field-avoid>
                        <Link href={primaryHref} className={s.primary} data-field-magnet>
                            {copy.hero.primaryCta}
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link href={secondaryHref} className={s.secondary}>
                            {copy.hero.secondaryCta}
                        </Link>
                    </div>
                </div>

                <div className={s.knotSlot} data-knot-slot aria-hidden="true" />
            </div>

            {/* The commitments read like the scale on a physics plate: a ruled
                edge, with each figure standing on its own major tick. */}
            <div className={s.scale} data-field-avoid>
                <dl className={s.scaleInner} aria-label={copy.hero.aria.stats}>
                    {copy.hero.stats.map((stat) => (
                        <div key={stat.label} className={s.tick}>
                            <dd className={s.tickValue}>
                                {stat.prefix && <span className={s.tickPrefix}>{stat.prefix}</span>}
                                {stat.value}
                            </dd>
                            <dt className={s.tickLabel}>{stat.label}</dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
