"use client";

import { useEffect, useRef } from "react";
import { KNOT_CENTERLINE } from "@/lib/knot-centerline";
import s from "./magnetic-field.module.css";

/**
 * Iron filings around a magnet, where the magnet is the Cynocta knot.
 *
 * The field covers its whole section. Far from the knot every filing follows
 * the field lines of a real dipole, so the section reads as one physical plate
 * rather than a picture in a box; near the knot they lie along its curve, which
 * is how the mark appears without ever being drawn. A current of light runs
 * round the knot.
 *
 * The layout tells the field what to do, through data attributes inside the
 * nearest `[data-field-root]`:
 * - `[data-knot-slot]`  the box the knot is fitted into;
 * - `[data-field-avoid]` blocks the filings flow around instead of under
 *   (the copy), so the type always sits on clean ground;
 * - `[data-field-magnet]` elements that pull the field when hovered (the call
 *   to action: the primary action literally attracts).
 *
 * The pointer is a small magnet of its own and a press sends a pulse out.
 * Physics runs once per filing per frame and drawing is batched by colour, so
 * a full-width hero stays around a couple of milliseconds a frame; the loop
 * stops whenever the section is off screen or the tab is hidden.
 */

const BANDS = 5;
const AVOID_FEATHER = 34;

type Rect = { l: number; t: number; r: number; b: number };

export function MagneticField({ className }: { className?: string }) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const canvas = canvasRef.current;
        const path = pathRef.current;
        const ctx = canvas?.getContext("2d");
        if (!wrap || !canvas || !path || !ctx) return;
        const root = (wrap.closest("[data-field-root]") as HTMLElement | null) ?? wrap.parentElement;
        if (!root) return;

        const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
        let reduced = reduceMq.matches;

        /* ── The knot, sampled once ── */
        const SAMPLES = 420;
        const total = path.getTotalLength();
        const kx = new Float32Array(SAMPLES);
        const ky = new Float32Array(SAMPLES);
        const ka = new Float32Array(SAMPLES);
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        for (let i = 0; i < SAMPLES; i++) {
            const a = path.getPointAtLength((i / SAMPLES) * total);
            const b = path.getPointAtLength((((i + 1) % SAMPLES) / SAMPLES) * total);
            kx[i] = a.x;
            ky[i] = a.y;
            ka[i] = Math.atan2(b.y - a.y, b.x - a.x);
            minX = Math.min(minX, a.x);
            maxX = Math.max(maxX, a.x);
            minY = Math.min(minY, a.y);
            maxY = Math.max(maxY, a.y);
        }
        const kW = maxX - minX;
        const kH = maxY - minY;
        const kCx = (minX + maxX) / 2;
        const kCy = (minY + maxY) / 2;
        // The knot's true centre is its centre of symmetry, not the middle of
        // its bounding box: one lobe up and two down puts the box's middle
        // ~17 units above it. Samples are evenly spaced along the curve, so
        // their mean is that centre; the farthest sample gives its radius.
        let kGx = 0, kGy = 0;
        for (let i = 0; i < SAMPLES; i++) {
            kGx += kx[i];
            kGy += ky[i];
        }
        kGx /= SAMPLES;
        kGy /= SAMPLES;
        let kR = 0;
        for (let i = 0; i < SAMPLES; i++) kR = Math.max(kR, Math.hypot(kx[i] - kGx, ky[i] - kGy));

        /* ── Colour, from the theme ── */
        let colors: string[] = [];
        let under = "";
        let dark = false;
        const readTheme = () => {
            const css = getComputedStyle(wrap);
            colors = Array.from({ length: BANDS }, (_, i) => css.getPropertyValue(`--f${i + 1}`).trim() || "#19f59c");
            under = css.getPropertyValue("--f-under").trim();
            dark = document.documentElement.dataset.theme === "dark";
        };

        /* ── Layout-derived state, rebuilt on resize ── */
        let W = 0, H = 0, dpr = 1, n = 0;
        let gx = new Float32Array(0), gy = new Float32Array(0);
        let ang = new Float32Array(0), near = new Float32Array(0), mask = new Float32Array(0);
        let sIdx = new Uint16Array(0), cur = new Float32Array(0), len = new Float32Array(0);
        let band = new Uint8Array(0);
        let lenScale = 1;
        let magnets: { el: Element; x: number; y: number }[] = [];

        const relRect = (el: Element, rootBox: DOMRect, pad = 0): Rect => {
            const r = el.getBoundingClientRect();
            return { l: r.left - rootBox.left - pad, t: r.top - rootBox.top - pad, r: r.right - rootBox.left + pad, b: r.bottom - rootBox.top + pad };
        };

        // Filings have no head or tail, so angles are averaged on the doubled
        // circle: 10° and 190° are the same filing.
        const blendAxis = (a: number, b: number, w: number) =>
            0.5 * Math.atan2((1 - w) * Math.sin(2 * a) + w * Math.sin(2 * b), (1 - w) * Math.cos(2 * a) + w * Math.cos(2 * b));

        const layout = () => {
            const box = root.getBoundingClientRect();
            W = box.width;
            H = box.height;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.max(1, Math.round(W * dpr));
            canvas.height = Math.max(1, Math.round(H * dpr));

            const slot = root.querySelector("[data-knot-slot]");
            const sr = slot ? relRect(slot, box) : { l: W * 0.55, t: H * 0.15, r: W * 0.95, b: H * 0.85 };
            const size = Math.min(sr.r - sr.l, sr.b - sr.t) * 0.94;
            const k = size / Math.max(kW, kH);
            const cx = (sr.l + sr.r) / 2;
            const cy = (sr.t + sr.b) / 2;
            // Publish where the knot actually landed, so anything drawn around
            // it (the hero's aura) stays centred at every width.
            root.style.setProperty("--knot-x", `${((kGx - kCx) * k + cx).toFixed(1)}px`);
            root.style.setProperty("--knot-y", `${((kGy - kCy) * k + cy).toFixed(1)}px`);
            root.style.setProperty("--knot-r", `${(kR * k).toFixed(1)}px`);
            const px = (i: number) => (kx[i] - kCx) * k + cx;
            const py = (i: number) => (ky[i] - kCy) * k + cy;
            const reach = 90;
            const bx0 = cx - (kW * k) / 2 - reach, bx1 = cx + (kW * k) / 2 + reach;
            const by0 = cy - (kH * k) / 2 - reach, by1 = cy + (kH * k) / 2 + reach;

            const avoid = Array.from(root.querySelectorAll("[data-field-avoid]"), (el) => relRect(el, box, 10));
            magnets = Array.from(root.querySelectorAll("[data-field-magnet]"), (el) => {
                const r = relRect(el, box);
                return { el, x: (r.l + r.r) / 2, y: (r.t + r.b) / 2 };
            });

            const step = W < 700 ? 13 : 15;
            lenScale = step / 15;
            const cols = Math.ceil(W / step) + 1;
            const rows = Math.ceil(H / step) + 1;
            n = cols * rows;
            gx = new Float32Array(n);
            gy = new Float32Array(n);
            ang = new Float32Array(n);
            near = new Float32Array(n);
            mask = new Float32Array(n);
            sIdx = new Uint16Array(n);
            cur = new Float32Array(n);
            len = new Float32Array(n);
            band = new Uint8Array(n);

            let p = 0;
            for (let row = 0; row < rows; row++) {
                for (let c = 0; c < cols; c++, p++) {
                    const x = c * step + (row % 2) * (step / 2);
                    const y = row * step;
                    gx[p] = x;
                    gy[p] = y;

                    // Far field: a dipole pointing up, centred on the knot.
                    const rx = x - cx, ry = y - cy;
                    const rr = Math.hypot(rx, ry) || 1;
                    const ux = rx / rr, uy = ry / rr;
                    const md = -uy;
                    const dip = Math.atan2(3 * md * uy + 1, 3 * md * ux);

                    // Near field: along the knot. Only searched close to it.
                    let d = 1e9, bi = 0;
                    if (x > bx0 && x < bx1 && y > by0 && y < by1) {
                        for (let i = 0; i < SAMPLES; i += 2) {
                            const dx = px(i) - x, dy = py(i) - y;
                            const dd = dx * dx + dy * dy;
                            if (dd < d) { d = dd; bi = i; }
                        }
                        d = Math.sqrt(d);
                    }
                    const nr = Math.exp(-d / 26);
                    near[p] = nr;
                    sIdx[p] = bi;
                    let a = blendAxis(dip, ka[bi], Math.min(1, nr * 1.6));

                    // Copy blocks: hidden inside, combed along the edge nearby.
                    let m = 1;
                    for (const r of avoid) {
                        const ex = Math.max(r.l - x, 0, x - r.r);
                        const ey = Math.max(r.t - y, 0, y - r.b);
                        const de = Math.hypot(ex, ey);
                        if (de === 0) { m = 0; break; }
                        if (de < AVOID_FEATHER) {
                            m = Math.min(m, de / AVOID_FEATHER);
                            a = blendAxis(a, ex > ey ? Math.PI / 2 : 0, 1 - de / AVOID_FEATHER);
                        }
                    }
                    mask[p] = m;
                    ang[p] = a;
                    // Unsettled at first: the field combs itself into place.
                    cur[p] = reduced ? a : a + (Math.random() - 0.5) * 2.6;
                    len[p] = reduced ? 3 : 0;
                }
            }
        };

        /* ── Interaction ── */
        const pointer = { x: 0, y: 0, inside: false };
        let magnet = -1;
        const pulses: { x: number; y: number; r: number }[] = [];
        const toLocal = (e: PointerEvent) => {
            const box = root.getBoundingClientRect();
            return [e.clientX - box.left, e.clientY - box.top] as const;
        };
        const onMove = (e: PointerEvent) => {
            [pointer.x, pointer.y] = toLocal(e);
            pointer.inside = true;
        };
        const onLeave = () => { pointer.inside = false; };
        const onDown = (e: PointerEvent) => {
            if ((e.target as Element).closest("a, button, input, textarea, select")) return;
            const [x, y] = toLocal(e);
            pulses.push({ x, y, r: 0 });
            if (pulses.length > 4) pulses.shift();
        };
        const magnetEnter = (e: Event) => { magnet = magnets.findIndex((mg) => mg.el === e.currentTarget); };
        const magnetLeave = () => { magnet = -1; };

        /* ── Frame ── */
        let raf = 0;
        let running = false;
        let last = performance.now();

        const draw = (now: number, dt: number) => {
            const t = now / 1000;
            const head = (t * 0.1) % 1;
            for (const q of pulses) q.r += dt * 560;
            while (pulses.length && pulses[0].r > Math.hypot(W, H)) pulses.shift();
            const mg = magnet >= 0 ? magnets[magnet] : null;
            const ease = Math.min(1, dt * 7);
            const grow = Math.min(1, dt * 9);

            for (let p = 0; p < n; p++) {
                if (mask[p] <= 0) { band[p] = 255; continue; }
                const nr = near[p];
                let target = ang[p];
                let energy = nr * 0.85;
                if (!reduced) {
                    // A slow breath in the far field, and the current on the knot.
                    target += Math.sin(t * 0.6 + gx[p] * 0.015 + gy[p] * 0.012) * 0.28 * (1 - nr);
                    let sd = sIdx[p] / SAMPLES - head;
                    sd -= Math.round(sd);
                    energy += Math.exp(-(sd * sd) / 0.002) * nr;
                    if (pointer.inside) {
                        const dx = gx[p] - pointer.x, dy = gy[p] - pointer.y;
                        const w = Math.exp(-Math.hypot(dx, dy) / 80);
                        if (w > 0.02) {
                            target = blendAxis(target, Math.atan2(dy, dx) + Math.PI / 2, w);
                            energy += w * 0.7;
                        }
                    }
                    if (mg) {
                        const dx = mg.x - gx[p], dy = mg.y - gy[p];
                        const w = Math.exp(-Math.hypot(dx, dy) / 170);
                        if (w > 0.02) {
                            target = blendAxis(target, Math.atan2(dy, dx), w);
                            energy += w * 1.1;
                        }
                    }
                    for (const q of pulses) {
                        const d = Math.abs(Math.hypot(gx[p] - q.x, gy[p] - q.y) - q.r);
                        if (d < 26) { const k = 1 - d / 26; target += k * 1.6; energy += k; }
                    }
                }
                // Filings turn with lag, like they have mass.
                let da = target - cur[p];
                da -= Math.round(da / Math.PI) * Math.PI;
                cur[p] += reduced ? da : da * ease;
                // Even a quiet filing is a short stroke, not a dot: the far
                // field is what makes the dipole's lines legible.
                const L = (5.5 + Math.min(1.4, energy) * 7) * lenScale * (0.35 + 0.65 * mask[p]);
                len[p] += reduced ? L - len[p] : (L - len[p]) * grow;
                band[p] = Math.min(BANDS - 1, Math.floor((Math.min(1.2, energy) / 1.2) * BANDS));
            }

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, W, H);
            ctx.lineCap = "round";
            ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
            for (let b = 0; b < BANDS; b++) {
                // On a light ground the brightest band rides on a dark core, or
                // the neon dissolves into the paper.
                const passes = !dark && b === BANDS - 1 && under ? 2 : 1;
                for (let pass = 0; pass < passes; pass++) {
                    const isUnder = passes === 2 && pass === 0;
                    ctx.strokeStyle = isUnder ? under : colors[b];
                    ctx.lineWidth = isUnder ? 3.4 : b > 2 ? 2 : 1.3;
                    ctx.globalAlpha = isUnder ? 0.9 : 0.5 + b * 0.125;
                    ctx.beginPath();
                    for (let p = 0; p < n; p++) {
                        if (band[p] !== b) continue;
                        const c = (Math.cos(cur[p]) * len[p]) / 2;
                        const sn = (Math.sin(cur[p]) * len[p]) / 2;
                        ctx.moveTo(gx[p] - c, gy[p] - sn);
                        ctx.lineTo(gx[p] + c, gy[p] + sn);
                    }
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
        };

        /* On touch screens the field draws at 30fps. Its motion is a slow
           breath and a current creeping round the knot, which read the same
           at half the rate, and a phone gets half the physics and half the
           strokes per second. While the desktop theme reveal runs, nothing is
           drawn at all: the reveal repaints the page every frame, and a canvas
           changing under it would be repainted with it. */
        const minFrameMs = window.matchMedia("(pointer: coarse)").matches ? 1000 / 30 - 2 : 0;
        const rootEl = document.documentElement;
        const frame = (now: number) => {
            raf = requestAnimationFrame(frame);
            if (rootEl.classList.contains("theme-switching")) return;
            if (now - last < minFrameMs) return;
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            draw(now, dt);
        };

        let onScreen = true;
        const sync = () => {
            const should = !reduced && onScreen && document.visibilityState === "visible";
            if (should && !running) {
                running = true;
                last = performance.now();
                raf = requestAnimationFrame(frame);
            } else if (!should && running) {
                running = false;
                cancelAnimationFrame(raf);
            }
        };
        /** Reduced motion: one settled frame, redrawn only when something changes. */
        const still = () => { if (reduced) draw(performance.now(), 0); };

        let relayout = 0;
        const scheduleLayout = () => {
            cancelAnimationFrame(relayout);
            relayout = requestAnimationFrame(() => { layout(); still(); });
        };

        readTheme();
        layout();
        still();

        const ro = new ResizeObserver(scheduleLayout);
        ro.observe(root);
        document.fonts?.ready.then(scheduleLayout);
        const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); });
        io.observe(root);
        // Repaint in the new colours straight away, so the new theme is never
        // shown with the old theme's filings, whatever the loop is doing.
        const mo = new MutationObserver(() => { readTheme(); draw(performance.now(), 0); });
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        const onReduce = () => { reduced = reduceMq.matches; layout(); still(); sync(); };
        reduceMq.addEventListener("change", onReduce);
        document.addEventListener("visibilitychange", sync);
        root.addEventListener("pointermove", onMove, { passive: true });
        root.addEventListener("pointerleave", onLeave);
        root.addEventListener("pointerdown", onDown);
        for (const m of magnets) {
            m.el.addEventListener("pointerenter", magnetEnter);
            m.el.addEventListener("pointerleave", magnetLeave);
            m.el.addEventListener("focus", magnetEnter);
            m.el.addEventListener("blur", magnetLeave);
        }
        sync();

        return () => {
            running = false;
            cancelAnimationFrame(raf);
            cancelAnimationFrame(relayout);
            ro.disconnect();
            io.disconnect();
            mo.disconnect();
            reduceMq.removeEventListener("change", onReduce);
            document.removeEventListener("visibilitychange", sync);
            root.removeEventListener("pointermove", onMove);
            root.removeEventListener("pointerleave", onLeave);
            root.removeEventListener("pointerdown", onDown);
            for (const m of magnets) {
                m.el.removeEventListener("pointerenter", magnetEnter);
                m.el.removeEventListener("pointerleave", magnetLeave);
                m.el.removeEventListener("focus", magnetEnter);
                m.el.removeEventListener("blur", magnetLeave);
            }
        };
    }, []);

    return (
        <div ref={wrapRef} className={`${s.field} ${className ?? ""}`} aria-hidden="true">
            <canvas ref={canvasRef} className={s.canvas} />
            <svg className={s.defs} width="0" height="0" focusable="false">
                <path ref={pathRef} d={KNOT_CENTERLINE} />
            </svg>
        </div>
    );
}
