import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PortfolioList, { type CaseCard, type SectorChip } from "@/components/sections/portfolio-list";
import Section from "@/components/ui/section";
import EmptyState from "@/components/ui/empty-state";
import UseCasesSection from "@/components/sections/use-cases";
import { JsonLd } from "@/components/structured-data";
import {
    PORTFOLIO_BASE_PATH,
    activeSectors,
    caseAttribution,
    caseList,
    casePath,
    portfolioHub,
    sectorsEsNav,
} from "@/lib/content/portfolio";
import { portfolioJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Portafolio y casos de éxito",
    description: portfolioHub.metaDescription,
    alternates: { canonical: PORTFOLIO_BASE_PATH },
    openGraph: {
        title: "Portafolio | Cynocta",
        description: portfolioHub.metaDescription,
        url: PORTFOLIO_BASE_PATH,
    },
};

/** Flattened for the client component: it filters, it doesn't need the case bodies. */
const cards: CaseCard[] = caseList.map((study) => ({
    slug: study.slug,
    href: casePath(study.slug),
    sector: study.sector,
    sectorLabel: sectorsEsNav[study.sector],
    title: study.cardTitle,
    summary: study.cardSummary,
    attribution: caseAttribution(study),
    durationLabel: study.durationLabel,
    metric: study.results[0]?.value ?? "",
    metricLabel: study.results[0]?.label ?? "",
}));

const chips: SectorChip[] = activeSectors.map((sector) => ({
    value: sector,
    label: sectorsEsNav[sector],
}));

const hasCases = caseList.length > 0;

export default function PortafolioPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Portafolio", href: PORTFOLIO_BASE_PATH },
            ]}
        >
            {hasCases && (
                <JsonLd
                    data={portfolioJsonLd(
                        caseList,
                        portfolioHub.metaTitle,
                        portfolioHub.metaDescription,
                    )}
                />
            )}

            <PageHero
                eyebrow={portfolioHub.eyebrow}
                title={hasCases ? portfolioHub.heading : "Lo que construimos, por sector."}
                intro={
                    hasCases
                        ? portfolioHub.intro
                        : "Estamos preparando los casos con cifras verificadas y el permiso de cada cliente para nombrarlo. Mientras tanto, aquí está el tipo de problema que resolvemos y cómo."
                }
                primary={{ label: "Cuéntanos tu caso", href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <Section tone="surface">
                {hasCases ? (
                    <>
                        <p className="cyn-section-tag">{portfolioHub.listTitle}</p>
                        <PortfolioList
                            cases={cards}
                            sectors={chips}
                            allLabel={portfolioHub.allLabel}
                        />
                    </>
                ) : (
                    <EmptyState
                        badge="En preparación"
                        title={portfolioHub.emptyTitle}
                        body={portfolioHub.emptyBody}
                        primary={{ label: "Hablar con nosotros", href: "/contacto" }}
                        secondary={{ label: "Ver servicios", href: "/servicios" }}
                    />
                )}
            </Section>

            {/* Sector use cases: what we solve, kept as context whether or not
                there are published cases above. */}
            <UseCasesSection />
        </PageShell>
    );
}
