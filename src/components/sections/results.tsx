import { results } from "@/lib/site-data";

export default function ResultsSection() {
    return (
        <section className="cyn-results-section" id="resultados">
            <div className="cyn-results-inner">
                <p className="cyn-section-tag">Resultados reales</p>
                <h2 className="cyn-section-title">Lo que dicen los numeros.</h2>

                <div className="cyn-results-grid">
                    {results.map((result) => (
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
