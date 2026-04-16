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
})();
