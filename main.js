/* =========================================================================
   Артём Матвеев — RU portfolio
   Two IntersectionObservers: scroll reveals + stat count-ups. Nothing else.
   ========================================================================= */
(function () {
  'use strict';

  // Tells the inline head script that reveals are being handled here.
  window.__revealsReady = true;

  var reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  var revealEls = document.querySelectorAll('.reveal');
  var numEls = document.querySelectorAll('.num[data-count]');

  /* The strip is enhancement over plain links, and it must keep working under
     reduced motion — so wire it up before the early return below. */
  initStrip();

  /* Reduced motion, or a browser without IntersectionObserver: show the final
     state immediately. The markup already carries the correct numbers, so
     nothing needs formatting. */
  if (reduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < revealEls.length; i++) revealEls[i].classList.add('is-in');
    return;
  }

  /* ---------- scroll reveals ---------- */

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  for (var r = 0; r < revealEls.length; r++) revealObserver.observe(revealEls[r]);

  /* ---------- count-ups ---------- */

  var DURATION = 1200;

  function format(value, decimals) {
    var fixed = value.toFixed(decimals);
    var parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  function countUp(el) {
    // unobserve() doesn't retract entries already queued for the current batch,
    // so guard here too: one element animates exactly once, ever.
    if (el.dataset.counted) return;
    el.dataset.counted = '1';

    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;

    var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var final = el.textContent;
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / DURATION, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic

      if (p < 1) {
        el.textContent = prefix + format(target * eased, decimals) + suffix;
        requestAnimationFrame(frame);
      } else {
        el.textContent = final; // restore the authored string verbatim
      }
    }

    requestAnimationFrame(frame);
  }

  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      countObserver.unobserve(entry.target); // fires once, never again
      countUp(entry.target);
    });
  }, { threshold: 0.4 });

  for (var n = 0; n < numEls.length; n++) countObserver.observe(numEls[n]);

  /* ---------- mobile section strip ---------- */

  function initStrip() {
    var strip = document.querySelector('.navstrip');
    if (!strip) return;

    var scroller = strip.querySelector('.navstrip__scroll');
    var links = strip.querySelectorAll('.navstrip__link');
    if (!scroller || !links.length) return;

    /* Swipe hints. The listener is on the strip itself, not the page, and is
       rAF-coalesced, so nothing runs per frame while the page scrolls. */
    var pending = false;
    function updateEdges() {
      var max = scroller.scrollWidth - scroller.clientWidth;
      strip.classList.toggle('has-start', scroller.scrollLeft > 2);
      strip.classList.toggle('has-end', scroller.scrollLeft < max - 2);
    }
    scroller.addEventListener('scroll', function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; updateEdges(); });
    }, { passive: true });
    window.addEventListener('resize', updateEdges, { passive: true });
    updateEdges();

    if (!('IntersectionObserver' in window)) return;  // links still work regardless

    var byId = {};
    var sections = [];
    for (var i = 0; i < links.length; i++) {
      var id = (links[i].getAttribute('href') || '').slice(1);
      var sec = id && document.getElementById(id);
      if (!sec) continue;
      byId[id] = links[i];
      sections.push(sec);
    }
    if (!sections.length) return;

    var active = null;
    function setActive(id) {
      if (id === active) return;
      active = id;
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('is-active');
        links[j].removeAttribute('aria-current');
      }
      var link = byId[id];
      if (!link) return;
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'true');

      // keep the active item inside the strip's visible run
      var sr = scroller.getBoundingClientRect();
      var lr = link.getBoundingClientRect();
      if (!sr.width) return;
      if (lr.left < sr.left + 12 || lr.right > sr.right - 12) {
        var left = scroller.scrollLeft + (lr.left - sr.left) - (sr.width - lr.width) / 2;
        if (reduced || typeof scroller.scrollTo !== 'function') scroller.scrollLeft = left;
        else scroller.scrollTo({ left: left, behavior: 'smooth' });
      }
    }

    /* One observer, one probe band sitting just under the sticky header. The
       furthest section down the page still touching the band wins. */
    var nav = document.querySelector('.nav');
    var headerH = (nav ? nav.offsetHeight : 64) + (strip.offsetHeight || 40);
    var inView = {};

    var stripObserver = new IntersectionObserver(function (entries) {
      for (var k = 0; k < entries.length; k++) {
        inView[entries[k].target.id] = entries[k].isIntersecting;
      }
      for (var m = sections.length - 1; m >= 0; m--) {
        if (inView[sections[m].id]) { setActive(sections[m].id); return; }
      }
    }, { rootMargin: '-' + (headerH + 4) + 'px 0px -60% 0px', threshold: 0 });

    for (var s = 0; s < sections.length; s++) stripObserver.observe(sections[s]);
  }
})();
