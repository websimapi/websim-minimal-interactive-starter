// ... existing code ...
export function initLightbox() {
  const grid = document.querySelector("[data-lightbox]");
  const modal = document.getElementById("lightbox");
  if (!grid || !modal) return;

  const img = modal.querySelector(".lightbox-img");
  const closeBtn = modal.querySelector(".lightbox-close");

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || "";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    modal.hidden = true;
    img.src = "";
    document.body.style.overflow = "";
  };

  grid.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a) return;
    e.preventDefault();
    const src = a.getAttribute("href");
    const alt = a.querySelector("img")?.alt || "";
    open(src, alt);
  });

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  addEventListener("keydown", (e) => { if (!modal.hidden && e.key === "Escape") close(); });
}
// ... existing code ...

