import { solutionsEs, solutionsHubEs } from "./es";
import { SOLUTION_SLUGS, type SolutionDetail, type SolutionSlug, type SolutionsHub } from "./types";

export * from "./types";

/** Spanish only for now, like the service tree — so no hreflang alternate is claimed. */
export const solutions: Record<SolutionSlug, SolutionDetail> = solutionsEs;
export const solutionsHub: SolutionsHub = solutionsHubEs;

export const solutionList: SolutionDetail[] = SOLUTION_SLUGS.map((slug) => solutionsEs[slug]);

export function getSolution(slug: string): SolutionDetail | undefined {
    return (SOLUTION_SLUGS as readonly string[]).includes(slug)
        ? solutionsEs[slug as SolutionSlug]
        : undefined;
}

export const SOLUTIONS_BASE_PATH = "/soluciones";

export function solutionPath(slug: SolutionSlug) {
    return `${SOLUTIONS_BASE_PATH}/${slug}`;
}
