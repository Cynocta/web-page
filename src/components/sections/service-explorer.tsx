"use client";

import Link from "next/link";
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { HomeContent } from "@/lib/content/home";
import type { ServiceIcon } from "@/lib/content/services/types";
import ServiceVisual from "./service-visuals";
import s from "./service-explorer.module.css";

export type ExplorerFamily = {
    title: string;
    summary: string;
    icon: ServiceIcon;
    items: Array<{ href: string; title: string; summary: string }>;
};

/**
 * The service families as an explorer rather than a card grid.
 *
 * Desktop: a numbered index on the left, and a panel on the right with the
 * active family's illustration and its services. Phones: the same markup reads
 * as an accordion, one family open at a time, illustration inside.
 *
 * Every panel is rendered into the HTML — only the inactive ones are hidden
 * with CSS — so all ten service links and their summaries reach crawlers
 * whichever family is open. The props are plain strings computed on the
 * server; the service registry itself never ships to the browser.
 */
export default function ServiceExplorer({
    families,
    listLabel,
    visuals,
    hrefLang,
}: {
    families: ExplorerFamily[];
    listLabel: string;
    visuals: HomeContent["services"]["visuals"];
    hrefLang?: string;
}) {
    const [active, setActive] = useState(0);
    const triggers = useRef<Array<HTMLButtonElement | null>>([]);

    // Arrow keys move between families, the way a tab list behaves.
    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const last = families.length - 1;
        const target =
            event.key === "ArrowDown" || event.key === "ArrowRight"
                ? index === last ? 0 : index + 1
                : event.key === "ArrowUp" || event.key === "ArrowLeft"
                  ? index === 0 ? last : index - 1
                  : event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? last
                      : null;
        if (target === null) return;
        event.preventDefault();
        setActive(target);
        triggers.current[target]?.focus();
    };

    return (
        <div className={s.explorer}>
            {families.map((family, index) => {
                const open = index === active;
                const triggerId = `svc-trigger-${index}`;
                const panelId = `svc-panel-${index}`;

                return (
                    <div
                        key={family.title}
                        className={`${s.family} ${open ? s.open : ""}`}
                        style={{ "--row": index + 1 } as CSSProperties}
                    >
                        <h3 className={s.heading}>
                            <button
                                ref={(el) => {
                                    triggers.current[index] = el;
                                }}
                                id={triggerId}
                                type="button"
                                className={s.trigger}
                                aria-expanded={open}
                                aria-controls={panelId}
                                onClick={() => setActive(index)}
                                onKeyDown={(event) => onKeyDown(event, index)}
                            >
                                <span className={s.index}>{String(index + 1).padStart(2, "0")}</span>
                                <span className={s.triggerText}>
                                    <span className={s.title}>{family.title}</span>
                                    <span className={s.summary}>{family.summary}</span>
                                </span>
                                <svg className={s.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </h3>

                        <div id={panelId} role="region" aria-labelledby={triggerId} className={s.panel}>
                            <div className={s.visual} aria-hidden="true">
                                <ServiceVisual kind={family.icon} labels={visuals} />
                            </div>
                            <div className={s.panelBody}>
                                <p className={s.listLabel}>{listLabel}</p>
                                <ul className={s.items}>
                                    {family.items.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={s.item} hrefLang={hrefLang}>
                                                <span className={s.itemText}>
                                                    <span className={s.itemName}>{item.title}</span>
                                                    <span className={s.itemDesc}>{item.summary}</span>
                                                </span>
                                                <span className={s.itemArrow} aria-hidden="true">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
