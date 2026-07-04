# Marginalia — a commonplace book

A personal web journal for short stories and journal entries, built as a
hand-made multi-page static website. No frameworks, no build step, no
dependencies: just HTML, one stylesheet, and a little vanilla JavaScript.
It runs anywhere you can serve (or even just open) a folder of files.

> **Rename it:** everywhere you see the word *Marginalia* (and the tagline) is a
> placeholder for your own journal's name. The main spots are the `<title>` and
> `.wordmark` in `index.html`, the `JOURNAL_SITE` block in `js/entries.js`, and
> the `.mark` link + `<title>` on each entry page. Search-and-replace is safe.

---

## What's here

```
my-journal/
├── index.html        # the homepage: masthead, search, tag filter, the feed
├── colophon.html     # about / how-it's-built page
├── 404.html          # themed not-found page (self-contained)
├── favicon.svg
├── .nojekyll         # tells GitHub Pages to serve files as-is
├── css/
│   └── style.css     # the entire design system, one file
├── js/
│   ├── entries.js    # THE CATALOG — the one file you edit to add writing
│   ├── main.js       # homepage: render + search + tag filtering + URL sync
│   └── entry.js      # entry pages: filed-under tags + newer/older nav
├── entries/
│   └── *.html        # one real HTML page (and URL) per entry
└── assets/images/    # illustrations (SVG, so there are no binary deps)
```

## Reading it locally

Because there is no build step, you can just **double-click `index.html`** and
everything works, including search and tag filtering.

If your browser is fussy about local files, serve the folder instead:

```bash
# any one of these, from inside the project folder:
python -m http.server 8080      # then open http://localhost:8080
npx serve .
```

## Adding an entry

Two small steps:

1. **Make the page.** Copy any file in `entries/` (say `salt.html`) to a new
   file with a URL-friendly name, e.g. `entries/my-new-story.html`. Change the
   `<title>`, the header block (kind, date, tags, title, dek), and write your
   piece inside `<div class="prose"> … </div>`.

2. **Register it** at the top of `js/entries.js` by adding an object to
   `JOURNAL_ENTRIES` (keep the list newest-first):

   ```js
   {
     slug: "entries/my-new-story.html",
     title: "My New Story",
     date: "2026-07-05",           // YYYY-MM-DD
     kind: "story",                // "story" | "journal" | "fragment"
     weight: "feature",            // "feature" | "wide" | "tall" | null
     tags: ["fiction", "night"],
     dek: "A one-line subtitle shown under the title.",
     excerpt: "The opening sentence or two, shown on the homepage card.",
     marginal: "an optional little note pinned to the card (or omit)",
     text: "Plain-text of the piece, used for full-text search."
   }
   ```

That's it — it appears on the homepage, joins the search, becomes filterable by
its tags, and slots into the newer/older navigation on neighbouring entries.

### Writing tools you can use inside an entry

- `<p class="lede">` — first paragraph; gets the drop cap.
- `<aside class="note">` — a margin note (floats into the gutter on wide screens,
  becomes an inset aside on mobile).
- `<p class="pullquote">` or `<p class="pullquote full">` — a large pulled quote.
- `<figure><img src="../assets/images/…" alt="…"><figcaption>…</figcaption></figure>`
  — an embedded image with a caption. Add `class="full"` to let it bleed wider.
- `<blockquote>`, `<h2>`, `<h3>`, `<ul>`/`<ol>`, `<code>` all styled to match.
- `<div class="asterism"></div>` — a ⁂ section break.

## Design notes

- **Palette:** Bone `#EDE7DA`, Ink `#211D26`, Oxblood `#7A2E2E`, Verdigris
  `#4C7A6F`, plus tints and one ochre accent — all defined as CSS variables at
  the top of `css/style.css`.
- **Type:** Fraunces (titles), Inter (body), IBM Plex Mono (metadata), loaded
  from Google Fonts.
- **Accessible & responsive:** mobile-first, skip link, visible focus rings, and
  full support for `prefers-reduced-motion` (all reveals/hovers are opt-in).

## Deploying to GitHub Pages

See the notes below (and ask if you want it automated). In short:

```bash
git init
git add -A
git commit -m "Initial commit: Marginalia journal"
git branch -M main
# create an empty repo on GitHub named e.g. my-journal, then:
git remote add origin https://github.com/<you>/my-journal.git
git push -u origin main
```

Then, on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from
a branch → Branch: `main` / `/ (root)` → Save.** Your site goes live at
`https://<you>.github.io/my-journal/` within a minute or two. The `.nojekyll`
file is already included so Pages serves everything verbatim.
