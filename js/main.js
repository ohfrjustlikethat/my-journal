/* =========================================================================
   main.js — the index: render the feed, search it, filter it by tag.
   No dependencies. Reads window.JOURNAL_ENTRIES.
   ========================================================================= */
(function () {
  "use strict";

  var ENTRIES = window.JOURNAL_ENTRIES || [];

  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // ---- tiny helpers ------------------------------------------------------
  function el(id){ return document.getElementById(id); }
  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }
  function fmtDate(iso){
    var p = String(iso).split("-");
    if (p.length < 3) return iso;
    return parseInt(p[2],10) + " " + MONTHS[parseInt(p[1],10)-1] + " " + p[0];
  }
  // An entry's type is a free label — story, review, opinion, fragment, …
  // Shown verbatim (CSS handles the uppercasing). "kind" is read as a legacy
  // fallback so older entries keep working.
  function typeLabel(e){ return e.type || e.kind || "entry"; }
  function haystack(e){
    return (e.title + " " + typeLabel(e) + " " + (e.dek||"") + " " + (e.excerpt||"") + " " +
            (e.tags||[]).join(" ") + " " + (e.text||"")).toLowerCase();
  }

  // ---- state -------------------------------------------------------------
  var state = { q: "", tag: "" };

  // ---- tag index ---------------------------------------------------------
  function tagCounts(){
    var m = {};
    ENTRIES.forEach(function(e){
      (e.tags||[]).forEach(function(t){ m[t] = (m[t]||0) + 1; });
    });
    return Object.keys(m).map(function(t){ return { tag:t, n:m[t] }; })
      .sort(function(a,b){ return b.n - a.n || a.tag.localeCompare(b.tag); });
  }

  function renderTagbar(){
    var bar = el("tagbar");
    var counts = tagCounts();
    if (!counts.length){ bar.innerHTML = ""; return; }
    var html = '<span class="filed">Tags</span>';
    counts.forEach(function(t){
      var on = state.tag === t.tag;
      html += '<a class="tag" href="?tag=' + encodeURIComponent(t.tag) + '" ' +
              'data-tag="' + esc(t.tag) + '" role="button" aria-pressed="' + on + '">' +
              esc(t.tag) + '<span class="count">' + t.n + '</span></a>';
    });
    bar.innerHTML = html;
  }

  // ---- filtering ---------------------------------------------------------
  function filtered(){
    var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    return ENTRIES.filter(function(e){
      if (state.tag && (e.tags||[]).indexOf(state.tag) === -1) return false;
      if (terms.length){
        var hay = haystack(e);
        for (var i=0;i<terms.length;i++){ if (hay.indexOf(terms[i]) === -1) return false; }
      }
      return true;
    });
  }

  // ---- entry markup ------------------------------------------------------
  function entryHTML(e){
    var tags = (e.tags||[]).map(function(t){
      return '<a class="tag" href="?tag=' + encodeURIComponent(t) + '" data-tag="' + esc(t) + '">' + esc(t) + '</a>';
    }).join("");
    return '<li class="entry">' +
      '<div class="entry-meta">' +
        '<span class="entry-type">' + esc(typeLabel(e)) + '</span>' +
        '<span class="entry-date">' + esc(fmtDate(e.date)) + '</span>' +
      '</div>' +
      '<h3 class="entry-title"><a href="' + esc(e.slug) + '">' + esc(e.title) + '</a></h3>' +
      (e.dek ? '<p class="entry-dek">' + esc(e.dek) + '</p>' : '') +
      (e.excerpt ? '<p class="entry-excerpt">' + esc(e.excerpt) + '</p>' : '') +
      (tags ? '<div class="entry-tags">' + tags + '</div>' : '') +
    '</li>';
  }

  // ---- render ------------------------------------------------------------
  function render(){
    var list = filtered();
    var feed = el("feed");
    var active = !!(state.q || state.tag);

    if (!list.length){
      var msg = ENTRIES.length ? "No matching entries." : "No entries yet.";
      feed.innerHTML = '<li class="empty">' + msg + '</li>';
    } else {
      feed.innerHTML = list.map(entryHTML).join("");
    }

    // result line
    var rl = el("resultline");
    if (active){
      rl.hidden = false;
      el("resultsummary").textContent = list.length + (list.length === 1 ? " entry" : " entries");
    } else {
      rl.hidden = true;
    }

    renderTagbar();
  }

  // ---- url sync ----------------------------------------------------------
  function readURL(){
    var p = new URLSearchParams(location.search);
    state.q   = p.get("q")   || "";
    state.tag = p.get("tag") || "";
  }
  function writeURL(){
    var p = new URLSearchParams();
    if (state.q)   p.set("q", state.q);
    if (state.tag) p.set("tag", state.tag);
    var qs = p.toString();
    history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  }

  // ---- wiring ------------------------------------------------------------
  function setTag(t){
    state.tag = (state.tag === t) ? "" : t;
    writeURL(); render();
    document.querySelector(".apparatus").scrollIntoView({ block: "nearest" });
  }

  function init(){
    // Hide the search / tags apparatus until there's at least one entry.
    var app = el("apparatus");
    if (app) app.hidden = ENTRIES.length === 0;

    readURL();
    var box = el("search");
    if (box){
      box.value = state.q;
      box.addEventListener("input", function(){
        state.q = box.value.trim();
        writeURL(); render();
      });
    }

    // delegate tag clicks (tag bar + card tags) and clear button
    document.addEventListener("click", function(ev){
      var t = ev.target.closest("[data-tag]");
      if (t){ ev.preventDefault(); setTag(t.getAttribute("data-tag")); return; }
      if (ev.target.closest("#clearfilters")){
        ev.preventDefault();
        state.q = ""; state.tag = "";
        if (box) box.value = "";
        writeURL(); render();
      }
    });

    window.addEventListener("popstate", function(){ readURL(); if (box) box.value = state.q; render(); });

    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
