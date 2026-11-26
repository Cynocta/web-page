import Link from "next/link";
import FieldTrace from "@/components/ui/field-trace";
import s from "./page-hero.module.css";

export type HeroAction = { label: string; href: string };
export type HeroFact = { value: string; label: string };

/**
 * Interior-page opener.
 *
 * Deliberately not the homepage hero: no canvas, no full viewport — you
 * arrived here on purpose, so the page gets to the point. It is built from the
 * same parts, though, so arriving on an interior page reads as the same site:
 * a lit plate with the field traced across it, the rule, the headline in the
 * heading face at the heading's weight, the shared buttons, and the facts set
 * as a graduated scale rather than as a row of labels.
 *
 * `eyebrow` sits at the far end of the rule, where a plate carries its figure
 * caption. It used to be a mono kicker stacked above the title, directly under
 * a breadcrumb that had just said the same word.
 */
export default function PageHero({
    eyebrow,
    title,
    intro,
    primary,
    secondary,
    facts,
}: {
    eyebrow?: string;
    title: string;
    intro: string;
    primary?: HeroAction;
    secondary?: HeroAction;
    facts?: HeroFact[];
}) {
    return (
        <section className={s.hero}>
            <div className={s.ground} aria-hidden="true">
                <FieldTrace origin={[1.05, 0.38]} step={34} className={s.trace} />
            </div>

            <div className={s.inner}>
                <div className={s.rule}>
                    <span className={s.tick} aria-hidden="true" />
                    <span className={s.line} aria-hidden="true" />
                    {eyebrow && <span className={s.annotation}>{eyebrow}</span>}
                </div>

                <h1 className={s.title}>{title}</h1>
                <p className={s.intro}>{intro}</p>

                {(primary || secondary) && (
                    <div className={s.actions}>
                        {primary && (
                            <Link href={primary.href} className="cyn-btn cyn-btn--primary">
                                {primary.label}
                            </Link>
                        )}
                        {secondary && (
                            <Link href={secondary.href} className="cyn-btn cyn-btn--ghost">
                                {secondary.label}
                            </Link>
                        )}
                    </div>
                )}

                {facts && facts.length > 0 && (
                    <dl className={s.facts}>
                        {facts.map((fact) => (
                            <div key={fact.label} className={s.fact}>
                                <dd className={s.factValue}>{fact.value}</dd>
                                <dt className={s.factLabel}>{fact.label}</dt>
                            </div>
                        ))}
                    </dl>
                )}
            </div>
        </section>
    );
}
