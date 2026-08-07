import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import {
    SOLUTIONS_BASE_PATH,
    solutionList,
    solutionPath,
    solutionsHub,
} from "@/lib/content/solutions";
import s from "@/components/sections/services-hub.module.css";

export const metadata: Metadata = {
    title: solutionsHub.metaTitle,
    description: solutionsHub.metaDescription,
    alternates: { canonical: SOLUTIONS_BASE_PATH },
    openGraph: {
        title: `${solutionsHub.metaTitle} | Cynocta`,
        description: solutionsHub.metaDescription,
        url: SOLUTIONS_BASE_PATH,
    },
};

export default function SolucionesPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Soluciones", href: SOLUTIONS_BASE_PATH },
            ]}
        >
            <PageHero
                eyebrow={solutionsHub.eyebrow}
                title={solutionsHub.heading}
                intro={solutionsHub.intro}
                primary={{ label: "Hablar con nosotros", href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <Section tone="surface">
                <SectionHeader eyebrow={solutionsHub.listTitle} title="¿Cuál es tu caso?" />
                <div className={s.grid}>
                    {solutionList.map((solution, i) => (
                        <Reveal key={solution.slug} delay={i * 60}>
                            <Link href={solutionPath(solution.slug)} className={s.card}>
                                <h3 className={s.title}>{solution.cardTitle}</h3>
                                <p className={s.summary}>{solution.cardSummary}</p>
                                <span className={s.arrow} aria-hidden="true">
                                    VER SOLUCIÓN →
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </PageShell>
    );
}
