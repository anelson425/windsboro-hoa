# Windsboro HOA website

Source for [www.windsboro.org](https://www.windsboro.org), a [Hugo](https://gohugo.io) static site. Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/hugo.yml`.

## Local development

Install Hugo **extended** (the version CI uses is pinned in `.github/workflows/hugo.yml`), then:

```sh
hugo server
```

and open http://localhost:1313/.

## Where things live

| What | Where |
|------|-------|
| Dues amount and year (homepage + dues page) | `config.yaml` → `params.dues_amount`, `params.dues_year` |
| PayHOA link used across the site | `config.yaml` → `params.payhoa_url` |
| Board / committee members, general inbox | `data/contacts.yaml` |
| Links page | `data/links.yaml` |
| Gallery photos and captions | `assets/images/gallery/` + `data/images.yaml` |
| PDFs (bylaws, covenants) | `assets/documents/` |
| Page text | `content/*.md` |
| Theme (layout, header, footer, CSS) | `themes/hoa/` |

## Automation (GitHub Actions)

| Workflow | When | What |
|----------|------|------|
| `hugo.yml` | Push to `main`, Jan 1, manual | Build and deploy to GitHub Pages |
| `hugo.yml` | Pull requests to `main` | Test build only (fails on any Hugo warning), no deploy |
| `link-check.yml` | Mondays, manual | Checks every link on the built site; opens/updates a "Broken links found" issue |
| `reminders.yml` | Nov 1, Mar 1, manual | Opens issues to update dues and contacts |

## Yearly checklist

- Update `dues_amount` / `dues_year` in `config.yaml`.
- Update `data/contacts.yaml` after board elections.

## Page front matter

Inner pages can set these optional params to customize their header band:

```toml
eyebrow = "Amenities"                        # small label above the title
subtitle = "One line under the title."
band_image = "images/gallery/pool_01.jpg"    # photo background, path under assets/
```

## Shortcodes

- `{{< general_contact >}}` – general inbox mailto link
- `{{< payhoa_link "Link text" >}}` – link to PayHOA
- `{{< dues_amount >}}`, `{{< dues_year >}}` – values from `config.yaml`
- `{{< file_link file="documents/x.pdf" name="Label" >}}` – link to a file in `assets/`
- `{{< image image="images/x.png" title="Alt text" >}}` – resized image with full-size link
- `{{< contacts file_name="contacts" contact_type="board_members" >}}`, `{{< links >}}`, `{{< image-gallery >}}` – render the data files above

## Design

"Warm Prairie" theme: Spectral (headings), Hanken Grotesk (body), Public Sans (UI). Colors are CSS variables at the top of `themes/hoa/static/css/style.css`, with a dark-mode palette under `[data-bs-theme="dark"]`.
