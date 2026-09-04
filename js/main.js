/* ─────────────────────────────────────────────────────────
   millanandcompany — Main JavaScript
   ───────────────────────────────────────────────────────── */

'use strict';

// ═══════════════════════════════
// NAV — scroll state + mobile
// ═══════════════════════════════
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll border
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link highlight
  const links = nav.querySelectorAll('.nav__links a[href^="#"]');
  const sections = Array.from(links)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const highlightActive = () => {
    const scrollY = window.scrollY + 100;
    let current = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = '#' + sec.id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
  };
  window.addEventListener('scroll', highlightActive, { passive: true });

  // Mobile hamburger — panel colgado del nav + velo tras él
  const burger = nav.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const scrim = document.querySelector('.nav__scrim');
  if (burger && mobileMenu) {
    const setOpen = (isOpen) => {
      burger.classList.toggle('open', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
      nav.classList.toggle('menu-open', isOpen);
      if (scrim) scrim.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    const closeMenu = () => setOpen(false);
    burger.addEventListener('click', () => setOpen(!burger.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
    // Cerrar al pulsar el velo (fuera del panel)
    if (scrim) scrim.addEventListener('click', closeMenu);
    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }
})();

// ═══════════════════════════════
// ACCORDION — phases
// ═══════════════════════════════
(function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all siblings
      const siblings = item.closest('.accordion-list, .sgsi-phases')
        ?.querySelectorAll('.accordion-item.open') || [];
      siblings.forEach(s => {
        if (s !== item) s.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });
})();

// ═══════════════════════════════
// FAQ accordion
// ═══════════════════════════════
(function initFaq() {
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
})();

// ═══════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════
(function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  if (!window.IntersectionObserver) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => observer.observe(el));
})();

// ═══════════════════════════════
// SMOOTH ANCHOR SCROLL
// ═══════════════════════════════
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// ═══════════════════════════════
// TICKER duplicate for loop
// ═══════════════════════════════
(function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  // Clone content for seamless loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
})();

// ═══════════════════════════════
// CONTACT FORM
// ═══════════════════════════════
(function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const original = btn.textContent;
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = '#2fae7c';
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
})();

// ═══════════════════════════════
// HEADER word split animation (optional enhancement)
// ═══════════════════════════════
(function initHeaderAnimation() {
  const h1 = document.querySelector('.hero h1');
  if (!h1 || !h1.hasAttribute('data-split')) return;
  // Simple: already handled by CSS keyframe animation
})();
