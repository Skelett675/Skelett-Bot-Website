function setTheme(t) {
  localStorage.setItem("theme", t);
  document.documentElement.setAttribute("data-theme", t);
}

function setLang(l) {
  localStorage.setItem("lang", l);
  applyLang();
}

function applyLang() {
  const lang = localStorage.getItem("lang") || "de";

  document.querySelectorAll("[data-de]").forEach(el => {
    el.innerText = lang === "de" ? el.dataset.de : el.dataset.en;
  });
}

window.onload = () => {
  const theme = localStorage.getItem("theme") || "green";
  document.documentElement.setAttribute("data-theme", theme);
  applyLang();
};
