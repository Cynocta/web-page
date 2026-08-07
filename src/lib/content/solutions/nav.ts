import { SOLUTION_SLUGS, type SolutionSlug } from "./types";

export { SOLUTION_SLUGS };

/**
 * Short labels only — kept apart from the full solution copy so navigation can
 * import it without pulling the whole dataset into every bundle with a menu.
 */
export const solutionsEsNav: Record<SolutionSlug, string> = {
    pymes: "Para PYMES",
    empresas: "Para Empresas",
    "automatizacion-comercial": "Automatización Comercial",
    "automatizacion-operativa": "Automatización Operativa",
    "ia-empresarial": "IA Empresarial",
};
