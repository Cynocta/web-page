# ascii-animals (vendored)

ASCII creatures drawn on a canvas, from
[DesignerStephen1/ascii-animals](https://github.com/DesignerStephen1/ascii-animals)
at commit `93f2b669b950f035f8cd787dba685d6dc643b0d6` (20 Nov 2026), itself built on the
engine and renderer from [stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks).

MIT, © drewdi and Stephen Zhang. `LICENSE` is their notice, kept here as the licence
requires. We use it for the dragonflies in the site footer
(`src/components/layout/footer-dragonflies.tsx`).

Copied in rather than installed: there is no package on npm, and the footer needs one
animal out of seven, so a copy that drops the other six is smaller than the whole thing.
It has no dependencies of its own.

## What is here

`engine.ts`, `flock.ts`, `renderer.ts`, `ink.ts`, `math.ts`, `animals/dragonflies.ts` and
a trimmed `animals/index.ts`. Left upstream: the other six animals, the tweak panel, the
demo pages and the React wrapper (ours is `footer-dragonflies.tsx`, which also tracks the
site's theme).

## Local changes

Each one is marked `LOCAL CHANGE` at the line it touches, so a future update can diff
against upstream and find them.

- `animals/index.ts` — rewritten to register the dragonflies alone.
- `renderer.ts` — `setBackground()`. The canvas is opaque and paints its own surface, so
  it has to be the footer's colour, not upstream's paper or ink.
- `engine.ts` — reads that colour from the canvas's own computed `background-color`,
  at startup and on every theme change, the way it already reads `font-family`.
- `engine.ts` — wakes on `visibilitychange`. While a tab is hidden the canvas counts as
  off-screen and the loop stops, but on the way back the IntersectionObserver has nothing
  new to report, so the loop never restarted and the animals stayed frozen. Observing the
  canvas again asks for a fresh entry. Worth sending upstream.
- `engine.ts` — defaults to the dragonflies, since the butterflies it used to default to
  are not in this copy.

Nothing else is edited. Behaviour we rely on and did **not** have to add: the engine
already pauses off-screen, honours `prefers-reduced-motion` with a single still frame,
tracks resizes, and startles the flock on a click.
