(() => {
  const btn = document.getElementById('menu-btn');
  const overlay = document.getElementById('menu-overlay');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const open = overlay.classList.toggle('active');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? '✕' : 'MEN\u00DA';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      overlay.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'MEN\u00DA';
    }
  });

  // Country selector
  const cs = document.getElementById('country-selector');
  if (cs) {
    const csBtn = cs.querySelector('.country-btn');
    csBtn.addEventListener('click', () => {
      cs.classList.toggle('open');
      csBtn.setAttribute('aria-expanded', cs.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!cs.contains(e.target)) {
        cs.classList.remove('open');
        csBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// Dynamic date — updates .meta-date to today in the page language
(() => {
  const el = document.querySelector('.meta-date');
  if (!el) return;

  const lang = document.documentElement.lang || 'es';
  const now = new Date();

  const prefixes = {
    es: 'Actualizado',
    fr: 'Mis à jour le',
    de: 'Aktualisiert am',
    en: 'Updated',
    it: 'Aggiornato il',
  };

  const prefix = prefixes[lang] || prefixes['es'];
  const locale = { es: 'es-ES', fr: 'fr-FR', de: 'de-DE', en: 'en-GB', it: 'it-IT' }[lang] || 'es-ES';

  const formatted = now.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  el.textContent = `${prefix} ${formatted}`;
})();
