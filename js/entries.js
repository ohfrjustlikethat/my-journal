/* =========================================================================
   entries.js — the catalog. This is the one place you register a piece of
   writing. Add an object to JOURNAL_ENTRIES (newest first) and drop a matching
   HTML file in /entries (copy entries/_template.html to start).

   Fields:
     slug     path to the entry's HTML file
     title    its title
     date     YYYY-MM-DD
     type     what kind of writing it is — a free label shown next to the
              entry: "story", "review", "opinion", "fragment", … Use whatever
              word fits; it appears verbatim.
     tags     array of tag strings
     dek      optional one-line subtitle
     excerpt  optional preview shown on the index
     text     plain text of the piece, used for full-text search

   Loaded as a plain script (not fetched JSON) so the site also works when you
   open index.html directly from disk.
   ========================================================================= */

window.JOURNAL_ENTRIES = [
  {
    slug: "entries/minty-lips.html",
    title: "minty lips",
    date: "2026-07-05",
    type: "story",
    tags: ["fiction", "fantasy", "godhood"],
    dek: "when i feel invincible she helps me come down",
    excerpt: "tonight i fucked a family friend. she says she's too old for me we only have an age difference of 6 years.",
    text: "tonight i fucked a family friend. she says she's too old for me we only have an age difference of 6 years. i've only seen ever her as someone that knows how to take care of me when i eventually need something. that's who i am, and that's who she says she is. sometimes i see myself as a god and that terrifies me, because if god resembled me in anyway then the world would be either heaven or a complete hellscape. i guess you could say me fucking her was her way of comforting me. she tells me how i matter, and then i feel like i've never mattered to anyone other than her. i think these thoughts of godhood are foolish but the alternative is death, it's accepting what she says i'm not. i am either all encompassing knowledge of the earth or im the dullness that destroys men. how do i tell jianna this without sounding like a cynical bullshitter? she seems to be a true believer of the religion that demands obedience. i can see now how her eyes would employ a new form that would burn at the back of my head cutting me off from the only friend i have, even though she would never abandon me. she would want me sitting on her bed playing with her cigarette and weed smelling hair, and then i'd tell her and she would get up from my chest and she would look at me like i needed help, but all i would see is her breasts covered with her hair. her form would look like a caramel coloured goddess lit by the orange sunset. so i kiss her and i forget what could never happen."
  }
];
