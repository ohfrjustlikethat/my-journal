# angry sheep

A personal web journal for short stories, built as a hand-made multi-page
static website. No frameworks and no build step: HTML, one stylesheet, and a
little vanilla JavaScript. It runs anywhere you can serve (or just open) a
folder of files.

The site currently has **no entries** — it's ready for your writing.

---

## Structure

```
.
├── index.html            # homepage: title, search, tag filter, the feed
├── 404.html              # not-found page (self-contained)
├── favicon.svg
├── .nojekyll             # tells GitHub Pages to serve files as-is
├── css/style.css         # the whole design system, one file
├── js/
│   ├── entries.js        # THE CATALOG — the one file you edit to add writing
│   ├── main.js           # homepage: render + search + tag filtering
│   └── entry.js          # entry pages: filed-under tags + newer/older nav
├── entries/
│   └── _template.html    # copy this to start a new entry
└── assets/images/        # put images you embed in entries here
```

## Reading it locally

There's no build step, so you can just double-click `index.html`. If your
browser blocks local files, serve the folder instead:

```bash
python -m http.server 8080   # then open http://localhost:8080
```

## Adding an entry

1. Copy `entries/_template.html` to `entries/your-slug.html` and fill it in
   (title, date, tags, and your text inside `<div class="prose">`).
2. Register it at the top of `js/entries.js` by adding an object to
   `JOURNAL_ENTRIES` (newest first):

   ```js
   {
     slug: "entries/your-slug.html",
     title: "Your Title",
     date: "2026-07-05",          // YYYY-MM-DD
     kind: "story",               // "story" | "journal" | "fragment"
     weight: null,                // "feature" | "wide" | "tall" | null (card size)
     tags: ["night"],
     dek: "",                     // optional one-line subtitle
     excerpt: "",                 // shown on the homepage card
     text: ""                     // plain text, used for full-text search
   }
   ```

Once registered, the entry appears on the homepage, joins the search, becomes
filterable by its tags, and slots into the newer/older navigation. The search
box and tag list stay hidden until there is at least one entry.

### Blocks you can use inside an entry

- `<p class="lede">` — first paragraph; gets the drop cap.
- `<aside class="note">` — a margin note (floats into the gutter on wide
  screens, becomes an inset aside on mobile).
- `<p class="pullquote">` (add `full` to bleed wider) — a pulled quote.
- `<figure><img src="../assets/images/…" alt="…"><figcaption>…</figcaption></figure>`
  — an embedded image with a caption.
- `<blockquote>`, `<h2>`, `<h3>`, lists, `<code>` — all styled to match.
- `<div class="asterism"></div>` — a small scene break.

## Design

- **Palette:** Bone `#EDE7DA`, Ink `#211D26`, Oxblood `#7A2E2E`, Verdigris
  `#4C7A6F` — defined as CSS variables at the top of `css/style.css`.
- **Type:** Fraunces (titles), Inter (body), IBM Plex Mono (metadata).
- Mobile-first and responsive, with a skip link, visible focus rings, and full
  `prefers-reduced-motion` support.

## Publishing changes

Committing and pushing to `main` republishes the live site (GitHub Pages
rebuilds automatically):

```bash
git add -A
git commit -m "…"
git push
```
