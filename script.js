function goDashboard() {
  window.location.href = "dashboard.html";
}

function goTerms() {
  window.location.href = "terms.html";
}

function goPrivacy() {
  window.location.href = "privacy.html";
}

/* SETTINGS MENU */
function toggleSettings() {
  document.getElementById("settingsMenu").classList.toggle("hidden");
}

/* LANGUAGE SYSTEM */
function setLanguage(lang) {
  if (lang === "de") {
    document.getElementById("title").innerText = "🤖 Skelett Bot";
    document.getElementById("subtitle").innerText = "Control Panel";
    document.getElementById("btnDash").innerText = "Dashboard";
    document.getElementById("btnTerms").innerText = "AGB";
    document.getElementById("btnPrivacy").innerText = "Datenschutz";
  }

  if (lang === "en") {
    document.getElementById("title").innerText = "🤖 Skelett Bot";
    document.getElementById("subtitle").innerText = "Control Panel";
    document.getElementById("btnDash").innerText = "Dashboard";
    document.getElementById("btnTerms").innerText = "Terms";
    document.getElementById("btnPrivacy").innerText = "Privacy";
  }

  localStorage.setItem("lang", lang);
}

/* THEME SYSTEM */
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* LOAD SAVED SETTINGS */
window.onload = () => {
  const lang = localStorage.getItem("lang");
  const theme = localStorage.getItem("theme");

  if (lang) setLanguage(lang);
  if (theme) setTheme(theme);
};
