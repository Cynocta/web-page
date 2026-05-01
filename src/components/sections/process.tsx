import { processSteps } from "@/lib/site-data";

export default function ProcessSection() {
    return (
        <section className="cyn-process-section" id="proceso">
            <div className="cyn-process-inner">
                <p className="cyn-section-tag">Metodologia</p>
                <h2 className="cyn-section-title">
                    Cuatro pasos.
                    <br />
                    Resultados desde la primera semana.
                </h2>

                <div className="cyn-process-steps">
                    {processSteps.map((step) => (
                        <article key={step.num} className="cyn-step">
                            <div className="cyn-step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
