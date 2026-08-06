"use client";

import Link from "next/link";
import { useRef, useCallback, useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { SplineScene } from "@/components/ui/splite";
import { HeroVisualLite } from "@/components/ui/hero-visual-lite";
import s from "./hero.module.css";

export default function HeroSection() {
    const { copy } = useI18n();
    const splineRef = useRef<HTMLElement>(null);

    // The Spline scene pulls a ~6.6MB WebGL runtime plus a remote scene file.
    // It stays a desktop-only treat: because `Spline` is a lazy import, not
    // rendering it means the chunk is never fetched at all. Starting at `false`
    // also keeps the server render and the first paint on the light visual.
    const [useSpline, setUseSpline] = useState(false);

    useEffect(() => {
        const wide = window.matchMedia("(min-width: 901px)");
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

    const relayPointer = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const canvas = splineRef.current?.querySelector("canvas");
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        if (e.clientX >= rect.left) return;
        canvas.dispatchEvent(new PointerEvent("pointermove", {
            bubbles: false,
            clientX: e.clientX,
            clientY: e.clientY,
            pointerId: 1,
            isPrimary: true,
            pointerType: "mouse",
        }));
    }, []);

    return (
        <section className={s.hero} id="inicio" onMouseMove={relayPointer}>
            <div className={s.heroGrid} />
            <div className={s.heroGlow} />

            <div className={s.heroContent}>
                <div className={s.heroLayout}>
                    <div className={s.heroCopy}>
                        <p className={s.eyebrow}>{copy.hero.eyebrow}</p>
                        <h1>
                            <em>{copy.hero.title.line1Em}</em>
                            {copy.hero.title.line1Text}
                            <br />
                            {copy.hero.title.line2Text}
                            <em>{copy.hero.title.line2Em}</em>.
                        </h1>
                        <p className={s.heroSub}>
                            {copy.hero.subtitle}
                        </p>

                        <div className={s.heroActions}>
                            <Link href="#formulario" className={s.btnPrimary}>
                                {copy.hero.primaryCta}
                            </Link>
                            <Link href="#resultados" className={s.btnGhost}>
                                {copy.hero.secondaryCta}
                            </Link>
                        </div>

                        <div className={s.heroStats} aria-label={copy.hero.aria.stats}>
                            {copy.hero.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className={s.statVal}>
                                        <span>{stat.prefix}</span>
                                        {stat.value}
                                    </p>
                                    <p className={s.statLabel}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside ref={splineRef} className={s.heroSpline} aria-label={copy.hero.aria.visual}>
                        {useSpline ? (
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        ) : (
                            <HeroVisualLite />
                        )}
                    </aside>
                </div>
            </div>
        </section>
    );
}
