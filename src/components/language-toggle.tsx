"use client";

import { useI18n } from "@/components/i18n-provider";

export default function LanguageToggle({ className }: { className?: string }) {
    const { locale, setLocale, copy } = useI18n();

    return (
        <div className={`cyn-toggle ${className ?? ""}`.trim()} aria-label={copy.languageToggleLabel}>
            <button
                type="button"
                className={`cyn-toggle-btn ${locale === "es" ? "is-active" : ""}`}
                onClick={() => setLocale("es")}
                aria-pressed={locale === "es"}
            >
                ES
            </button>
            <button
                type="button"
                className={`cyn-toggle-btn ${locale === "en" ? "is-active" : ""}`}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
            >
                EN
            </button>
        </div>
    );
}
