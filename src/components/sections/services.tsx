"use client";

import { useRef } from "react";
import { ServiceIcon } from "@/components/icons";
import { useI18n } from "@/components/i18n-provider";
import { ScrollDots, useScrollIndex } from "@/components/ui/scroll-dots";
import s from "./services.module.css";

export default function ServicesSection() {
    const { copy } = useI18n();
    const gridRef = useRef<HTMLDivElement>(null);
    const activeIndex = useScrollIndex(gridRef);
    const [titleLine1, titleLine2] = copy.services.title.split("\n");

    return (
        <section className="cyn-section" id="servicios">
            <p className="cyn-section-tag">{copy.services.tag}</p>
            <h2 className="cyn-section-title">
                {titleLine1}
                <br />
                {titleLine2}
            </h2>

            <div ref={gridRef} className={s.grid}>
                {copy.services.items.map((service) => (
                    <article key={service.title} className={s.card}>
                        <div className={s.icon}>
                            <ServiceIcon kind={service.kind} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div>
                            {service.tags.map((tag) => (
                                <span key={tag} className={s.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            <ScrollDots count={copy.services.items.length} active={activeIndex} className={s.scrollDots} />
        </section>
    );
}
