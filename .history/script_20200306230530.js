const hero = document.querySelector(".hero");
const heroImage = document.createElement("img");
heroImage.src = "images/hero-image.svg";
heroImage.sizes.fixed;
hero.appendChild(heroImage);
