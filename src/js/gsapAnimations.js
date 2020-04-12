import { gsap } from "gsap";

//GSAP
export const gsapAnimation = () => {
  //Hero
  const hero = document.querySelector(".hero");
  gsap.from(hero, { opacity: 0, duration: 1, y: -50 });
};
