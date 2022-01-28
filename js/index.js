import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const targetList = [...document.querySelectorAll('[data-animation]')];

window.addEventListener('load', () => {
  targetList.forEach((target) => {
    gsap.from(target, {
      scrollTrigger: { trigger: target, markers: true, once: true },
      duration: 2,
      scale: 0,
    });
  });
});
