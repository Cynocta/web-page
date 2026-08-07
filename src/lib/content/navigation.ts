import { SERVICE_SLUGS, servicesEsNav } from "./services/nav";

export type NavLink = {
    label: string;
    href: string;
    /** Marks pages that exist but have no content yet, so the UI can say so. */
    pending?: boolean;
};

export type FooterColumn = {
    title: string;
    links: NavLink[];
};

/** Primary header navigation. Order is the reading order of a first-time visitor. */
export const headerNav: NavLink[] = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Portafolio", href: "/portafolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
];

export const headerCta = { label: "Agendar diagnóstico", href: "/contacto" };

/**
 * Footer columns. Service links are derived from the service registry so a new
 * service appears here automatically instead of being copied by hand.
 */
export const footerColumns: FooterColumn[] = [
    {
        title: "Empresa",
        links: [
            { label: "Nosotros", href: "/nosotros" },
            { label: "Portafolio", href: "/portafolio" },
            { label: "Blog", href: "/blog" },
            { label: "Contacto", href: "/contacto" },
        ],
    },
    {
        title: "Servicios",
        links: SERVICE_SLUGS.map((slug) => ({
            label: servicesEsNav[slug],
            href: `/servicios/${slug}`,
        })),
    },
    {
        title: "Recursos",
        links: [
            { label: "Casos de éxito", href: "/portafolio" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
            { label: "Precios", href: "/precios" },
            { label: "Política de privacidad", href: "/privacidad" },
            { label: "Términos y condiciones", href: "/terminos" },
        ],
    },
];
