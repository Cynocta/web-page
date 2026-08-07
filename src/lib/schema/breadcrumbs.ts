import { siteUrl } from "@/lib/site-data";

type Crumb = { label: string; href: string };

export function breadcrumbsJsonLd(crumbs: Crumb[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
        })),
    };
}
