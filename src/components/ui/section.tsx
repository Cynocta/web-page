import s from "./section.module.css";

export type SectionTone = "black" | "surface" | "accent" | "plain";
export type SectionRhythm = "tight" | "normal" | "roomy";
export type SectionWidth = "full" | "narrow" | "prose";

/**
 * Every band on the site goes through here.
 *
 * Tone alternation is the rhythm device the whole design depends on — two
 * adjacent sections sharing a tone read as one block — so it is a prop, not
 * something each section re-implements.
 */
export default function Section({
    id,
    tone = "black",
    rhythm = "normal",
    width = "full",
    className,
    children,
}: {
    id?: string;
    tone?: SectionTone;
    rhythm?: SectionRhythm;
    width?: SectionWidth;
    className?: string;
    children: React.ReactNode;
}) {
    const classes = [
        s.section,
        s[tone],
        rhythm !== "normal" ? s[rhythm] : "",
        width !== "full" ? s[width] : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section id={id} className={classes}>
            <div className={s.inner}>{children}</div>
        </section>
    );
}
