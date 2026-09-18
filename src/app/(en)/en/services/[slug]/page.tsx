import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/pages/service-page";
import { SERVICE_SLUGS, getServiceByEnSlug } from "@/lib/content/services";
import { serviceSlugEn } from "@/lib/content/services/nav";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

/** Every service, under its English slug. Anything else is a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return SERVICE_SLUGS.map((slug) => ({ slug: serviceSlugEn[slug] }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceByEnSlug(slug);

    if (!service) return {};

    const alternates = alternatesFor(`service:${service.slug}`, "en");

    return pageMetadata({
        path: alternates.canonical,
        title: service.metaTitle,
        description: service.metaDescription,
        locale: "en",
        alternates,
        image: { og: `/og/services/${slug}`, twitter: `/og/services/${slug}` },
    });
}

export default async function EnServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceByEnSlug(slug);

    if (!service) notFound();

    return <ServicePage service={service} locale="en" />;
}
