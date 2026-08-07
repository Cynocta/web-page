import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import PlansSection from "@/components/sections/plans";
import { JsonLd } from "@/components/structured-data";
import { pricingPage } from "@/lib/content/pricing";
import { plansJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import s from "@/components/sections/service-body.module.css";

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
                primary={{ label: "Quiero una propuesta", href: "/#formulario" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
                facts={pricingPage.facts}
            />

            <PlansSection />

            <section className={s.surface}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Cómo se calcula</p>
                    <h2 className="cyn-section-title">{pricingPage.howTitle}</h2>
                    <p className={s.lead}>{pricingPage.howIntro}</p>
                    <div className={s.grid}>
                        {pricingPage.factors.map((factor) => (
                            <article key={factor.title} className={s.card}>
                                <h3 className={s.cardTitle}>{factor.title}</h3>
                                <p className={s.cardText}>{factor.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Transparencia</p>
                    <h2 className="cyn-section-title">{pricingPage.extrasTitle}</h2>
                    <p className={s.lead}>{pricingPage.extrasIntro}</p>
                    <div className={s.grid}>
                        {pricingPage.extras.map((extra) => (
                            <article key={extra.title} className={s.card}>
                                <h3 className={s.cardTitle}>{extra.title}</h3>
                                <p className={s.cardText}>{extra.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="preguntas" className={s.surface}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">Preguntas frecuentes</p>
                    <h2 className="cyn-section-title">Sobre el precio</h2>
                    <div className={s.faqList}>
                        {pricingPage.faq.map((item) => (
                            <article key={item.id} id={item.id} className={s.faqItem}>
                                <h3 className={s.faqQuestion}>{item.question}</h3>
                                <p className={s.faqAnswer}>{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
