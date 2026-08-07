import Link from "next/link";
import type { FaqPage } from "@/lib/content";
import s from "./faq.module.css";

/**
 * Server component on purpose: the answers must exist in the served HTML for
 * crawlers and answer engines, so nothing here depends on hydration.
 */
export default function FaqSection({
    faq,
    ctaHref,
}: {
    faq: FaqPage;
    ctaHref: string;
}) {
    return (
        <section id="preguntas" className={s.section}>
            <div className={`cyn-section ${s.inner}`}>
                <p className="cyn-section-tag">{faq.tag}</p>
                <h1 className="cyn-section-title">{faq.title}</h1>
                <p className={s.intro}>{faq.intro}</p>

                <div className={s.list}>
                    {faq.items.map((item, i) => (
                        <article key={item.id} id={item.id} className={s.item}>
                            <h2 className={s.question}>
                                <span className={s.marker} aria-hidden="true">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {item.question}
                            </h2>
                            <p className={s.answer}>{item.answer}</p>
                        </article>
                    ))}
                </div>

                <div className={s.cta}>
                    <p className={s.ctaText}>{faq.ctaText}</p>
                    <Link href={ctaHref} className={s.ctaLink}>
                        {faq.ctaLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
