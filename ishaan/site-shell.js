(() => {
  const pages = {
    home: { label: "Home", href: "index.html" },
    about: { label: "About Us", href: "about.html" },
    products: { label: "Product Directory", href: "product.html" },
    panels: { label: "Panels & Louvers", href: "panels%20n%20louvers.html" },
    soffit: { label: "Sofit Panels", href: "sofit-panels.html" },
    decor: { label: "Home Decoratives", href: "home-decorative.html" },
    sheets: { label: "Specialty Sheets", href: "specialty%20sheets.html" },
    moulding: { label: "French Moulding", href: "french%20moulding.html" },
    ceiling: { label: "False Ceiling", href: "false%20ceiling.html" },
    exterior: { label: "Exterior Products", href: "exterior%20products.html" },
    pu: { label: "PU Products", href: "PU%20products.html" },
    gallery: { label: "Gallery", href: "gallery.html" },
    contact: { label: "Contact Us", href: "contact.html" },
  };

  const productPages = [
    "products",
    "panels",
    "soffit",
    "decor",
    "sheets",
    "moulding",
    "ceiling",
    "exterior",
    "pu",
  ];
  const companyPages = ["home", "about", "gallery", "contact"];
  const link = (page, className = "") =>
    `<a class="${className}" href="${page.href}">${page.label}</a>`;

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a class="brand" href="${pages.home.href}" aria-label="Ishaan Interiors home">
      <img class="brand-logo" src="ishaan-logo.jpg" alt="Ishaan Interiors" />
    </a>
    <button class="menu-toggle" type="button" aria-label="Toggle navigation"
      aria-expanded="false" aria-controls="primary-nav">
      <span></span><span></span>
    </button>
    <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
      ${link(pages.home, "nav-link")}
      ${link(pages.about, "nav-link")}
      <div class="nav-item has-menu">
        <button class="nav-link dropdown-trigger" type="button"
          aria-expanded="false" aria-controls="product-menu">
          Products <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown" id="product-menu">
          ${productPages.map((key) => link(pages[key])).join("")}
        </div>
      </div>
      ${link(pages.gallery, "nav-link")}
      ${link(pages.contact, "nav-link")}
    </nav>
    <a class="header-cta" href="${pages.contact.href}">Let’s talk <span aria-hidden="true">↗</span></a>
  `;

  const footer = document.createElement("footer");
  footer.className = "ii-single-footer";
  footer.id = "site-footer";
  footer.innerHTML = `
    <div class="ii-footer-inner">
      <div class="ii-footer-top">
        <div class="ii-footer-brand">
          <a class="ii-brand-logo" href="${pages.home.href}" aria-label="Ishaan Interiors home">
            <img class="ii-footer-logo" src="ishaan-logo.jpg" alt="Ishaan Interiors" />
          </a>
          <p>Thoughtful materials and considered design for spaces that feel like home.</p>
        </div>
        <div class="ii-footer-heading">
          <span>LET’S CONNECT</span>
          <h2>Design<br /><i>your space.</i></h2>
        </div>
      </div>
      <div class="ii-footer-links">
        <div class="ii-link-group">
          <span class="ii-label">EXPLORE</span>
          ${companyPages.map((key) => link(pages[key])).join("")}
        </div>
        <div class="ii-link-group">
          <span class="ii-label">PRODUCTS</span>
          ${productPages.map((key) => link(pages[key])).join("")}
        </div>
        <div class="ii-link-group ii-contact-group">
          <span class="ii-label">GET IN TOUCH</span>
          <a href="mailto:hello@ishaaninteriors.com">hello@ishaaninteriors.com</a>
          <a href="tel:+919999999999">+91 99999 99999</a>
          <p>Visakhapatnam,<br />Andhra Pradesh, India</p>
        </div>
        <div class="ii-newsletter">
          <span class="ii-label">STAY UPDATED</span>
          <h3>Design inspiration,<br />straight to your inbox.</h3>
          <form>
            <input type="email" placeholder="Your email address" aria-label="Your email address" required />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>
      <div class="ii-footer-bottom-area">
        <div class="ii-social-row">
          <span>FOLLOW US</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
        </div>
        <div class="ii-giant-word" aria-hidden="true">ISHAAN</div>
      </div>
      <div class="ii-footer-last">
        <span>Copyright © 2025 Ishaan Interiors. All rights reserved.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </div>
  `;

  const currentFile = decodeURIComponent(location.pathname.split("/").pop() || "")
    .toLocaleLowerCase();
  const currentPage = Object.keys(pages).find(
    (key) => decodeURIComponent(pages[key].href).toLocaleLowerCase() === currentFile,
  );
  const primaryNav = header.querySelector(".primary-nav");
  const menuToggle = header.querySelector(".menu-toggle");
  const productToggle = header.querySelector(".dropdown-trigger");
  const productMenu = header.querySelector(".nav-item");

  if (currentPage && productPages.includes(currentPage)) {
    productToggle.classList.add("active");
  } else if (currentPage) {
    const activeLink = [...primaryNav.querySelectorAll(".nav-link")].find(
      (item) => decodeURIComponent(item.getAttribute("href")).toLocaleLowerCase() === currentFile,
    );
    activeLink?.classList.add("active");
  }

  document.querySelectorAll(".site-header").forEach((item) => item.remove());
  document.querySelectorAll("footer").forEach((item) => item.remove());
  if (!document.getElementById("top")) {
    document.body.id = "top";
  }
  document.body.prepend(header);
  document.body.append(footer);
  document.body.classList.add("has-site-shell");

  for (const [id, href] of [
    ["shared-nav-css", "nav.css"],
    ["shared-footer-css", "footer.css"],
  ]) {
    if (!document.getElementById(id)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = id;
      stylesheet.rel = "stylesheet";
      stylesheet.href = href;
      document.head.append(stylesheet);
    }
  }

  if (!document.getElementById("shared-site-fonts")) {
    const fonts = document.createElement("link");
    fonts.id = "shared-site-fonts";
    fonts.rel = "stylesheet";
    fonts.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap";
    document.head.append(fonts);
  }

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    primaryNav.classList.toggle("open", open);
  });

  productToggle.addEventListener("click", () => {
    const open = productToggle.getAttribute("aria-expanded") !== "true";
    productToggle.setAttribute("aria-expanded", String(open));
    productMenu.classList.toggle("open", open);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    if (!productMenu.contains(event.target)) {
      productMenu.classList.remove("open");
      productToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      productMenu.classList.remove("open");
      productToggle.setAttribute("aria-expanded", "false");
    }
  });

  let lastScrollY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add("header-hidden");
        header.classList.remove("header-visible");
      } else {
        header.classList.remove("header-hidden");
        header.classList.add("header-visible");
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  const footerScript = document.createElement("script");
  footerScript.src = "footer.js";
  document.body.append(footerScript);
})();
