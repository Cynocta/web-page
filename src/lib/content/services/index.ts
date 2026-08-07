import { servicesEs, servicesHubEs } from "./es";
import { SERVICE_SLUGS, type ServiceDetail, type ServiceSlug, type ServicesHub } from "./types";

export * from "./types";

/**
 * Service pages exist in Spanish only for now. They are not in the i18n route
 * map, so no hreflang alternate is claimed for them — same rule as the legal
 * documents: an alternate that doesn't exist is worse than none.
 */
export const services: Record<ServiceSlug, ServiceDetail> = servicesEs;
export const servicesHub: ServicesHub = servicesHubEs;

/** Ordered list for the hub grid and the nav menu. */
export const serviceList: ServiceDetail[] = SERVICE_SLUGS.map((slug) => servicesEs[slug]);

export function getService(slug: string): ServiceDetail | undefined {
    return (SERVICE_SLUGS as readonly string[]).includes(slug)
        ? servicesEs[slug as ServiceSlug]
        : undefined;
}

export const SERVICES_BASE_PATH = "/servicios";

export function servicePath(slug: ServiceSlug) {
    return `${SERVICES_BASE_PATH}/${slug}`;
}
