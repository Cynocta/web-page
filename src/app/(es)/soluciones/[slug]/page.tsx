import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/icons";
import { JsonLd } from "@/components/structured-data";
import {
    SOLUTIONS_BASE_PATH,
    SOLUTION_SLUGS,
    getSolution,
    solutionPath,
} from "@/lib/content/solutions";
import { getService, servicePath } from "@/lib/content/services";
import { ORGANIZATION_ID } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import blocks from "@/components/sections/home-blocks.module.css";
import hub from "@/components/sections/services-hub.module.css";
import body from "@/components/sections/service-body.module.css";

export function generateStaticParams() {
    return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const solution = getSolution(slug);
    if (!solution) return {};

    const path = solutionPath(solution.slug);

    return {
        title: solution.metaTitle,
        description: solution.metaDescription,
        alternates: { canonical: path },
        openGraph: {
            title: `${solution.metaTitle} | Cynocta`,
            description: solution.metaDescription,
            url: path,
        },
    };
}

export default async function SolutionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const solution = getSolution(slug);
    if (!solution) notFound();

    const path = solutionPath(solution.slug);
    const services = solution.delivers.services
        .map((s) => getService(s))
        .filter((s): s is NonNullable<typeof s> => Boolean(s));

    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Soluciones", href: SOLUTIONS_BASE_PATH },
                { label: solution.navLabel, href: path },
            ]}
        >
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "@id": `${siteUrl}${path}#solution`,
                    name: solution.cardTitle,
                    description: solution.metaDescription,
                    url: `${siteUrl}${path}`,
                    inLanguage: "es",
                    provider: { "@id": ORGANIZATION_ID },
                    areaServed: "Latinoamérica",
                }}
            />

            <PageHero
                eyebrow={solution.eyebrow}
                title={solution.heading}
                intro={solution.intro}
                primary={{ label: "Hablar con nosotros", href: "/contacto" }}
                secondary={{ label: "Ver precios", href: "/precios" }}
                facts={solution.facts}
            />

            <Section tone="surface" width="narrow">
                <SectionHeader eyebrow={solution.situation.title} title="El punto de partida" />
                <p className={body.lead}>{solution.situation.body}</p>
            </Section>

            <Section tone="black">
                <SectionHeader eyebrow="Resultado" title={solution.outcomes.title} />
                <div className={blocks.cases}>
                    {solution.outcomes.items.map((item, i) => (
                        <Reveal key={item.title} delay={i * 70}>
                            <article className={blocks.case}>
                                <h3 className={blocks.caseSector}>{item.title}</h3>
                                <p className={blocks.caseText}>{item.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Cross-link into the service tree instead of restating it here. */}
            <Section tone="surface">
                <SectionHeader
                    eyebrow="Servicios"
                    title={solution.delivers.title}
                    intro={solution.delivers.intro}
                />
                <div className={hub.grid}>
                    {services.map((service, i) => (
                        <Reveal key={service.slug} delay={i * 60}>
                            <Link href={servicePath(service.slug)} className={hub.card}>
                                <div className={hub.icon}>
                                    <ServiceIcon kind={service.icon} />
                                </div>
                                <h3 className={hub.title}>{service.cardTitle}</h3>
                                <p className={hub.summary}>{service.cardSummary}</p>
                                <span className={hub.arrow} aria-hidden="true">
                                    VER SERVICIO →
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="black">
                <div className={body.cta}>
                    <div className={body.ctaCopy}>
                        <p className={body.ctaTitle}>{solution.ctaTitle}</p>
                        <p className={body.ctaText}>{solution.ctaBody}</p>
                    </div>
                    <Link href="/contacto" className={body.ctaButton}>
                        Quiero resolverlo
                    </Link>
                </div>
            </Section>
        </PageShell>
    );
}
