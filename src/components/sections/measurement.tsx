import { CalendarCheck, Crosshair, ListChecks, Moon, Timer } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { content, type Locale } from "@/lib/content";
import s from "./measurement.module.css";

/** One icon per measure, in the order the copy lists them. */
const ICONS = [Timer, Moon, CalendarCheck, ListChecks];

/**
 * "Qué medimos desde el primer día".
 *
 * This band used to be "Resultados reales": three client cases with headline
 * figures (+43 %, 2x, <2 min) that no client stood behind. It now states what
 * every project measures and how the baseline is taken — a commitment that can
 * be checked — until a real case is published in the portfolio.
 *
 * Deliberately not a card grid: four columns divided by hairlines, so the band
 * reads differently from the cards around it.
 */
export default function MeasurementSection({ locale = "es" }: { locale?: Locale }) {
    const copy = content[locale].measurement;

    return (
        <Section id="que-medimos" tone="surface">
            <SectionHeader eyebrow={copy.tag} title={copy.title} intro={copy.intro} />

            <ol className={s.measures}>
                {copy.items.map((item, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <li key={item.title} className={s.measure}>
                            <div className={s.top}>
                                <span className={s.icon}>
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className={s.index}>{String(index + 1).padStart(2, "0")}</span>
                            </div>
                            <h3 className={s.title}>{item.title}</h3>
                            <p className={s.description}>{item.description}</p>
                        </li>
                    );
                })}
            </ol>

            <p className={s.note}>
                <Crosshair className={s.noteIcon} aria-hidden="true" />
                {copy.note}
            </p>
        </Section>
    );
}
