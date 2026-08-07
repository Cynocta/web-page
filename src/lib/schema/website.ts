import type { Locale } from "@/lib/content";
import { siteDescription, siteName, siteUrl } from "@/lib/site-data";
import { ORGANIZATION_ID } from "./organization";

export function websiteJsonLd(locale: Locale) {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: locale,
        description: siteDescription,
        publisher: { "@id": ORGANIZATION_ID },
    };
}
