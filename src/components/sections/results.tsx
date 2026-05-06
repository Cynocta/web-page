"use client";

import { useI18n } from "@/components/i18n-provider";

export default function ResultsSection() {
    const { copy } = useI18n();

    return (
        <section className="cyn-results-section" id="resultados">
            <div className="cyn-results-inner">
                <p className="cyn-section-tag">{copy.results.tag}</p>
                <h2 className="cyn-section-title">{copy.results.title}</h2>

                <div className="cyn-results-grid">
                    {copy.results.items.map((result) => (
                        <article key={result.context} className="cyn-result-card">
                            <p className="cyn-result-context">{result.context}</p>
                            <div className="cyn-result-metric">
                                <p className="cyn-result-num">{result.metric}</p>
                                <p className="cyn-result-desc">{result.metricLabel}</p>
                            </div>
                            <p className="cyn-result-summary">{result.summary}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
