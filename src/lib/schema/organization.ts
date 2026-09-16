import { founders } from "@/lib/content/founders";
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

/**
 * What the company is an authority on, as named entities.
 *
 * `knowsAbout` is one of the few explicit ways to tell search and answer
 * engines which topics a brand should be associated with. Every item here is a
 * service the site sells or a tool it names on its own pages.
 */
export const KNOWS_ABOUT = [
    "Automatización con inteligencia artificial",
    "Chatbots de WhatsApp",
    "WhatsApp Business Platform",
    "Agentes de IA",
    "Automatización de procesos",
    "n8n",
    "Make",
    "Zapier",
    "OpenAI",
    "Integración de CRM",
    "HubSpot",
    "Integración de APIs",
    "Dashboards de negocio",
    "Desarrollo web",
    "Next.js",
];

export const AREA_SERVED = { "@type": "Place", name: "Latinoamérica" } as const;
export const ADDRESS = { "@type": "PostalAddress", addressCountry: "CO" } as const;

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: siteName,
        url: siteUrl,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/icon`,
            width: 512,
            height: 512,
        },
        image: `${siteUrl}/opengraph-image`,
        description: siteDescription,
        address: ADDRESS,
        areaServed: AREA_SERVED,
        knowsAbout: KNOWS_ABOUT,
        founder: founders.map((f) => ({
            "@type": "Person",
            "@id": `${siteUrl}/nosotros#${f.id}`,
            name: f.name,
        })),
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
                areaServed: AREA_SERVED,
            },
        ],
    };
}
