import type { Metadata } from "next";
import { siteName, siteDescription, siteUrl } from "@/lib/site-data";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Cynocta | Automatizacion y web inteligente para negocios",
        template: "%s | Cynocta",
    },
    description: siteDescription,
    keywords: [
        "Cynocta",
        "automatizacion comercial",
        "automatizacion de procesos",
        "agencia de automatizacion",
        "landing pages",
        "desarrollo web para negocios",
        "conversion digital",
    ],
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [{ url: "/logo.svg", type: "image/svg+xml", sizes: "any" }],
        shortcut: ["/logo.svg"],
        apple: "/logo.svg",
    },
    openGraph: {
        type: "website",
        locale: "es_419",
        url: siteUrl,
        siteName,
        title: "Cynocta | Automatizacion y web inteligente para negocios",
        description: siteDescription,
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Cynocta - Automatizacion y web inteligente para negocios",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cynocta | Automatizacion y web inteligente para negocios",
        description: siteDescription,
        images: ["/twitter-image"],
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
    ...(googleVerification
        ? {
            verification: {
                google: googleVerification,
            },
        }
        : {}),
};
