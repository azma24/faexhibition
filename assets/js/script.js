// スクロール表示

const header = document.querySelector(".header__inner");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll > 520) {
    header.classList.add("is-show");
  } else {
    header.classList.remove("is-show");
  }
});

// ハンバーガーメニュー

const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");
const navLinks = document.querySelectorAll(".header__nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
  });
});
