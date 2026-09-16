import Script from "next/script";
import AnalyticsEvents from "@/components/analytics-events";
import { googleAnalyticsId } from "@/lib/site-data";

/**
 * Google tag (gtag.js) for GA4.
 *
 * `afterInteractive` is deliberate. `beforeInteractive` would put a third-party
 * request ahead of the page's own JavaScript, which is the opposite of what a
 * site being audited for perceived weight needs; `lazyOnload` waits for browser
 * idle and would miss the pageview of anyone who bounces first — exactly the
 * visitors worth measuring.
 *
 * GA4's enhanced measurement picks up App Router client-side navigations on its
 * own (it listens to History API events), so there is no route-change effect
 * here to keep in sync.
 */
export default function Analytics() {
    if (!googleAnalyticsId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
            </Script>
            <AnalyticsEvents />
        </>
    );
}
