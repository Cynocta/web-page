import type { Locale } from "@/lib/content";

export const LOCALES = ["es", "en"] as const;

/** Spanish stays at the root: those URLs are the ones already indexed. */
export const DEFAULT_LOCALE: Locale = "es";

/**
 * Pages that exist as genuine translations, with the path each locale serves.
 *
 * Single source of truth for canonical URLs, hreflang pairs and the language
 * toggle — if a pair is not listed here, no hreflang is emitted for it.
 *
 * The legal documents are deliberately absent: they exist only in Spanish, and
 * declaring an English alternate that does not exist (or machine-translating a
 * binding contract) would be worse than having no alternate at all.
 */
export const ROUTE_MAP = {
    home: { es: "/", en: "/en" },
    faq: { es: "/preguntas-frecuentes", en: "/en/faq" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTE_MAP;

/** Every path that has a translation, for the sitemap and the toggle. */
export const TRANSLATED_PATHS = Object.values(ROUTE_MAP);

/**
 * Spanish-only pages: self-canonical, no alternates.
 * Service and pricing pages live here until their English versions are written.
 */
export const ES_ONLY_PATHS = [
    "/nosotros",
    "/contacto",
    "/portafolio",
    "/blog",
    "/servicios",
    "/servicios/chatbot-whatsapp",
    "/servicios/automatizacion-de-procesos",
    "/servicios/agentes-ia",
    "/servicios/integracion-crm",
    "/servicios/paginas-web-que-convierten",
    "/precios",
    "/terminos",
    "/privacidad",
] as const;

/**
 * Canonical + reciprocal hreflang for a translated page.
 * `x-default` points at Spanish, the site's primary market.
 */
export function alternatesFor(key: RouteKey, locale: Locale) {
    const paths = ROUTE_MAP[key];

    return {
        canonical: paths[locale],
        languages: {
            es: paths.es,
            en: paths.en,
            "x-default": paths[DEFAULT_LOCALE],
        },
    };
}

/** The equivalent path in the other locale, used by the language toggle. */
export function counterpartPath(key: RouteKey, target: Locale) {
    return ROUTE_MAP[key][target];
}

/**
 * Which translated page a URL belongs to, so shared chrome (nav, footer) can
 * resolve its own language links without every page passing them down.
 * Untranslated pages fall back to `home` — the toggle then offers the closest
 * equivalent rather than a dead link.
 */
export function routeKeyFromPath(pathname: string): RouteKey {
    const path = pathname.replace(/\/+$/, "") || "/";

    for (const [key, paths] of Object.entries(ROUTE_MAP) as Array<[RouteKey, Record<Locale, string>]>) {
        if (path === paths.es || path === paths.en) return key;
    }

    return "home";
}
