import { formAnimation } from "./FormAnimation";
import { navItemsSlide } from "./NavItemsSlide";
import { changeLanguage } from "./ChangeLanguage";
import { scrollPage } from "./ScrollPage";
import { gsapAnimation } from "./GsapAnimations";
import { stickyNavbar } from "./StickyNavbar";

const App = () => {
  stickyNavbar();
  gsapAnimation();
  navItemsSlide();
  changeLanguage();
  formAnimation();
  scrollPage();
};

App();
