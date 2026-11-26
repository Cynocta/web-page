import { Crosshair } from "lucide-react";
import FieldTrace from "@/components/ui/field-trace";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { content, type Locale } from "@/lib/content";
import s from "./measurement.module.css";

/**
 * "Qué medimos desde el primer día".
 *
 * This band used to be "Resultados reales": three client cases with headline
 * figures (+43 %, 2x, <2 min) that no client stood behind. It states what
 * every project measures and how the baseline is taken — a commitment that can
 * be checked — until a real case is published in the portfolio.
 *
 * It is drawn as an instrument, because that is what it is claiming to be. The
 * hero reads its three commitments off a horizontal graduated scale; this is
 * the same scale stood on end, with a station per measure and the baseline
 * note hanging off the foot of it. Four icon tiles in four equal columns is
 * what it was, and a tile does not say "measured" — a tick on a rule does.
 */
export default function MeasurementSection({ locale = "es" }: { locale?: Locale }) {
    const copy = content[locale].measurement;

    return (
        <Section
            id="que-medimos"
            tone="page"
            backdrop={<FieldTrace origin={[1.08, 0.46]} step={34} className={s.trace} />}
        >
            <SectionHeader title={copy.title} intro={copy.intro} layout="split" />

            <ol className={s.scale}>
                {copy.items.map((item) => (
                    <li key={item.title} className={s.station}>
                        <h3 className={s.title}>{item.title}</h3>
                        <p className={s.description}>{item.description}</p>
                    </li>
                ))}
            </ol>

            {/* How the baseline is taken — the commitment that makes the list
                checkable. It hangs off the foot of the scale rather than
                sitting in a tinted box of its own. */}
            <p className={s.note}>
                <Crosshair className={s.noteIcon} aria-hidden="true" />
                {copy.note}
            </p>
        </Section>
    );
}
