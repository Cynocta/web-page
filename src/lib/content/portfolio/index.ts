import { caseStudies } from "./cases";
import { portfolioHubEs } from "./es";
import { CASE_SECTORS, type CaseSector, type CaseStudy, type PortfolioHub } from "./types";

export * from "./types";
export { sectorsEsNav } from "./nav";
export { caseStudies };

export const portfolioHub: PortfolioHub = portfolioHubEs;

/**
 * The slug union derives from the registry itself rather than from a parallel
 * list, because the registry starts empty: a hand-kept list of slugs alongside
 * an empty object has nothing to check against, and would drift the moment the
 * first case is written. Adding an entry to `caseStudies` is the whole step.
 */
export type CaseSlug = keyof typeof caseStudies;

/** Newest first — the order the hub and the sitemap both use. */
export const caseList: CaseStudy[] = Object.values<CaseStudy>(caseStudies).sort((a, b) =>
    b.completedAt.localeCompare(a.completedAt),
);

export const CASE_SLUGS: string[] = caseList.map((study) => study.slug);

export function getCase(slug: string): CaseStudy | undefined {
    return (caseStudies as Record<string, CaseStudy>)[slug];
}

/** Only the sectors that actually have a case, in declared order. */
export const activeSectors: CaseSector[] = CASE_SECTORS.filter((sector) =>
    caseList.some((study) => study.sector === sector),
);

export const PORTFOLIO_BASE_PATH = "/portafolio";

export function casePath(slug: string) {
    return `${PORTFOLIO_BASE_PATH}/${slug}`;
}

/** How a case is attributed on screen: the client's name only if they agreed. */
export function caseAttribution(study: CaseStudy) {
    return study.named && study.client ? study.client : study.anonymousLabel;
}
