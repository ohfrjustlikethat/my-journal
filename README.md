# angry sheep

A personal web journal for short stories, built as a hand-made multi-page
static website. No frameworks and no build step: HTML, one stylesheet, and a
little vanilla JavaScript. It runs anywhere you can serve (or just open) a
folder of files.

Add writing by registering it in one file; the index builds itself from there.

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
     type: "story",               // free label: story, review, opinion, fragment, …
     tags: ["night"],
     dek: "",                     // optional one-line subtitle
     excerpt: "",                 // optional preview shown on the index
     text: ""                     // plain text, used for full-text search
   }
   ```

   The `type` word is shown next to the entry on the index and on its own page.
   Set the same word in the entry file's `<span id="entrytype">…</span>`.

Once registered, the entry appears on the index, joins the search, becomes
filterable by its tags, and slots into the newer/older navigation. The search
box and tag list stay hidden until there is at least one entry.

### Blocks you can use inside an entry

- `<aside class="note">` — a quiet margin note.
- `<p class="pullquote">` — a pulled quote.
- `<blockquote>`, `<h2>`, `<h3>`, lists, `<code>` — all styled to match.

## Design

- **Palette:** Bone `#EDE7DA`, Ink `#211D26`, Oxblood `#7A2E2E`, Verdigris
  `#4C7A6F` — defined as CSS variables at the top of `css/style.css`.
- **Type:** Fraunces (titles), Inter (reading), IBM Plex Mono (the apparatus —
  dates, types, tags, search).
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
