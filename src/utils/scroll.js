// src/utils/scroll.js
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-height')) || 62;
  const top = el.getBoundingClientRect().top + window.pageYOffset - (navH + 25);
  window.scrollTo({ top, behavior: 'smooth' });
}
