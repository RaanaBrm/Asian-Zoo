const hambugerMenu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector("nav");
hambugerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("open-menu");
});
