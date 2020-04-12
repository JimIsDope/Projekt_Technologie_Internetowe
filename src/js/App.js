import { formAnimation } from "./formAnimation";
import { navItemsSlide } from "./navItemsSlide";
import { changeLanguage } from "./changeLanguage";
import { scrollPage } from "./scrollPage";
import { gsapAnimation } from "./gsapAnimations";

const App = () => {
  gsapAnimation();
  navItemsSlide();
  changeLanguage();
  formAnimation();
  scrollPage();
};

App();
