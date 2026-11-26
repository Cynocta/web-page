import s from "./section-header.module.css";

/**
 * The rule, the title, and an optional intro.
 *
 * Every band on the site used to open with a mono kicker above its heading —
 * "SERVICIOS", "MEDICIÓN", "EQUIPO" — and the homepage carried eight of them.
 * The hero had already dropped its own, and nothing was lost: the heading says
 * what the band is. What opens a band now is the rule, which is the hero's
 * graduated scale used as a general instrument, and it is the same drawn edge
 * on every page.
 *
 * `eyebrow` survives for the interior pages, where some of those labels carry
 * real content rather than a category name. It is set as an annotation at the
 * far end of the rule — a figure caption on a plate, not a kicker stacked on
 * the heading.
 *
 * Three arrangements, and the homepage alternates them:
 * - `layout="split"` — title on the left, intro on the right (desktop only;
 *   stacks on smaller screens).
 * - `align="center"` — centred, for bands whose content is centred too.
 */
export default function SectionHeader({
    eyebrow,
    title,
    intro,
    aside,
    align = "left",
    layout = "stacked",
    as: Heading = "h2",
}: {
    /** Optional annotation on the rule. Omitted on the homepage. */
    eyebrow?: string;
    title: string;
    intro?: string;
    /**
     * A control belonging to the band, carried at the far end of the rule —
     * the currency switch on pricing. One band, one control, and it rides the
     * instrument rather than floating beside the heading.
     */
    aside?: React.ReactNode;
    align?: "left" | "center";
    layout?: "stacked" | "split";
    /** `h1` on pages where this is the page title. */
    as?: "h1" | "h2";
}) {
    const classes = [
        s.header,
        align === "center" ? s.center : "",
        layout === "split" && align !== "center" ? s.split : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <header className={classes}>
            <div className={s.rule}>
                <span className={s.tick} aria-hidden="true" />
                <span className={s.line} aria-hidden="true" />
                {eyebrow && <span className={s.annotation}>{eyebrow}</span>}
                {aside && <div className={s.aside}>{aside}</div>}
            </div>
            <div className={s.lead}>
                <Heading className={s.title}>{title}</Heading>
            </div>
            {intro && <p className={s.intro}>{intro}</p>}
        </header>
    );
}
