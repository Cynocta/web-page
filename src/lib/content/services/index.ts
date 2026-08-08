import { servicesEs, servicesHubEs } from "./es";
import { servicesEsExtra } from "./es-extra";
import { SERVICE_SLUGS, type ServiceDetail, type ServiceSlug, type ServicesHub } from "./types";

export * from "./types";

/**
 * Service pages exist in Spanish only for now. They are not in the i18n route
 * map, so no hreflang alternate is claimed for them — same rule as the legal
 * documents: an alternate that doesn't exist is worse than none.
 *
 * The copy arrives in two modules purely so neither grows past the point where
 * it's navigable; the registry is the single place that knows about both.
 */
export const services = {
    ...servicesEs,
    ...servicesEsExtra,
} as Record<ServiceSlug, ServiceDetail>;

export const servicesHub: ServicesHub = servicesHubEs;

/** Ordered list for the hub grid, the nav menu and the footer column. */
export const serviceList: ServiceDetail[] = SERVICE_SLUGS.map((slug) => services[slug]);

export function getService(slug: string): ServiceDetail | undefined {
    return (SERVICE_SLUGS as readonly string[]).includes(slug)
        ? services[slug as ServiceSlug]
        : undefined;
}

export const SERVICES_BASE_PATH = "/servicios";

export function servicePath(slug: ServiceSlug) {
    return `${SERVICES_BASE_PATH}/${slug}`;
}
