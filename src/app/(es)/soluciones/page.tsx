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
import { JsonLd } from "@/components/structured-data";
import { faqItemsJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/services-hub.module.css";
import body from "@/components/sections/service-body.module.css";

export const metadata: Metadata = pageMetadata({
    path: SOLUTIONS_BASE_PATH,
    title: solutionsHub.metaTitle,
    description: solutionsHub.metaDescription,
});

export default function SolucionesPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Soluciones", href: SOLUTIONS_BASE_PATH },
            ]}
        >
            <JsonLd
                data={faqItemsJsonLd(solutionsHub.faq, `${siteUrl}${SOLUTIONS_BASE_PATH}`)}
            />

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

            {/* The question this hub exists to answer, before the reader guesses. */}
            <Section tone="black" width="narrow">
                <SectionHeader
                    eyebrow={solutionsHub.explainer.title}
                    title="Cuál es la diferencia"
                />
                <p className={body.lead}>{solutionsHub.explainer.body}</p>
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow="Cómo elegir"
                    title={solutionsHub.criteria.title}
                    intro={solutionsHub.criteria.intro}
                />
                <div className={body.grid}>
                    {solutionsHub.criteria.items.map((item, i) => (
                        <Reveal key={item.title} delay={i * 70}>
                            <article className={body.card}>
                                <h3 className={body.cardTitle}>{item.title}</h3>
                                <p className={body.cardText}>{item.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="preguntas" tone="black" width="narrow">
                <SectionHeader eyebrow="Preguntas frecuentes" title="Antes de elegir" />
                <div className={body.faqList}>
                    {solutionsHub.faq.map((item) => (
                        <article key={item.id} id={item.id} className={body.faqItem}>
                            <h3 className={body.faqQuestion}>{item.question}</h3>
                            <p className={body.faqAnswer}>{item.answer}</p>
                        </article>
                    ))}
                </div>
            </Section>
        </PageShell>
    );
}
