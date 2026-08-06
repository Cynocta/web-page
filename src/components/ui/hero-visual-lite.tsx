import s from "./hero-visual-lite.module.css";

/**
 * Static stand-in for the Spline scene.
 *
 * The 3D robot costs a ~6.6MB WebGL runtime plus a remote scene download, which
 * is not a reasonable price on a phone. This renders the same idea — an
 * automation core with data orbiting it — as inline SVG: no JS, no network, no
 * canvas, and it paints with the rest of the markup.
 */
export function HeroVisualLite({ className }: { className?: string }) {
    return (
        <div className={`${s.wrap} ${className ?? ""}`}>
            <svg
                className={s.svg}
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <defs>
                    <radialGradient id="cynCoreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#38ffb0" stopOpacity="0.55" />
                        <stop offset="55%" stopColor="#19f59c" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#19f59c" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="cynRing" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#79E2FF" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#19f59c" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#19f59c" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="cynCoreFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#19f59c" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#070809" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                {/* Ambient glow behind everything */}
                <circle cx="200" cy="200" r="185" fill="url(#cynCoreGlow)" />

                {/* Pulse rings radiating out of the core */}
                <circle
                    className={s.pulse}
                    cx="200"
                    cy="200"
                    r="110"
                    stroke="#19f59c"
                    strokeWidth="1"
                />
                <circle
                    className={`${s.pulse} ${s.pulseDelay}`}
                    cx="200"
                    cy="200"
                    r="110"
                    stroke="#79E2FF"
                    strokeWidth="1"
                />

                {/* Outer orbit */}
                <g className={s.orbit}>
                    <ellipse
                        cx="200"
                        cy="200"
                        rx="155"
                        ry="58"
                        stroke="url(#cynRing)"
                        strokeWidth="1"
                        strokeDasharray="3 7"
                    />
                    <circle className={s.node} cx="355" cy="200" r="4" fill="#79E2FF" />
                    <circle className={`${s.node} ${s.nodeB}`} cx="45" cy="200" r="3" fill="#19f59c" />
                </g>

                {/* Middle orbit, tilted the other way */}
                <g className={`${s.orbit} ${s.orbitMid}`} transform="rotate(58 200 200)">
                    <ellipse
                        cx="200"
                        cy="200"
                        rx="128"
                        ry="46"
                        stroke="url(#cynRing)"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                    />
                    <circle className={`${s.node} ${s.nodeC}`} cx="328" cy="200" r="3.5" fill="#48EDB8" />
                </g>

                {/* Inner orbit */}
                <g className={`${s.orbit} ${s.orbitInner}`} transform="rotate(-34 200 200)">
                    <ellipse
                        cx="200"
                        cy="200"
                        rx="92"
                        ry="34"
                        stroke="#19f59c"
                        strokeOpacity="0.28"
                        strokeWidth="1"
                    />
                    <circle className={s.node} cx="292" cy="200" r="3" fill="#38ffb0" />
                </g>

                {/* Core */}
                <g className={s.core}>
                    <path
                        d="M234 200 L217 229.4 L183 229.4 L166 200 L183 170.6 L217 170.6 Z"
                        fill="url(#cynCoreFill)"
                        stroke="#19f59c"
                        strokeOpacity="0.55"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M218 200 L209 215.6 L191 215.6 L182 200 L191 184.4 L209 184.4 Z"
                        stroke="#38ffb0"
                        strokeOpacity="0.4"
                        strokeWidth="1"
                        strokeLinejoin="round"
                    />
                    <circle cx="200" cy="200" r="4.5" fill="#38ffb0" />
                </g>
            </svg>
        </div>
    );
}
