import Link from "next/link";
import s from "./section-link.module.css";

/**
 * "See more" for a homepage section.
 *
 * The homepage summarises; the detail lives on its own page. This is the hinge
 * between the two, and it is also what passes authority from the home to the
 * pages that need to rank.
 */
export default function SectionLink({
    href,
    label,
    hrefLang,
    align = "left",
}: {
    href: string;
    label: string;
    /** Set when the destination is in a different language from the page. */
    hrefLang?: string;
    /** Matches a centred SectionHeader above it. */
    align?: "left" | "center";
}) {
    return (
        <Link
            href={href}
            className={align === "center" ? `${s.link} ${s.center}` : s.link}
            hrefLang={hrefLang}
        >
            {label}
            <span className={s.arrow} aria-hidden="true">
                →
            </span>
        </Link>
    );
}
