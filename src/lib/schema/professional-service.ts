import {
    contactEmail,
    contactPhone,
    instagramUrl,
    siteName,
    siteUrl,
} from "@/lib/site-data";

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
        areaServed: "Latinoamérica",
    };
}
