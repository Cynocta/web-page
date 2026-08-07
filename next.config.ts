import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * Shipped as report-only: the hero mounts a Spline scene from prod.spline.design
 * (desktop only) and next/font inlines styles, so an over-tight policy breaks the
 * hero in production without failing locally. Promote to `Content-Security-Policy`
 * only after a preview deploy shows no violations in the console.
 */
const CSP = [
    "default-src 'self'",
    // next/font and CSS Modules inject inline styles.
    "style-src 'self' 'unsafe-inline'",
    // Next.js hydration uses inline bootstrap scripts.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    // Spline decodes textures from data: URIs. Caught by the report-only pass —
    // without this the hero video assets are blocked by the default-src fallback.
    "media-src 'self' data: blob:",
    // Spline pulls the scene from prod.spline.design *and* its WASM modelling
    // module from unpkg.com. Both are required; dropping unpkg breaks the hero.
    "connect-src 'self' https://prod.spline.design https://*.spline.design https://unpkg.com",
    "worker-src 'self' blob:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    // Ignored while the policy is report-only; takes effect on promotion.
    "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "Content-Security-Policy-Report-Only", value: CSP },
];

const nextConfig: NextConfig = {
    reactCompiler: true,
    async headers() {
        return [
            {
                source: "/:path*",
                headers: SECURITY_HEADERS,
            },
        ];
    },
};

export default nextConfig;
