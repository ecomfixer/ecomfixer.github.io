/* ==========================================================================
   ecomfixer — behaviour layer
   Scroll reveals, count-ups, header state, active nav, mobile menu,
   accordions, click-to-play video. No dependencies. Every feature is an
   enhancement over plain HTML that already works without it.
   ========================================================================== */
(() => {
  'use strict';

  // Tells the inline <head> guard that reveals are being handled.
  window.__efReady = true;

  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = 'IntersectionObserver' in window;
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  const REVEAL_STAGGER = 80;   // ms between siblings entering together
  const COUNT_DURATION = 1100; // ms
  const MENU_FADE = 200;       // ms, matches .menu transition

  /* ---------- scroll reveals + process connector ---------- */

  function initReveals() {
    const targets = $$('.reveal, .draw');
    if (reduced || !hasIO) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      // Stagger is counted per [data-stagger] group within one batch, so a card
      // scrolled into view on its own never waits behind siblings above it.
      const batch = new Map();

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);

        const group = el.parentElement && el.parentElement.closest('[data-stagger]');
        if (group) {
          const index = batch.get(group) || 0;
          batch.set(group, index + 1);
          if (index) {
            el.style.setProperty('--reveal-delay', `${index * REVEAL_STAGGER}ms`);
            el.addEventListener('transitionend', () => el.style.removeProperty('--reveal-delay'), { once: true });
          }
        }

        el.classList.add('is-in');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    targets.forEach((el) => observer.observe(el));
  }

  /* ---------- count-ups ---------- */

  // The authored text is the source of truth: prefix, digits, separators,
  // decimals and suffix are all read from it, and it's restored verbatim.
  function countUp(el) {
    const final = el.textContent.trim();
    const match = final.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const [, prefix, digits, suffix] = match;
    const target = parseFloat(digits.replace(/,/g, ''));
    const decimals = (digits.split('.')[1] || '').length;
    const grouped = digits.includes(',');

    const format = (value) => {
      let text = value.toFixed(decimals);
      if (grouped) {
        const parts = text.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        text = parts.join('.');
      }
      return prefix + text + suffix;
    };

    // Mono font: reserving the final width in ch stops the digits nudging
    // anything around them while they count.
    el.style.minWidth = `${final.length}ch`;

    let start = null;
    const frame = (now) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (progress < 1) {
        el.textContent = format(target * eased);
        requestAnimationFrame(frame);
      } else {
        el.textContent = final;
      }
    };

    el.textContent = format(0);
    requestAnimationFrame(frame);
  }

  function initCounters() {
    const counters = $$('[data-count]');
    if (reduced || !hasIO || !counters.length) return; // HTML already shows final values

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        countUp(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    counters.forEach((el) => observer.observe(el));
  }

  /* ---------- header: scrolled state + active section ---------- */

  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    const setScrolled = (on) => header.classList.toggle('is-scrolled', on);

    const sentinel = document.querySelector('.scroll-sentinel');
    if (hasIO && sentinel) {
      new IntersectionObserver((entries) => {
        setScrolled(!entries[entries.length - 1].isIntersecting);
      }).observe(sentinel);
    } else {
      const onScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  function initActiveNav() {
    const links = $$('.nav__link, .menu__link');
    if (!links.length || !hasIO) return;

    const sections = $$('main section[id]');
    const inBand = new Set();

    const update = () => {
      let current = '';
      sections.forEach((section) => {
        if (inBand.has(section)) current = section.id;
      });
      links.forEach((link) => {
        const on = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('is-active', on);
        if (on) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    // A thin band just above the middle of the viewport: whichever section is
    // crossing it is the one being read. Sections with no nav link clear it.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) inBand.add(entry.target);
        else inBand.delete(entry.target);
      });
      update();
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- mobile menu ---------- */

  function initMenu() {
    const button = document.querySelector('.burger');
    const menu = document.getElementById('menu');
    if (!button || !menu) return;

    // Everything outside header + menu goes inert while open, which keeps
    // keyboard focus inside without a hand-rolled trap.
    const outside = $$('main, .footer, .skip-link');
    const desktop = window.matchMedia('(min-width: 1024px)');
    let open = false;
    let hideTimer = 0;

    const setOpen = (next, restoreFocus) => {
      if (next === open) return;
      open = next;

      button.setAttribute('aria-expanded', String(next));
      root.classList.toggle('menu-open', next);
      outside.forEach((el) => el.toggleAttribute('inert', next));
      window.clearTimeout(hideTimer);

      if (next) {
        menu.hidden = false;
        void menu.offsetWidth; // commit the start state so the fade runs
        menu.classList.add('is-open');
        const first = menu.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      } else {
        menu.classList.remove('is-open');
        hideTimer = window.setTimeout(() => { menu.hidden = true; }, reduced ? 0 : MENU_FADE);
        if (restoreFocus) button.focus({ preventScroll: true });
      }
    };

    button.addEventListener('click', () => setOpen(!open, true));

    // Link clicks close first, synchronously, so the scroll lock is gone
    // before the browser jumps to the anchor.
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false, false);
    });
    $$('.header a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => setOpen(false, false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && open) setOpen(false, true);
    });

    desktop.addEventListener('change', (event) => {
      if (event.matches) setOpen(false, false);
    });
  }

  /* ---------- store accordions ---------- */

  function initAccordions() {
    $$('.store__toggle').forEach((button) => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) return;
      button.addEventListener('click', () => {
        const next = button.getAttribute('aria-expanded') !== 'true';
        button.setAttribute('aria-expanded', String(next));
        panel.classList.toggle('is-open', next);
      });
    });
  }

  /* ---------- click-to-play video ---------- */

  // Without JS the trigger is a plain link to the MP4. With JS, nothing is
  // requested until the click, then a <video> replaces the poster in place.
  function initVideos() {
    $$('[data-video]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();

        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'none';
        video.playsInline = true;

        const poster = trigger.querySelector('img');
        if (poster) video.poster = poster.currentSrc || poster.src;

        const caption = trigger.closest('figure')?.querySelector('figcaption');
        if (caption && caption.id) video.setAttribute('aria-labelledby', caption.id);

        const source = document.createElement('source');
        source.src = trigger.getAttribute('href');
        source.type = 'video/mp4';
        video.appendChild(source);

        trigger.replaceWith(video);
        video.focus({ preventScroll: true });
        const playing = video.play();
        if (playing && playing.catch) playing.catch(() => {}); // controls remain if blocked
      });
    });
  }

  /* ---------- footer year ---------- */

  function initYear() {
    const year = String(new Date().getFullYear());
    $$('[data-year]').forEach((el) => { el.textContent = year; });
  }

  [initReveals, initCounters, initHeader, initActiveNav, initMenu, initAccordions, initVideos, initYear]
    .forEach((init) => {
      try {
        init();
      } catch (error) {
        // A broken enhancement must never leave content hidden or collapsed.
        root.classList.remove('js');
        console.error(error);
      }
    });
})();
