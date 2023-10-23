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


