import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import FoundersSection from "@/components/sections/founders";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { JsonLd } from "@/components/structured-data";
import { about } from "@/lib/content/about";
import { content } from "@/lib/content";
import { founders } from "@/lib/content/founders";
import { ORGANIZATION_ID } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/pricing-page.module.css";
import blocks from "@/components/sections/home-blocks.module.css";
import body from "@/components/sections/service-body.module.css";

const PATH = "/nosotros";

export const metadata: Metadata = {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: { canonical: PATH },
    openGraph: {
        title: `${about.metaTitle} | Cynocta`,
        description: about.metaDescription,
        url: PATH,
    },
};

/**
 * Founders as `Person` entities linked to the organisation. This is the EEAT
 * signal the site was missing entirely: named people with stated roles.
 */
const peopleJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}${PATH}#about`,
    url: `${siteUrl}${PATH}`,
    inLanguage: "es",
    name: `${about.metaTitle} | Cynocta`,
    description: about.metaDescription,
    about: { "@id": ORGANIZATION_ID },
    mainEntity: founders.map((f) => ({
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        description: f.bio,
        worksFor: { "@id": ORGANIZATION_ID },
        ...(f.linkedin || f.github
            ? { sameAs: [f.linkedin, f.github].filter(Boolean) }
            : {}),
    })),
};

export default function NosotrosPage() {
    const { process } = content.es;

    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: PATH },
            ]}
        >
            <JsonLd data={peopleJsonLd} />

            <PageHero
                eyebrow={about.eyebrow}
                title={about.heading}
                intro={about.intro}
                primary={{ label: about.ctaLabel, href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
                facts={about.facts}
            />

            {/* Skipped until the founders write it — see the note in about.ts. */}
            {about.history && (
                <Section tone="surface" width="prose">
                    <SectionHeader eyebrow="Historia" title={about.history.title} />
                    {about.history.body.map((paragraph) => (
                        <p key={paragraph} className={body.lead} style={{ marginBottom: "1.25rem" }}>
                            {paragraph}
                        </p>
                    ))}
                </Section>
            )}

            <Section tone="surface" width="narrow">
                <SectionHeader
                    eyebrow={about.mission.eyebrow}
                    title={about.mission.title}
                    intro={about.mission.body}
                />
            </Section>

            <Section tone="black" width="narrow">
                <SectionHeader
                    eyebrow={about.vision.eyebrow}
                    title={about.vision.title}
                    intro={about.vision.body}
                />
            </Section>

            <Section tone="surface">
                <SectionHeader
                    eyebrow={about.valuesEyebrow}
                    title={about.valuesTitle}
                    intro={about.valuesIntro}
                />
                <Reveal>
                    <div className={blocks.benefits}>
                        {about.values.map((value) => (
                            <article key={value.num} className={blocks.benefit}>
                                <span className={blocks.benefitNum}>{value.num}</span>
                                <h3 className={blocks.benefitTitle}>{value.title}</h3>
                                <p className={blocks.benefitText}>{value.description}</p>
                            </article>
                        ))}
                    </div>
                </Reveal>
            </Section>

            <Section tone="black">
                <SectionHeader
                    eyebrow={about.cultureEyebrow}
                    title={about.cultureTitle}
                />
                <div className={blocks.cases}>
                    {about.culture.map((item, i) => (
                        <Reveal key={item.title} delay={i * 70}>
                            <article className={blocks.case}>
                                <h3 className={blocks.caseSector}>{item.title}</h3>
                                <p className={blocks.caseText}>{item.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Section>


            {/* Accent band renders on surface, so it alternates against the culture
                band above it. */}
            <FoundersSection />

            {/* The methodology used to live on the homepage; it belongs here now. */}
            <Section tone="black">
                <SectionHeader
                    eyebrow={about.processEyebrow}
                    title={process.title.replace("\n", " ")}
                    intro={about.processIntro}
                />
                <ol className={s.steps}>
                    {process.steps.map((step) => (
                        <li key={step.num} className={s.step}>
                            <span className={s.stepNum}>{step.num}</span>
                            <h3 className={s.stepTitle}>{step.title}</h3>
                            <p className={s.stepText}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section tone="surface">
                <div className={body.cta}>
                    <div className={body.ctaCopy}>
                        <p className={body.ctaTitle}>{about.ctaTitle}</p>
                        <p className={body.ctaText}>{about.ctaBody}</p>
                    </div>
                    <Link href="/contacto" className={body.ctaButton}>
                        {about.ctaLabel}
                    </Link>
                </div>
            </Section>
        </PageShell>
    );
}
