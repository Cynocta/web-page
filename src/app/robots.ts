import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://cynocta.com";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (() => {
    if (!rawSiteUrl) {
        return fallbackSiteUrl;
    }

    try {
        return new URL(rawSiteUrl).origin;
    } catch {
        return fallbackSiteUrl;
    }
})();

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
