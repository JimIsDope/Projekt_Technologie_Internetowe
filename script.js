//Hamburger slider
const navItemsSlide = () => {
  const burgerLines = document.querySelectorAll(".hamburger__line");
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav__items");
  const navItems = document.querySelectorAll(".nav__items li");
  const btnLang = document.querySelector(".language");
  //Toggle class active
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav__items-active");
    burger.classList.toggle("hamburger-active");
    burgerLines.forEach((item) => {
      item.classList.toggle("hamburger__line-active");
    });
    btnLang.classList.toggle("language-mobile");
    //Animation
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
        item.style.margin = 0;
      }
    });
  });
};

//Changing site's language
const changeLanguage = () => {
  const btnLang = document.querySelector(".language");
  const navList = document.querySelectorAll(".nav__li a");
  btnLang.addEventListener("click", () => {
    navList[0].textContent = "Home";
    navList[1].textContent = "About";
    navList[2].textContent = "Skills";
    navList[3].textContent = "Contact";
    btnLang.textContent = "Polski";
  });
};

const App = () => {
  navItemsSlide();
  changeLanguage();
};

App();
