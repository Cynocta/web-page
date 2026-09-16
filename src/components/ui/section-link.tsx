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
}: {
    href: string;
    label: string;
    /** Set when the destination is in a different language from the page. */
    hrefLang?: string;
}) {
    return (
        <Link href={href} className={s.link} hrefLang={hrefLang}>
            {label}
            <span className={s.arrow} aria-hidden="true">
                →
            </span>
        </Link>
    );
}
