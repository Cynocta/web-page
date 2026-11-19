"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";

export type Theme = "light" | "dark";

export const THEME_KEY = "cyn-theme";

/**
 * Runs before the first paint, inlined in <head>.
 *
 * Without it the document renders in the default theme and then swaps once
 * React hydrates, which is the white flash every themed site has to answer for.
 * Light is the default for anyone with no stored preference — including people
 * whose system asks for dark — because that is the brand's own ground now.
 */
export const themeBootScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
    THEME_KEY,
)});document.documentElement.dataset.theme=(t==="dark"||t==="light")?t:"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;

function Sun() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.25" />
            <path d="M12 2.5v2.5M12 19v2.5M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M2.5 12H5M19 12h2.5M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77" />
        </svg>
    );
}

function Moon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8Z" />
        </svg>
    );
}

/**
 * Two segments rather than one toggling button: the language switch sits beside
 * it in the same bar and reads the same way, so the pair stays one control
 * language instead of two.
 */
export default function ThemeToggle({ className }: { className?: string }) {
    const { locale } = useI18n();
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const current = (document.documentElement.dataset.theme as Theme) ?? "light";
        setTheme(current);
        /* Transitions are off until the document has painted once, so the first
           frame lands in its theme instead of animating into it. */
        const id = requestAnimationFrame(() => {
            document.documentElement.classList.add("theme-ready");
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const apply = (next: Theme) => {
        document.documentElement.dataset.theme = next;
        setTheme(next);
        try {
            localStorage.setItem(THEME_KEY, next);
        } catch {
            /* Private mode or blocked storage: the choice still applies, it just
               will not outlive the page. */
        }
    };

    /* Three words, kept here rather than threaded through the content files:
       they exist only for this control and have no copy decisions in them. */
    const en = locale === "en";
    const label = en ? "Theme" : "Tema";
    const lightLabel = en ? "Light" : "Claro";
    const darkLabel = en ? "Dark" : "Oscuro";

    return (
        <div className={`cyn-toggle cyn-theme-toggle ${className ?? ""}`.trim()} aria-label={label}>
            <button
                type="button"
                className={`cyn-toggle-btn ${theme === "light" ? "is-active" : ""}`}
                aria-pressed={theme === "light"}
                aria-label={lightLabel}
                title={lightLabel}
                onClick={() => apply("light")}
            >
                <Sun />
            </button>
            <button
                type="button"
                className={`cyn-toggle-btn ${theme === "dark" ? "is-active" : ""}`}
                aria-pressed={theme === "dark"}
                aria-label={darkLabel}
                title={darkLabel}
                onClick={() => apply("dark")}
            >
                <Moon />
            </button>
        </div>
    );
}
