var tl = gsap.timeline();
tl.from(".animate__hero", { duration: 2, x: 900, ease: "power4.out" });
gsap.to(".centre_mobile", {
  duration: 0.5,
  scale: 1.1,
  ease: "power1.inOut",
  repeat: 1,
  yoyo: true,
});
