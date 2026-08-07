/**
 * Structured data, one module per schema type.
 *
 * Entities are linked by `@id` rather than duplicated: Organization is declared
 * once and every other schema points at it.
 */
export { organizationJsonLd, ORGANIZATION_ID } from "./organization";
export { websiteJsonLd } from "./website";
export { professionalServiceJsonLd } from "./professional-service";
export { faqJsonLd } from "./faq";
export { plansJsonLd } from "./plans";
export { breadcrumbsJsonLd } from "./breadcrumbs";
export { serviceDetailJsonLd, serviceFaqJsonLd } from "./service-detail";
