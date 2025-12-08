document.addEventListener("DOMContentLoaded", () => {
  // Aquí puedes agregar interactividad adicional

  // Ejemplo: Pequeña animación al hacer scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Animación suave para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Certificate Toggle Logic
  const certToggle = document.getElementById("cert-toggle");
  const certContainer = document.getElementById("cert-container");

  if (certToggle && certContainer) {
    certToggle.addEventListener("click", () => {
      certContainer.classList.toggle("open");
      certToggle.classList.toggle("active");
    });
  }

  // Contact Modal Logic
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

    // Close when clicking outside content
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("active");
      }
    });
  }

  // Mobile Menu Logic
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const nav = document.querySelector("nav");

  if (mobileBtn && nav) {
    mobileBtn.addEventListener("click", () => {
      mobileBtn.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        // Only close if it's not the contact link (which opens modal)
        if (link.id !== "contact-link") {
          mobileBtn.classList.remove("active");
          nav.classList.remove("active");
        }
      });
    });
  }

  console.log("Portafolio cargado correctamente ✨");
});
