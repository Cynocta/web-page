import type { FaqItem } from "../faq";

export const SERVICE_SLUGS = [
    "chatbot-whatsapp",
    "automatizacion-de-procesos",
    "agentes-ia",
    "integracion-crm",
    "paginas-web-que-convierten",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** Reuses the landing's icon vocabulary so the visual language stays consistent. */
export type ServiceIcon = "web" | "chat" | "ops" | "kpi";

export type ServiceDetail = {
    slug: ServiceSlug;

    /** Short label for nav and breadcrumbs. */
    navLabel: string;
    /** Card on the hub page. */
    cardTitle: string;
    cardSummary: string;
    icon: ServiceIcon;

    metaTitle: string;
    metaDescription: string;

    eyebrow: string;
    heading: string;
    intro: string;
    facts: Array<{ value: string; label: string }>;

    /** Why this exists — the situation the buyer recognises. */
    problem: { title: string; body: string };

    /** Concrete deliverables. Vague scope is the top objection on service pages. */
    includes: {
        title: string;
        items: Array<{ title: string; description: string }>;
    };

    process: {
        title: string;
        steps: Array<{ num: string; title: string; description: string }>;
    };

    /**
     * Named tools. Doubles as buyer reassurance and as entity density — this is
     * what associates the brand with the category for a generative model.
     */
    stack: { title: string; intro: string; tools: string[] };

    /** Two or three questions specific to this service, marked up as FAQPage. */
    faq: FaqItem[];

    related: ServiceSlug[];
};

export type ServicesHub = {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    /** Heading above the card grid. */
    listTitle: string;
    ctaTitle: string;
    ctaBody: string;
    ctaLabel: string;
};
