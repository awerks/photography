const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-52");
}

window.addEventListener("resize", menuResize);

function menuResize() {
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-52");
  }
}
