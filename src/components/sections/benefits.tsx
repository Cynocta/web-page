import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import SectionLink from "@/components/ui/section-link";
import { benefits } from "@/lib/content/home";
import s from "./home-blocks.module.css";

export default function BenefitsSection() {
    return (
        <Section id="beneficios" tone="black">
            <SectionHeader
                eyebrow={benefits.eyebrow}
                title={benefits.title}
                intro={benefits.intro}
            />
            <Reveal>
                <div className={s.benefits}>
                    {benefits.items.map((item) => (
                        <article key={item.num} className={s.benefit}>
                            <span className={s.benefitNum}>{item.num}</span>
                            <h3 className={s.benefitTitle}>{item.title}</h3>
                            <p className={s.benefitText}>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Reveal>

            <SectionLink href="/nosotros" label="Cómo trabajamos" />
        </Section>
    );
}
