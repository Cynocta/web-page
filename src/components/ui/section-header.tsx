import s from "./section-header.module.css";

/**
 * Eyebrow + title + optional intro.
 *
 * Every band on the home opened with this same stacked triplet, which is a
 * large part of why the page read like a template. Two other arrangements are
 * available and the home alternates them:
 * - `layout="split"` — title on the left, intro on the right (desktop only;
 *   stacks on smaller screens).
 * - `align="center"` — centred, for bands whose content is centred too.
 */
export default function SectionHeader({
    eyebrow,
    title,
    intro,
    align = "left",
    layout = "stacked",
    as: Heading = "h2",
}: {
    eyebrow: string;
    title: string;
    intro?: string;
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
            <div className={s.lead}>
                <p className={s.eyebrow}>{eyebrow}</p>
                <Heading className={s.title}>{title}</Heading>
            </div>
            {intro && <p className={s.intro}>{intro}</p>}
        </header>
    );
}
