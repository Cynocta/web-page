import type { Locale } from "@/lib/content";
import type { ServiceDetail } from "@/lib/content/services";
import { faqItemsJsonLd } from "./faq";
import { ORGANIZATION_ID } from "./organization";

const AREA_NAME: Record<Locale, string> = { es: "Latinoamérica", en: "Latin America" };

/** Service schema for an individual service page. */
export function serviceDetailJsonLd(service: ServiceDetail, pageUrl: string, locale: Locale = "es") {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.cardTitle,
        description: service.metaDescription,
        url: pageUrl,
        inLanguage: locale,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: AREA_NAME[locale],
        serviceType: service.includes.items.map((i) => i.title),
    };
}

/** The service-specific questions, as their own FAQPage. */
export function serviceFaqJsonLd(service: ServiceDetail, pageUrl: string, locale: Locale = "es") {
    return faqItemsJsonLd(service.faq, pageUrl, undefined, locale);
}
