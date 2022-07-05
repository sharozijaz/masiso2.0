gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".animate__hero", { duration: 2, x: 900, ease: "power4.out" });

tl.from(".left", {
  duration: 1,
  x: -300,
  ease: "power1.out",
  stagger: 0.25,
});
tl.from(".right", {
  duration: 1,
  x: 300,
  ease: "power1.out",
  stagger: 0.25,
});
