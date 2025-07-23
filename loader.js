import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- LOADING ANIMATION ---
let tl = gsap.timeline();
function loadingAnimation() {
  tl.to(".loader .yellow", {
    top: "-100%",
    delay: 2,
    ease: "expo.out",
    onComplete: () => {
      document.querySelector(".loader .video-hider").style.backgroundColor =
        "transparent";
    },
  })

    .to(
      ".loader video, .loader h1",
      {
        delay: 2,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document
            .querySelector(".loader video")
            .setAttribute("autoplay", "false");
        },
      },
      "+=1.5"
    )

    .to(
      ".loader",
      {
        top: "-100%",
        ease: "expo.out",
      },
      "anim"
    )

    .to(
      ".page1 h1",
      {
        color: "black",
      },
      "anim"
    )

    .set(".loader", {
      display: "none",
    });
}
loadingAnimation();

// --- DYNAMIC NAVBAR ANIMATION ---
function dynamicNavbarAnimation() {
  const nav = document.querySelector("nav");
  const navBlurElement = document.querySelector(
    "nav .home-section > .blur-css"
  );
  const contactUsButton = document.querySelector(".contact-us");
  const contactText = document.querySelector(".contact-us .contact-text");
  const callIcon = document.querySelector(".contact-us .call-icon-wrapper");

  const shrinkNavTl = gsap.timeline({ paused: true });

  shrinkNavTl
    .to(nav, {
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
      duration: 0.4,
      ease: "power2.inOut",
    })
    .to(
      navBlurElement,
      {
        width: "200px",
        duration: 0.4,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      [contactText, ".contact-logo"],
      {
        width: 0,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.1,
        ease: "power2.in",
      },
      "<"
    )
    .to(
      contactUsButton,
      {
        width: "4rem",
        gap: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      callIcon,
      {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      ">-0.1"
    );

  let scrollTimeout;
  let lastScrollTop = 0;

  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    onUpdate: (self) => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const distanceFromBottom = docHeight - (scrollTop + windowHeight);
      const isNearBottom = distanceFromBottom <= windowHeight;
      const scrollingDown = scrollTop > lastScrollTop;
      const scrollingUp = scrollTop < lastScrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // 1. Hide navbar if scrolling down near bottom
      if (isNearBottom && scrollingDown) {
        gsap.to(nav, {
          opacity: 0,
          duration: 0.1,
          ease: "power2.inOut",
        });
        return;
      }

      // 2. Show navbar when scrolling up
      if (scrollingUp) {
        gsap.to(nav, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.inOut",
        });
      }

      // 3. Shrink navbar while scrolling
      shrinkNavTl.play();

      // 4. Expand it back when scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        shrinkNavTl.reverse();
      }, 200);
    },
  });
}

dynamicNavbarAnimation();

function animateResumeButtonOnScroll() {
  const resumeWrapper = document.getElementById("resume-button-wrapper");
  const resumeButton = resumeWrapper.querySelector(".resume-button");
  const resumeText = resumeWrapper.querySelector(".resume-text");

  const shrinkResumeTl = gsap.timeline({ paused: true });

  shrinkResumeTl
    .to(resumeButton, {
      width: "3rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      gap: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
    .to(
      resumeText,
      {
        width: 0,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.1,
        ease: "power2.in",
      },
      "<"
    );

  let lastScrollTop = 0;
  let scrollTimeout;

  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    onUpdate: (self) => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollingDown = scrollTop > lastScrollTop;
      const scrollingUp = scrollTop < lastScrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Shrink while scrolling
      shrinkResumeTl.play();

      // Expand back after scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        shrinkResumeTl.reverse();
      }, 200);
    },
  });
}

animateResumeButtonOnScroll();
