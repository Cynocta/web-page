import type { Metadata } from "next";
import { siteName, siteDescription, siteUrl } from "@/lib/site-data";
import { alternatesFor } from "@/lib/i18n/routes";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

const TITLES = {
    es: "Cynocta | Automatización y web inteligente para negocios",
    en: "Cynocta | Automation and intelligent web for businesses",
} as const;

const DESCRIPTIONS = {
    es: siteDescription,
    en: "Cynocta helps businesses grow with commercial automation, high-performance websites and conversion-focused digital systems.",
} as const;

/** Everything both locales share; only language-dependent fields are overridden. */
const shared = {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    icons: {
        icon: [{ url: "/logo.svg", type: "image/svg+xml", sizes: "any" }],
        shortcut: ["/logo.svg"],
        apple: "/logo.svg",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    ...(googleVerification ? { verification: { google: googleVerification } } : {}),
} satisfies Partial<Metadata>;

function buildMetadata(locale: "es" | "en"): Metadata {
    return {
        ...shared,
        title: {
            default: TITLES[locale],
            template: "%s | Cynocta",
        },
        description: DESCRIPTIONS[locale],
        alternates: alternatesFor("home", locale),
        openGraph: {
            type: "website",
            locale: locale === "es" ? "es_419" : "en_US",
            url: alternatesFor("home", locale).canonical,
            siteName,
            title: TITLES[locale],
            description: DESCRIPTIONS[locale],
            images: [
                {
                    url: "/opengraph-image",
                    width: 1200,
                    height: 630,
                    alt: TITLES[locale],
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: TITLES[locale],
            description: DESCRIPTIONS[locale],
            images: ["/twitter-image"],
        },
    };
}

export const metadata = buildMetadata("es");
export const metadataEn = buildMetadata("en");
