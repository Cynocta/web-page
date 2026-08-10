import Link from "next/link";
import {
    caseAttribution,
    casePath,
    getCase,
    sectorsEsNav,
    type CaseStudy,
} from "@/lib/content/portfolio";
import { getService, servicePath } from "@/lib/content/services";
import s from "./case-body.module.css";

/** The whole body of a case study, below the breadcrumbs. */
export default function CaseBody({ study }: { study: CaseStudy }) {
    const services = study.services
        .map((slug) => getService(slug))
        .filter((service): service is NonNullable<ReturnType<typeof getService>> =>
            Boolean(service),
        );

    const related = study.related
        .map((slug) => getCase(slug))
        .filter((item): item is CaseStudy => Boolean(item));

    return (
        <>
            <header className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.sector}>{sectorsEsNav[study.sector]}</span>
                    <h1 className={s.title}>{study.cardTitle}</h1>
                    <p className={s.summary}>{study.cardSummary}</p>

                    <dl className={s.facts}>
                        <div className={s.fact}>
                            <dt className={s.factLabel}>Cliente</dt>
                            <dd className={s.factValue}>{caseAttribution(study)}</dd>
                        </div>
                        <div className={s.fact}>
                            <dt className={s.factLabel}>Sector</dt>
                            <dd className={s.factValue}>{sectorsEsNav[study.sector]}</dd>
                        </div>
                        <div className={s.fact}>
                            <dt className={s.factLabel}>Duración</dt>
                            <dd className={s.factValue}>{study.durationLabel}</dd>
                        </div>
                    </dl>
                </div>
            </header>

            <section className={s.surface}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">{study.challenge.title}</p>
                    <p className={s.lead}>{study.challenge.body}</p>
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Qué implementamos</p>
                    <h2 className="cyn-section-title">{study.solution.title}</h2>
                    <p className={s.lead}>{study.solution.intro}</p>
                    <div className={s.grid}>
                        {study.solution.items.map((item) => (
                            <article key={item.title} className={s.card}>
                                <h3 className={s.cardTitle}>{item.title}</h3>
                                <p className={s.cardText}>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="resultados" className={s.surface}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Resultados</p>
                    <h2 className="cyn-section-title">Qué cambió, medido</h2>

                    <div className={s.metrics}>
                        {study.results.map((result) => (
                            <div key={result.label} className={s.metricCard}>
                                <p className={s.metricValue}>{result.value}</p>
                                <p className={s.metricLabel}>{result.label}</p>
                                <dl className={s.deltas}>
                                    <div className={s.delta}>
                                        <dt>Antes</dt>
                                        <dd>{result.before}</dd>
                                    </div>
                                    <div className={s.delta}>
                                        <dt>Después</dt>
                                        <dd>{result.after}</dd>
                                    </div>
                                </dl>
                                {/* How it was measured, so the number can be argued with. */}
                                <p className={s.method}>{result.method}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {study.testimonial && (
                <section className={s.black}>
                    <div className={`cyn-section ${s.narrow}`}>
                        <figure className={s.quoteWrap}>
                            <blockquote className={s.quote}>{study.testimonial.quote}</blockquote>
                            <figcaption className={s.quoteSource}>
                                <span className={s.quoteAuthor}>{study.testimonial.author}</span>
                                <span className={s.quoteRole}>{study.testimonial.role}</span>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            )}

            <section className={s.surface}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">Stack</p>
                    <h2 className="cyn-section-title">Con qué se construyó</h2>
                    <ul className={s.tools}>
                        {study.stack.map((tool) => (
                            <li key={tool} className={s.tool}>
                                {tool}
                            </li>
                        ))}
                    </ul>

                    {services.length > 0 && (
                        <div className={s.servicesBlock}>
                            <p className={s.servicesLabel}>Servicios involucrados</p>
                            <ul className={s.servicesList}>
                                {services.map((service) => (
                                    <li key={service.slug}>
                                        <Link
                                            href={servicePath(service.slug)}
                                            className={s.serviceLink}
                                        >
                                            {service.cardTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.inner}`}>
                    {related.length > 0 && (
                        <>
                            <p className="cyn-section-tag">Relacionado</p>
                            <h2 className="cyn-section-title">Otros casos parecidos</h2>
                            <div className={s.related}>
                                {related.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={casePath(item.slug)}
                                        className={s.relatedCard}
                                    >
                                        <h3 className={s.relatedTitle}>{item.cardTitle}</h3>
                                        <p className={s.relatedText}>{item.cardSummary}</p>
                                        <span className={s.relatedArrow} aria-hidden="true">
                                            VER CASO →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    <div className={s.cta}>
                        <div className={s.ctaCopy}>
                            <p className={s.ctaTitle}>¿Tu situación se parece a esta?</p>
                            <p className={s.ctaText}>
                                Cuéntanos tu caso en cuatro preguntas. Te decimos con honestidad si
                                lo que hicimos aquí aplica a tu negocio o si conviene otro camino.
                            </p>
                        </div>
                        <Link href="/contacto" className={s.ctaButton}>
                            Hablemos de tu caso
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
