"use client";

import { useI18n } from "@/components/i18n-provider";

export default function ProcessSection() {
    const { copy } = useI18n();
    const [titleLine1, titleLine2] = copy.process.title.split("\n");

    return (
        <section className="cyn-process-section" id="proceso">
            <div className="cyn-process-inner">
                <p className="cyn-section-tag">{copy.process.tag}</p>
                <h2 className="cyn-section-title">
                    {titleLine1}
                    <br />
                    {titleLine2}
                </h2>

                <div className="cyn-process-steps">
                    {copy.process.steps.map((step) => (
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
