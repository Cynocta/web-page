"use client";

import { useEffect, useSyncExternalStore } from "react";
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
/* The theme lives on <html>, written by the boot script before paint and by
   this control afterwards, so that attribute is the store and the buttons read
   it. Copying it into component state with a setState inside an effect was a
   second source of truth, and the lint error the project carried for weeks. */
const subscribeTheme = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
};
const readTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
/* The server always renders light; the boot script corrects it before paint. */
const readServerTheme = (): Theme => "light";

export default function ThemeToggle({ className }: { className?: string }) {
    const { locale } = useI18n();
    const theme = useSyncExternalStore(subscribeTheme, readTheme, readServerTheme);

    useEffect(() => {
        /* Transitions are off until the document has painted once, so the first
           frame lands in its theme instead of animating into it. */
        const id = requestAnimationFrame(() => {
            document.documentElement.classList.add("theme-ready");
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const commit = (next: Theme) => {
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem(THEME_KEY, next);
        } catch {
            /* Private mode or blocked storage: the choice still applies, it just
               will not outlive the page. */
        }
    };

    /**
     * The new theme opens out of the button that asked for it, as an ellipse,
     * with the same ease-out the homepage hero arrives on. The View Transitions
     * API snapshots the old page and reveals the new one through a clip-path;
     * where it is missing, or for a visitor who asked for less motion, the
     * theme changes as it always has.
     */
    const apply = (next: Theme, from: HTMLElement) => {
        const root = document.documentElement;
        if (root.dataset.theme === next) return;
        const doc = document as Document & {
            startViewTransition?: (update: () => void) => { finished: Promise<void>; ready: Promise<void> };
        };
        if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            commit(next);
            return;
        }
        const r = from.getBoundingClientRect();
        root.style.setProperty("--theme-x", `${r.left + r.width / 2}px`);
        root.style.setProperty("--theme-y", `${r.top + r.height / 2}px`);
        // The colour transitions would tween inside the reveal and blur the
        // edge into a crossfade; the new theme arrives already resolved.
        root.classList.add("theme-switching");
        const transition = doc.startViewTransition(() => commit(next));
        // A transition the browser skips (a hidden tab, a second click) still
        // runs the update; only the reveal is lost, so its rejection is noise.
        transition.ready.catch(() => {});
        transition.finished.finally(() => root.classList.remove("theme-switching"));
    };

    /* Three words, kept here rather than threaded through the content files:
       they exist only for this control and have no copy decisions in them. */
    const en = locale === "en";
    const label = en ? "Theme" : "Tema";
    const lightLabel = en ? "Light" : "Claro";
    const darkLabel = en ? "Dark" : "Oscuro";

    return (
        <div
            className={`cyn-toggle cyn-theme-toggle ${className ?? ""}`.trim()}
            role="group"
            aria-label={label}
        >
            <button
                type="button"
                className={`cyn-toggle-btn ${theme === "light" ? "is-active" : ""}`}
                aria-pressed={theme === "light"}
                aria-label={lightLabel}
                title={lightLabel}
                onClick={(e) => apply("light", e.currentTarget)}
            >
                <Sun />
            </button>
            <button
                type="button"
                className={`cyn-toggle-btn ${theme === "dark" ? "is-active" : ""}`}
                aria-pressed={theme === "dark"}
                aria-label={darkLabel}
                title={darkLabel}
                onClick={(e) => apply("dark", e.currentTarget)}
            >
                <Moon />
            </button>
        </div>
    );
}
