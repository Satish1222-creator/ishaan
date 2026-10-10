const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (header) {
  let lastScrollY = window.scrollY;

  const updateHeaderVisibility = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.classList.add("header-hidden");
      header.classList.remove("header-visible");
    } else {
      header.classList.remove("header-hidden");
      header.classList.add("header-visible");
    }

    lastScrollY = currentScrollY;
  };

  updateHeaderVisibility();
  window.addEventListener("scroll", updateHeaderVisibility, { passive: true });
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("open", !isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("open");
    }
  });
}
