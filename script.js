function setTheme(t){
  localStorage.setItem("theme",t);
  document.documentElement.setAttribute("data-theme",t);
}

function toggleSettings(){
  document.querySelector(".settings").classList.toggle("open");
}

/* LANGUAGE + FLAGS */
function setLang(l){
  localStorage.setItem("lang",l);

  document.querySelectorAll("[data-de]").forEach(el=>{
    el.innerText = l==="de" ? el.dataset.de : el.dataset.en;
  });

  document.querySelectorAll("[data-flag]").forEach(el=>{
    if(l==="de") el.innerHTML = "🇩🇪";
    if(l==="en") el.innerHTML = "🇬🇧";
  });
}

window.onload=()=>{
  let t = localStorage.getItem("theme")||"green";
  document.documentElement.setAttribute("data-theme",t);
  setLang(localStorage.getItem("lang")||"de");
};
