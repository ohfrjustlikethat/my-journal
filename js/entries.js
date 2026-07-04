/* =========================================================================
   entries.js — the card catalog
   -------------------------------------------------------------------------
   This is the ONE place you register a piece of writing. Add an object to
   JOURNAL_ENTRIES (newest first) and drop a matching HTML file in /entries.
   `text` is the plain-text used for full-text search on the homepage; keep a
   readable summary of the piece there (it does not need every word).
   Loaded as a plain script (not fetched JSON) so the site also works when you
   just double-click index.html locally.
   ========================================================================= */

window.JOURNAL_SITE = {
  title: "Marginalia",
  tagline: "a commonplace book of stories & small hours",
  author: "the keeper of this desk",
  established: "MMXXVI"
};

window.JOURNAL_ENTRIES = [
  {
    slug: "entries/the-cartographer-of-small-hours.html",
    title: "The Cartographer of Small Hours",
    date: "2026-06-14",
    kind: "story",
    weight: "feature",
    tags: ["fiction", "insomnia", "maps"],
    dek: "He mapped the country that only exists between 3 and 4 a.m., and sold the charts to no one.",
    excerpt: "There is a nation that convenes each night in the hour nobody keeps, and my uncle spent thirty years surveying its coastline with a pencil and a failing torch.",
    marginal: "the map figure is hand-drawn in SVG — swap it for your own art.",
    text: "There is a nation that convenes each night in the hour nobody keeps. My uncle spent thirty years surveying its coastline. He called it the country of small hours, the territory between three and four in the morning, when the ordinary map of the day has been folded and put away and a stranger geography rises in its place. Insomnia. Torch. Contour lines of worry. He drew rivers of half-remembered conversations, a mountain range of the things he should have said. The cartographer never sold a single chart. He said the country would not survive being visited on purpose. Maps, fiction, sleeplessness, the geography of the mind at night."
  },
  {
    slug: "entries/notes-toward-a-theory-of-doorways.html",
    title: "Notes Toward a Theory of Doorways",
    date: "2026-05-28",
    kind: "journal",
    weight: "wide",
    tags: ["notebook", "thresholds", "architecture"],
    dek: "On the small amnesia of walking into a room, and why thresholds were built to cause it.",
    excerpt: "You have felt it: you cross into the kitchen and the reason evaporates on the sill. The doorway did that. I have started to think it was designed to.",
    marginal: "a working notebook entry — unfinished on purpose.",
    text: "You have felt it. You walk into the kitchen and the reason for coming evaporates on the threshold. Psychologists call it the doorway effect, the location-updating effect. The brain files the old room away to make room for the new one and takes your errand with it. Notebook entry. Thresholds. Architecture. I have begun to suspect our ancestors knew this and built doorways precisely to cause the small forgetting — a place to set down what you were carrying. Every arch a tiny amnesia, every lintel a mercy. Notes toward a theory of doorways, incomplete."
  },
  {
    slug: "entries/salt.html",
    title: "Salt",
    date: "2026-05-09",
    kind: "story",
    weight: "tall",
    tags: ["fiction", "sea", "grief"],
    dek: "A very short story about the sea, and the arithmetic of what it takes back.",
    excerpt: "My grandmother measured the tide in the people it had returned to her and the one it had not.",
    marginal: "flash fiction — under 400 words.",
    text: "My grandmother measured the tide not in feet but in people. The sea gave back the fishing boats, mostly. It gave back nets and one gold ring and, once, a whole piano, waterlogged and out of tune. It did not give back my grandfather. She salted everything after that — bread, tea, the rims of her eyes — as if to remind the sea that she already had all the salt she needed and it could keep its bargains. Grief, the ocean, an old woman and the arithmetic of loss. Salt, a flash fiction."
  },
  {
    slug: "entries/on-keeping-a-commonplace-book.html",
    title: "On Keeping a Commonplace Book",
    date: "2026-04-22",
    kind: "journal",
    weight: null,
    tags: ["notebook", "craft", "reading"],
    dek: "Why I copy other people's sentences into a book of my own, and what happens in the margins.",
    excerpt: "For four hundred years, readers kept books made entirely of borrowed sentences. I am trying to remember how.",
    marginal: "contains a pressed-flower figure.",
    text: "For four hundred years, readers kept commonplace books — blank volumes into which they copied, by hand, the sentences worth stealing. Not a diary. An anthology of the borrowed. Milton kept one. So did Jefferson, Woolf, Forster. The act of copying a sentence out is a way of slowing down enough to actually read it. Craft, reading, notebooks, marginalia, the history of the commonplace book. This website is one, essentially — a place to press the flowers of other people's thinking between pages of my own. Herbarium. The margins are where the real book happens."
  },
  {
    slug: "entries/the-lending-library-of-forgotten-errands.html",
    title: "The Lending Library of Forgotten Errands",
    date: "2026-04-03",
    kind: "story",
    weight: "feature",
    tags: ["fiction", "whimsy", "memory"],
    dek: "In a town where nothing is ever quite finished, there is a library that lends out the errands you abandoned.",
    excerpt: "You may borrow back the phone call you never made, the apology you rehearsed and swallowed, the letter three-quarters written. Due dates apply.",
    marginal: "the longest piece here — settle in.",
    text: "In the town of Amberish, where the fog keeps its own hours, there is a library that lends not books but errands — specifically, the ones you meant to run and never did. The phone call you never made. The apology rehearsed in the shower and swallowed at the door. The letter three-quarters written, the plant you forgot to water back to life. Whimsy, memory, magic realism, fiction. The librarian is patient. The due dates are gentle. But every borrowed errand must eventually be returned, completed or confessed. Most people, it turns out, would rather pay the fine. The lending library of forgotten errands and its quiet economy of regret."
  },
  {
    slug: "entries/weather-report-from-the-interior.html",
    title: "Weather Report from the Interior",
    date: "2026-03-15",
    kind: "journal",
    weight: "tall",
    tags: ["notebook", "weather", "mood"],
    dek: "A forecast for the internal climate. Scattered dread clearing by afternoon.",
    excerpt: "Overnight: a low front of unspecified dread. Morning: brightening, with a chance of unexpected competence.",
    marginal: "written like a shipping forecast.",
    text: "A forecast for the interior country. Overnight, a low-pressure front of unspecified dread moved in from the northeast, bringing 3 a.m. wakefulness and light catastrophizing. Mood, weather as metaphor, notebook. Morning: gradual brightening, patches of unexpected competence, one good sentence sighted near the coast. Afternoon outlook fair, with a warm current of coffee and the slow lifting of the fog. Small craft — the self — advised to remain in harbor until the wind of motivation returns. Weather report from the interior, issued daily, revised constantly."
  },
  {
    slug: "entries/marginalia-collected.html",
    title: "Marginalia, Collected",
    date: "2026-02-27",
    kind: "fragment",
    weight: "wide",
    tags: ["notebook", "fragments", "aphorism"],
    dek: "The scraps too short to be entries and too stubborn to throw away.",
    excerpt: "A drawer of single sentences: things overheard, misremembered, or invented and attributed to the fog.",
    marginal: "add your own to the bottom of the file.",
    text: "A collection of fragments, aphorisms, single sentences, overheard things, marginalia too short to be their own entries. Notebook, fragments, aphorism. On ambition: a ladder leaned against the wrong wall is still, technically, exercise. On memory: the past is a country that keeps redrawing its own borders. On writing: the sentence you delete at midnight is the one you will spend all morning trying to rebuild. On silence: some rooms are quiet the way a held breath is quiet. Collected marginalia and loose ends."
  }
];

/* Decorative scraps — quotes & notes pinned between the entries on the index.
   These are atmosphere only: they are hidden the moment a search or tag filter
   is active, so they never get in the way of finding a real entry. */
window.JOURNAL_MARGINALIA = [
  { text: "“Fill your paper with the breathings of your heart.”", cite: "— William Wordsworth", wide: true },
  { text: "A commonplace book is a garden you grow from other people’s seeds.", cite: "— desk note, undated" },
  { text: "“The notebook is where the writer keeps what the story couldn’t hold.”", cite: "— margin, in pencil" },
  { text: "Read twice. Copy once. Remember always.", cite: "— rule of the stacks", wide: true }
];
