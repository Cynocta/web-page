import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/page-shell";
import CaseBody from "@/components/sections/case-body";
import { JsonLd } from "@/components/structured-data";
import { CASE_SLUGS, PORTFOLIO_BASE_PATH, casePath, getCase } from "@/lib/content/portfolio";
import { caseStudyJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site-data";

/**
 * No case has been published yet, so this generates nothing today and the whole
 * template goes live with the first entry in the registry.
 *
 * `dynamicParams = false` makes anything outside that list a 404 instead of an
 * on-demand render — with an empty registry that would mean every /portafolio/*
 * URL spinning up a render just to call `notFound()`.
 */
export const dynamicParams = false;

export function generateStaticParams() {
    return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const study = getCase(slug);

    if (!study) return {};

    const path = casePath(study.slug);

    return pageMetadata({
        path,
        title: study.metaTitle,
        description: study.metaDescription,
        type: "article",
    });
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = getCase(slug);

    if (!study) notFound();

    const pageUrl = `${siteUrl}${casePath(study.slug)}`;

    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Portafolio", href: PORTFOLIO_BASE_PATH },
                { label: study.navLabel, href: casePath(study.slug) },
            ]}
        >
            <JsonLd data={caseStudyJsonLd(study, pageUrl)} />

            <article>
                <CaseBody study={study} />
            </article>
        </PageShell>
    );
}
