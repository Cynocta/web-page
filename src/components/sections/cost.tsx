"use client";

import { useI18n } from "@/components/i18n-provider";
import s from "./cost.module.css";

export default function CostSection() {
    const { copy } = useI18n();

    return (
        <section id="costo" className={s.section}>
            <div className={`cyn-section ${s.inner}`}>
                <p className="cyn-section-tag">{copy.cost.tag}</p>
                <h2 className={s.title}>{copy.cost.title}</h2>
                <p className={s.body}>{copy.cost.body}</p>
            </div>
        </section>
    );
}
