import { blogIndexEs } from "./es";
import { postsEs } from "./posts";
import {
    POST_CATEGORIES,
    POST_SLUGS,
    type ArticleBlock,
    type BlogIndexCopy,
    type BlogPost,
    type PostCategory,
    type PostSlug,
} from "./types";

export * from "./types";
export { getAuthor, authors, type Author } from "./authors";
export { categoriesEsNav, postsEsNav } from "./nav";

/**
 * Articles exist in Spanish only for now, like the service and solution trees,
 * so no hreflang alternate is claimed for them.
 *
 * The registry is typed as a complete record: adding a slug to POST_SLUGS
 * without writing the article fails the build.
 */
export const posts = postsEs satisfies Record<PostSlug, BlogPost>;

export const blogIndex: BlogIndexCopy = blogIndexEs;

/**
 * Newest first — the order the index and the sitemap both use.
 * Sorted here rather than maintained by hand so a backdated article can't jump
 * the queue by being written last.
 */
export const postList: BlogPost[] = POST_SLUGS.map((slug) => posts[slug]).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
);

export function getPost(slug: string): BlogPost | undefined {
    return (POST_SLUGS as readonly string[]).includes(slug) ? posts[slug as PostSlug] : undefined;
}

/** Only the categories that actually have an article, in declared order. */
export const activeCategories: PostCategory[] = POST_CATEGORIES.filter((category) =>
    postList.some((post) => post.category === category),
);

export const BLOG_BASE_PATH = "/blog";

export function postPath(slug: PostSlug) {
    return `${BLOG_BASE_PATH}/${slug}`;
}

/** Every article URL, for the sitemap and the route map. */
export const POST_PATHS = POST_SLUGS.map(postPath);

/** The h2s of an article, in order — the source of the table of contents. */
export function tableOfContents(post: BlogPost) {
    return post.blocks.filter(
        (block): block is Extract<ArticleBlock, { kind: "h2" }> => block.kind === "h2",
    );
}

/**
 * Spanish long date for the byline. Built with an explicit UTC timezone because
 * a bare `YYYY-MM-DD` parses as midnight UTC, which renders as the previous day
 * anywhere west of Greenwich — including every market this site serves.
 */
export function formatPostDate(iso: string) {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
