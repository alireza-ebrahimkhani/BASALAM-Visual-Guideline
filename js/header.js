let toolBar_hamIco = document.querySelector(".toolBar_hamIco");
let toolBar_line = document.querySelector(".toolBar_line");
let toolBar_popup = document.querySelector(".toolBar_popup");
let toolBar_close = document.querySelector(".toolBar_close");
let toolBar_logo = document.querySelector(".toolBar_logo");
let body = document.querySelector("body");
let menu_is_open = false;

toolBar_hamIco.addEventListener("click", () => {
  toolBar_popup.classList.toggle("toolBar_popup--open");
  toolBar_line.classList.toggle("toolBar_line--open");
  toolBar_hamIco.classList.toggle("toolBar_hamIco--open");
  toolBar_close.classList.toggle("toolBar_close--open");
  menu_is_open = true;
});
toolBar_popup.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
});
toolBar_close.addEventListener(
  "click",
  () => {
    if ((menu_is_open = true)) {
      toolBar_popup.classList.remove("toolBar_popup--open");
      toolBar_line.classList.remove("toolBar_line--open");
      toolBar_hamIco.classList.remove("toolBar_hamIco--open");
      toolBar_close.classList.toggle("toolBar_close--open");
      menu_is_open = false;
    }
  },
  true
);
window.addEventListener(
  "scroll",
  () => {
    if ((menu_is_open = true)) {
      toolBar_popup.classList.remove("toolBar_popup--open");
      toolBar_line.classList.remove("toolBar_line--open");
      toolbar_hamIco.classList.remove("toolBar_hamIco--open");
      toolBar_close.classList.toggle("toolBar_close--open");
      menu_is_open = false;
    }
  },
  true
);

//index
