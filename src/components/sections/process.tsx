"use client";

import { useRef } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ScrollDots, useScrollIndex } from "@/components/ui/scroll-dots";
import s from "./process.module.css";

export default function ProcessSection() {
    const { copy } = useI18n();
    const stepsRef = useRef<HTMLDivElement>(null);
    const activeIndex = useScrollIndex(stepsRef);
    const [titleLine1, titleLine2] = copy.process.title.split("\n");

    return (
        <section className={s.section} id="proceso">
            <div className={s.inner}>
                <p className="cyn-section-tag">{copy.process.tag}</p>
                <h2 className="cyn-section-title">
                    {titleLine1}
                    <br />
                    {titleLine2}
                </h2>

                <div ref={stepsRef} className={s.steps}>
                    {copy.process.steps.map((step) => (
                        <article key={step.num} className={s.step}>
                            <div className={s.stepNum}>{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
                <ScrollDots count={copy.process.steps.length} active={activeIndex} className={s.scrollDots} />
            </div>
        </section>
    );
}
