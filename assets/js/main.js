const includePartials = async () => {
  const includes = document.querySelectorAll("[data-include]");

  await Promise.all([...includes].map(async (slot) => {
    const path = slot.getAttribute("data-include");
    const response = await fetch(path);
    slot.innerHTML = await response.text();
  }));

  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-page]").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }
};

includePartials().catch(() => {
  document.body.classList.add("partials-failed");
});
