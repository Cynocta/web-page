"use client";

import { useRef } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ScrollDots, useScrollIndex } from "@/components/ui/scroll-dots";
import s from "./results.module.css";

export default function ResultsSection() {
    const { copy } = useI18n();
    const gridRef = useRef<HTMLDivElement>(null);
    const activeIndex = useScrollIndex(gridRef);

    return (
        <section className={s.section} id="resultados">
            <div className={s.inner}>
                <p className="cyn-section-tag">{copy.results.tag}</p>
                <h2 className="cyn-section-title">{copy.results.title}</h2>

                <div ref={gridRef} className={s.grid}>
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
                <ScrollDots count={copy.results.items.length} active={activeIndex} className={s.scrollDots} />
            </div>
        </section>
    );
}
