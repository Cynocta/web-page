import type { ServiceDetail } from "@/lib/content/services";
import { siteUrl } from "@/lib/site-data";
import { ORGANIZATION_ID } from "./organization";

/** Service schema for an individual service page. */
export function serviceDetailJsonLd(service: ServiceDetail, pageUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.cardTitle,
        description: service.metaDescription,
        url: pageUrl,
        inLanguage: "es",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Latinoamérica",
        serviceType: service.includes.items.map((i) => i.title),
    };
}

/**
 * The service-specific questions, as their own FAQPage.
 * Same rule as the main FAQ: the text here matches what the page renders.
 */
export function serviceFaqJsonLd(service: ServiceDetail, pageUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: "es",
        mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            "@id": `${pageUrl}#${item.id}`,
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
                url: `${pageUrl}#${item.id}`,
            },
        })),
        publisher: { "@id": `${siteUrl}/#organization` },
    };
}
