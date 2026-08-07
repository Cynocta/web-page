import type { ServiceSlug } from "../services/types";

export const SOLUTION_SLUGS = [
    "pymes",
    "empresas",
    "automatizacion-comercial",
    "automatizacion-operativa",
    "ia-empresarial",
] as const;

export type SolutionSlug = (typeof SOLUTION_SLUGS)[number];

/**
 * Solutions are organised by who you are or what you're trying to fix;
 * services are organised by what we build. Each solution points at the services
 * that deliver it, which is what stops the two trees from duplicating content.
 */
export type SolutionDetail = {
    slug: SolutionSlug;

    navLabel: string;
    cardTitle: string;
    cardSummary: string;

    metaTitle: string;
    metaDescription: string;

    eyebrow: string;
    heading: string;
    intro: string;
    facts: Array<{ value: string; label: string }>;

    /** The situation the reader should recognise as theirs. */
    situation: { title: string; body: string };

    /** What changes once it's in place. */
    outcomes: {
        title: string;
        items: Array<{ title: string; description: string }>;
    };

    /** Cross-links into the service tree — no service copy is repeated here. */
    delivers: { title: string; intro: string; services: ServiceSlug[] };

    ctaTitle: string;
    ctaBody: string;
};

export type SolutionsHub = {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    listTitle: string;
};
