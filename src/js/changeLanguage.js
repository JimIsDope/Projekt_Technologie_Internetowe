//Changing site's language
export const changeLanguage = () => {
  const btnLang = document.querySelector(".button-language");
  const btnBanner = document.querySelector(".button-banner");
  const aboutTitle = document.querySelector(".about__info h1");
  // const aboutText = document.querySelector(".about__info p");
  const skillsTitle = document.querySelector(".skills__title");
  const navList = document.querySelectorAll("li a");
  const contactTitle = document.querySelector(".contact h1");
  const formLabels = document.querySelectorAll(".form__label");
  const projectsTitle = document.querySelector(".projects__title");
  btnLang.addEventListener("click", () => {
    navList[0].textContent = "home";
    navList[1].textContent = "about";
    navList[2].textContent = "skills";
    navList[3].textContent = "projects";
    navList[4].textContent = "contact";
    btnLang.textContent = "polski";
    btnBanner.textContent = "contact";
    aboutTitle.textContent = "about";
    skillsTitle.textContent = "skills";
    contactTitle.textContent = "contact";
    projectsTitle.textContent = "projects";
    formLabels[0].textContent = "Name";
    formLabels[1].textContent = "Email";
    formLabels[2].textContent = "Company";
    formLabels[3].textContent = "Message";
  });
};
