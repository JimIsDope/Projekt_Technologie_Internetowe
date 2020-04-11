import { gsap } from "gsap";
import $ from "jquery";
window.jQuery = $;
window.$ = $;

//GSAP
const gsapAnimation = () => {
  //Hero
  const hero = document.querySelector(".hero");
  gsap.from(hero, { opacity: 0, duration: 1, y: -50 });
};

//Form JQuery
const formAnimation = () => {
  $("input").focus(function () {
    $(this).parents(".form__group").addClass("focused");
  });
  $("textarea").focus(function () {
    $(this).parents(".form__group").addClass("focused");
  });
  $("input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form__group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
  $("textarea").blur(function () {
    var areaValue = $(this).val();
    if (areaValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form__group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
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
  const aboutTitle = document.querySelector(".aboutTitle");
  const aboutText = document.querySelector(".aboutText");
  btnLang.addEventListener("click", () => {
    navList[0].textContent = "home";
    navList[1].textContent = "about";
    navList[2].textContent = "skills";
    navList[3].textContent = "contact";
    btnLang.textContent = "polski";
    btnBanner.textContent = "contact";
    aboutTitle.textContent = "about";
    aboutText.textContent = "Text in english, lorem impsum....";
  });
};

const App = () => {
  gsapAnimation();
  navItemsSlide();
  changeLanguage();
  formAnimation();
};

App();
