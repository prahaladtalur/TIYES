const CHAPTER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfBMGbXpK89k6W_86Xf6WlKRH1lCfNXi9hyDVa0TxXp4dDVsg/viewform?usp=publish-editor";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Wire city applications to their own form; the home-page CTA routes to the
// shared chapter-interest form.
document.querySelectorAll("[data-form-link]").forEach((link) => {
  link.href = link.dataset.formUrl || CHAPTER_FORM_URL;
});

// Scroll-triggered reveals, once per element
const revealEls = document.querySelectorAll(".reveal");
if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// Schematic strip: translate horizontally with scroll progress.
// Static on mobile and under reduced motion.
const strip = document.querySelector("[data-strip]");
if (strip && !prefersReducedMotion) {
  let ticking = false;

  const updateStrip = () => {
    ticking = false;
    if (window.innerWidth <= 640) {
      strip.style.transform = "";
      return;
    }
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const overflow = strip.scrollWidth - window.innerWidth;
    strip.style.transform = `translateX(${-progress * Math.max(overflow, 0)}px)`;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateStrip);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  updateStrip();
}
