import Link from "next/link";
import { getService, servicePath, type ServiceDetail } from "@/lib/content/services";
import s from "./service-body.module.css";

/** The whole body of a service page, below the hero. */
export default function ServiceBody({ service }: { service: ServiceDetail }) {
    const related = service.related
        .map((slug) => getService(slug))
        .filter((r): r is ServiceDetail => Boolean(r));

    return (
        <>
            <section className={s.surface}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">{service.problem.title}</p>
                    <p className={s.lead}>{service.problem.body}</p>
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Alcance</p>
                    <h2 className="cyn-section-title">{service.includes.title}</h2>
                    <div className={s.grid}>
                        {service.includes.items.map((item) => (
                            <article key={item.title} className={s.card}>
                                <h3 className={s.cardTitle}>{item.title}</h3>
                                <p className={s.cardText}>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={s.surface}>
                <div className={`cyn-section ${s.inner}`}>
                    <p className="cyn-section-tag">Proceso</p>
                    <h2 className="cyn-section-title">{service.process.title}</h2>
                    <ol className={s.steps}>
                        {service.process.steps.map((step) => (
                            <li key={step.num} className={s.step}>
                                <span className={s.stepNum}>{step.num}</span>
                                <h3 className={s.stepTitle}>{step.title}</h3>
                                <p className={s.stepText}>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">Stack</p>
                    <h2 className="cyn-section-title">{service.stack.title}</h2>
                    <p className={s.lead}>{service.stack.intro}</p>
                    <ul className={s.tools}>
                        {service.stack.tools.map((tool) => (
                            <li key={tool} className={s.tool}>
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="preguntas" className={s.surface}>
                <div className={`cyn-section ${s.narrow}`}>
                    <p className="cyn-section-tag">Preguntas frecuentes</p>
                    <h2 className="cyn-section-title">Antes de contratar</h2>
                    <div className={s.faqList}>
                        {service.faq.map((item) => (
                            <article key={item.id} id={item.id} className={s.faqItem}>
                                <h3 className={s.faqQuestion}>{item.question}</h3>
                                <p className={s.faqAnswer}>{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={s.black}>
                <div className={`cyn-section ${s.inner}`}>
                    {related.length > 0 && (
                        <>
                            <p className="cyn-section-tag">Relacionado</p>
                            <h2 className="cyn-section-title">Suele combinarse con</h2>
                            <div className={s.related}>
                                {related.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={servicePath(item.slug)}
                                        className={s.relatedCard}
                                    >
                                        <h3 className={s.relatedTitle}>{item.cardTitle}</h3>
                                        <p className={s.relatedText}>{item.cardSummary}</p>
                                        <span className={s.relatedArrow} aria-hidden="true">
                                            VER SERVICIO →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    <div className={s.cta}>
                        <div className={s.ctaCopy}>
                            <p className={s.ctaTitle}>¿Encaja con lo que necesitas?</p>
                            <p className={s.ctaText}>
                                Cuéntanos tu caso en cuatro preguntas. Te decimos con honestidad si
                                este servicio lo resuelve, si conviene otro, o si no somos para ti.
                            </p>
                        </div>
                        <Link href="/#formulario" className={s.ctaButton}>
                            Quiero resolverlo
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
