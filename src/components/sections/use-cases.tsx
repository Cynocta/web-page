import Section, { type SectionTone } from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import SectionLink from "@/components/ui/section-link";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import s from "./home-blocks.module.css";

/**
 * Use cases by industry, as a table.
 *
 * The data was always tabular — the same two fields for five sectors — but it
 * was laid out as five cards, each repeating "El problema" and "Lo que
 * implementamos": ten labels to say two things, and nearly two screens on a
 * phone. A real table states each label once and lets a reader scan down the
 * column for their own sector. Below the tablet breakpoint the rows stack, and
 * each cell names its column again, since the header row is out of view.
 */
export default function UseCasesSection({
    locale = "es",
    tone = "black",
}: {
    locale?: Locale;
    tone?: SectionTone;
}) {
    const copy = homeContent[locale].useCases;

    return (
        <Section id="casos-de-uso" tone={tone}>
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} align="center" />

            <Reveal>
                <div className={s.caseTableWrap}>
                    <table className={s.caseTable}>
                        <thead>
                            <tr>
                                <th scope="col">{copy.sectorLabel}</th>
                                <th scope="col">{copy.problemLabel}</th>
                                <th scope="col">{copy.solutionLabel}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {copy.items.map((item) => (
                                <tr key={item.sector}>
                                    <th scope="row" className={s.ctSector}>
                                        {item.sector}
                                    </th>
                                    <td data-label={copy.problemLabel} className={s.ctText}>
                                        {item.challenge}
                                    </td>
                                    <td
                                        data-label={copy.solutionLabel}
                                        className={`${s.ctText} ${s.ctSolution}`}
                                    >
                                        {item.solution}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>

            <SectionLink
                href="/soluciones"
                label={copy.linkLabel}
                hrefLang={locale === "es" ? undefined : "es"}
                align="center"
            />
        </Section>
    );
}
