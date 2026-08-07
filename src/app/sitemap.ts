import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";
import { ES_ONLY_PATHS, ROUTE_MAP } from "@/lib/i18n/routes";

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

const esOnly: Entry[] = ES_ONLY_PATHS.map((path) => ({
    path,
    changeFrequency: "yearly" as const,
    priority: 0.3,
}));

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [...translated, ...esOnly].map(({ path, changeFrequency, priority, alternates, images }) => ({
        url: abs(path),
        lastModified,
        changeFrequency,
        priority,
        ...(alternates ? { alternates: { languages: alternates } } : {}),
        ...(images ? { images: images.map(abs) } : {}),
    }));
}
