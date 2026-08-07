import s from "./section-header.module.css";

/** Eyebrow + title + optional intro. The same triplet opens every band. */
export default function SectionHeader({
    eyebrow,
    title,
    intro,
    align = "left",
    as: Heading = "h2",
}: {
    eyebrow: string;
    title: string;
    intro?: string;
    align?: "left" | "center";
    /** `h1` on pages where this is the page title. */
    as?: "h1" | "h2";
}) {
    return (
        <header className={`${s.header} ${align === "center" ? s.center : ""}`}>
            <p className={s.eyebrow}>{eyebrow}</p>
            <Heading className={s.title}>{title}</Heading>
            {intro && <p className={s.intro}>{intro}</p>}
        </header>
    );
}
