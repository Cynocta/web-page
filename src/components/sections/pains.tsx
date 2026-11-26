"use client";

import { useI18n } from "@/components/i18n-provider";
import s from "./pains.module.css";

/**
 * "¿Reconoces alguna de estas?" — the five ways a growing business leaks
 * customers.
 *
 * It was a carousel: five cards on a snap rail, one and a half of them visible
 * at 1440px, the rest dimmed to 55% behind arrows and dots. The band asks the
 * reader to recognise their own problem, which means the five have to be
 * readable at once — a reader should not have to click four times to find out
 * whether this page is about them. They are laid out as statements now, each
 * on its own rule, and the ninety lines of rail, snap and index tracking that
 * served the old version are gone.
 *
 * The numbers the content carries are identifiers, not an order, so the rows
 * are capped with the same tick the rest of the site uses instead.
 */
export default function PainsSection() {
    const { copy } = useI18n();
    const items = copy.pains.items;

    return (
        <section id="problema" className={s.section}>
            <div className={`cyn-section ${s.inner}`}>
                <p className="cyn-section-tag">{copy.pains.tag}</p>
                <h2 className={`cyn-section-title ${s.title}`}>{copy.pains.title}</h2>
                <p className={s.intro}>{copy.pains.intro}</p>

                <ol className={s.list}>
                    {items.map((pain) => (
                        <li key={pain.num} className={s.item}>
                            <h3 className={s.itemTitle}>{pain.title}</h3>
                            <p className={s.itemText}>{pain.description}</p>
                        </li>
                    ))}
                </ol>

                <p className={s.closing}>{copy.pains.closing}</p>
            </div>
        </section>
    );
}
