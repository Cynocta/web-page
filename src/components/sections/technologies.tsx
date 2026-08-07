import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { technologies } from "@/lib/content/home";
import s from "./home-blocks.module.css";

export default function TechnologiesSection() {
    return (
        <Section id="tecnologias" tone="surface">
            <SectionHeader
                eyebrow={technologies.eyebrow}
                title={technologies.title}
                intro={technologies.intro}
            />
            <div className={s.techGroups}>
                {technologies.groups.map((group, i) => (
                    <Reveal key={group.label} delay={i * 60}>
                        <div className={s.techGroup}>
                            <h3 className={s.techLabel}>{group.label}</h3>
                            <ul className={s.techList}>
                                {group.tools.map((tool) => (
                                    <li key={tool} className={s.tech}>
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
