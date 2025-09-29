// ... existing code ...
export function initScrollReveal(gsap) {
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (prefersReduced) {
    items.forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => io.observe(el));
}
// ... existing code ...

