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
    $("#asideImage").style.width = mediaQuery.matches ? "30%" : "100%";
    $("#memeGeneratorContainer").style.display = mediaQuery.matches
      ? "flex"
      : "none";
    $("#buttonClose").style.width = mediaQuery.matches ? "0" : "20px";
    $("#asideText").style.width = mediaQuery.matches ? "0" : "100%";
  };

  const handleTextButtonClick = () => {
    $("#asideText").style.width = mediaQuery.matches ? "30%" : "100%";
    $("#asideText").style.display = mediaQuery.matches ? "flex" : "none";
    $("#memeGeneratorContainer").style.display = mediaQuery.matches
      ? "flex"
      : "none";
    $("#buttonClose").style.display = mediaQuery.matches ? "none" : "flex";
    $("#asideImage").style.width = mediaQuery.matches ? "0" : "100%";
    console.log("aside text");
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
  $("#paragraphtopText").style.color = e.target.value;
  $("#textColorValue").textContent = e.target.value;
});

$("#textColor").addEventListener("input", (e) => {
  $("#paragraphBottomText").style.color = e.target.value;
  $("#textColorValue").textContent = e.target.value;
});

// Color de fondo
$("#backgroungColor").addEventListener("input", (e) => {
  $("#containerTopText").style.backgroundColor = e.target.value;
  $("#backgroungColorValue").textContent = e.target.value;
});

$("#backgroungColor").addEventListener("input", (e) => {
  $("#containerBottomText").style.backgroundColor = e.target.value;
  $("#backgroungColorValue").textContent = e.target.value;
});

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

$("#noOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "0";
});

$("#noOutline").addEventListener("click", () => {
  $(".paragraphBottomText").style.webkitTextStroke = "0";
});

$("#lightOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "1px white";
});

$("#lightOutline").addEventListener("click", () => {
  $(".paragraphBottomText").style.webkitTextStroke = "1px white";
});

$("#darkOutline").addEventListener("click", () => {
  $(".paragraphtopText").style.webkitTextStroke = "5px black";
});

$("#darkOutline").addEventListener("click", () => {
  $(".paragraphBottomText").style.webkitTextStroke = "5px black";
});

// Espaciado

$("#spacing").addEventListener("input", (e) => {
  $(".memeGeneratorContainer__topText").style.padding = `${e.target.value}px`;
});
$("#spacing").addEventListener("input", (e) => {
  $(
    ".memeGeneratorContainer__bottomText"
  ).style.padding = `${e.target.value}px`;
});

// Interlineado #lineSpacing

$("#lineSpacing").addEventListener("input", (e) => {
  $("#paragraphtopText").style.lineHeight = e.target.value;
});

$("#lineSpacing").addEventListener("input", (e) => {
  $("#paragraphBottomText").style.lineHeight = e.target.value;
});

// URL de la imagen

$("#urlMemeImage").addEventListener("input", (e) => {
  $(
    "#memeGeneratorContainer__image"
  ).style.backgroundImage = `url(${e.target.value})`;
  console.log(urlMemeImage);
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

/* hue(${$("#hue").value}deg) saturation(${$("#saturation").value}%) invert(${("#invert").value} */
/* 

 const firstFiltersMeme = () => {
   $(".memeGeneratorContainer__image").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue").value}deg) saturate(${$("#saturation").value}%) invert(${("#invert").value})`

}
$("#brightness").addEventListener("input", firstFiltersMeme)
$("#opacity").addEventListener("input", firstFiltersMeme)
$("#contrast").addEventListener("input", firstFiltersMeme)
$("#blur").addEventListener("input", firstFiltersMeme)
$("#grayscale").addEventListener("input", firstFiltersMeme)
$("#sepia").addEventListener("input", firstFiltersMeme)
$("#hue").addEventListener("input", firstFiltersMeme)
$("#saturation").addEventListener("input", firstFiltersMeme)
$("#invert").addEventListener("input", firstFiltersMeme)



/* 
const lastFiltersMeme = () => {
$(".memeGeneratorContainer__image").style.filter = `hue(${$("#hue").value}deg) saturation(${$("#saturation").value}%)`

}


$("#hue").addEventListener("input", lastFiltersMeme)
$("#saturation").addEventListener("input", lastFiltersMeme)
$("#invert").addEventListener("input", lastFiltersMeme)

 */

/*  const allFiltersMeme = () => {
  const brightnessValue = $("#brightness").value;
  const opacityValue = $("#opacity").value;
  const contrastValue = $("#contrast").value;
  const blurValue = $("#blur").value;
  const grayscaleValue = $("#grayscale").value;
  const sepiaValue = $("#sepia").value;
  const hueValue = $("#hue").value;
  const saturationValue = $("#saturation").value
  const invertValue = $("#invert").value


  // Aplicar los filtros en una sola cadena
  const filterValue = `brightness(${brightnessValue}) opacity(${opacityValue}) contrast(${contrastValue}%) blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue(${hueValue}deg) saturation(${saturationValue}%) invert(${invertValue})`;

  $(".memeGeneratorContainer__image").style.filter = filterValue;
} */

/* const applyInitialFilters = () => {
    const filterValue = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%)`;
    applyFilters(filterValue);
  };
  
  $("#brightness").addEventListener("input", applyInitialFilters);
  $("#opacity").addEventListener("input", applyInitialFilters);
  $("#contrast").addEventListener("input", applyInitialFilters);
  $("#blur").addEventListener("input", applyInitialFilters);
  $("#grayscale").addEventListener("input", applyInitialFilters);
  $("#sepia").addEventListener("input", applyInitialFilters);
  
  const applyColorFilters = () => {
    const filterValue = `hue(${$("#hue").value}deg) saturation(${$("#saturation").value}%)`;
    applyFilters(filterValue);
  };
  
  $("#hue").addEventListener("input", applyColorFilters);
  $("#saturation").addEventListener("input", applyColorFilters);
  
  $("#invert").addEventListener("input", () => {
    const filterValue = `invert(${$("#invert").value})`;
    applyFilters(filterValue);
  });

  const applyFilters = (filterValue) => {
    $(".memeGeneratorContainer__image").style.filter = filterValue;
  }; */

//funciona

const applyInitialFilters = () => {
  const filterValue = `brightness(${$("#brightness").value}) opacity(${
    $("#opacity").value
  }) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${
    $("#grayscale").value
  }%) sepia(${$("#sepia").value}%)`;
  applyFilters(filterValue);
};

$("#brightness").addEventListener("input", applyInitialFilters);
$("#opacity").addEventListener("input", applyInitialFilters);
$("#contrast").addEventListener("input", applyInitialFilters);
$("#blur").addEventListener("input", applyInitialFilters);
$("#grayscale").addEventListener("input", applyInitialFilters);
$("#sepia").addEventListener("input", applyInitialFilters);

const applyColorFilters = () => {
  const filterValue = `hue-rotate(${$("#hue").value}deg) saturate(${
    $("#saturation").value
  }%)`;
  applyFilters(filterValue);
};

$("#hue").addEventListener("input", applyColorFilters);
$("#saturation").addEventListener("input", applyColorFilters);

$("#invert").addEventListener("input", () => {
  const filterValue = `invert(${$("#invert").value})`;
  applyFilters(filterValue);
});

const applyFilters = (filterValue) => {
  $(".memeGeneratorContainer__image").style.filter = filterValue;
};

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
