import { formAnimation } from "./FormAnimation";
import { navItemsSlide } from "./NavItemsSlide";
import { scrollPage } from "./ScrollPage";
import { gsapAnimation } from "./GsapAnimations";
import { stickyNavbar } from "./StickyNavbar";

const App = () => {
  stickyNavbar();
  gsapAnimation();
  navItemsSlide();
  formAnimation();
  scrollPage();
};

App();
