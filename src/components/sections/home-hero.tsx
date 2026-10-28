"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { SplineScene } from "@/components/ui/splite";
import { HeroVisualLite } from "@/components/ui/hero-visual-lite";
import s from "./home-hero.module.css";

/**
 * Homepage opener.
 *
 * Same gating as before: the Spline scene pulls a ~6.6MB WebGL runtime, so it
 * stays a desktop-only treat and the lazy chunk is never fetched on a phone.
 * Starting at `false` also keeps the server render on the light visual.
 *
 * Even on desktop it waits for the first pointer movement. The scene is 563KB
 * of runtime that holds the main thread for about four seconds, plus a 1.2MB
 * scene and a WASM module — a third of which is wasted on someone who reads the
 * hero and scrolls on. Since the robot's whole trick is following the pointer,
 * a visitor who never moves one loses nothing by keeping the light visual.
 *
 * There is deliberately no timer or idle fallback: that is what made the scene
 * load for visitors who never asked for it, and it put the desktop homepage at
 * 2.6MB with 1.9s of blocking time.
 */
export default function HomeHero({
    primaryHref,
    secondaryHref,
}: {
    primaryHref: string;
    secondaryHref: string;
}) {
    const { copy } = useI18n();
    const [useSpline, setUseSpline] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const wide = window.matchMedia("(min-width: 1000px)");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setUseSpline(wide.matches && !reduced.matches);

        update();
        wide.addEventListener("change", update);
        reduced.addEventListener("change", update);
        return () => {
            wide.removeEventListener("change", update);
            reduced.removeEventListener("change", update);
        };
    }, []);

    // A pointer in the window is the only reason to spend four seconds of main
    // thread on a scene that tracks it.
    useEffect(() => {
        if (!useSpline || ready) return;

        const start = () => setReady(true);
        window.addEventListener("pointermove", start, { once: true, passive: true });
        return () => window.removeEventListener("pointermove", start);
    }, [useSpline, ready]);

    return (
        <section className={s.hero} id="inicio">
            <div className={s.grid} aria-hidden="true" />

            <div className={s.inner}>
                <div className={s.copy}>
                    <p className={s.eyebrow}>
                        <span className={s.pulse} aria-hidden="true" />
                        {copy.hero.eyebrow}
                    </p>

                    <h1 className={s.title}>
                        <em>{copy.hero.title.line1Em}</em>
                        {copy.hero.title.line1Text}
                        <br />
                        {copy.hero.title.line2Text}
                        <em>{copy.hero.title.line2Em}</em>.
                    </h1>

                    <p className={s.subtitle}>{copy.hero.subtitle}</p>

                    <div className={s.actions}>
                        <Link href={primaryHref} className={s.primary}>
                            {copy.hero.primaryCta}
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link href={secondaryHref} className={s.secondary}>
                            {copy.hero.secondaryCta}
                        </Link>
                    </div>
                </div>

                <aside className={s.visual} aria-label={copy.hero.aria.visual}>
                    {useSpline && ready ? (
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    ) : (
                        <HeroVisualLite />
                    )}
                </aside>
            </div>

            <div className={s.stats}>
                <dl className={s.statsInner} aria-label={copy.hero.aria.stats}>
                    {copy.hero.stats.map((stat) => (
                        <div key={stat.label} className={s.stat}>
                            <dd className={s.statValue}>
                                <span className={s.statPrefix}>{stat.prefix}</span>
                                {stat.value}
                            </dd>
                            <dt className={s.statLabel}>{stat.label}</dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
