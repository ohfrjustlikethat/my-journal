/* =========================================================================
   entry.js — runs on a single entry page. Finds this page in the catalog and
   builds the end-matter: filed-under tags (linking back to the filtered index)
   and newer/older wayfinding. Purely additive — the story reads fine without it.
   ========================================================================= */
(function () {
  "use strict";
  var ENTRIES = window.JOURNAL_ENTRIES || [];
  var mount = document.getElementById("endmatter");
  if (!mount) return;

  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function base(slug){ return slug.split("/").pop(); }

  var here = decodeURIComponent(location.pathname.split("/").pop() || "");
  var i = -1;
  for (var k=0;k<ENTRIES.length;k++){ if (base(ENTRIES[k].slug) === here){ i = k; break; } }
  if (i === -1) return;

  var e = ENTRIES[i];
  var newer = ENTRIES[i-1]; // array is newest-first
  var older = ENTRIES[i+1];

  if (document.title === "" || /^\s*$/.test(document.title)) document.title = e.title + " · angry sheep";

  var tags = (e.tags||[]).map(function(t){
    return '<a class="tag" href="../index.html?tag=' + encodeURIComponent(t) + '">' + esc(t) + '</a>';
  }).join("");

  function nav(entry, dir, cls){
    if (!entry) return '<span class="' + cls + ' disabled"><span class="dir">' + dir + '</span><span class="t">—</span></span>';
    return '<a class="' + cls + '" href="' + esc(base(entry.slug)) + '">' +
           '<span class="dir">' + dir + '</span><span class="t">' + esc(entry.title) + '</span></a>';
  }

  mount.innerHTML =
    '<p class="filed-under">Tags</p>' +
    '<div class="filed-tags">' + tags + '</div>' +
    '<nav class="shelfnav" aria-label="More entries">' +
      nav(newer, "← Newer", "prev") +
      nav(older, "Older →", "next") +
    '</nav>' +
    '<a class="return" href="../index.html">← Return to the index</a>';
})();
