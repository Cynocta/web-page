import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PricingSection from "@/components/sections/pricing";
import PlanComparison from "@/components/sections/plan-comparison";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { JsonLd } from "@/components/structured-data";
import { content, type Locale } from "@/lib/content";
import { pricingPageByLocale } from "@/lib/content/pricing";
import { homeContent } from "@/lib/content/home";
import { localePath } from "@/lib/i18n/routes";
import { faqItemsJsonLd, plansJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/pricing-page.module.css";
import blocks from "@/components/sections/home-blocks.module.css";
import body from "@/components/sections/service-body.module.css";

/** Fixed labels around the pricing copy. */
const LABELS = {
    es: {
        home: "Inicio",
        crumb: "Precios",
        secondary: "Ver servicios",
        fit: "Encaje",
        audience: "Para quién es",
        projectType: "Tipo de proyecto",
        deliverables: "Qué recibes",
        timeline: "Tiempo de entrega",
        support: "Soporte",
        compare: "Comparar",
        builtWith: "Con qué se construye",
        process: "Proceso",
        how: "Cómo se calcula",
        transparency: "Transparencia",
        faqTag: "Preguntas frecuentes",
        faqTitle: "Sobre el precio",
    },
    en: {
        home: "Home",
        crumb: "Pricing",
        secondary: "See services",
        fit: "Fit",
        audience: "Who it's for",
        projectType: "Type of project",
        deliverables: "What you get",
        timeline: "Delivery time",
        support: "Support",
        compare: "Compare",
        builtWith: "What it's built with",
        process: "Process",
        how: "How it's priced",
        transparency: "Transparency",
        faqTag: "FAQ",
        faqTitle: "About pricing",
    },
} satisfies Record<Locale, Record<string, string>>;

/** The pricing page, shared by /precios and /en/pricing. */
export default function PricingPage({ locale }: { locale: Locale }) {
    const pricingPage = pricingPageByLocale[locale];
    const technologies = homeContent[locale].technologies;
    const t = LABELS[locale];
    const path = localePath("pricing", locale);
    const contactHref = localePath("contact", locale);
    /** Which plan is recommended — read once so the highlight can't drift. */
    const featuredIndex = content[locale].plans.items.findIndex((p) => p.featured);

    return (
        <PageShell
            locale={locale}
            crumbs={[
                { label: t.home, href: localePath("home", locale) },
                { label: t.crumb, href: path },
            ]}
        >
            {plansJsonLd(locale).map((plan) => (
                <JsonLd key={plan["@id"]} data={plan} />
            ))}
            <JsonLd data={faqItemsJsonLd(pricingPage.faq, `${siteUrl}${path}`, undefined, locale)} />

            <PageHero
                eyebrow={pricingPage.eyebrow}
                title={pricingPage.heading}
                intro={pricingPage.intro}
                primary={{ label: pricingPage.ctaLabel, href: contactHref }}
                secondary={{ label: t.secondary, href: localePath("services", locale) }}
                facts={pricingPage.facts}
            />

            {/* Surface here: the page hero above it is on black. */}
            <PricingSection ctaHref={contactHref} tone="surface" />

            {/* Everything the cards deliberately leave out. */}
            <Section tone="black">
                <SectionHeader
                    eyebrow={t.fit}
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
                                    <span className={s.blockLabel}>{t.audience}</span>
                                    <p className={s.blockText}>{plan.audience}</p>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>{t.projectType}</span>
                                    <div className={s.tags}>
                                        {plan.projectTypes.map((type) => (
                                            <span key={type} className={s.tag}>
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>{t.deliverables}</span>
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
                                    <span className={s.blockLabel}>{t.timeline}</span>
                                    <p className={s.blockText}>{plan.timeline}</p>
                                </div>

                                <div className={s.block}>
                                    <span className={s.blockLabel}>{t.support}</span>
                                    <p className={s.blockText}>{plan.support}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow={t.compare}
                    title={pricingPage.comparisonTitle}
                    intro={pricingPage.comparisonIntro}
                />
                <PlanComparison locale={locale} />
            </Section>

            {/* Explicitly asked for on this page: what the money is built with. */}
            <Section tone="black">
                <SectionHeader
                    eyebrow={technologies.eyebrow}
                    title={t.builtWith}
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
                    eyebrow={t.process}
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
                    eyebrow={t.how}
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
                    eyebrow={t.transparency}
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
                <SectionHeader eyebrow={t.faqTag} title={t.faqTitle} />
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
                    <Link href={contactHref} className={body.ctaButton}>
                        {pricingPage.ctaLabel}
                    </Link>
                </div>
            </Section>
        </PageShell>
    );
}
