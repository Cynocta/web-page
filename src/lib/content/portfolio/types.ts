import type { ServiceSlug } from "../services/types";

/** Drives the filter row on the hub. Order is the order shown. */
export const CASE_SECTORS = [
    "salud",
    "inmobiliaria",
    "educacion",
    "comercio",
    "servicios",
    "industria",
] as const;

export type CaseSector = (typeof CASE_SECTORS)[number];

/**
 * A measured before/after. Both sides are required on purpose: "+43 %" with
 * nothing to compare against is a claim, not a result, and it's the first thing
 * a serious buyer asks about.
 */
export type CaseMetric = {
    /** The headline figure, already formatted — "+43 %", "2x", "<2 min". */
    value: string;
    label: string;
    before: string;
    after: string;
    /** How it was measured and over what window. */
    method: string;
};

export type CaseStudy = {
    slug: string;

    /**
     * The client's name, used only when `named` is true.
     *
     * A case can be published anonymously — "una clínica dental en Medellín" —
     * but never with an invented name, and never with a real name the client
     * hasn't explicitly authorised in writing.
     */
    client: string;
    named: boolean;
    /** Shown instead of the name when `named` is false. */
    anonymousLabel: string;

    sector: CaseSector;

    navLabel: string;
    cardTitle: string;
    cardSummary: string;

    metaTitle: string;
    metaDescription: string;

    /** ISO date the work was delivered. Drives sort order. */
    completedAt: string;
    /** "6 semanas", "3 meses" — how long it took, in the client's terms. */
    durationLabel: string;

    /** Which services this case demonstrates. Cross-links into the service tree. */
    services: ServiceSlug[];

    /** The situation before the work started. */
    challenge: { title: string; body: string };

    /** What was actually built. */
    solution: {
        title: string;
        intro: string;
        items: Array<{ title: string; description: string }>;
    };

    /** At least one. A case without measured numbers doesn't get published. */
    results: CaseMetric[];

    /** Named tools, same role as on a service page. */
    stack: string[];

    /** Only with the client's permission, quoted verbatim. */
    testimonial?: { quote: string; author: string; role: string };

    related: string[];
};

export type PortfolioHub = {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    listTitle: string;
    allLabel: string;
    /** Shown while the registry is empty. */
    emptyTitle: string;
    emptyBody: string;
};
