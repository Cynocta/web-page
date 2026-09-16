import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site-data";
import { alternatesFor } from "@/lib/i18n/routes";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

/**
 * Brand last, on purpose.
 *
 * These opened with "Cynocta |", spending the first — and heaviest — thirty
 * characters on a name nobody searches for yet, and described the offer as
 * "web inteligente", which is not a term anyone types. The replacements lead
 * with the two things the page actually ranks for and that its own copy uses
 * most: automation and WhatsApp chatbots.
 */
const TITLES = {
    es: "Automatización con IA y chatbots de WhatsApp | Cynocta",
    en: "AI automation and WhatsApp chatbots for business | Cynocta",
} as const;

/** `siteDescription` still feeds the Organization schema; only the search
 *  snippet changes here, where the CTA and the entities earn their place. */
const DESCRIPTIONS = {
    es: "Chatbots de WhatsApp, agentes de IA y automatizaciones con n8n para negocios en LATAM. Diagnóstico gratuito y primera entrega en 2 semanas.",
    en: "WhatsApp chatbots, AI agents and n8n automations for growing businesses in LATAM. Free diagnosis and first delivery in 2 weeks.",
} as const;

/** Everything both locales share; only language-dependent fields are overridden. */
const shared = {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    /* Declared explicitly rather than left to the icon file conventions: with one
       root layout per locale there is no `app/layout` for Next to attach the
       generated icons to. `/favicon.ico` is the file crawlers and old browsers
       request blindly; it 404'd before. */
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48" },
            { url: "/icon", type: "image/png", sizes: "512x512" },
            { url: "/logo.svg", type: "image/svg+xml" },
        ],
        shortcut: ["/favicon.ico"],
        apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
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

/**
 * Metadata for every page below the home.
 *
 * Next merges metadata *shallowly*: a page that declares its own `openGraph`
 * replaces the layout's object wholesale. Every page here used to declare one
 * with only title, description and url, so 29 of the 31 URLs shipped with no
 * `og:image`, no `og:locale` and no `og:site_name` — and, because none of them
 * declared `twitter` at all, their Twitter/X cards carried the *homepage's*
 * title and description. Building the whole object in one place is what keeps
 * a page from silently dropping half of it again.
 *
 * Services, solutions and articles pass their own card from /og/<kind>/<slug>.
 */
export function pageMetadata({
    path,
    title,
    description,
    locale = "es",
    alternates,
    socialTitle,
    type = "website",
    publishedTime,
    modifiedTime,
    image = { og: "/opengraph-image", twitter: "/twitter-image" },
}: {
    /** Site-relative path; resolved against `metadataBase`. */
    path: string;
    /** Bare page title — the layout's template appends "| Cynocta". */
    title: string;
    description: string;
    locale?: "es" | "en";
    /** Defaults to a self-referencing canonical. Translated pages pass hreflang. */
    alternates?: Metadata["alternates"];
    /** Title for social cards, where the template does not apply. */
    socialTitle?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    /** The page's own card; defaults to the generic brand card. */
    image?: { og: string; twitter: string };
}): Metadata {
    const cardTitle = socialTitle ?? `${title} | ${siteName}`;

    return {
        title,
        description,
        alternates: alternates ?? { canonical: path },
        openGraph: {
            type,
            locale: locale === "es" ? "es_419" : "en_US",
            url: path,
            siteName,
            title: cardTitle,
            description,
            images: [{ url: image.og, width: 1200, height: 630, alt: cardTitle }],
            ...(type === "article" && publishedTime
                ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
                : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: cardTitle,
            description,
            images: [image.twitter],
        },
    };
}
