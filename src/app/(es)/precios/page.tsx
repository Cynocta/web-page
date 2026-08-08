import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PricingSection from "@/components/sections/pricing";
import PlanComparison from "@/components/sections/plan-comparison";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { JsonLd } from "@/components/structured-data";
import { content } from "@/lib/content";
import { pricingPage } from "@/lib/content/pricing";
import { technologies } from "@/lib/content/home";
import { plansJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/pricing-page.module.css";
import blocks from "@/components/sections/home-blocks.module.css";
import body from "@/components/sections/service-body.module.css";

const PATH = "/precios";

export const metadata: Metadata = {
    title: pricingPage.metaTitle,
    description: pricingPage.metaDescription,
    alternates: { canonical: PATH },
    openGraph: {
        title: `${pricingPage.metaTitle} | Cynocta`,
        description: pricingPage.metaDescription,
        url: PATH,
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${PATH}#faq`,
    inLanguage: "es",
    mainEntity: pricingPage.faq.map((item) => ({
        "@type": "Question",
        "@id": `${siteUrl}${PATH}#${item.id}`,
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
            url: `${siteUrl}${PATH}#${item.id}`,
        },
    })),
};

/** Which plan is recommended — read once so the highlight can't drift. */
const featuredIndex = content.es.plans.items.findIndex((p) => p.featured);

export default function PreciosPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Precios", href: PATH },
            ]}
        >
            {plansJsonLd("es").map((plan) => (
                <JsonLd key={plan["@id"]} data={plan} />
            ))}
            <JsonLd data={faqJsonLd} />

            <PageHero
                eyebrow={pricingPage.eyebrow}
                title={pricingPage.heading}
                intro={pricingPage.intro}
                primary={{ label: pricingPage.ctaLabel, href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
                facts={pricingPage.facts}
            />

            {/* Surface here: the page hero above it is on black. */}
            <PricingSection ctaHref="/contacto" tone="surface" />

            {/* Everything the cards deliberately leave out. */}
            <Section tone="black">
                <SectionHeader
                    eyebrow="Encaje"
                    title={pricingPage.audienceTitle}
                    intro={pricingPage.audienceIntro}
                />
                <div className={s.details}>
                    {pricingPage.details.map((plan, i) => (
                        <Reveal key={plan.title} delay={i * 70}>
                            <article
                                className={`${s.detail} ${i === featuredIndex ? s.detailHighlight : ""}`}
                            >
                                <h3 className={s.detailName}>{plan.title}</h3>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>Para quién es</span>
                                    <p className={s.blockText}>{plan.audience}</p>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>Tipo de proyecto</span>
                                    <div className={s.tags}>
                                        {plan.projectTypes.map((type) => (
                                            <span key={type} className={s.tag}>
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>Qué recibes</span>
                                    <ul className={s.blockList}>
                                        {plan.deliverables.map((item) => (
                                            <li key={item} className={s.blockItem}>
                                                <span className={s.bullet} aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>Tiempo de entrega</span>
                                    <p className={s.blockText}>{plan.timeline}</p>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>Soporte</span>
                                    <p className={s.blockText}>{plan.support}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow="Comparar"
                    title={pricingPage.comparisonTitle}
                    intro={pricingPage.comparisonIntro}
                />
                <PlanComparison />
            </Section>

            {/* Explicitly asked for on this page: what the money is built with. */}
            <Section tone="black">
                <SectionHeader
                    eyebrow={technologies.eyebrow}
                    title="Con qué se construye"
                    intro={technologies.intro}
                />
                <div className={blocks.techGroups}>
                    {technologies.groups.map((group, i) => (
                        <Reveal key={group.label} delay={i * 60}>
                            <div className={blocks.techGroup}>
                                <h3 className={blocks.techLabel}>{group.label}</h3>
                                <ul className={blocks.techList}>
                                    {group.tools.map((tool) => (
                                        <li key={tool} className={blocks.tech}>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow="Proceso"
                    title={pricingPage.processTitle}
                    intro={pricingPage.processIntro}
                />
                <ol className={s.steps}>
                    {pricingPage.process.map((step) => (
                        <li key={step.num} className={s.step}>
                            <span className={s.stepNum}>{step.num}</span>
                            <h3 className={s.stepTitle}>{step.title}</h3>
                            <p className={s.stepText}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section tone="black">
                <SectionHeader
                    eyebrow="Cómo se calcula"
                    title={pricingPage.howTitle}
                    intro={pricingPage.howIntro}
                />
                <div className={blocks.cases}>
                    {pricingPage.factors.map((factor, i) => (
                        <Reveal key={factor.title} delay={i * 70}>
                            <article className={blocks.case}>
                                <h3 className={blocks.caseSector}>{factor.title}</h3>
                                <p className={blocks.caseText}>{factor.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow="Transparencia"
                    title={pricingPage.extrasTitle}
                    intro={pricingPage.extrasIntro}
                />
                <div className={blocks.cases}>
                    {pricingPage.extras.map((extra, i) => (
                        <Reveal key={extra.title} delay={i * 70}>
                            <article className={blocks.case}>
                                <h3 className={blocks.caseSector}>{extra.title}</h3>
                                <p className={blocks.caseText}>{extra.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="preguntas" tone="black" width="narrow">
                <SectionHeader eyebrow="Preguntas frecuentes" title="Sobre el precio" />
                <div className={body.faqList}>
                    {pricingPage.faq.map((item) => (
                        <article key={item.id} id={item.id} className={body.faqItem}>
                            <h3 className={body.faqQuestion}>{item.question}</h3>
                            <p className={body.faqAnswer}>{item.answer}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section tone="surface">
                <div className={body.cta}>
                    <div className={body.ctaCopy}>
                        <p className={body.ctaTitle}>{pricingPage.ctaTitle}</p>
                        <p className={body.ctaText}>{pricingPage.ctaBody}</p>
                    </div>
                    <Link href="/contacto" className={body.ctaButton}>
                        {pricingPage.ctaLabel}
                    </Link>
                </div>
            </Section>
        </PageShell>
    );
}
