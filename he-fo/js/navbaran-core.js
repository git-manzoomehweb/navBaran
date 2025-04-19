const navOpener = document.querySelector(".open-menu"),
  navCloser = document.querySelector(".nav-closer"),
  mobileMenu = document.querySelector(".menu-mob");
navOpener.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.style.overflow = "hidden";
  mobileMenu.classList.remove("translate-x-[7000px]");
});

navCloser.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-[7000px]");
});
const header = document.querySelector(".main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 35) {
    header.classList.add("fixed", "top-0", "left-0", "shadow-md");
  } else {
    header.classList.remove("fixed", "top-0", "left-0", "shadow-md");
  }
  if (!mobileMenu.classList.contains("translate-x-[7000px]")) {
    header.classList.remove("fixed", "top-0", "left-0", "shadow-md");
  }
});
