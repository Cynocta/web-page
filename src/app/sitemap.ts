import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
            images: [`${siteUrl}/opengraph-image`],
        },
        {
            url: `${siteUrl}/terminos`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/privacidad`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
