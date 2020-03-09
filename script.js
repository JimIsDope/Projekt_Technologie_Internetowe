//Inserting hero image
const hero = document.querySelector(".hero");
const heroImage = document.createElement("img");
heroImage.src = "images/hero-image.svg";
hero.appendChild(heroImage);



//Changing site's language
const btnLang = document.querySelector('.language');
const navList = document.querySelectorAll('.nav__li a');
const changeLanguage = () =>
{
    navList[0].textContent = "Home";
    navList[1].textContent = "About";
    navList[2].textContent = "Skills";
    navList[3].textContent = "Contact";
    btnLang.textContent = "Polski";
}
btnLang.addEventListener('click', changeLanguage);