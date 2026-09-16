/**
 * Thin wrapper over gtag for conversion events.
 *
 * Safe to call before GA has loaded or when it never loads (blocked by an ad
 * blocker, preview deploy without the tag): the call is simply dropped. Nothing
 * that identifies a person is ever sent — only which channel and where on the
 * page, never form text.
 */
type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
    interface Window {
        gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
    }
}

export function trackEvent(name: string, params: GtagParams = {}) {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", name, params);
}
