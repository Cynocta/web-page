import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import FoundersSection from "@/components/sections/founders";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { benefits, technologies } from "@/lib/content/home";
import s from "@/components/sections/home-blocks.module.css";

const PATH = "/nosotros";

const DESCRIPTION =
    "Cynocta es un estudio de software enfocado en automatización e inteligencia artificial para empresas en Latinoamérica. Conoce al equipo y cómo trabajamos.";

export const metadata: Metadata = {
    title: "Nosotros",
    description: DESCRIPTION,
    alternates: { canonical: PATH },
    openGraph: {
        title: "Nosotros | Cynocta",
        description: DESCRIPTION,
        url: PATH,
    },
};

export default function NosotrosPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: PATH },
            ]}
        >
            <PageHero
                eyebrow="Nosotros"
                title="Un equipo pequeño que construye sistemas que aguantan."
                intro="Cynocta nace de una observación simple: la mayoría de los negocios no pierde clientes por su producto, sino por el sistema que hay alrededor. Nos dedicamos a cerrar esa distancia con software, automatización e inteligencia artificial."
                primary={{ label: "Hablemos de tu caso", href: "/contacto" }}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <Section tone="surface" width="narrow">
                <SectionHeader
                    eyebrow="Cómo trabajamos"
                    title="Pocos proyectos, hechos bien."
                    intro="Preferimos entregar un sistema que funcione y se pueda medir antes que un catálogo de funcionalidades. Trabajamos por etapas: cada una sale a producción antes de empezar la siguiente, así ves resultados sin esperar meses."
                />
            </Section>

            <FoundersSection />

            <Section tone="surface">
                <SectionHeader
                    eyebrow={benefits.eyebrow}
                    title="Lo que nos importa"
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
            </Section>

            <Section tone="black">
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
        </PageShell>
    );
}
