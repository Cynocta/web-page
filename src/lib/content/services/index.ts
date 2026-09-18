import type { Locale } from "../types";
import { servicesEs, servicesHubEs } from "./es";
import { servicesEsExtra } from "./es-extra";
import { servicesEn, servicesHubEn } from "./en";
import { servicesEnExtra } from "./en-extra";
import { serviceSlugEn } from "./nav";
import { SERVICE_SLUGS, type ServiceDetail, type ServiceSlug, type ServicesHub } from "./types";

export * from "./types";

/**
 * Service copy per locale.
 *
 * The Spanish slug is the identity everywhere in code (`related`, the home's
 * families, analytics); only the English URL uses an English slug, resolved
 * through `serviceSlugEn`. Each locale arrives in two modules purely so no file
 * grows past the point where it's navigable.
 */
export const servicesByLocale: Record<Locale, Record<ServiceSlug, ServiceDetail>> = {
    es: { ...servicesEs, ...servicesEsExtra } as Record<ServiceSlug, ServiceDetail>,
    en: { ...servicesEn, ...servicesEnExtra } as Record<ServiceSlug, ServiceDetail>,
};

/** Spanish registry, kept under its old name for the Spanish-only consumers. */
export const services = servicesByLocale.es;

export const servicesHubByLocale: Record<Locale, ServicesHub> = {
    es: servicesHubEs,
    en: servicesHubEn,
};

export const servicesHub: ServicesHub = servicesHubEs;

/** Ordered list for the hub grid, the nav menu and the footer column. */
export function serviceListFor(locale: Locale): ServiceDetail[] {
    return SERVICE_SLUGS.map((slug) => servicesByLocale[locale][slug]);
}

export const serviceList: ServiceDetail[] = serviceListFor("es");

export function getService(slug: string, locale: Locale = "es"): ServiceDetail | undefined {
    return (SERVICE_SLUGS as readonly string[]).includes(slug)
        ? servicesByLocale[locale][slug as ServiceSlug]
        : undefined;
}

/** English pages are addressed by their English slug. */
export function getServiceByEnSlug(enSlug: string): ServiceDetail | undefined {
    const slug = SERVICE_SLUGS.find((s) => serviceSlugEn[s] === enSlug);
    return slug ? servicesByLocale.en[slug] : undefined;
}

export const SERVICES_BASE_PATH = "/servicios";

export const servicesBasePath: Record<Locale, string> = {
    es: SERVICES_BASE_PATH,
    en: "/en/services",
};

export function servicePath(slug: ServiceSlug, locale: Locale = "es") {
    return locale === "es"
        ? `${SERVICES_BASE_PATH}/${slug}`
        : `${servicesBasePath.en}/${serviceSlugEn[slug]}`;
}
