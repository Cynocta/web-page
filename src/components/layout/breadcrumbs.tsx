import Link from "next/link";
import s from "./breadcrumbs.module.css";

export type Crumb = {
    label: string;
    /** Absolute path. The last crumb renders as plain text, so its href is only used by the schema. */
    href: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
    if (crumbs.length < 2) return null;

    return (
        <nav className={s.wrap} aria-label="Ruta de navegación">
            <ol className={s.list}>
                {crumbs.map((crumb, i) => {
                    const isLast = i === crumbs.length - 1;

                    return (
                        <li key={crumb.href} className={s.item}>
                            {isLast ? (
                                <span className={s.current} aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link href={crumb.href} className={s.link}>
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
