import type { ServiceDetail } from "@/lib/content/services";
import { faqItemsJsonLd } from "./faq";
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

/** The service-specific questions, as their own FAQPage. */
export function serviceFaqJsonLd(service: ServiceDetail, pageUrl: string) {
    return faqItemsJsonLd(service.faq, pageUrl);
}
