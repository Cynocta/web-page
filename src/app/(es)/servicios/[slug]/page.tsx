import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import ServiceBody from "@/components/sections/service-body";
import { JsonLd } from "@/components/structured-data";
import {
    SERVICE_SLUGS,
    SERVICES_BASE_PATH,
    getService,
    servicePath,
} from "@/lib/content/services";
import { serviceDetailJsonLd, serviceFaqJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

/** One template, five pages — the content lives in the data, not in the routes. */
export function generateStaticParams() {
    return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);

    if (!service) return {};

    const path = servicePath(service.slug);

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: path },
        openGraph: {
            title: `${service.metaTitle} | Cynocta`,
            description: service.metaDescription,
            url: path,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getService(slug);

    if (!service) notFound();

    const pageUrl = `${siteUrl}${servicePath(service.slug)}`;

    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: SERVICES_BASE_PATH },
                { label: service.navLabel, href: servicePath(service.slug) },
            ]}
        >
            <JsonLd data={serviceDetailJsonLd(service, pageUrl)} />
            <JsonLd data={serviceFaqJsonLd(service, pageUrl)} />

            <PageHero
                eyebrow={service.eyebrow}
                title={service.heading}
                intro={service.intro}
                primary={{ label: "Quiero resolverlo", href: "/#formulario" }}
                secondary={{ label: "Ver planes", href: "/precios" }}
                facts={service.facts}
            />

            <ServiceBody service={service} />
        </PageShell>
    );
}
