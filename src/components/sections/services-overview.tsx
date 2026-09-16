import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/icons";
import SectionLink from "@/components/ui/section-link";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import { serviceList, services, servicePath } from "@/lib/content/services";
import s from "./service-families.module.css";

const ChevronIcon = () => (
    <svg
        className={s.chevron}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);

/**
 * Homepage services block.
 *
 * This used to map the registry straight onto ten cards, which on a phone was
 * three and a half screens of the same card repeated — the single biggest
 * contributor to the page feeling crowded. The catalogue is grouped into four
 * families now, with each family's services behind a native `<details>`.
 *
 * `<details>` and not conditional rendering, deliberately: the ten links and
 * their summaries have to be in the served HTML whether the reader opens the
 * disclosure or not, or the page loses a fifth of its indexable text.
 */
export default function ServicesOverviewSection({ locale = "es" }: { locale?: Locale }) {
    const copy = homeContent[locale].services;
    // Service pages exist in Spanish only; say so to crawlers on the English home.
    const hrefLang = locale === "es" ? undefined : "es";

    return (
        <Section id="servicios" tone="surface">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />

            <div className={s.grid}>
                {copy.families.map((family, i) => (
                    <Reveal key={family.title} delay={i * 60}>
                        <article className={s.family}>
                            <span className={s.icon}>
                                <ServiceIcon kind={family.icon} />
                            </span>
                            <h3 className={s.title}>{family.title}</h3>
                            <p className={s.summary}>{family.summary}</p>

                            <details className={s.details}>
                                <summary className={s.summaryToggle}>
                                    {copy.toggleLabel.replace("{n}", String(family.slugs.length))}
                                    <ChevronIcon />
                                </summary>
                                <ul className={s.list}>
                                    {family.slugs.map((slug) => {
                                        const card = copy.cards?.[slug] ?? {
                                            title: services[slug].cardTitle,
                                            summary: services[slug].cardSummary,
                                        };

                                        return (
                                            <li key={slug}>
                                                <Link
                                                    href={servicePath(slug)}
                                                    className={s.item}
                                                    hrefLang={hrefLang}
                                                >
                                                    <span className={s.itemName}>{card.title}</span>
                                                    <span className={s.itemDesc}>{card.summary}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </details>
                        </article>
                    </Reveal>
                ))}
            </div>

            <SectionLink
                href="/servicios"
                label={copy.allLabel.replace("{n}", String(serviceList.length))}
                hrefLang={hrefLang}
            />
        </Section>
    );
}
