# Windsboro HOA — "Warm Prairie" site revamp

Drop-in code changes that modernize the existing Hugo site. This is **real Hugo theme code**, not just a mockup — copy the files over the matching paths in your repo and rebuild.

The live HTML design these files reproduce is `Windsboro Site.dc.html` in the project (all 11 pages, Warm Prairie direction 1a).

---

## What changed (file by file)

All paths are relative to your repo root. Copy each file to the same path.

| File | Change |
|------|--------|
| `themes/hoa/static/css/style.css` | **Full rewrite.** New "Warm Prairie" design system — palette, typography, all components, dark mode, responsive. |
| `themes/hoa/layouts/partials/head.html` | Swapped Google Fonts (Inter → Spectral + Hanken Grotesk + Public Sans). Everything else (Bootstrap, favicon, analytics, theme-init script) unchanged. |
| `themes/hoa/layouts/partials/header.html` | New top utility strip + redesigned navbar (round "W" mark, Pay Dues button, dark-mode toggle). Split-column homepage hero; inner-page header band (optional photo variant). |
| `themes/hoa/layouts/partials/footer.html` | New four-column footer (Explore / Residents / Community Resources) with brand block. |
| `themes/hoa/layouts/_default/index.html` | Redesigned homepage body: intro band (from `_index.md`), resident-essentials cards, photo tiles, dues CTA band, get-involved. |
| `themes/hoa/layouts/_default/single.html` | Prose container for inner pages (styling comes from `.content` in CSS). |
| `layouts/shortcodes/contacts.html` | Wraps output in `.contact-group` so members render as cards. Also fixes email `<br>` placement. |
| `layouts/shortcodes/links.html` | Wraps links in `.links-grid` (card grid) and fixes a broken `href` (stray space / missing `target` quote). |
| `layouts/shortcodes/image-gallery.html` | Removes the old inline float/width styles; the gallery now uses a responsive CSS grid. Serves 400×400 thumbnails. |
| `assets/images/windsboro_masthead.jpg` | **New summer entry photo** provided by the board, used as the homepage hero image. Overwrites the old masthead. |

`static/js/script.js`, `baseof.html`, `config.yaml`, and all `content/*.md` need **no required changes** — the dark-mode toggle and active-nav highlighting still work with the new markup.

---

## How to apply

1. Copy the files above into your repo at their matching paths (overwriting existing ones).
2. Run `hugo server` locally and review.
3. Commit and push (or open a PR).

That's the whole change set. No new dependencies; Bootstrap 5.3 is still used for the grid and collapsible navbar.

---

## Optional: per-page front matter

The inner-page header band reads three optional params. Add them to any `content/*.md` front matter to set the eyebrow label, a subtitle, and (optionally) a photo background band. All are optional — pages work without them.

Recommended values (TOML `+++` blocks):

```toml
# content/pool.md
eyebrow = "Amenities"
band_image = "images/gallery/pool_01.jpg"

# content/ponds.md
eyebrow = "Amenities"
band_image = "images/gallery/pond_01.jpg"

# content/gallery.md
eyebrow = "The neighborhood"
subtitle = "Photos of the Windsboro neighborhood — ponds, pool, and community."

# content/hoa_dues.md
eyebrow = "Residents"

# content/documents.md
eyebrow = "Residents"

# content/contacts.md
eyebrow = "Get in touch"

# content/calendar.md
eyebrow = "Community"
subtitle = "HOA meetings, community events, pool season, and more."

# content/new_resident_information.md
eyebrow = "Welcome"
band_image = "images/windsboro_masthead.jpg"

# content/trash.md
eyebrow = "Community services"

# content/links.md
eyebrow = "Resources"
subtitle = "Useful links for Windsboro residents."
```

`band_image` paths are resolved with `resources.Get`, so they point into your `assets/` directory (same as the masthead).

---

## Design tokens (CSS variables, light mode)

```
--cream        #f7f3ec   page background
--sage         #efe7d8   alt band / soft cards
--paper        #ffffff   cards
--pine         #1f4d3a   primary (nav band, buttons, headings)
--pine-dark    #17392b   footer / deep
--terracotta   #c4622d   accent (eyebrows, Pay Dues, links)
--terracotta-dk#a94f20   accent hover
--ink          #2a2622   headings / strong text
--body         #45403a   body text
--muted        #6a6459   secondary text
--line         #e5ded0   borders
--sand         #e6b98a   light accent on dark bands

Display font   Spectral (serif) — headings, hero, section titles
Body font      Hanken Grotesk — paragraphs
UI font        Public Sans — nav, eyebrows, labels, buttons

Radius         14px (cards), 8–10px (buttons)
```

A full dark-mode palette is defined under `[data-bs-theme="dark"]` and driven by the existing toggle.

---

## Notes

- **Dark mode is preserved** — the existing `#darkModeToggle` + `localStorage('hoa-theme')` wiring in `script.js` and `head.html` is untouched; the new CSS supplies a dark palette.
- **Calendar embed**: the Google Calendar color param in `content/calendar.md` can optionally be updated from `%237986CB` to `%23236645` to match the pine accent (cosmetic only).
- The `contacts.md` general-inbox line still renders via the `general_contact` shortcode. For the highlighted "General inquiries" card shown in the mockup, you can optionally wrap it in a `<div class="general-inbox">…</div>` in the content file — a `.general-inbox` style is already provided.
- Homepage hero image comes from `Site.Params.masthead` (default `images/windsboro_masthead.jpg`), so swapping the photo is just replacing that asset.
