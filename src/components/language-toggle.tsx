"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/i18n-provider";
import { ROUTE_MAP, routeKeyFromPath } from "@/lib/i18n/routes";

/**
 * Links, not buttons: each language lives at its own URL, so switching is a
 * navigation. That is what makes the English version indexable at all.
 *
 * The target pair is derived from the current path so nav and footer don't have
 * to thread it through.
 */
export default function LanguageToggle({ className }: { className?: string }) {
    const { locale, copy } = useI18n();
    const paths = ROUTE_MAP[routeKeyFromPath(usePathname())];

    return (
        <div className={`cyn-toggle ${className ?? ""}`.trim()} aria-label={copy.languageToggleLabel}>
            <Link
                href={paths.es}
                hrefLang="es"
                className={`cyn-toggle-btn ${locale === "es" ? "is-active" : ""}`}
                aria-current={locale === "es" ? "true" : undefined}
            >
                ES
            </Link>
            <Link
                href={paths.en}
                hrefLang="en"
                className={`cyn-toggle-btn ${locale === "en" ? "is-active" : ""}`}
                aria-current={locale === "en" ? "true" : undefined}
            >
                EN
            </Link>
        </div>
    );
}
