import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import SectionLink from "@/components/ui/section-link";
import { localePath } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import s from "./home-blocks.module.css";

/**
 * The stack, as one compact list of rows.
 *
 * It used to be five stacked blocks: 757px on desktop and over a screen on a
 * phone for 66 words. The names themselves are the valuable part — they are
 * the entities that tie the brand to the category for search and for language
 * models — so every one of them stays; only the container got smaller.
 */
export default function TechnologiesSection({ locale = "es" }: { locale?: Locale }) {
    const copy = homeContent[locale].technologies;

    return (
        <Section id="tecnologias" tone="surface" rhythm="tight">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} layout="split" />
            <Reveal>
                <dl className={s.stack}>
                    {copy.groups.map((group) => (
                        <div key={group.label} className={s.stackRow}>
                            <dt className={s.stackLabel}>{group.label}</dt>
                            <dd className={s.stackTools}>
                                <ul className={s.techList}>
                                    {group.tools.map((tool) => (
                                        <li key={tool} className={s.tech}>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    ))}
                </dl>
            </Reveal>

            <SectionLink
                href={localePath("services", locale)}
                label={copy.linkLabel}
            />
        </Section>
    );
}
