const tl = new TimelineMax({ delat: 1 });
const screen = document.getElementById("#Screen");
gsap.to(screen, { opacity: 0, duration: 1 });
