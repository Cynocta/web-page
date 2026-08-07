import { notFound } from "next/navigation";

/**
 * Catch-all that immediately 404s.
 *
 * With multiple root layouts and no top-level layout, an unmatched URL falls
 * through to Next's own bare `/_not-found` page. Matching it inside this group
 * instead means `(es)/not-found.tsx` renders with the site chrome, while still
 * returning a 404 status. Static routes take precedence, so `/en` and the rest
 * are unaffected.
 */
export default function CatchAll() {
    notFound();
}
