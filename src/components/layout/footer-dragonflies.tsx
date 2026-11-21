"use client";

import { useEffect, useRef } from "react";
import type { Theme } from "@/components/theme-toggle";
import s from "./footer-dragonflies.module.css";

/** The engine reads it off `<html>`, the same place the toggle writes it. */
const currentTheme = (): Theme =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

/**
 * Dragonflies crossing the footer, drawn as ASCII on a canvas.
 *
 * The engine is `src/vendor/ascii-animals` (MIT — see the README there): it
 * hovers, darts and cruises them along a course, fades the far ones into the
 * background, pauses itself off-screen and draws a single still frame for
 * anyone who asked for less motion.
 *
 * Two things are ours. The engine arrives through a dynamic `import()` fired
 * by an observer, so a visitor who never reaches the bottom of the page never
 * downloads it — it rides on every page of the site, and it is the heaviest
 * thing on most of them. And the theme comes from `<html data-theme>`, watched
 * the way `magnetic-field` watches it, because the canvas paints its own
 * surface and has to repaint when the site changes ground.
 */
export default function FooterDragonflies() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        let cancelled = false;
        let engine: { destroy(): void; setTheme(theme: Theme): void } | null = null;
        let themeWatcher: MutationObserver | null = null;

        const start = async () => {
            const { AnimalEngine } = await import("@/vendor/ascii-animals/engine");
            if (cancelled) return;

            engine = new AnimalEngine(canvas, {
                animal: "dragonflies",
                theme: currentTheme(),
                tuning: {
                    /* Everything about how one is *drawn* — fog, trail,
                       sparkle, the wing colours — is left at the animal's own
                       defaults. Dimming and de-fogging them to keep them
                       politely in the background only broke the silhouette:
                       the wings are drawn in pale veins and glints, and once
                       those fade there is nothing left but the dark blocks of
                       the body. What is tuned here is how many, how big and
                       which way they fly. */
                    density: 1.2,
                    /* Half again as large, with smaller ASCII cells: a wing
                       needs a good number of cells across before its veins
                       read as a wing rather than as speckle, and the footer is
                       a shorter canvas than the screen this was drawn for. */
                    size: 1.2,
                    detail: 1.9,
                    /* Across the footer rather than up out of it — it is much
                       wider than it is tall — and in no hurry. */
                    direction: 14,
                    speed: 0.55,
                    /* No terminal grid: the footer is a page, not a console. */
                    grid: 0,
                },
            });

            themeWatcher = new MutationObserver(() => engine?.setTheme(currentTheme()));
            themeWatcher.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["data-theme"],
            });
        };

        /* Starts a screen early, so the first dragonfly is already in the air by
           the time the footer arrives rather than materialising in view. */
        const nearby = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                nearby.disconnect();
                void start();
            },
            { rootMargin: "600px" },
        );
        nearby.observe(canvas);

        return () => {
            cancelled = true;
            nearby.disconnect();
            themeWatcher?.disconnect();
            engine?.destroy();
        };
    }, []);

    return <canvas ref={ref} className={s.canvas} aria-hidden="true" />;
}
