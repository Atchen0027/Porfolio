document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const certToggle = document.getElementById("cert-toggle");
  const certContainer = document.getElementById("cert-container");

  if (certToggle && certContainer) {
    certToggle.addEventListener("click", () => {
      certContainer.classList.toggle("open");
      certToggle.classList.toggle("active");
    });
  }

  const contactLink = document.getElementById("contact-link");
  const contactModal = document.getElementById("contact-modal");
  const modalClose = document.getElementById("modal-close");

  if (contactLink && contactModal && modalClose) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      contactModal.classList.add("active");
    });

    modalClose.addEventListener("click", () => {
      contactModal.classList.remove("active");
    });

    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("active");
      }
    });
  }

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const nav = document.querySelector("nav");

  if (mobileBtn && nav) {
    mobileBtn.addEventListener("click", () => {
      mobileBtn.classList.toggle("active");
      nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (link.id !== "contact-link") {
          mobileBtn.classList.remove("active");
          nav.classList.remove("active");
        }
      });
    });
  }
});
