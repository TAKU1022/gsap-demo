import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();
timeline.from(".box1", { duration: 2, scale: 0 });
