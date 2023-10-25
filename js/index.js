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

$(".change-theme").addEventListener("click", () => {
  $(".theme-dark").classList.toggle("hidden");
  $(".theme-light").classList.toggle("hidden");
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

//boton de cerrar panel de texto

$("#buttonClose").addEventListener("click", () => {
  $(".buttonClose").style.display = "none";
  $("#asideText").style.width = "0";
  $("#memeGeneratorContainer").style.display = "flex";

  console.log("aside text quitar");
});

// boton de cerrar panel de imagen
$("#btnClose").addEventListener("click", () => {
  $("#btnClose").style.display = "none";
  $("#asideImage").style.width = "0";
  $("#memeGeneratorContainer").style.display = "flex";
  console.log("aside text quitar");
});

// Modificacion de top text
$("#topText").addEventListener("input", (e) => {
  $(".paragraphtopText").innerText = e.target.value;
});

// Modificacion de top text
$("#bottomText").addEventListener("input", (e) => {
  $(".paragraphBottomText").innerText = e.target.value;
});

//sin texto superior

$("#noTopText").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".memeGeneratorContainer__topText").style.display = "none";
  } else {
    $(".memeGeneratorContainer__topText").style.display = "flex";
  }
});

//sin texto inferior
$("#noBottomText").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".memeGeneratorContainer__bottomText").style.display = "none";
  } else {
    $(".memeGeneratorContainer__bottomText").style.display = "flex";
  }
});

// Tipo de fuente

$("#fontType").addEventListener("input", (e) => {
  $("#paragraphtopText").style.fontFamily = e.target.value;
});

$("#fontType").addEventListener("input", (e) => {
  $("#paragraphBottomText").style.fontFamily = e.target.value;
});

// Tamaño de fuente
$("#fontSize").addEventListener("input", (e) => {
  $("#paragraphtopText").style.fontSize = `${e.target.value}px`;
});

$("#fontSize").addEventListener("input", (e) => {
  $("#paragraphBottomText").style.fontSize = `${e.target.value}px`;
});

//Alineación de texto

$("#alignLeft").addEventListener("click", () => {
  $("#containerTopText").style.textAlign = "left";
  $("#containerBottomText").style.textAlign = "left";
});

$("#alignCenter").addEventListener("click", () => {
  $("#containerTopText").style.textAlign = "center";
  $("#containerBottomText").style.textAlign = "center";
});

$("#alignRight").addEventListener("click", () => {
  $("#containerTopText").style.textAlign = "right";
  $("#containerBottomText").style.textAlign = "right";
});

// Color de fuente

$("#textColor").addEventListener("input", (e) => {
   $("#paragraphtopText").style.color = e.target.value 
})

$("#textColor").addEventListener("input", (e) => {
    $("#paragraphBottomText").style.color = e.target.value 
 })

 $("#backgroungColor").addEventListener("input", (e) =>{
    $("#containerTopText").style.backgroundColor = e.target.value  
 })

 $("#backgroungColor").addEventListener("input", (e) =>{
    $("#containerBottomText").style.backgroundColor = e.target.value  
 })