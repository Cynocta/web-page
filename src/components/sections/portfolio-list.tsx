"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./portfolio-list.module.css";

export type CaseCard = {
    slug: string;
    href: string;
    sector: string;
    sectorLabel: string;
    title: string;
    summary: string;
    /** Who the work was for — the client's name or the anonymous label. */
    attribution: string;
    durationLabel: string;
    /** The headline figure of the first result, as the card's proof. */
    metric: string;
    metricLabel: string;
};

export type SectorChip = { value: string; label: string };

/**
 * The case grid, filtered by sector.
 *
 * Same contract as the blog index: every card is in the HTML and filtering only
 * hides them, so the list is complete for a crawler and for a reader without
 * JavaScript.
 */
export default function PortfolioList({
    cases,
    sectors,
    allLabel,
}: {
    cases: CaseCard[];
    sectors: SectorChip[];
    allLabel: string;
}) {
    const [active, setActive] = useState<string | null>(null);

    const matches = (study: CaseCard) => active === null || study.sector === active;
    const visible = cases.filter(matches).length;

    return (
        <>
            {sectors.length > 1 && (
                <div className={s.filters} role="group" aria-label="Filtrar por sector">
                    <button
                        type="button"
                        className={`${s.chip} ${active === null ? s.chipOn : ""}`}
                        aria-pressed={active === null}
                        onClick={() => setActive(null)}
                    >
                        {allLabel}
                        <span className={s.count}>{cases.length}</span>
                    </button>

                    {sectors.map((sector) => (
                        <button
                            key={sector.value}
                            type="button"
                            className={`${s.chip} ${active === sector.value ? s.chipOn : ""}`}
                            aria-pressed={active === sector.value}
                            onClick={() => setActive(active === sector.value ? null : sector.value)}
                        >
                            {sector.label}
                            <span className={s.count}>
                                {cases.filter((c) => c.sector === sector.value).length}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            <p className="sr-only" role="status">
                {visible} {visible === 1 ? "caso visible" : "casos visibles"}
            </p>

            <div className={s.grid}>
                {cases.map((study) => (
                    <article
                        key={study.slug}
                        className={`${s.card} ${matches(study) ? "" : s.hidden}`}
                        aria-hidden={matches(study) ? undefined : true}
                    >
                        <Link
                            href={study.href}
                            className={s.cardLink}
                            tabIndex={matches(study) ? undefined : -1}
                        >
                            <span className={s.sector}>{study.sectorLabel}</span>

                            <p className={s.metric}>
                                <span className={s.metricValue}>{study.metric}</span>
                                <span className={s.metricLabel}>{study.metricLabel}</span>
                            </p>

                            <h3 className={s.title}>{study.title}</h3>
                            <p className={s.summary}>{study.summary}</p>

                            <p className={s.meta}>
                                <span>{study.attribution}</span>
                                <span aria-hidden="true">·</span>
                                <span>{study.durationLabel}</span>
                            </p>

                            <span className={s.arrow} aria-hidden="true">
                                VER CASO →
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    );
}
