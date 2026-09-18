import type { FaqItem } from "./faq";
import type { ServiceIcon, ServiceSlug } from "./services/types";

/**
 * Shape of the homepage's own sections, per locale.
 *
 * The English home used to render these five sections from Spanish-only data,
 * so /en — declared `hreflang="en"` — served more Spanish than English. Every
 * visible string the home owns now lives behind a locale key; the Spanish
 * object reuses the existing data so no page that already reads it changes.
 */
export type HomeContent = {
    services: {
        eyebrow: string;
        title: string;
        intro: string;
        /** Disclosure label; `{n}` is the number of services in the family. */
        toggleLabel: string;
        /** Link to the catalogue; `{n}` is the total number of services. */
        allLabel: string;
        families: Array<{
            title: string;
            summary: string;
            icon: ServiceIcon;
            slugs: ServiceSlug[];
        }>;
        /**
         * Card copy per service. Absent in Spanish, where the service registry
         * is the source; the English home has no service pages to read from.
         */
        cards?: Record<ServiceSlug, { title: string; summary: string }>;
    };
    /**
     * The live walkthrough: one enquiry followed through the system, step by
     * step. Replaces the four benefit cards — each benefit is now a step the
     * reader watches happen rather than a claim they read.
     */
    demo: {
        eyebrow: string;
        title: string;
        intro: string;
        /** Labels the scenario as an illustration, not a client case. */
        scenario: string;
        /** `{n}` and `{total}` are replaced. */
        progressLabel: string;
        chatTitle: string;
        chatStatus: string;
        systemTitle: string;
        steps: Array<{ time: string; title: string; body: string }>;
        /** Chat bubbles; each appears once its `step` is reached. */
        messages: Array<{ id: string; from: "client" | "bot"; text: string; time: string; step: number }>;
        /** System log rows; each turns done once its `step` is reached. */
        events: Array<{ id: string; label: string; detail: string; step: number }>;
        /** Summary figures shown on the final step. */
        metrics: Array<{ label: string; value: string }>;
        footnote: string;
        linkLabel: string;
        /** Phone stepper controls. `{n}` and `{title}` are replaced. */
        prevLabel: string;
        nextLabel: string;
        goToLabel: string;
    };
    technologies: {
        eyebrow: string;
        title: string;
        intro: string;
        groups: Array<{ label: string; tools: string[] }>;
        linkLabel: string;
    };
    useCases: {
        eyebrow: string;
        title: string;
        intro: string;
        sectorLabel: string;
        problemLabel: string;
        solutionLabel: string;
        items: Array<{ sector: string; challenge: string; solution: string }>;
        linkLabel: string;
    };
    founders: {
        eyebrow: string;
        title: string;
        intro: string;
        profilesPendingLabel: string;
        linkLabel: string;
        /** `{name}` is replaced with the founder's name. */
        linkedinLabel: string;
        githubLabel: string;
        /** Same order as the founders registry; overrides role and bio. */
        people?: Array<{ role: string; bio: string }>;
    };
    faq: {
        eyebrow: string;
        title: string;
        intro: string;
        items: FaqItem[];
        /** `{n}` is the number of questions on the full FAQ page. */
        moreLabel: string;
        moreHref: string;
    };
};
