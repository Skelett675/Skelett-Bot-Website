const translations = {
  en: {
    title: "🤖 Skelett Bot",
    subtitle: "Control Panel",
    terms: "Terms",
    privacy: "Privacy",
    back: "⬅ Back",
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

/* THEME */
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

/* APPLY ENGLISH ALWAYS */
function applyLang() {
  const t = translations.en;

  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = t.title;
    document.getElementById("subtitle").innerHTML = t.subtitle;
  }

  if (document.getElementById("termsText")) {
    document.getElementById("termsText").innerHTML = t.termsText;
  }

  if (document.getElementById("privacyText")) {
    document.getElementById("privacyText").innerHTML = t.privacyText;
  }
}

/* INIT */
window.onload = () => {
  const theme = localStorage.getItem("theme") || "green";
  document.documentElement.setAttribute("data-theme", theme);
  applyLang();
};
