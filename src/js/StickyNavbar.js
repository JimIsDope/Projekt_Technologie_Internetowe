export const stickyNavbar = () => {
  window.onscroll = () => {
    navToggleClass();
  };

  const nav = document.querySelector(".nav");
  const sticky = nav.offsetTop;

  const navToggleClass = () => {
    if (window.pageYOffset >= sticky + 300) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
};
