import { serviceList, servicePath } from "@/lib/content/services";
import {
    contactEmail,
    contactPhone,
    instagramUrl,
    siteName,
    siteUrl,
} from "@/lib/site-data";
import { ADDRESS, AREA_SERVED, KNOWS_ABOUT, ORGANIZATION_ID } from "./organization";

export function professionalServiceJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        telephone: contactPhone,
        email: contactEmail,
        sameAs: [instagramUrl],
        description:
            "Cynocta implementa automatización comercial, desarrollo web y procesos digitales para negocios en crecimiento.",
        serviceType: [
            "Automatización comercial",
            "Desarrollo web para negocios",
            "Integración de procesos digitales",
            "Optimización de conversión",
        ],
        areaServed: AREA_SERVED,
        address: ADDRESS,
        knowsAbout: KNOWS_ABOUT,
        parentOrganization: { "@id": ORGANIZATION_ID },
        // The catalogue, derived from the registry: the ten services the home
        // links to, declared as what this business offers.
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de automatización con IA",
            itemListElement: serviceList.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.cardTitle,
                    description: service.cardSummary,
                    url: `${siteUrl}${servicePath(service.slug)}`,
                },
            })),
        },
    };
}
