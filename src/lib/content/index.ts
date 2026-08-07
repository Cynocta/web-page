/**
 * Public surface of the content layer.
 *
 * Split by responsibility so no single file owns everything:
 *   types.ts     — the shape every locale must satisfy
 *   currency.ts  — conversion and formatting (behaviour, not data)
 *   es.ts / en.ts — the copy itself, one file per locale
 *
 * Importers keep using `@/lib/content`, which resolves here.
 */
import type { Content, Locale } from "./types";
import { es } from "./es";
import { en } from "./en";

export * from "./types";
export * from "./currency";
export * from "./faq";

export const content: Record<Locale, Content> = { es, en };
