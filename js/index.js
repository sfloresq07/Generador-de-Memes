const $ = (selector) => document.querySelector(selector);
// Modo Oscuro


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
   $("#textColorValue").textContent = e.target.value  
})

$("#textColor").addEventListener("input", (e) => {
    $("#paragraphBottomText").style.color = e.target.value 
    $("#textColorValue").textContent = e.target.value 
 })

 // Color de fondo
 $("#backgroungColor").addEventListener("input", (e) =>{
    $("#containerTopText").style.backgroundColor = e.target.value  
    $("#backgroungColorValue").textContent = e.target.value 
 })

 $("#backgroungColor").addEventListener("input", (e) =>{
    $("#containerBottomText").style.backgroundColor = e.target.value
    $("#backgroungColorValue").textContent = e.target.value 
    
 })

 //Fondo transparente
 $("#noBackgroung").addEventListener("input", (e) => {
    if (e.target.checked) {
      $("#containerTopText").style.backgroundColor = "transparent";
    } else {
      $("#containerTopText").style.backgroundColor = "white";
    }
  });

  $("#noBackgroung").addEventListener("input", (e) => {
    if (e.target.checked) {
      $("#containerBottomText").style.backgroundColor = "transparent";
    } else {
      $("#containerBottomText").style.backgroundColor = "white";
    }
  });

  // Contorno

  $("#noOutline").addEventListener("click", () =>{
    $(".paragraphtopText").style.webkitTextStroke = "0"
  })

  $("#noOutline").addEventListener("click", () =>{
    $(".paragraphBottomText").style.webkitTextStroke = "0"
  })

  $("#lightOutline").addEventListener("click", () =>{
    $(".paragraphtopText").style.webkitTextStroke = "1px white"
  })

  $("#lightOutline").addEventListener("click", () =>{
    $(".paragraphBottomText").style.webkitTextStroke = "1px white"
  })

  $("#darkOutline").addEventListener("click", () =>{
    $(".paragraphtopText").style.webkitTextStroke = "5px black"
  })

  $("#darkOutline").addEventListener("click", () =>{
    $(".paragraphBottomText").style.webkitTextStroke = "5px black"
  })

  // Espaciado

  $("#spacing").addEventListener("input", (e) =>{
    $(".memeGeneratorContainer__topText").style.padding = `${e.target.value}px`;
  })
  $("#spacing").addEventListener("input", (e) =>{
    $(".memeGeneratorContainer__bottomText").style.padding = `${e.target.value}px`;
  })

// Interlineado #lineSpacing

$("#lineSpacing").addEventListener("input", (e) =>{
    $("#paragraphtopText").style.lineHeight = e.target.value;
  })

  $("#lineSpacing").addEventListener("input", (e) =>{
    $("#paragraphBottomText").style.lineHeight = e.target.value;
  })

  // URL de la imagen

  $("#urlMemeImage").addEventListener("input", (e) =>{
    $("#memeGeneratorContainer__image").style.backgroundImage = `url(${e.target.value})`
    console.log(urlMemeImage);
  })
  
  // Color de Fondo de Imagen backgroungColorImagen

  $("#backgroungColorImagen").addEventListener("input", (e) =>{
$("#memeGeneratorContainer__image").style.backgroundColor = e.target.value
$("#colorValue").textContent = e.target.value
  })

// Modo MixMode backgroundMixMode
$("#backgroundMixMode").addEventListener("input", (e)=>{
    $("#memeGeneratorContainer__image").style.backgroundBlendMode = e.target.value
})


 