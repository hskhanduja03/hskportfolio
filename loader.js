import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register the plugin
gsap.registerPlugin(ScrollTrigger);

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
        delay:2,
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

function dynamicNavbarAnimation() {
  // --- 1. SELECT ELEMENTS ---
  const nav = document.querySelector("nav");
  const navBlurElement = document.querySelector(
    "nav .home-section > .blur-css"
  );
  const contactUsButton = document.querySelector(".contact-us");
  const contactText = document.querySelector(".contact-us .contact-text");
  const callIcon = document.querySelector(".contact-us .call-icon-wrapper");

  // --- 2. CREATE THE SHRINK ANIMATION TIMELINE ---
  // This timeline contains all the animations for shrinking the navbar.
  // It's paused by default and we will control it with ScrollTrigger.
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

  // --- 3. CREATE THE SCROLL LOGIC ---
  let scrollTimeout;

  ScrollTrigger.create({
    start: "top -80", // Start checking after scrolling down 80px
    end: 99999,
    // This function runs every time the user scrolls
    onUpdate: (self) => {
      // While scrolling (in any direction), play the shrink animation
      shrinkNavTl.play();

      // Clear the previous timeout to reset the "stop" timer
      clearTimeout(scrollTimeout);

      // Set a new timeout. If 200ms pass without a new scroll event,
      // it means the user has stopped.
      scrollTimeout = setTimeout(() => {
        // User has stopped scrolling, so reverse the animation to expand the nav
        shrinkNavTl.reverse();
      }, 200); // 200ms delay feels responsive
    },
  });
}

// Call the function to activate it
dynamicNavbarAnimation();
