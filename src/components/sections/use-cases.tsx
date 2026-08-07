import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { useCases } from "@/lib/content/home";
import s from "./home-blocks.module.css";

export default function UseCasesSection() {
    return (
        <Section id="casos-de-uso" tone="black">
            <SectionHeader
                eyebrow={useCases.eyebrow}
                title={useCases.title}
                intro={useCases.intro}
            />
            <div className={s.cases}>
                {useCases.items.map((item, i) => (
                    <Reveal key={item.sector} delay={i * 70}>
                        <article className={s.case}>
                            <h3 className={s.caseSector}>{item.sector}</h3>
                            <div className={s.caseRow}>
                                <span className={s.caseLabel}>El problema</span>
                                <p className={s.caseText}>{item.challenge}</p>
                            </div>
                            <div className={s.caseRow}>
                                <span className={s.caseLabel}>Lo que implementamos</span>
                                <p className={`${s.caseText} ${s.caseSolution}`}>{item.solution}</p>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
