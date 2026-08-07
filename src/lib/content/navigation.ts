import { SERVICE_SLUGS, servicesEsNav } from "./services/nav";
import { SOLUTION_SLUGS, solutionsEsNav } from "./solutions/nav";

export type NavLink = {
    label: string;
    href: string;
    /** One line under the label inside a dropdown. Omitted in flat lists. */
    hint?: string;
};

/**
 * A header entry is either a plain link or a disclosure with children.
 * Modelled as a union so the header renders from data instead of hardcoding
 * which of the seven entries happens to have a menu.
 */
export type NavEntry =
    | { kind: "link"; label: string; href: string }
    | {
          kind: "menu";
          label: string;
          /** The hub the menu title itself points to. */
          href: string;
          /** Shown as the last row of the panel. */
          seeAll: string;
          items: NavLink[];
      };

export const headerNav: NavEntry[] = [
    { kind: "link", label: "Inicio", href: "/" },
    {
        kind: "menu",
        label: "Servicios",
        href: "/servicios",
        seeAll: "Ver todos los servicios",
        items: SERVICE_SLUGS.map((slug) => ({
            label: servicesEsNav[slug],
            href: `/servicios/${slug}`,
        })),
    },
    {
        kind: "menu",
        label: "Soluciones",
        href: "/soluciones",
        seeAll: "Ver todas las soluciones",
        items: SOLUTION_SLUGS.map((slug) => ({
            label: solutionsEsNav[slug],
            href: `/soluciones/${slug}`,
        })),
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

export const headerCta = { label: "Agendar diagnóstico", href: "/contacto" };

export type FooterColumn = {
    title: string;
    links: Array<{ label: string; href: string }>;
};

/**
 * Footer columns. Service and solution links come from the same registries the
 * header uses, so a new entry appears in both without being copied.
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
        title: "Soluciones",
        links: SOLUTION_SLUGS.map((slug) => ({
            label: solutionsEsNav[slug],
            href: `/soluciones/${slug}`,
        })),
    },
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
