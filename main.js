import gsap from "https://cdn.skypack.dev/gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
console.log(ScrollTrigger.version); // -> 3.12.2

gsap.registerPlugin(ScrollTrigger);

addEventListener("DOMContentLoaded", (event) => {
  gsap.fromTo(
    ".anim_fade_in_right_maki",
    { x: -30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".coffee_menu__img",
        start: "top, center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  gsap.fromTo(
    ".anim_fade_in_left_origan",
    { x: 30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".bg-color--coffee",
        start: "center, center ",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  gsap.fromTo(
    ".anim_fade_in_right_text",
    { x: 30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".coffee_menu__img",
        start: "center, center ",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  gsap.fromTo(
    ".anim_fade_in_left_text",
    { x: -30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".bg-color--coffee",
        start: "center, center ",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );
});
