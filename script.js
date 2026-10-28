const CHAPTER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfBMGbXpK89k6W_86Xf6WlKRH1lCfNXi9hyDVa0TxXp4dDVsg/viewform?usp=publish-editor";

// Wire city applications to their own form; the home-page CTA routes to the
// shared chapter-interest form.
document.querySelectorAll("[data-form-link]").forEach((link) => {
  link.href = link.dataset.formUrl || CHAPTER_FORM_URL;
});
