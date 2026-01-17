(function () {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // WhatsApp link (Nummer ohne +, ohne Leerzeichen)
  const waLink = document.getElementById("waLink");
  if (waLink) {
    const phoneInternational = "4915203529430";
    const text = encodeURIComponent("Hallo! Ich hätte gern ein Angebot vom Grillmobil Prinz. Datum, Ort, Personen: …");
    waLink.href = `https://wa.me/${phoneInternational}?text=${text}`;
  }

  // Contact form -> mailto (kein Server nötig)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const date = String(data.get("date") || "").trim();
      const guests = String(data.get("guests") || "").trim();
      const location = String(data.get("location") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent("Anfrage Grillmobil Prinz – Angebot");
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `E-Mail: ${email}`,
          `Datum: ${date || "-"}`,
          `Gästezahl: ${guests || "-"}`,
          `Ort/PLZ: ${location || "-"}`,
          "",
          "Wunsch / Nachricht:",
          message || "-",
        ].join("\n")
      );

      const targetEmail = "Manfred-Prinz-Kantine@web.de";
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    });
  }
})();
