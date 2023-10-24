// Modo Oscuro
const $ = (selector) => document.querySelector(selector);

$(".change-theme").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme) {
    $("body").removeAttribute("data-theme", "light");
  } else {
    $("body").setAttribute("data-theme", "light");
  }
});

//Aside imagen

$(".bottom--imagen").addEventListener("click", () => {
  $("#asideImage").style.width = "100%";
  $("#memeGeneratorContainer").style.display = "none";
  $("#buttonClose").style.width = "20px";
  $("#asideText").style.width = "0";
});

//Aside texto
$(".bottom--text").addEventListener("click", () => {
    $("#asideText").style.width = "100%";
    $("#memeGeneratorContainer").style.display = "none";
    $("#buttonClose").style.display = "flex";
    $("#asideImage").style.width = "0";
    console.log("aside text");
  });
  

