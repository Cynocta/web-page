"use client";

import { useI18n } from "@/components/i18n-provider";
import s from "./results.module.css";

export default function ResultsSection() {
    const { copy } = useI18n();

    return (
        <section className={s.section} id="resultados">
            <div className={s.inner}>
                <p className="cyn-section-tag">{copy.results.tag}</p>
                <h2 className="cyn-section-title">{copy.results.title}</h2>

                <div className={s.grid}>
                    {copy.results.items.map((result) => (
                        <article key={result.context} className={s.card}>
                            <p className={s.context}>{result.context}</p>
                            <div className={s.metric}>
                                <p className={s.num}>{result.metric}</p>
                                <p className={s.desc}>{result.metricLabel}</p>
                            </div>
                            <p className={s.summary}>{result.summary}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
