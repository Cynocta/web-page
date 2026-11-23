import s from "./field-trace.module.css";

/**
 * The hero's field, at rest.
 *
 * The homepage opens and closes with something alive behind the type — iron
 * filings in the hero, dragonflies in the footer — and the bands between them
 * carry the same geometry without the cost of it: the dipole is solved once,
 * at module scope, and the result ships as a single SVG path. Nothing runs per
 * frame and nothing runs in the browser at all.
 *
 * Same field function as MagneticField's far field, so a trace here is the
 * continuation of the hero's plate rather than a different ornament.
 */

const VB_W = 1200;
const VB_H = 500;

/** The dipole's axis points up, as the hero's does. */
function filingAngle(x: number, y: number, ox: number, oy: number) {
    const rx = x - ox;
    const ry = y - oy;
    const rr = Math.hypot(rx, ry) || 1;
    const ux = rx / rr;
    const uy = ry / rr;
    const md = -uy;
    return Math.atan2(3 * md * uy + 1, 3 * md * ux);
}

/** Deterministic jitter: the same build always draws the same field. */
function noise(i: number) {
    const v = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return v - Math.floor(v) - 0.5;
}

function buildPath(ox: number, oy: number, step: number) {
    const parts: string[] = [];
    const cols = Math.ceil(VB_W / step) + 1;
    const rows = Math.ceil(VB_H / step) + 1;
    let i = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++, i++) {
            // Offset every other row, so the grid reads as a scatter of filings
            // rather than as a lattice.
            const x = col * step + (row % 2) * (step / 2) + noise(i) * step * 0.4;
            const y = row * step + noise(i + 7919) * step * 0.4;

            const a = filingAngle(x, y, ox, oy);
            const d = Math.hypot(x - ox, y - oy);
            // Filings are longest where the field is strongest and shorten as
            // it falls away, which is what gives the plate its depth.
            const len = step * (0.62 - 0.26 * Math.min(1, d / (VB_W * 0.8)));
            const hx = (Math.cos(a) * len) / 2;
            const hy = (Math.sin(a) * len) / 2;

            parts.push(
                `M${(x - hx).toFixed(1)} ${(y - hy).toFixed(1)}L${(x + hx).toFixed(1)} ${(y + hy).toFixed(1)}`,
            );
        }
    }

    return parts.join("");
}

/** One field per origin, built on first use and kept for the whole process. */
const cache = new Map<string, string>();

function pathFor(ox: number, oy: number, step: number) {
    const key = `${ox}:${oy}:${step}`;
    let d = cache.get(key);
    if (!d) {
        d = buildPath(ox, oy, step);
        cache.set(key, d);
    }
    return d;
}

export default function FieldTrace({
    /** Where the magnet sits, in fractions of the box. */
    origin = [1.02, 0.5],
    /** Spacing between filings, in viewBox units. Larger is sparser. */
    step = 30,
    className,
}: {
    origin?: [number, number];
    step?: number;
    className?: string;
}) {
    const d = pathFor(origin[0] * VB_W, origin[1] * VB_H, step);

    return (
        <svg
            className={`${s.trace} ${className ?? ""}`.trim()}
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
        >
            <path d={d} />
        </svg>
    );
}
