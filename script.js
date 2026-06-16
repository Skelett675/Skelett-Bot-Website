function toggleSettings() {
  const panel = document.getElementById("settings");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

/* THEME */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* LANGUAGE */
function setLang(lang) {
  localStorage.setItem("lang", lang);

  const t = document.getElementById("title");
  const s = document.getElementById("subtitle");

  if (!t) return;

  if (lang === "de") {
    t.innerHTML = "🤖 Skelett Bot";
    s.innerHTML = "Control Panel";
  } else {
    t.innerHTML = "🤖 Skelett Bot";
    s.innerHTML = "Dashboard Panel";
  }
}

/* LOAD SETTINGS */
window.onload = () => {
  const theme = localStorage.getItem("theme");
  const lang = localStorage.getItem("lang");

  if (theme) document.documentElement.setAttribute("data-theme", theme);
  if (lang) setLang(lang);
};
