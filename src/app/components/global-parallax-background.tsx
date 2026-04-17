"use client";

import { useEffect } from "react";

const PARALLAX_VARS = [
    "--parallax-grid-x",
    "--parallax-grid-y",
    "--parallax-grid-rot",
    "--parallax-flow-x",
    "--parallax-flow-y",
    "--parallax-flow-rot",
    "--parallax-tech-x",
    "--parallax-tech-y",
    "--parallax-tech-rot",
    "--parallax-circuit-x",
    "--parallax-circuit-y",
    "--parallax-circuit-rot",
    "--parallax-scan-y",
    "--parallax-scan-opacity",
    "--parallax-hud-1-x",
    "--parallax-hud-1-y",
    "--parallax-hud-1-rot",
    "--parallax-hud-2-x",
    "--parallax-hud-2-y",
    "--parallax-hud-2-rot",
    "--parallax-noise-opacity",
    "--parallax-y-1",
    "--parallax-y-2",
    "--parallax-y-3",
    "--parallax-y-4",
    "--parallax-x-1",
    "--parallax-x-2",
    "--parallax-x-3",
    "--parallax-x-4",
    "--parallax-rot-1",
    "--parallax-rot-2",
    "--parallax-rot-3",
    "--parallax-rot-4",
    "--parallax-pointer-x",
    "--parallax-pointer-y",
    "--parallax-sweep-x",
    "--parallax-sweep-y",
    "--parallax-sweep-rot",
    "--parallax-rings-x",
    "--parallax-rings-y",
    "--parallax-rings-rot",
    "--parallax-rings-scale",
    "--parallax-beam-1-x",
    "--parallax-beam-1-y",
    "--parallax-beam-1-rot",
    "--parallax-beam-2-x",
    "--parallax-beam-2-y",
    "--parallax-beam-2-rot",
] as const;

export default function GlobalParallaxBackground() {
    useEffect(() => {
        const root = document.documentElement;
        const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reduceMotionQuery.matches) {
            return;
        }

        let frame = 0;
        let pointerX = 0;
        let pointerY = 0;
        let scrollY = window.scrollY;

        const update = () => {
            const limitedScroll = Math.min(scrollY, 4200);
            const wave = Math.sin(limitedScroll * 0.0019);
            const driftX = Math.sin(limitedScroll * 0.0024) * 38;
            const driftY = Math.cos(limitedScroll * 0.0017) * 22;
            const pulse = (Math.sin(limitedScroll * 0.0036) + 1) * 0.5;
            const viewportHeight = window.innerHeight || 900;
            const scanBand = (limitedScroll * 0.32) % (viewportHeight + 280) - 140;

            const pointerPixelX = pointerX * 24;
            const pointerPixelY = pointerY * 18;

            root.style.setProperty(
                "--parallax-grid-x",
                `${(driftX * -0.3 + pointerPixelX * -0.2).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-grid-y",
                `${(limitedScroll * -0.045 + driftY * -0.35 + pointerPixelY * -0.28).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-grid-rot",
                `${(pointerX * 1.8 + wave * 1.1).toFixed(2)}deg`
            );

            root.style.setProperty(
                "--parallax-flow-x",
                `${(driftX * 0.95 + pointerPixelX * 1.25).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-flow-y",
                `${(limitedScroll * -0.2 + driftY * 0.58 + pointerPixelY * -0.78).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-flow-rot",
                `${(pointerX * 4.5 + wave * 10.5).toFixed(2)}deg`
            );

            root.style.setProperty(
                "--parallax-tech-x",
                `${(driftX * 1.05 + pointerPixelX * 1.15).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-tech-y",
                `${(limitedScroll * -0.165 + driftY * 0.72 + pointerPixelY * -0.9).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-tech-rot",
                `${(pointerX * 6.5 + wave * 7.8).toFixed(2)}deg`
            );

            root.style.setProperty(
                "--parallax-circuit-x",
                `${(driftX * -0.54 + pointerPixelX * -0.66).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-circuit-y",
                `${(limitedScroll * -0.095 + driftY * -0.4 + pointerPixelY * 0.34).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-circuit-rot",
                `${(pointerX * -3.3 + Math.cos(limitedScroll * 0.0018) * 4.8).toFixed(2)}deg`
            );
            root.style.setProperty("--parallax-scan-y", `${scanBand.toFixed(1)}px`);
            root.style.setProperty(
                "--parallax-scan-opacity",
                `${(0.2 + pulse * 0.22 + Math.abs(pointerX) * 0.08).toFixed(3)}`
            );
            root.style.setProperty(
                "--parallax-hud-1-x",
                `${(driftX * -0.82 + pointerPixelX * -0.88).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-hud-1-y",
                `${(limitedScroll * -0.06 + driftY * -0.26 + pointerPixelY * -0.42).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-hud-1-rot",
                `${(wave * 18 + pointerX * 9).toFixed(2)}deg`
            );
            root.style.setProperty(
                "--parallax-hud-2-x",
                `${(driftX * 0.54 + pointerPixelX * 0.63).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-hud-2-y",
                `${(limitedScroll * -0.09 + driftY * 0.32 + pointerPixelY * 0.28).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-hud-2-rot",
                `${(wave * -16 + pointerX * -7.5).toFixed(2)}deg`
            );
            root.style.setProperty(
                "--parallax-noise-opacity",
                `${(0.12 + pulse * 0.08 + Math.abs(pointerX) * 0.05).toFixed(3)}`
            );

            root.style.setProperty(
                "--parallax-x-1",
                `${(driftX * -0.38 + pointerPixelX * -0.9).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-y-1",
                `${(limitedScroll * -0.14 + driftY * 0.35 + pointerPixelY * -0.7).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-x-2",
                `${(driftX * 0.22 + pointerPixelX * 0.55).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-y-2",
                `${(limitedScroll * -0.08 + driftY * -0.22 + pointerPixelY * 0.32).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-x-3",
                `${(driftX * -0.15 + pointerPixelX * 0.38).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-y-3",
                `${(limitedScroll * -0.18 + driftY * 0.45 + pointerPixelY * -0.4).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-x-4",
                `${(driftX * 0.31 + pointerPixelX * -0.44).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-y-4",
                `${(limitedScroll * -0.11 + driftY * -0.18 + pointerPixelY * 0.26).toFixed(1)}px`
            );

            root.style.setProperty("--parallax-rot-1", `${(pointerX * 2.2 + wave * 2.8).toFixed(2)}deg`);
            root.style.setProperty("--parallax-rot-2", `${(pointerX * -1.7 + wave * -2.1).toFixed(2)}deg`);
            root.style.setProperty(
                "--parallax-rot-3",
                `${(pointerX * 1.3 + Math.cos(limitedScroll * 0.002) * 2.4).toFixed(2)}deg`
            );
            root.style.setProperty(
                "--parallax-rot-4",
                `${(pointerX * -2.4 + Math.sin(limitedScroll * 0.0014) * 1.9).toFixed(2)}deg`
            );

            root.style.setProperty("--parallax-pointer-x", `${pointerPixelX.toFixed(1)}px`);
            root.style.setProperty("--parallax-pointer-y", `${pointerPixelY.toFixed(1)}px`);

            root.style.setProperty(
                "--parallax-sweep-x",
                `${(driftX * 0.55 + pointerPixelX * 0.8).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-sweep-y",
                `${(limitedScroll * -0.06 + pointerPixelY * 0.65).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-sweep-rot",
                `${(wave * 8 + pointerX * 6).toFixed(2)}deg`
            );

            root.style.setProperty(
                "--parallax-rings-x",
                `${(driftX * -0.2 + pointerPixelX * -0.35).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-rings-y",
                `${(limitedScroll * -0.03 + pointerPixelY * -0.25).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-rings-rot",
                `${(wave * -6 + pointerX * -4).toFixed(2)}deg`
            );
            root.style.setProperty(
                "--parallax-rings-scale",
                `${(1 + Math.sin(limitedScroll * 0.0011) * 0.05 + Math.abs(pointerY) * 0.03).toFixed(3)}`
            );

            root.style.setProperty(
                "--parallax-beam-1-x",
                `${(driftX * 0.68 + pointerPixelX * 0.85).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-beam-1-y",
                `${(scanBand + pointerPixelY * 0.32).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-beam-1-rot",
                `${(pointerX * 9 + wave * 16).toFixed(2)}deg`
            );
            root.style.setProperty(
                "--parallax-beam-2-x",
                `${(driftX * -0.74 + pointerPixelX * -0.65).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-beam-2-y",
                `${(scanBand * -0.68 + driftY * 0.4 + pointerPixelY * -0.25).toFixed(1)}px`
            );
            root.style.setProperty(
                "--parallax-beam-2-rot",
                `${(pointerX * -7 + Math.cos(limitedScroll * 0.0019) * 14).toFixed(2)}deg`
            );

            frame = 0;
        };

        const requestUpdate = () => {
            if (frame) {
                return;
            }
            frame = window.requestAnimationFrame(update);
        };

        const onScroll = () => {
            scrollY = window.scrollY;
            requestUpdate();
        };

        const onPointerMove = (event: PointerEvent) => {
            const width = window.innerWidth || 1;
            const height = window.innerHeight || 1;

            pointerX = ((event.clientX / width) - 0.5) * 2;
            pointerY = ((event.clientY / height) - 0.5) * 2;
            requestUpdate();
        };

        const onPointerLeave = () => {
            pointerX = 0;
            pointerY = 0;
            requestUpdate();
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerleave", onPointerLeave);

        return () => {
            if (frame) {
                window.cancelAnimationFrame(frame);
            }

            PARALLAX_VARS.forEach((variableName) => {
                root.style.removeProperty(variableName);
            });

            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
        };
    }, []);

    return (
        <div aria-hidden="true" className="global-parallax-bg">
            <div className="parallax-grid" />
            <div className="parallax-flow" />
            <div className="parallax-tech-mesh" />
            <div className="parallax-circuit" />
            <div className="parallax-scanlines" />
            <div className="parallax-rings" />
            <div className="parallax-hud parallax-hud-1" />
            <div className="parallax-hud parallax-hud-2" />
            <div className="parallax-layer parallax-layer-1" />
            <div className="parallax-layer parallax-layer-2" />
            <div className="parallax-layer parallax-layer-3" />
            <div className="parallax-layer parallax-layer-4" />
            <div className="parallax-stars" />
            <div className="parallax-noise" />
            <div className="parallax-beam parallax-beam-1" />
            <div className="parallax-beam parallax-beam-2" />
            <div className="parallax-sweep" />
            <div className="parallax-vignette" />
        </div>
    );
}