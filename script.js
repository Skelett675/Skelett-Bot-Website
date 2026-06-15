<script>
function toggleSettings() {
  const s = document.getElementById("settings");
  s.style.display = (s.style.display === "block") ? "none" : "block";
}

/* THEME */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* LANGUAGE (einfaches System erstmal) */
function setLang(lang) {
  localStorage.setItem("lang", lang);

  if (lang === "de") {
    document.querySelector("h1").innerText = "🤖 Skelett Bot";
  } else {
    document.querySelector("h1").innerText = "🤖 Skelett Bot";
  }
}

/* LOAD SAVED */
window.onload = () => {
  const theme = localStorage.getItem("theme");
  const lang = localStorage.getItem("lang");

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  if (lang) {
    setLang(lang);
  }
};
</script>
