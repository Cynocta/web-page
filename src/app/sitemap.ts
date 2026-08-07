import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

/** One entry per indexable route. Keep in sync when adding pages. */
const ROUTES: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    images?: string[];
}> = [
    { path: "", changeFrequency: "weekly", priority: 1, images: ["/opengraph-image"] },
    { path: "/preguntas-frecuentes", changeFrequency: "monthly", priority: 0.8 },
    { path: "/terminos", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return ROUTES.map(({ path, changeFrequency, priority, images }) => ({
        url: `${siteUrl}${path}`,
        lastModified,
        changeFrequency,
        priority,
        ...(images ? { images: images.map((i) => `${siteUrl}${i}`) } : {}),
    }));
}
