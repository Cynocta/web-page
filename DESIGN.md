# Design

The visual world of cynocta.com, as the code implements it. The hero and the
footer settled it; the homepage bands were brought onto it on 20 November 2026
and every interior page on 23 November. Where this file and a stylesheet disagree, the stylesheet is the fact and
this file is out of date.

Brand constants — the mark, the gradient, the voice, the square button — live
in the design system published at Claude (see `Sistema de diseño Cynocta`) and
in `PRODUCT.md`. This file is only about how a page is built.

## The three devices

Everything on the site is made of three things. They came from the hero and the
footer, which are the two bands that were designed first.

**The plate.** A surface with its own light and its own edge, lifted off the
page. The footer is the original: a large radius where it meets the page, a lit
seam centred on that edge, a sheen caught along the top, a soft cast. The hero
is the same object with a mint floor and a field on it. `Section` generalises
it as `tone="plate"`, and the alternative is `tone="page"`: no fill, no border,
the body's ambient showing through. Those two alternate down every page.

There is no 1px rule between bands any more. Separation is light and edge.

**The rule.** The hero reads its three commitments off a graduated scale: a
hairline, minor graduations, a major tick per figure capped with a neon dot.
That scale is the site's instrument. It opens every band (`SectionHeader`), it
runs down the measurement band as a spine, it caps each solution in the sector
table, it marks the open family in the services explorer, and it heads every
"see more" link. A band announces itself with a drawn edge, never with a word.

**The marker.** The hero's highlight: solid `--brand-neon` with `--mark-ink`
on top, `box-decoration-break: clone` so a wrapped phrase stays one block.
Available as `.cyn-mark`. It is spent exactly twice on the homepage — the
opening headline and the closing one — because those are the two places the
visitor is asked to act. Spending it anywhere else is what would make it
decoration.

## Tokens

Defined in `src/app/globals.css`, restated for dark under `[data-theme="dark"]`.

| Group | Names |
|---|---|
| Ground | `--bg-page` `--bg-surface` `--bg-raised` `--panel*` |
| Ink | `--text-primary` `--text-secondary` `--text-tertiary` (tertiary is tuned to clear 4.5:1 on a plate, not only on the page, because the 10px labels on the rules sit on plates) |
| Accent | `--accent-text` (carries ink, ≥4.5:1) · `--accent` (rules and glyphs, ≥3:1) · `--accent-fill` (solid only) |
| Lines | `--hairline-soft` `--hairline` `--hairline-strong` `--hairline-bold` `--accent-line*` |
| Washes | `--wash-1…4` `--wash-cyan` |
| Plate | `--plate` `--plate-edge-r` `--plate-sheen` `--plate-cast` |
| Instrument | `--tick` `--mark-bg` `--mark-ink` `--trace` `--trace-strong` |
| Depth | `--shadow-sm/md/lg` — always offset plus blur, never a flat coloured halo |
| Motion | `--ease-out` (the hero's arrival) `--ease-soft` |
| Scale | `--fs-2xs…--fs-2xl` · radii `--r-xs/sm/md/lg/pill` |

Two greens on purpose: the brand neon is 1.4:1 on a light ground, so it is only
ever a solid fill. The green that carries text darkens until it clears 4.5:1.

## Light theme: green is a signal, not a ground

The light theme was first built by translating dark's glass into tinted white:
mint panels holding mint wells, mint chips, mint washes behind cards. Stacked,
that read as fog — four tints of one green and nothing to land on. The rule
since 23 November 2026: in light, a component that holds things (a panel, a
card, a chip, a device) is white or a neutral near-white with a neutral edge
and an offset shadow, and green is spent only where it means something — the
tick, the marker, the primary button, the recommended plan's edge, the one
lit outcome. Plates and the hero keep their light; the objects laid on them
do not. Dark keeps its glass. Overrides live at the end of each stylesheet
under `:root:not([data-theme="dark"])`.

Nothing is built in one theme's fixed colours while its text reads the
theme's tokens: the live demo did that, and in light its labels were dark ink
on a near-black device.

## Type

Space Grotesk for the brand and all headings · Inter for body · DM Mono for
labels. One voice for headings everywhere: weight 500, line-height ~1.05,
tracking −0.03em. It was 300 in the middle of the page, which read as a
different brand from the hero.

Mono is for naming a reading — a column head, a measure's unit, a plate's
annotation. It is not a costume for "technical", so links, buttons and section
labels are not set in it.

## Motion

One authored moment per page, not one entrance per band. The hero's arrival is
the moment: ground, words, copy, buttons and scale over 1.5 s, on `--ease-out`.
Everything below it uses `Reveal`, which fails open — content is never left at
`opacity: 0` if an observer never fires. `prefers-reduced-motion` turns all of
it off, and nothing on the site loops.

The two living drawings are the hero's magnetic field and the footer's
dragonflies, both canvas, both behind the type. The bands between them carry
`FieldTrace` instead: the same dipole, solved once at module scope and shipped
as one static SVG path. It steps back to a whisper under 900px, where the band
is as narrow as the column of text.

## Components

| Component | What it owns |
|---|---|
| `ui/section` | Band surface (`page` / `plate`, with `black` / `surface` as the interior pages' aliases), rhythm, container width, and the full-bleed `backdrop` slot |
| `ui/section-header` | The rule, the title, the intro; `aside` carries the band's one control on the rule; `eyebrow` is an annotation at the rule's far end, interior pages only |
| `ui/field-trace` | The static field |
| `ui/section-link` | The one doorway out of a homepage band |
| `ui/reveal` | The only entrance |
| `ui/empty-state` | An honest gap: the rule with a hollow tick, the state named on it |
| `sections/page-hero` | Every interior page's opener: a lit plate with the field traced on it, the rule, the headline, and facts on the graduated scale |
| `.cyn-section-tag` | The rule for interior headers built by hand: tick, label, graduated line to the column's end |
| `.cyn-btn` | Every button: square at `--r-sm`, 52px (`--sm`: 46px), `--primary` is neon with ink on it, `--ghost` is a tinted pane |
| `.cyn-filters` / `.cyn-filter` | The blog and portfolio filters: square, the pressed one in neon with ink, counts in mono |

## Lists

There is one list on the site, in a few arrangements: a ruled entry with a
tick. The services index, the service deliverables, related reading, the
sector table, the pains, the FAQ, the blog and portfolio indexes and the
values on Nosotros are all built from it. The tick is solid where the row is a
statement and hollow where the row is a link, lighting on hover. Cards of
icon, heading and text are not an option for a new list; numbers stay only
where the order is real (process steps, the form's steps).

## Rules that are not negotiable

- No kicker above a heading. The heading carries the band; the rule opens it.
- No cards of icon + heading + text as a page structure, and never a card
  inside a card.
- No gradient text, anywhere. Emphasis is the marker, weight, or size.
- No numbering (01 / 02 / 03) unless the sequence is information the reader
  needs. Four service families have no order; five steps of a flow do.
- Buttons are square. The pill radius is for chips and badges.
- Every metric on the page needs a source and a date. No invented figures.
- Body text ≥4.5:1 in both themes, touch targets ≥44px on coarse pointers,
  every band tested at 375px.

## Known gaps

- `ProcessSection` (`sections/process.tsx`) is not rendered anywhere and was
  left as it was.
- The case-study page (`case-body`) only had its type and button brought into
  line: there are no published cases to design against yet.
- The header keeps two weight-300 rules (mega-menu); it is chrome the hero
  pass approved and was not in scope.
- `theme-toggle.tsx:50` still trips `react-hooks/set-state-in-effect`.
