const nav = document.querySelector(".header-nav nav");
document.querySelector(".icon-menu").addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
});
document.querySelector(".mobile-content img:last-child").addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});
