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
      1. Nutzung nur erlaubt für Bot<br>
      2. Kein Spam<br>
      3. Keine Haftung
    `,
    privacyText: `
      - Keine Daten gespeichert<br>
      - Nur API Nutzung<br>
      - Kein Tracking
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
      1. Only allowed for bot usage<br>
      2. No spam<br>
      3. No liability
    `,
    privacyText: `
      - No data stored<br>
      - API only usage<br>
      - No tracking
    `
  }
};

/* SETTINGS TOGGLE */
function toggleSettings() {
  const panel = document.getElementById("settings");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

/* THEME */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* LANGUAGE */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = translations[lang];

  // INDEX
  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = t.title;
    document.getElementById("subtitle").innerHTML = t.subtitle;
  }

  // BUTTONS GLOBAL
  document.querySelectorAll("[data-i18n='terms']").forEach(e => e.innerHTML = t.terms);
  document.querySelectorAll("[data-i18n='privacy']").forEach(e => e.innerHTML = t.privacy);
  document.querySelectorAll("[data-i18n='back']").forEach(e => e.innerHTML = t.back);

  // SETTINGS LABELS
  document.querySelectorAll("[data-i18n='settings']").forEach(e => e.innerHTML = t.settings);
  document.querySelectorAll("[data-i18n='language']").forEach(e => e.innerHTML = t.language);
  document.querySelectorAll("[data-i18n='color']").forEach(e => e.innerHTML = t.color);

  // TERMS PAGE
  const terms = document.getElementById("termsText");
  if (terms) terms.innerHTML = t.termsText;

  // PRIVACY PAGE
  const privacy = document.getElementById("privacyText");
  if (privacy) privacy.innerHTML = t.privacyText;
}

/* LOAD */
window.onload = () => {
  const theme = localStorage.getItem("theme");
  const lang = localStorage.getItem("lang") || "de";

  if (theme) document.documentElement.setAttribute("data-theme", theme);

  applyLang(lang);
};
