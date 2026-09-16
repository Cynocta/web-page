"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { content, Currency, currencyOptions, defaultCurrency, Locale } from "@/lib/content";

export type I18nContextValue = {
    locale: Locale;
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    copy: typeof content.es;
    currencyOptions: Currency[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

const CURRENCY_STORAGE_KEY = "cynocta_currency";

/**
 * The chosen currency, as an external store over localStorage.
 *
 * It used to be read in a mount effect that then set state — an extra render on
 * every page load, and a crash in browsers that throw on storage access (Safari
 * private windows, blocked site data). As a store it renders the default on the
 * server and the stored value on the client without a second pass, survives
 * storage being unavailable, and stays in sync across open tabs.
 */
const currencyListeners = new Set<() => void>();

function readCurrency(): Currency {
    try {
        const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;
        return stored && currencyOptions.includes(stored) ? stored : defaultCurrency;
    } catch {
        return defaultCurrency;
    }
}

function writeCurrency(next: Currency) {
    try {
        window.localStorage.setItem(CURRENCY_STORAGE_KEY, next);
    } catch {
        // Storage unavailable: the choice still applies for this page view.
    }
    currencyListeners.forEach((listener) => listener());
}

function subscribeCurrency(listener: () => void) {
    currencyListeners.add(listener);
    window.addEventListener("storage", listener);
    return () => {
        currencyListeners.delete(listener);
        window.removeEventListener("storage", listener);
    };
}

/**
 * The locale is decided by the route and passed in from the server layout, so
 * the served HTML always matches the URL. It is deliberately not state: changing
 * language is a navigation, not a toggle, otherwise there is no URL for a
 * crawler to index. Currency stays client-side — it is a display preference.
 */
export function I18nProvider({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) {
    const currency = useSyncExternalStore(subscribeCurrency, readCurrency, () => defaultCurrency);

    const value = useMemo<I18nContextValue>(
        () => ({
            locale,
            currency,
            setCurrency: writeCurrency,
            copy: content[locale],
            currencyOptions,
        }),
        [locale, currency]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error("useI18n must be used within I18nProvider");
    }

    return context;
}
