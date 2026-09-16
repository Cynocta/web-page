import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";
import { ES_ONLY_PATHS, ROUTE_MAP } from "@/lib/i18n/routes";
import { CASE_SLUGS, casePath } from "@/lib/content/portfolio";
import { BLOG_BASE_PATH, postList, postPath } from "@/lib/content/blog";

type Entry = {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    /** Alternates are emitted only for pages that have a real translation. */
    alternates?: Record<string, string>;
    images?: string[];
};

const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

/** Translated pages contribute one entry per locale, cross-linked by hreflang. */
const translated: Entry[] = Object.values(ROUTE_MAP).flatMap((paths) => {
    const languages = { es: abs(paths.es), en: abs(paths.en) };
    const isHome = paths.es === "/";

    return (["es", "en"] as const).map((locale) => ({
        path: paths[locale],
        changeFrequency: isHome ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 1 : 0.8,
        alternates: languages,
        ...(isHome && locale === "es" ? { images: ["/opengraph-image"] } : {}),
    }));
});

/** Commercial pages get real weight; the legal ones are there to be found, not ranked. */
const isLegal = (path: string) => path === "/terminos" || path === "/privacidad";
const isHub = (path: string) =>
    path === "/servicios" || path === "/precios" || path === "/soluciones";
/** Articles, not the blog index — an individual post sits below the money pages. */
const isPost = (path: string) => path.startsWith("/blog/");

/**
 * Case studies come straight from their registry rather than through the route
 * map: the slug list is derived from the case bodies, and those have no reason
 * to travel into the client bundle alongside the language toggle. Empty until
 * the first case is published.
 */
const casePaths = CASE_SLUGS.map(casePath);

const esOnly: Entry[] = [...ES_ONLY_PATHS, ...casePaths].map((path) => ({
    path,
    changeFrequency: isLegal(path) ? ("yearly" as const) : ("monthly" as const),
    priority: isLegal(path) ? 0.3 : isHub(path) ? 0.9 : isPost(path) ? 0.7 : 0.8,
}));

/**
 * `lastmod` only where the date is real.
 *
 * This used to stamp `new Date()` on every URL, so each deploy told Google that
 * all 31 pages had just changed. Google only honours `lastmod` when it proves
 * consistently accurate, and a value that moves on every build teaches it to
 * ignore the field site-wide — including for the articles, where it matters.
 * Articles carry their own publish/revision dates; the blog index takes the
 * newest of them; pages without a tracked date simply omit the field.
 */
const postDates = new Map(
    postList.map((post) => [postPath(post.slug), post.updatedAt ?? post.publishedAt]),
);
const newestPost = [...postDates.values()].sort().at(-1);

function lastModifiedFor(path: string) {
    if (postDates.has(path)) return postDates.get(path);
    if (path === BLOG_BASE_PATH) return newestPost;
    return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
    return [...translated, ...esOnly].map(({ path, changeFrequency, priority, alternates, images }) => {
        const lastModified = lastModifiedFor(path);

        return {
            url: abs(path),
            ...(lastModified ? { lastModified } : {}),
            changeFrequency,
            priority,
            ...(alternates ? { alternates: { languages: alternates } } : {}),
            ...(images ? { images: images.map(abs) } : {}),
        };
    });
}
