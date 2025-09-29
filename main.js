// ... existing code ...
import { gsap } from "gsap";
import { initScrollReveal } from "./scrollReveal.js";
import { initLightbox } from "./lightbox.js";
import { initForm } from "./form.js";

// Header elevation on scroll
const header = document.querySelector("[data-elevate]");
let lastY = 0;
addEventListener("scroll", () => {
  const y = scrollY;
  header.style.boxShadow = y > 6 ? "0 6px 20px rgba(0,0,0,.06)" : "none";
  lastY = y;
}, { passive: true });

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Smooth scroll for internal links
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Init modules
initScrollReveal(gsap);
initLightbox();
initForm();
// ... existing code ...

