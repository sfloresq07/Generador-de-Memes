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

// Control de aside texto e imagen

const togglePanels = () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const handleImageButtonClick = () => {
    if (mediaQuery.matches) {
      $("#asideImage").style.width = "30%";
      $("#memeGeneratorContainer").style.display = "flex";
      $("#buttonClose").style.width = "0";
      $("#asideText").style.width = "0";
    } else {
      // Comportamiento invertido
      $("#asideImage").style.width = "100%";
      $("#memeGeneratorContainer").style.display = "none";
      $("#buttonClose").style.width = "20px";
      $("#asideText").style.width = "0";
    }
  };

  const handleTextButtonClick = () => {
    if (mediaQuery.matches) {
      $("#asideText").style.width = "30%";
      $("#asideText").style.display = "flex";
      $("#memeGeneratorContainer").style.display = "flex";
      $("#buttonClose").style.display = "20px";
      $("#asideImage").style.width = "0";
    } else {
      // Comportamiento invertido
      $("#asideText").style.width = "100%";
      $("#memeGeneratorContainer").style.display = "none";
      $("#buttonClose").style.display = "flex";
      $("#asideImage").style.width = "0";
    }
  };

  if (mediaQuery.matches) {
    $(".bottom--imagen").addEventListener("click", handleImageButtonClick);
    $(".bottom--text").addEventListener("click", handleTextButtonClick);
  } else {
    $(".bottom--imagen").addEventListener("click", handleImageButtonClick);
    $(".bottom--text").addEventListener("click", handleTextButtonClick);
  }
};

document.addEventListener("DOMContentLoaded", togglePanels);

//boton de cerrar panel de texto

$(".buttonClose").addEventListener("click", () => {
  $("#buttonClose").style.display = "none";
  $("#asideText").style.width = "0";
  $("#asideImage").style.width = "0";
  $("#memeGeneratorContainer").style.display = "flex";
});

// boton de cerrar panel de imagen
$("#btnClose").addEventListener("click", () => {
  $("#btnClose").style.display = "none";
  $("#asideImage").style.width = "0";
  $("#memeGeneratorContainer").style.display = "flex";
});

// Modificacion de top text
$("#topText").addEventListener("input", (e) => {
  $(".paragraphtopText").innerText = e.target.value;
});

// Modificacion de botton text
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
  $("#paragraphBottomText").style.fontFamily = e.target.value;
});

// Tamaño de fuente
$("#fontSize").addEventListener("input", (e) => {
  $("#paragraphtopText").style.fontSize = `${e.target.value}px`;
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
  $("#paragraphtopText").style.color = e.target.value;
  $("#textColorValue").textContent = e.target.value;
  $("#paragraphBottomText").style.color = e.target.value;
  $("#textColorValue").textContent = e.target.value;
});

// Color de fondo
$("#backgroungColor").addEventListener("input", (e) => {
  $("#containerTopText").style.backgroundColor = e.target.value;
  $("#backgroungColorValue").textContent = e.target.value;
  $("#containerBottomText").style.backgroundColor = e.target.value;
  $("#backgroungColorValue").textContent = e.target.value;
});

//Fondo transparente
$("#noBackgroung").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#containerTopText").style.backgroundColor = "transparent";
    $("#containerBottomText").style.backgroundColor = "transparent";
  } else {
    $("#containerTopText").style.backgroundColor = "white";
    $("#containerBottomText").style.backgroundColor = "white";
  }
});

// Contorno

$("#noOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "0";
  $(".paragraphBottomText").style.webkitTextStroke = "0";
});

$("#lightOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "1px white";
  $(".paragraphBottomText").style.webkitTextStroke = "1px white";
});

$("#darkOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "5px black";
  $(".paragraphBottomText").style.webkitTextStroke = "5px black";
});

// Espaciado

$("#spacing").addEventListener("input", (e) => {
  $(".memeGeneratorContainer__topText").style.padding = `${e.target.value}px`;
  $(".memeGeneratorContainer__bottomText").style.padding = `${e.target.value}px`;
});

// Interlineado #lineSpacing

$("#lineSpacing").addEventListener("input", (e) => {
  $("#paragraphtopText").style.lineHeight = e.target.value;
  $("#paragraphBottomText").style.lineHeight = e.target.value;
});

// URL de la imagen

$("#urlMemeImage").addEventListener("input", (e) => {
  $("#memeGeneratorContainer__image").style.backgroundImage = `url(${e.target.value})`;
});

// Color de Fondo de Imagen backgroungColorImagen

$("#backgroungColorImagen").addEventListener("input", (e) => {
  $("#memeGeneratorContainer__image").style.backgroundColor = e.target.value;
  $("#colorValue").textContent = e.target.value;
});

// Modo MixMode backgroundMixMode
$("#backgroundMixMode").addEventListener("input", (e) => {
  $("#memeGeneratorContainer__image").style.backgroundBlendMode =
    e.target.value;
});

// Filtros

const applyInitialFilters = () => {
  const filterValue = `brightness(${$("#brightness").value}) opacity(${
    $("#opacity").value
  }) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${
    $("#grayscale").value
  }%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue").value}deg) saturate(${
    $("#saturation").value
  }%) invert(${$("#invert").value})`;
  applyFilters(filterValue);
};

$("#brightness").addEventListener("input", applyInitialFilters);
$("#opacity").addEventListener("input", applyInitialFilters);
$("#contrast").addEventListener("input", applyInitialFilters);
$("#blur").addEventListener("input", applyInitialFilters);
$("#grayscale").addEventListener("input", applyInitialFilters);
$("#sepia").addEventListener("input", applyInitialFilters);
$("#hue").addEventListener("input", applyInitialFilters);
$("#saturation").addEventListener("input", applyInitialFilters);
$("#invert").addEventListener("input", applyInitialFilters);

const applyFilters = (filterValue) => {
  $(".memeGeneratorContainer__image").style.filter = filterValue;
};

//boton de restablecer filtros
$("#resetFilter").addEventListener("click", () => {
  $("#brightness").value = "1";
  $("#opacity").value = "1";
  $("#contrast").value = "100";
  $("#blur").value = "0";
  $("#grayscale").value = "0";
  $("#sepia").value = "0";
  $("#hue").value = "0";
  $("#saturation").value = "100";
  $("#invert").value = "1";
  $(".memeGeneratorContainer__image").style.filter = "none";
});

// Boton de descarga de Meme

const downloadMeme = () => {
  domtoimage.toBlob($("#memeGeneratorContainer__image")).then((blob) => {
    saveAs(blob, "my-meme.png");
  });
};

$("#download").addEventListener("click", downloadMeme);
