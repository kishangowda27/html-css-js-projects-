function show() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

show();

gsap.to("#bottle", {
  rotate: -15,

  scrollTrigger: {
    trigger: "#bottle",
    scroller: "#main",
    start: "top 5%",
    end: "top -416%",
    scrub: true,
    pin: true,
  },
});

gsap.to("#bottle", {
  scale: 0.5,

  scrollTrigger: {
    trigger: "#page5 h1", 
    scroller: "#main",
    start: "top 430%%",
    end: "top -430%",
    scrub: true,
    pin: true,
  },
});

let tl = gsap.timeline();
tl.from("#bottle", {
  opacity: 0,
  duartion: 3,
});
tl.from("#main #page1_dog_image", {
  opacity: 0,
  duartion: 1,
});
