import {
    contactEmail,
    contactPhone,
    instagramUrl,
    siteDescription,
    siteName,
    siteUrl,
} from "@/lib/site-data";

/** Stable @id so other schemas can point at this entity instead of repeating it. */
export const ORGANIZATION_ID = `${siteUrl}/#organization`;

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.svg`,
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
                availableLanguage: ["es", "en"],
            },
        ],
    };
}
