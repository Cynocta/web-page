import type { CaseStudy } from "./types";

/**
 * Published case studies. Empty on purpose.
 *
 * Everything the portfolio needs — hub, filters, detail template, schema,
 * sitemap — is built and works. What's missing is the only part that can't be
 * written from this side: real projects, with real clients who agreed to be
 * named and real numbers that were actually measured. An invented case is worse
 * than an empty section, because a buyer who checks one and finds nothing stops
 * believing the rest of the site.
 *
 * To publish one, add an entry here. The slug is the key; it needs nothing else
 * registered anywhere. The card, the detail page, the breadcrumbs, the schema
 * and the sitemap all pick it up on the next build, and the empty state
 * disappears by itself once the first case lands.
 *
 * What a case needs before it can go up:
 *
 *   1. Written permission from the client to be named, or `named: false` and an
 *      `anonymousLabel` that describes them without identifying them.
 *   2. What was implemented, concretely enough that a reader in the same
 *      situation recognises their own problem.
 *   3. Figures measured before and after, with the method and the window. Two
 *      well-documented cases beat ten vague ones.
 *
 * Example of the shape (uncomment and fill in with a real project):
 *
 *   "clinica-dental-agendamiento": {
 *       slug: "clinica-dental-agendamiento",
 *       client: "",
 *       named: false,
 *       anonymousLabel: "Clínica dental, Medellín",
 *       sector: "salud",
 *       ...
 *   }
 */
export const caseStudies = {} satisfies Record<string, CaseStudy>;
