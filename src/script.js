import { gsap } from "gsap";

//GSAP
const gsapAnimation = () => {
  //Hero
  const hero = document.querySelector(".hero");
  gsap.from(hero, { opacity: 0, duration: 1, y: -50 });
};

//Hamburger slider
const navItemsSlide = () => {
  const burgerLines = document.querySelectorAll(".hamburger__line");
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav__items");
  const navItems = document.querySelectorAll(".nav__items li");
  const btnLang = document.querySelector(".button-language");

  //Toggle class active
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav__items-active");
    burger.classList.toggle("hamburger-active");
    burgerLines.forEach((item) => {
      item.classList.toggle("hamburger__line-active");
    });
    btnLang.classList.toggle("button-language-mobile");

    //Animation
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemsFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        item.style.margin = 0;
      }
    });
  });
};

//Changing site's language
const changeLanguage = () => {
  const btnLang = document.querySelector(".button-language");
  const btnBanner = document.querySelector(".button-banner");
  const navList = document.querySelectorAll(".nav__li a");
  btnLang.addEventListener("click", () => {
    navList[0].textContent = "home";
    navList[1].textContent = "about";
    navList[2].textContent = "skills";
    navList[3].textContent = "contact";
    btnLang.textContent = "polski";
    btnBanner.textContent = "contact";
  });
};

const App = () => {
  gsapAnimation();
  navItemsSlide();
  changeLanguage();
};

App();
