/* =========================================================================
   entries.js — the catalog. This is the one place you register a piece of
   writing. Add an object to JOURNAL_ENTRIES (newest first) and drop a matching
   HTML file in /entries (copy entries/_template.html to start).

   Fields: slug, title, date (YYYY-MM-DD), kind ("story" | "journal" |
   "fragment"), weight ("feature" | "wide" | "tall" | null), tags (array),
   dek (optional one-line subtitle), excerpt (shown on the card),
   marginal (optional small card note), text (plain text used for search).

   Loaded as a plain script (not fetched JSON) so the site also works when you
   open index.html directly from disk.
   ========================================================================= */

window.JOURNAL_ENTRIES = [
  // Empty — ready for your writing. Example shape:
  // {
  //   slug: "entries/my-first-story.html",
  //   title: "My First Story",
  //   date: "2026-07-05",
  //   kind: "story",
  //   weight: null,
  //   tags: ["night"],
  //   dek: "",
  //   excerpt: "",
  //   text: ""
  // }
];

// Optional pull-quotes pinned between entries on the index. Left empty on
// purpose — add your own if you ever want them.
window.JOURNAL_MARGINALIA = [];
