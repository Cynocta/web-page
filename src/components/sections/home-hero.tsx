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
 * Even on desktop it waits: evaluating the runtime blocks the main thread for
 * about two seconds, which on page load delayed everything else the visitor
 * could do. It now mounts on the first pointer movement (the robot follows the
 * pointer, so that's when it matters) or once the page has loaded and the
 * browser is idle, whichever comes first.
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

    // Wait for a reason to spend two seconds of main thread on the scene.
    useEffect(() => {
        if (!useSpline || ready) return;

        let idleId: number | undefined;
        let timeoutId: number | undefined;
        const start = () => setReady(true);
        const whenIdle = () => {
            if (typeof window.requestIdleCallback === "function") {
                idleId = window.requestIdleCallback(start, { timeout: 4000 });
            } else {
                timeoutId = window.setTimeout(start, 1500);
            }
        };

        window.addEventListener("pointermove", start, { once: true, passive: true });
        if (document.readyState === "complete") whenIdle();
        else window.addEventListener("load", whenIdle, { once: true });

        return () => {
            window.removeEventListener("pointermove", start);
            window.removeEventListener("load", whenIdle);
            if (idleId !== undefined) window.cancelIdleCallback(idleId);
            if (timeoutId !== undefined) window.clearTimeout(timeoutId);
        };
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
