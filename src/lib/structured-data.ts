import {
    contactEmail,
    contactPhone,
    instagramUrl,
    siteDescription,
    siteName,
    siteUrl,
} from "@/lib/site-data";

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/cynocta-logo-main.svg`,
        description: siteDescription,
        telephone: contactPhone,
        email: contactEmail,
        sameAs: [instagramUrl],
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: contactPhone,
                email: contactEmail,
                availableLanguage: ["es"],
            },
        ],
    };
}

export function websiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        inLanguage: "es",
        description: siteDescription,
    };
}

export function professionalServiceJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        telephone: contactPhone,
        email: contactEmail,
        sameAs: [instagramUrl],
        description:
            "Cynocta implementa automatizacion comercial, desarrollo web y procesos digitales para negocios en crecimiento.",
        serviceType: [
            "Automatizacion comercial",
            "Desarrollo web para negocios",
            "Integracion de procesos digitales",
            "Optimizacion de conversion",
        ],
        areaServed: "Latinoamerica",
    };
}
