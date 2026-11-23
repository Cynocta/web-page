import s from "./section.module.css";

export type SectionTone = "page" | "plate" | "black" | "surface" | "accent" | "plain";
export type SectionRhythm = "tight" | "normal" | "roomy";
export type SectionWidth = "full" | "narrow" | "prose";

/**
 * Every band on the site goes through here.
 *
 * Tone alternation is the rhythm device the whole design depends on — two
 * adjacent sections sharing a tone read as one block — so it is a prop, not
 * something each section re-implements.
 *
 * The two tones that matter are `page` (the open page) and `plate` (a lit slab
 * laid on it, the footer's device generalised); see the stylesheet. `black` and
 * `surface` are what the interior pages alternate between and resolve to the
 * same two, so those pages follow without being rewritten.
 */
export default function Section({
    id,
    tone = "page",
    rhythm = "normal",
    width = "full",
    backdrop,
    className,
    children,
}: {
    id?: string;
    tone?: SectionTone;
    rhythm?: SectionRhythm;
    width?: SectionWidth;
    /**
     * Drawn full-bleed behind the content column and clipped to the band — the
     * field traces, a wash, anything that belongs to the surface rather than to
     * the content.
     */
    backdrop?: React.ReactNode;
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
            {backdrop && (
                <div className={s.backdrop} aria-hidden="true">
                    {backdrop}
                </div>
            )}
            <div className={s.inner}>{children}</div>
        </section>
    );
}
