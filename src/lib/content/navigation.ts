import type { Locale } from "./types";
import { SERVICE_SLUGS, servicesEsNav } from "./services/nav";
import { SOLUTION_SLUGS, solutionsEsNav } from "./solutions/nav";

export type NavLink = {
    label: string;
    href: string;
    /** One line under the label inside a dropdown. Omitted in flat lists. */
    hint?: string;
    /**
     * The language of the destination, when it differs from the page doing the
     * linking. Renders as `hreflang` plus a visible marker: the English tree is
     * two pages, and sending someone to a Spanish page without saying so is the
     * kind of thing that makes a visitor leave rather than translate.
     */
    lang?: Locale;
};

/**
 * A header entry is either a plain link or a disclosure with children.
 * Modelled as a union so the header renders from data instead of hardcoding
 * which of the seven entries happens to have a menu.
 */
export type NavEntry =
    | { kind: "link"; label: string; href: string; lang?: Locale }
    | {
          kind: "menu";
          label: string;
          /** The hub the menu title itself points to. */
          href: string;
          /** Shown as the last row of the panel. */
          seeAll: string;
          lang?: Locale;
          items: NavLink[];
      };

const serviceLinks = (lang?: Locale): NavLink[] =>
    SERVICE_SLUGS.map((slug) => ({
        label: servicesEsNav[slug],
        href: `/servicios/${slug}`,
        ...(lang ? { lang } : {}),
    }));

const solutionLinks = (lang?: Locale): NavLink[] =>
    SOLUTION_SLUGS.map((slug) => ({
        label: solutionsEsNav[slug],
        href: `/soluciones/${slug}`,
        ...(lang ? { lang } : {}),
    }));

const es: NavEntry[] = [
    { kind: "link", label: "Inicio", href: "/" },
    {
        kind: "menu",
        label: "Servicios",
        href: "/servicios",
        seeAll: "Ver todos los servicios",
        items: serviceLinks(),
    },
    {
        kind: "menu",
        label: "Soluciones",
        href: "/soluciones",
        seeAll: "Ver todas las soluciones",
        items: solutionLinks(),
    },
    {
        kind: "menu",
        label: "Recursos",
        href: "/blog",
        seeAll: "Ir al blog",
        items: [
            { label: "Blog", href: "/blog" },
            { label: "Casos de éxito", href: "/portafolio" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
    },
    { kind: "link", label: "Nosotros", href: "/nosotros" },
    { kind: "link", label: "Precios", href: "/precios" },
    { kind: "link", label: "Contacto", href: "/contacto" },
];

/**
 * The English header.
 *
 * Only `/en` and `/en/faq` are written in English today; everything commercial
 * exists in Spanish only. Rather than hide those pages from an English visitor
 * — which would leave them with a two-item site and no way to see what we sell
 * — they are listed, labelled in English, and marked as Spanish destinations.
 * The marker comes off each entry as its translation is published.
 */
const en: NavEntry[] = [
    { kind: "link", label: "Home", href: "/en" },
    {
        kind: "menu",
        label: "Services",
        href: "/servicios",
        seeAll: "See all services",
        lang: "es",
        items: serviceLinks("es"),
    },
    {
        kind: "menu",
        label: "Solutions",
        href: "/soluciones",
        seeAll: "See all solutions",
        lang: "es",
        items: solutionLinks("es"),
    },
    {
        kind: "menu",
        label: "Resources",
        href: "/en/faq",
        seeAll: "Go to the FAQ",
        items: [
            { label: "FAQ", href: "/en/faq" },
            { label: "Blog", href: "/blog", lang: "es" },
            { label: "Case studies", href: "/portafolio", lang: "es" },
        ],
    },
    { kind: "link", label: "About", href: "/nosotros", lang: "es" },
    { kind: "link", label: "Pricing", href: "/precios", lang: "es" },
    { kind: "link", label: "Contact", href: "/contacto", lang: "es" },
];

export const headerNav: Record<Locale, NavEntry[]> = { es, en };

export const headerCta: Record<Locale, { label: string; href: string; lang?: Locale }> = {
    es: { label: "Agendar diagnóstico", href: "/contacto" },
    en: { label: "Book a diagnosis", href: "/contacto", lang: "es" },
};

export type FooterColumn = {
    title: string;
    links: NavLink[];
};

/**
 * Footer columns. Service and solution links come from the same registries the
 * header uses, so a new entry appears in both without being copied.
 */
const footerEs: FooterColumn[] = [
    {
        title: "Empresa",
        links: [
            { label: "Nosotros", href: "/nosotros" },
            { label: "Portafolio", href: "/portafolio" },
            { label: "Blog", href: "/blog" },
            { label: "Contacto", href: "/contacto" },
        ],
    },
    { title: "Servicios", links: serviceLinks() },
    { title: "Soluciones", links: solutionLinks() },
    {
        title: "Recursos",
        links: [
            { label: "Precios", href: "/precios" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
            { label: "Política de privacidad", href: "/privacidad" },
            { label: "Términos y condiciones", href: "/terminos" },
        ],
    },
];

const footerEn: FooterColumn[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/nosotros", lang: "es" },
            { label: "Portfolio", href: "/portafolio", lang: "es" },
            { label: "Blog", href: "/blog", lang: "es" },
            { label: "Contact", href: "/contacto", lang: "es" },
        ],
    },
    { title: "Services", links: serviceLinks("es") },
    { title: "Solutions", links: solutionLinks("es") },
    {
        title: "Resources",
        links: [
            { label: "FAQ", href: "/en/faq" },
            { label: "Pricing", href: "/precios", lang: "es" },
            { label: "Privacy policy", href: "/privacidad", lang: "es" },
            { label: "Terms and conditions", href: "/terminos", lang: "es" },
        ],
    },
];

export const footerColumns: Record<Locale, FooterColumn[]> = { es: footerEs, en: footerEn };

/** Everything in the footer that isn't a link list. */
export const footerCopy: Record<
    Locale,
    {
        homeAria: string;
        tagline: string;
        contactTitle: string;
        emailLabel: string;
        whatsappLabel: string;
        locationLabel: string;
        locationValue: string;
        socialTitle: string;
        emailSocialLabel: string;
        rights: string;
        privacy: { label: string; href: string; lang?: Locale };
        terms: { label: string; href: string; lang?: Locale };
    }
> = {
    es: {
        homeAria: "ir al inicio",
        tagline:
            "Implementamos automatización, inteligencia artificial y sistemas web para que los negocios dejen de perder clientes por responder tarde.",
        contactTitle: "Contacto",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        locationLabel: "Ubicación",
        locationValue: "Colombia · Remoto en LATAM",
        socialTitle: "Redes",
        emailSocialLabel: "Correo",
        rights: "Todos los derechos reservados.",
        privacy: { label: "Política de privacidad", href: "/privacidad" },
        terms: { label: "Términos y condiciones", href: "/terminos" },
    },
    en: {
        homeAria: "go to homepage",
        tagline:
            "We build automation, artificial intelligence and web systems so businesses stop losing customers to slow replies.",
        contactTitle: "Contact",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        locationLabel: "Location",
        locationValue: "Colombia · Remote across LATAM",
        socialTitle: "Social",
        emailSocialLabel: "Email",
        rights: "All rights reserved.",
        /* The legal documents exist only in Spanish, and machine-translating a
           binding contract would be worse than linking the original. */
        privacy: { label: "Privacy policy", href: "/privacidad", lang: "es" },
        terms: { label: "Terms and conditions", href: "/terminos", lang: "es" },
    },
};

/** Marker shown next to a link that leaves the reader's language. */
export const foreignLinkLabel: Record<Locale, string> = {
    es: "EN",
    en: "ES",
};
