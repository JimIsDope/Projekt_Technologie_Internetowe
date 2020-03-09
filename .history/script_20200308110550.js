const hero = document.querySelector(".hero");
const heroImage = document.createElement("img");
heroImage.src = "images/hero-image.svg";
hero.appendChild(heroImage);

gsap.from("#Screen", { opacity: 0, duration: 1 });
