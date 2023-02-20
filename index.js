const menuBtn = document.querySelector("#menu-btn");
const navWrapper = document.querySelector("nav .wrapper");

menuBtn.addEventListener("click", () => {
  navWrapper.classList.toggle("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navWrapper.classList.remove("open");
  }

  console.log(e.key);
});
