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
    // Next.js hydration uses inline bootstrap scripts. gtag.js is served from
    // googletagmanager.com even when the property is GA4 and there is no GTM
    // container.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    // Spline decodes textures from data: URIs. Caught by the report-only pass —
    // without this the hero video assets are blocked by the default-src fallback.
    "media-src 'self' data: blob:",
    // Spline pulls the scene from prod.spline.design *and* its WASM modelling
    // module from unpkg.com. Both are required; dropping unpkg breaks the hero.
    // GA4 beacons go to google-analytics.com, and the regional endpoints resolve
    // under analytics.google.com — both are needed or the hits are dropped
    // silently once the policy is enforcing.
    "connect-src 'self' https://prod.spline.design https://*.spline.design https://unpkg.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
    "worker-src 'self' blob:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    // NOTE: add "upgrade-insecure-requests" when promoting to an enforcing
    // policy. It is ignored in report-only mode and only logs console noise.
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
    // The site uses none of these; denying them closes them off to any script
    // that gets onto the page, including third-party ones.
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    },
];

const nextConfig: NextConfig = {
    reactCompiler: true,
    // Advertising the framework and version helps nobody but a scanner.
    poweredByHeader: false,
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
