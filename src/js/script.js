import { business } from "./business.js";

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     HELPERS
     ========================================================================== */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const setText = (selector, value, parent = document) => {
    const element = $(selector, parent);

    if (element && value !== undefined && value !== null) {
      element.textContent = value;
    }
  };

  const setAttr = (selector, attribute, value, parent = document) => {
    const element = $(selector, parent);

    if (element && value !== undefined && value !== null) {
      element.setAttribute(attribute, value);
    }
  };

  const setImage = (selector, src, alt = "", parent = document) => {
    const image = $(selector, parent);

    if (!image || !src) return;

    if (image.tagName === "IMG") {
      image.src = src;

      if (alt) {
        image.alt = alt;
      }

      image.addEventListener("error", () => {
        image.style.display = "none";
      });

      return;
    }

    image.style.backgroundImage = `url("${src}")`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";

    if (alt) {
      image.setAttribute("aria-label", alt);
    }
  };

  /* ==========================================================================
     SEO
     ========================================================================== */

  document.title = business.seo.title;

  setAttr(
    'meta[name="description"]',
    "content",
    business.seo.description
  );

  /* ==========================================================================
     BRAND
     ========================================================================== */

  setText(".brand-name", business.name);
  setText(".brand-short", business.shortName);

  const brandLogo = $(".brand-logo");

  if (brandLogo && business.logo?.value) {
    brandLogo.textContent = business.logo.value;
  }

  /* ==========================================================================
     NAVIGATION
     ========================================================================== */

  const navLinks = $$(".main-nav a");

  if (navLinks.length >= 5) {
    navLinks[0].textContent = business.navigation.treatments;
    navLinks[0].href = "#treatments";

    navLinks[1].textContent = business.navigation.results;
    navLinks[1].href = "#results";

    navLinks[2].textContent = business.navigation.about;
    navLinks[2].href = "#about";

    navLinks[3].textContent = business.navigation.faq;
    navLinks[3].href = "#faq";

    navLinks[4].textContent = business.navigation.booking;
    navLinks[4].href = "#consultation";
  }

  /* ==========================================================================
     HERO
     ========================================================================== */

  setText(".hero-eyebrow", business.hero.eyebrow);
  setText(".hero-title-line-1", business.hero.titleLine1);
  setText(".hero-title-line-2", business.hero.titleLine2);
  setText(".hero-description", business.hero.description);

  setText(".hero-primary-button", business.hero.primaryButton);
  setText(".hero-secondary-button", business.hero.secondaryButton);
  setText(".hero-note-text", business.hero.note);

  setImage(
    "#heroMedia",
    business.hero.image,
    `${business.name} aesthetic clinic`
  );

  /* ==========================================================================
     INTRO
     ========================================================================== */

  setText(".intro-eyebrow", business.intro.eyebrow);
  setText(".intro-title-line-1", business.intro.titleLine1);
  setText(".intro-title-line-2", business.intro.titleLine2);
  setText(".intro-description", business.intro.description);
  setText(".intro-button", business.intro.button);

  /* ==========================================================================
     CONCERNS
     ========================================================================== */

  const concernSection = $(".concerns");

  if (concernSection) {
    setText(
      ".section-eyebrow",
      business.concerns.eyebrow,
      concernSection
    );

    setText(
      ".section-title",
      business.concerns.title,
      concernSection
    );

    setText(
      ".section-description",
      business.concerns.description,
      concernSection
    );
  }

  const concernGrid = $("#concernGrid");

  if (concernGrid) {
    concernGrid.innerHTML = business.concerns.items
      .map(
        (item) => `
          <a class="concern-card" href="${item.link}">
            <img src="${item.image}" alt="${item.title}">

            <div>
              <h3>${item.title}</h3>

              <span class="arrow-icon arrow-horizontal" aria-hidden="true">
                <svg viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H18" />
                  <path d="M13 1L18 6L13 11" />
                </svg>
              </span>
            </div>
          </a>
        `
      )
      .join("");
  }

  /* ==========================================================================
     TREATMENTS
     ========================================================================== */

  const treatmentSection = $("#treatments");

  if (treatmentSection) {
    setText(
      ".section-eyebrow",
      business.treatments.eyebrow,
      treatmentSection
    );

    setText(
      ".section-title",
      business.treatments.title,
      treatmentSection
    );

    setText(
      ".section-button",
      business.treatments.button,
      treatmentSection
    );
  }

  const treatmentGrid = $("#treatmentGrid");

  if (treatmentGrid) {
    treatmentGrid.innerHTML = business.treatments.items
      .map(
        (item) => `
          <article class="treatment-card">
            <a href="#consultation" class="treatment-image">
              <img src="${item.image}" alt="${item.name}">
            </a>

            <div class="treatment-content">
              <span class="treatment-category">
                ${item.category}
              </span>

              <h3>${item.name}</h3>

              <p>${item.description}</p>

              <a href="#consultation" class="text-link">
                Learn more
                <span class="arrow-icon arrow-horizontal" aria-hidden="true">
                  <svg viewBox="0 0 20 12" fill="none">
                    <path d="M1 6H18" />
                    <path d="M13 1L18 6L13 11" />
                  </svg>
                </span>
              </a>
            </div>
          </article>
        `
      )
      .join("");
  }

  /* ==========================================================================
     FEATURED TREATMENT
     ========================================================================== */

  // IMPORTANT:
  // The section is class="feature", not id="featured-treatment".
  const featureSection = $(".feature");

  if (featureSection) {
    setText(
      ".featured-eyebrow",
      business.featuredTreatment.eyebrow,
      featureSection
    );

    setText(
      ".featured-title-line-1",
      business.featuredTreatment.titleLine1,
      featureSection
    );

    setText(
      ".featured-title-line-2",
      business.featuredTreatment.titleLine2,
      featureSection
    );

    setText(
      ".featured-description",
      business.featuredTreatment.description,
      featureSection
    );

    setText(
      ".featured-button",
      business.featuredTreatment.button,
      featureSection
    );

    setImage(
      "#featureImage",
      business.featuredTreatment.image,
      business.featuredTreatment.titleLine1,
      featureSection
    );

    const benefits = $(".feature-list", featureSection);

    if (benefits) {
      benefits.innerHTML = business.featuredTreatment.benefits
        .map(
          (benefit) => `
            <li>${benefit}</li>
          `
        )
        .join("");
    }
  }

  /* ==========================================================================
     RESULTS
     ========================================================================== */

  const resultsSection = $("#results");

  if (resultsSection) {
    setText(
      ".section-eyebrow",
      business.results.eyebrow,
      resultsSection
    );

    setText(
      ".section-title",
      business.results.title,
      resultsSection
    );

    setText(
      ".section-description",
      business.results.description,
      resultsSection
    );

    setText(
      ".results-disclaimer",
      business.results.disclaimer,
      resultsSection
    );
  }

  const resultsGrid = $("#resultsGrid");

  if (resultsGrid) {
    resultsGrid.innerHTML = business.results.items
      .map(
        (item) => `
          <figure class="result-card">
            <img src="${item.image}" alt="${item.title}">

            <figcaption>
              <span>${item.title}</span>
            </figcaption>
          </figure>
        `
      )
      .join("");
  }

  /* ==========================================================================
     PROVIDER / ABOUT
     ========================================================================== */

  const aboutSection = $("#about");

  if (aboutSection) {
    setText(
      ".doctor-eyebrow",
      business.provider.eyebrow,
      aboutSection
    );

    setText(
      ".doctor-title-line-1",
      business.provider.titleLine1,
      aboutSection
    );

    setText(
      ".doctor-title-line-2",
      business.provider.titleLine2,
      aboutSection
    );

    setText(
      ".doctor-name",
      business.provider.name,
      aboutSection
    );

    setText(
      ".doctor-role",
      business.provider.role,
      aboutSection
    );

    setText(
      ".doctor-description",
      business.provider.description,
      aboutSection
    );

    setText(
      ".doctor-button",
      business.provider.button,
      aboutSection
    );

    setImage(
      "#doctorImage",
      business.provider.image,
      business.provider.name
    );

    setText(
      ".credential",
      business.provider.credentials,
      aboutSection
    );

    setText(
      ".credential-description",
      business.provider.credentialDescription,
      aboutSection
    );
  }

  /* ==========================================================================
     REVIEWS
     ========================================================================== */

  const reviewSection = $(".reviews");

  if (reviewSection) {
    setText(
      ".section-eyebrow",
      business.reviews.eyebrow,
      reviewSection
    );

    setText(
      ".section-title",
      business.reviews.title,
      reviewSection
    );
  }

  const reviewSlider = $("#reviewSlider");

  if (reviewSlider) {
    reviewSlider.innerHTML = business.reviews.items
      .map(
        (review) => `
          <article class="review">
            <div class="stars">★★★★★</div>

            <blockquote>
              “${review.quote}”
            </blockquote>

            <cite>
              ${review.name}
            </cite>
          </article>
        `
      )
      .join("");
  }

  /* ==========================================================================
     FAQ
     ========================================================================== */

  const faqSection = $("#faq");

  if (faqSection) {
    setText(
      ".section-eyebrow",
      business.faq.eyebrow,
      faqSection
    );

    setText(
      ".section-title",
      business.faq.title,
      faqSection
    );
  }

  const faqList = $("#faqList");

  if (faqList) {
    faqList.innerHTML = business.faq.items
      .map(
        (item) => `
          <details class="faq-item">
            <summary>
              ${item.question}
              <span aria-hidden="true">+</span>
            </summary>

            <p>${item.answer}</p>
          </details>
        `
      )
      .join("");
  }

  /* ==========================================================================
     CONSULTATION
     ========================================================================== */

  const consultationSection = $("#consultation");

  if (consultationSection) {
    setText(
      ".consultation-eyebrow",
      business.consultation.eyebrow,
      consultationSection
    );

    setText(
      ".consultation-title-line-1",
      business.consultation.titleLine1,
      consultationSection
    );

    setText(
      ".consultation-title-line-2",
      business.consultation.titleLine2,
      consultationSection
    );

    setText(
      ".consultation-description",
      business.consultation.description,
      consultationSection
    );

    setText(
      ".consultation-submit",
      business.consultation.button,
      consultationSection
    );

    setText(
      ".consultation-disclaimer",
      business.consultation.disclaimer,
      consultationSection
    );

    const nameInput = $("#name");

    if (nameInput) {
      nameInput.placeholder =
        business.consultation.namePlaceholder;
    }

    const phoneInput = $("#phone");

    if (phoneInput) {
      phoneInput.placeholder =
        business.consultation.phonePlaceholder;
    }

    const messageInput = $("#message");

    if (messageInput) {
      messageInput.placeholder =
        business.consultation.messagePlaceholder;
    }

    const interestSelect = $("#interestSelect");

    if (interestSelect) {
      interestSelect.innerHTML = `
        <option value="">
          ${business.consultation.interestPlaceholder}
        </option>

        ${business.treatments.items
          .map(
            (item) =>
              `<option value="${item.name}">${item.name}</option>`
          )
          .join("")}
      `;
    }
  }

  /* ==========================================================================
     CONSULTATION FORM
     ========================================================================== */

  const consultForm = $("#consultForm");

  if (consultForm) {
    consultForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(consultForm);

      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const interest = formData.get("interest") || "";
      const message = formData.get("message") || "";

      const whatsappNumber = business.contact.whatsapp;

      if (!whatsappNumber) {
        showToast(
          "Thank you. We will be in touch shortly."
        );

        consultForm.reset();
        return;
      }

      const text = [
        `Hello ${business.name},`,
        "",
        "I would like to request a consultation.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Treatment: ${interest || "Not sure yet"}`,
        `Message: ${message || "No additional message"}`
      ].join("\n");

      const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(text);

      window.open(whatsappUrl, "_blank");

      consultForm.reset();

      showToast("Opening WhatsApp...");
    });
  }

  /* ==========================================================================
     CONTACT INFORMATION
     ========================================================================== */

  $$("[data-business-phone]").forEach((element) => {
    element.textContent = business.contact.displayPhone;
    element.href = `tel:${business.contact.phone}`;
  });

  $$("[data-business-email]").forEach((element) => {
    element.textContent = business.contact.email;
    element.href = `mailto:${business.contact.email}`;
  });

  $$("[data-business-instagram]").forEach((element) => {
    element.textContent = business.contact.instagram;
    element.href = business.contact.instagramUrl;
  });

  $$("[data-business-facebook]").forEach((element) => {
    if (business.contact.facebook) {
      element.textContent = business.contact.facebook;
      element.href = business.contact.facebookUrl;
    } else {
      element.style.display = "none";
    }
  });

  $$("[data-business-booking]").forEach((element) => {
    element.href = business.contact.bookingUrl;
  });

  /* ==========================================================================
     LOCATION
     ========================================================================== */

  $$("[data-business-location]").forEach((element) => {
    element.textContent = business.location.address;
  });

  $$("[data-business-map]").forEach((element) => {
    element.href = business.location.mapUrl;
  });

  /* ==========================================================================
     HOURS
     ========================================================================== */

  const hoursContainer = $("[data-business-hours]");

  if (hoursContainer) {
    hoursContainer.innerHTML = business.hours
      .map(
        ({ day, hours }) => `
          <div class="hours-row">
            <span>${day}</span>
            <span>${hours}</span>
          </div>
        `
      )
      .join("");
  }

  /* ==========================================================================
     FOOTER
     ========================================================================== */

  setText(
    ".footer-description",
    business.footer.description
  );

  setText(
    ".footer-explore-title",
    business.footer.exploreTitle
  );

  setText(
    ".footer-visit-title",
    business.footer.visitTitle
  );

  setText(
    ".footer-copyright",
    business.footer.copyright
  );

  setText(
    ".footer-credit",
    business.footer.credit
  );

  setText("[data-business-name]", business.name);

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     MOBILE MENU
     ========================================================================== */

  const menuToggle = $(".menu-toggle");
  const mobileMenu = $(".main-nav");

  if (menuToggle && mobileMenu) {
    const closeMobileMenu = () => {
      mobileMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove("menu-open");
    };

    const openMobileMenu = () => {
      mobileMenu.classList.add("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "true"
      );

      document.body.classList.add("menu-open");
    };

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileMenu.addEventListener("click", (event) => {
      // Clicking a navigation link:
      // close the menu and allow the link to navigate normally.
      if (event.target.closest("a")) {
        closeMobileMenu();
        return;
      }

      // Clicking anywhere else in the full-screen menu:
      // close the menu.
      closeMobileMenu();
    });
  }

  /* ==========================================================================
     TOAST
     ========================================================================== */

  function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);
  }

  /* ==========================================================================
     SCROLL REVEAL
     ========================================================================== */

  const revealElements = $$(
    ".concern-card, .treatment-card, .result-card, .review, .faq-item"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  /* ==========================================================================
     IMAGE FALLBACK
     ========================================================================== */

  $$("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-error");
    });
  });
});