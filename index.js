const menuBtn = document.querySelector("#menu-btn");
const navWrapper = document.querySelector("nav .wrapper");

menuBtn.addEventListener("click", () => {
  navWrapper.classList.toggle("open");
});
