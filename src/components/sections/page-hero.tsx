import Link from "next/link";
import s from "./page-hero.module.css";

export type HeroAction = { label: string; href: string };
export type HeroFact = { value: string; label: string };

export default function PageHero({
    eyebrow,
    title,
    intro,
    primary,
    secondary,
    facts,
}: {
    eyebrow: string;
    title: string;
    intro: string;
    primary?: HeroAction;
    secondary?: HeroAction;
    facts?: HeroFact[];
}) {
    return (
        <section className={s.hero}>
            <div className={s.inner}>
                <p className="cyn-section-tag">{eyebrow}</p>
                <h1 className={s.title}>{title}</h1>
                <p className={s.intro}>{intro}</p>

                {(primary || secondary) && (
                    <div className={s.actions}>
                        {primary && (
                            <Link href={primary.href} className={s.primary}>
                                {primary.label}
                            </Link>
                        )}
                        {secondary && (
                            <Link href={secondary.href} className={s.secondary}>
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
