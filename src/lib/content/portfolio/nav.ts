import { CASE_SECTORS, type CaseSector } from "./types";

export { CASE_SECTORS };

/** Short labels only, so the filter row doesn't import the case bodies. */
export const sectorsEsNav: Record<CaseSector, string> = {
    salud: "Salud",
    inmobiliaria: "Inmobiliaria",
    educacion: "Educación",
    comercio: "Comercio",
    servicios: "Servicios",
    industria: "Industria",
};
