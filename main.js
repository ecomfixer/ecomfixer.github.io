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
})();
