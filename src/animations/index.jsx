import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  const introTl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onStart: () => {
      gsap.set("body", { overflow: "hidden" });
      gsap.set(".preloader", { display: "flex", opacity: 1 });
    },
    onComplete: () => {
      gsap.set("body", { overflowY: "auto" });
      gsap.set(".preloader", { display: "none", clearProps: "opacity" });
    },
  });

  introTl
    .fromTo(
      ".preloader__frame",
      { opacity: 0, y: 26, scale: 0.985 },
      { opacity: 1, y: 0, scale: 1, duration: 0.72 },
    )
    .from(".preloader__core", { opacity: 0, scale: 0.8, duration: 0.48 }, "-=0.5")
    .from([".preloader__brand", ".preloader__tagline"], { opacity: 0, y: 10, stagger: 0.08, duration: 0.32 }, "-=0.22")
    .from(".preloader__status", { opacity: 0, y: 10, duration: 0.3 }, "-=0.2")
    .from(".preloader__progress-track", { opacity: 0, duration: 0.22 }, "-=0.16")
    .fromTo(
      ".preloader__progress-fill",
      { scaleX: 0 },
      { scaleX: 1, duration: 1.7, ease: "power2.inOut" },
    )
    .to(
      ".preloader__status-stack",
      {
        yPercent: -200,
        duration: 1.35,
        ease: "power1.inOut",
      },
      "-=1.6",
    )
    .fromTo(
      ".preloader__progress-glow",
      { xPercent: -120 },
      { xPercent: 430, duration: 1.1, ease: "power2.inOut" },
      "-=1.1",
    )
    .to(".preloader__frame", { opacity: 0, scale: 0.985, duration: 0.38, ease: "power2.inOut" }, "+=0.12")
    .to(".preloader", { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.14");

  return introTl;
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.1,
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.1,
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: 0.3,
      css: { fill: "#ffffff" },
    })
    .to(
      [".nav-secondary", ".nav-primary"],
      {
        duration: 0.8,
        height: "100%",
        transformOrigin: "right top",
        stagger: {
          amount: 0.1,
        },
        ease: "power3.inOut",
      },
      "-=.5"
    )
    .from(
      ".nav-link",
      {
        duration: 0.5,
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "Power3.in",
      },
      "-=.3"
    );

  // change cursor color when nav is open
  // tl.to(".cursor", {
  //   delay: -1,
  //   css: { className: "+=cursor-active" },
  // }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.05,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.8,
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1,
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: -0.3,
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.5,
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.05,
      css: { display: "none" },
    });

  // tl.to(".cursor-active", {
  //   css: { className: "+=cursor" },
  // }).to(".cursor2-active", { css: { className: "+=cursor2" } });
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 1,
      })
      .from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.3,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "Power3.easeOut",
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector(".link"), {
      duration: 0,
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 2,
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};
