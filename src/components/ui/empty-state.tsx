import Link from "next/link";
import s from "./empty-state.module.css";

type Action = { label: string; href: string };

/**
 * Used where a section exists in the navigation but has nothing to show yet.
 *
 * Says so plainly and offers somewhere useful to go. Inventing filler entries —
 * fake projects, placeholder posts — would be worse than an honest gap.
 */
export default function EmptyState({
    badge,
    title,
    body,
    primary,
    secondary,
}: {
    badge: string;
    title: string;
    body: string;
    primary?: Action;
    secondary?: Action;
}) {
    return (
        <div className={s.wrap}>
            <span className={s.badge}>
                <span className={s.dot} aria-hidden="true" />
                {badge}
            </span>
            <h2 className={s.title}>{title}</h2>
            <p className={s.body}>{body}</p>
            {(primary || secondary) && (
                <div className={s.actions}>
                    {primary && (
                        <Link href={primary.href} className={s.primary}>
                            {primary.label}
                        </Link>
                    )}
                    {secondary && (
                        <Link href={secondary.href} className={s.secondary}>
                            {secondary.label}
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
