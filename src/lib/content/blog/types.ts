import type { FaqItem } from "../faq";
import type { ServiceSlug } from "../services/types";

/**
 * Publication order is not slug order: the index sorts by date. This list only
 * decides which slugs exist, and a slug listed here without a matching entry in
 * the registry is a compile error rather than a 404 in production.
 */
export const POST_SLUGS = [
    "n8n-vs-make-vs-zapier",
    "cuanto-cuesta-la-api-de-whatsapp-business",
    "chatbot-vs-agente-de-ia",
] as const;

export type PostSlug = (typeof POST_SLUGS)[number];

/** Drives the filter row on the index. Order is the order shown. */
export const POST_CATEGORIES = ["automatizacion", "inteligencia-artificial", "whatsapp"] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];

/** Authors are the founders, keyed so a post never repeats a person's details. */
export type AuthorId = "diego" | "mateo";

/**
 * The article body, as data.
 *
 * Prose lives in typed blocks instead of raw HTML for the same reason the rest
 * of the site does: the renderer decides how a heading or a table looks, and no
 * piece of copy can ship markup that breaks the page. Every block the template
 * knows how to render is in this union — adding a shape here forces the
 * renderer to handle it.
 */
export type ArticleBlock =
    | { kind: "p"; text: string }
    /** `id` is the anchor and the table-of-contents entry. */
    | { kind: "h2"; id: string; text: string }
    | { kind: "h3"; text: string }
    | { kind: "list"; ordered?: boolean; items: string[] }
    | { kind: "quote"; text: string; source?: string }
    /** Set-apart note: a caveat or a rule of thumb, not decoration. */
    | { kind: "callout"; title: string; text: string }
    | { kind: "table"; caption?: string; head: string[]; rows: string[][] };

export type BlogPost = {
    slug: PostSlug;
    category: PostCategory;

    /** Short label for related-post cards and breadcrumbs. */
    navLabel: string;
    /** The h1. */
    title: string;
    /** Card copy on the index, and the base for the meta description. */
    excerpt: string;

    metaTitle: string;
    metaDescription: string;

    author: AuthorId;
    /** ISO date. Drives sort order, `datePublished` and the visible byline. */
    publishedAt: string;
    /** Set when the article is materially revised, not for typo fixes. */
    updatedAt?: string;
    readingMinutes: number;

    /**
     * The answer to the title, in one paragraph, before any preamble.
     * This is the passage an answer engine quotes, so it stands alone and
     * carries no sales language.
     */
    keyTakeaway: string;

    blocks: ArticleBlock[];

    /** Questions specific to the article, marked up as their own FAQPage. */
    faq: FaqItem[];

    related: PostSlug[];
    /** Where the article hands off commercially. */
    relatedServices: ServiceSlug[];
};

export type BlogIndexCopy = {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    listTitle: string;
    /** Label for the "all posts" filter chip. */
    allLabel: string;
};
