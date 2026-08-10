import { founders } from "../founders";
import type { AuthorId } from "./types";

export type Author = {
    id: AuthorId;
    name: string;
    role: string;
    initials: string;
    /** One line under the byline. Shorter than the About-page bio. */
    line: string;
};

/**
 * Authors resolve to the founders rather than restating them, so a name or role
 * corrected on the About page is corrected on every article at the same time.
 * The index into `founders` is asserted here once instead of in each consumer.
 */
const [diego, mateo] = founders;

export const authors: Record<AuthorId, Author> = {
    diego: {
        id: "diego",
        name: diego.name,
        role: diego.role,
        initials: diego.initials,
        line: "Escribe sobre automatización, integraciones y arquitectura de sistemas.",
    },
    mateo: {
        id: "mateo",
        name: mateo.name,
        role: mateo.role,
        initials: mateo.initials,
        line: "Escribe sobre desarrollo de producto, rendimiento y experiencia de usuario.",
    },
};

export function getAuthor(id: AuthorId): Author {
    return authors[id];
}
