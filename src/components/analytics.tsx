import Script from "next/script";
import AnalyticsEvents from "@/components/analytics-events";
import { googleAnalyticsId, metricoolHash } from "@/lib/site-data";

/**
 * Google tag (gtag.js) for GA4.
 *
 * `lazyOnload`: the tag waits for the page's load event and browser idle. With
 * `afterInteractive` Next preloads gtag.js (170 KB) at high priority next to
 * the page's own CSS and fonts, so on a throttled mobile connection it competed
 * for the bandwidth that decides first paint. The cost
 * is losing the pageview of someone who leaves in the first second or two;
 * conversions (`generate_lead`) happen after interaction and are unaffected.
 *
 * GA4's enhanced measurement picks up App Router client-side navigations on its
 * own (it listens to History API events), so there is no route-change effect
 * here to keep in sync.
 */
function GoogleAnalytics() {
    if (!googleAnalyticsId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                strategy="lazyOnload"
            />
            <Script id="gtag-init" strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
            </Script>
        </>
    );
}

/**
 * Metricool's tracker, which is what connects the site's visits to the social
 * accounts Metricool already reports on.
 *
 * Their snippet injects the script itself and calls `beTracker.t()` once it
 * loads; that is kept rather than pointing `<Script src>` at it directly,
 * because the hash has to be registered in the same callback. `lazyOnload` for
 * the same reason as gtag: a second analytics request has no business
 * competing with the page's own CSS and fonts.
 */
function Metricool() {
    if (!metricoolHash) {
        return null;
    }

    return (
        <Script id="metricool-tracker" strategy="lazyOnload">
            {`(function(){var s=document.createElement("script");s.async=true;s.src="https://tracker.metricool.com/resources/be.js";s.onload=function(){if(window.beTracker){window.beTracker.t({hash:"${metricoolHash}"});}};document.head.appendChild(s);})();`}
        </Script>
    );
}

/** Every measurement tag on the site, in one place. */
export default function Analytics() {
    return (
        <>
            <GoogleAnalytics />
            <Metricool />
            <AnalyticsEvents />
        </>
    );
}
