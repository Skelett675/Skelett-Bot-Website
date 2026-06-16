function toggleSettings() {
  document.getElementById("settings").classList.toggle("open");
}

function setTheme(t){
  localStorage.setItem("theme",t);
  document.documentElement.setAttribute("data-theme",t);
}

function setLang(l){
  localStorage.setItem("lang",l);

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  if(!title) return;

  if(l==="de"){
    title.innerText="🤖 Skelett Bot";
    subtitle.innerText="Control Panel";
  } else {
    title.innerText="🤖 Skelett Bot";
    subtitle.innerText="Dashboard Panel";
  }
}

window.onload=()=>{
  const t = localStorage.getItem("theme")||"green";
  document.documentElement.setAttribute("data-theme",t);
};
