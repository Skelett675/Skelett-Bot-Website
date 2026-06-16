const translations = {
  de: {
    title: "🤖 Skelett Bot",
    subtitle: "Control Panel",
    terms: "Terms",
    privacy: "Privacy",
    back: "⬅ Zurück",
    settings: "Einstellungen",
    language: "Sprache",
    color: "Farbe",
    termsText: `
      <h2>Terms</h2>
      <p>Nur Bot Nutzung erlaubt.</p>
      <p>Kein Spam / Abuse.</p>
      <p>Keine Haftung.</p>
    `,
    privacyText: `
      <h2>Privacy</h2>
      <p>Keine Daten gespeichert.</p>
      <p>Nur API Nutzung.</p>
    `
  },

  en: {
    title: "🤖 Skelett Bot",
    subtitle: "Control Panel",
    terms: "Terms",
    privacy: "Privacy",
    back: "⬅ Back",
    settings: "Settings",
    language: "Language",
    color: "Color",
    termsText: `
      <h2>Terms</h2>
      <p>Only bot usage allowed.</p>
      <p>No spam / abuse.</p>
      <p>No liability.</p>
    `,
    privacyText: `
      <h2>Privacy</h2>
      <p>No data stored.</p>
      <p>API only usage.</p>
    `
  }
};

/* SETTINGS TOGGLE */
function toggleSettings() {
  const s = document.getElementById("settings");
  s.style.display = s.style.display === "block" ? "none" : "block";
}

/* THEME */
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

/* LANGUAGE */
function setLang(l) {
  localStorage.setItem("lang", l);
  applyLang(l);
}

function applyLang(l) {
  const t = translations[l];

  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = t.title;
    document.getElementById("subtitle").innerHTML = t.subtitle;
  }

  document.querySelectorAll("[data-i18n='terms']").forEach(e => e.innerHTML = t.terms);
  document.querySelectorAll("[data-i18n='privacy']").forEach(e => e.innerHTML = t.privacy);
  document.querySelectorAll("[data-i18n='back']").forEach(e => e.innerHTML = t.back);
  document.querySelectorAll("[data-i18n='settings']").forEach(e => e.innerHTML = t.settings);
  document.querySelectorAll("[data-i18n='language']").forEach(e => e.innerHTML = t.language);
  document.querySelectorAll("[data-i18n='color']").forEach(e => e.innerHTML = t.color);

  if (document.getElementById("termsText")) {
    document.getElementById("termsText").innerHTML = t.termsText;
  }

  if (document.getElementById("privacyText")) {
    document.getElementById("privacyText").innerHTML = t.privacyText;
  }
}

/* INIT → DEFAULT = ENGLISH */
window.onload = () => {
  const theme = localStorage.getItem("theme") || "green";
  const lang = localStorage.getItem("lang") || "en"; // 👈 FIX: default EN

  document.documentElement.setAttribute("data-theme", theme);
  applyLang(lang);
};
