import "./style.css";
import menuAnimation from "./js/navbar";
import marqueeAnimationFooter from "./js/marqueeAnimationFooter";
import faqAnimation from "./js/faq";
import { homepage } from "./js/data.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import Lenis from "lenis";
import ThreeDPinAnimation from "./js/ThreeDPinAnimation";

const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);
const pc = window.innerWidth > 600;

// Configs
gsap.registerPlugin(ScrollTrigger);

// Calling F(x)
smoothScroll();
menuAnimation();
marqueeAnimationFooter();
// hideNavOverFooter();
cardsAnimation();
faqAnimation();
ThreeDPinAnimation();
horizontalScroll();
ThreeDPinAnimation();

// Imp F(x)
function smoothScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function hideNavOverFooter() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "footer",
      markers: true,
    },
  });
}

function cardsAnimation() {
  /* Set Defaults */
  const { cardsData } = homepage;
  const cardSection = $(".cards-section");

  cardsData.forEach((cD) => {
    const { img, title, desc, github, link, techStack = [] } = cD;
	 const techStackHTML = techStack
     .map(
       (tech) =>
         `<span class="px-2 py-1 bg-white/20 rounded-full text-xs font-medium text-white">${tech}</span>`
     )
     .join(" ");

     cardSection.innerHTML += `
    <div class="card-container m-[4vh] sm:-m-[11vw] cursor-pointer">
      <div class="card w-[90vw] sm:w-[22vw] aspect-card relative overflow-hidden group">

        <div class="details hidden size-full px-[5%] py-[10%] flex-col justify-between gap-[5%] rounded-[14px] backdrop-blur-lg bg-white/10 border border-white/20 shadow-md">
          <div class="w-full h-full rounded-xl overflow-hidden relative">
<div class="w-full h-[200px] rounded-xl overflow-hidden relative">
  <img src="${img}" class="w-full h-full object-cover object-center rounded-[14px]" />
</div>
            
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 z-10">
              <a href="${github}" target="_blank" class="text-white hover:text-indigo-300">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.289 3.438 9.775 8.207 11.387.6.111.793-.261.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.335-1.756-1.335-1.756-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.525 11.525 0 0 1 3.003-.403c1.019.005 2.045.137 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.652.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.07 24 17.584 24 12.297 24 5.67 18.627.297 12 .297z"/>
                </svg>
              </a>
              <a href="${link}" target="_blank" class="text-white hover:text-indigo-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 13V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

          <h1 class="font-semibold">${title}</h1>
          <p class=" tracking-wider">${desc}</p>

          <div class="flex flex-wrap gap-2 mt-2">
            ${techStackHTML}
          </div>
        </div>

        <div class="bg bg-cover bg-white absolute top-0 left-0 size-full rounded-[14px]"></div>
      </div>
    </div>
  `;
  });

  const cards = $$(".card-container");

  cards.forEach((card) => {
    const img = $("img", card);

    const tw = gsap.to(img, {
      scale: 1,
      ease: "power1.inOut",
      paused: true,
    });

    card.addEventListener("mouseenter", () => tw.play());
    card.addEventListener("mouseleave", () => tw.reverse());
  });

  if (pc) {
    const swingTween = gsap.fromTo(
      ".card",
      {
        y: -10,
      },
      {
        y: 10,
        stagger: { each: 0.3, yoyo: true, repeat: -1 },
        ease: "power1.inOut",
        duration: 1.5,
        paused: true,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        start: "top top",
        trigger: ".cards-headings",
        scrub: 2,
        end: "bottom -100%",
      },
      onStart: () => swingTween.play(),
      // onComplete: () => {
      //   swingTween.pause();
      //   gsap.to('.card', { y: 0 })
      // }
    });

    tl.to(".cards-section, .cards-headings", { backgroundColor: "#000" })
      .to(
        cards[0],
        { rotateZ: -20, ease: "back.inOut", duration: 0.3 },
        "<+0.3"
      )
      .to(cards[1], { rotateZ: -5, ease: "back.inOut", duration: 0.3 }, "<")
      .to(cards[2], { rotateZ: 5, ease: "back.inOut", duration: 0.3 }, "<")
      .to(cards[3], { rotateZ: 20, ease: "back.inOut", duration: 0.3 }, "<")
      .to(cards, { margin: "0", ease: "power1.inOut" }, "-=0.1")
      .to(".card .bg", { rotateY: -90, stagger: 0.1, ease: "back.in" }, "<")
      .to(
        ".card .details",
        { display: "flex", rotateY: 0, stagger: 0.1, ease: "back.out" },
        "<+=0.5"
      )
      .to(cards, { rotateZ: 0, ease: "back.inOut" }, "<")
      .to(cards, { margin: "10", ease: "back.inOut" }, "<")
      .set(".card .bg", { display: "none", stagger: 0.1 }, "<+0.2");

    ScrollTrigger.create({
      // markers: true,
      pin: ".cards-section",
      end: "bottom -50%",
    });
  } else {
    cards.forEach((card) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          start: "top 50%",
          trigger: card,
          scrub: 5,
          end: "top 49%",
        },
      });

      cardTl
        .to(".cards-section, .cards-headings", { backgroundColor: "#903ED6" })
        .to(card.querySelector(".bg"), {
          rotateY: -90,
          stagger: 0.1,
          ease: "back.in",
        })
        .to(
          card.querySelector(".details"),
          { display: "flex", rotateY: 0, stagger: 0.1, ease: "back.out" },
          "<+=0.5"
        )
        .to(cards, { rotateZ: 0, ease: "back.inOut" }, "<")
        .to(cards, { margin: "10", ease: "back.inOut" }, "<")
        .set(
          card.querySelector(".bg"),
          { display: "none", stagger: 0.1 },
          "<+0.2"
        );
    });

    gsap.to("main", {
      scrollTrigger: {
        trigger: cardSection,
        end: "top 80%",
        scrub: true,
      },
    });
  }
}

function horizontalScroll() {
  const scrollTl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".animate-scroll",
      start: "top top",
      end: "top -200%",
      pin: ".animate-scroll-parent",
      scrub: true,
      // markers: true,
    },
  });

  // SetDefaults
  gsap.set(".motion-image", { xPercent: -50, yPercent: -55 });
  const circle = document.querySelectorAll(".chart circle");
  const text = document.querySelectorAll(".chart text");

  const p = gsap.utils.selector(".animate-scroll-parent");

  // Progress bar
  let path = document.querySelector(".ani-curve");
  let pathLength = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: pathLength + " " + pathLength,
    strokeDashoffset: pathLength,
  });

  // Second Page
  const imgs = p(".animate-scroll >div:nth-child(2) img");

  scrollTl
    // First Section
    .to(p(".motion-image"), {
      motionPath: {
        path: ".curve",
        align: ".curve",
        ease: "ease.In",
        autoRotate: true,
        start: 0,
        end: 1,
      },
      onUpdate: function () {
        const p = Math.round(this.ratio * 100);
        const duration = 0.2;

        switch (true) {
          case p > 99:
            gsap.to(circle, { attr: { r: 13 }, duration });
            break;
          case p >= 82:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(circle[4], { attr: { r: 30 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(text[4], { opacity: 1, duration });
            gsap.to(".crown", { opacity: 1, duration });
            break;
          case p >= 71:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(circle[3], { attr: { r: 30 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(text[3], { opacity: 1, duration });
            gsap.to(".crown", { opacity: 0 });
            break;
          case p >= 62:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(circle[2], { attr: { r: 30 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(text[2], { opacity: 1, duration });
            break;
          case p >= 45:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(circle[1], { attr: { r: 30 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(text[1], { opacity: 1, duration });
            break;
          case p >= 30:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(circle[0], { attr: { r: 30 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(text[0], { opacity: 1, duration });
            break;
          default:
            gsap.to(circle, { attr: { r: 13 }, duration });
            gsap.to(text, { opacity: 0.5 });
            gsap.to(".crown", { opacity: 0 });
        }
      },
    })
    .to(
      path,
      {
        strokeDashoffset: 0,
        ease: "ease.in",
      },
      "<"
    )
    .to(p(".growth"), { x: "200px" }, "<")
    .to(
      p(".motion-image"),
      {
        xPercent: 50,
        yPercent: -500,
        rotate: -85,
        ease: "ease.out",
        duration: 0.1,
      },
      "-=0.1"
    );

  document.addEventListener("mousemove", function (d) {
    const clampedX = gsap.utils.clamp(300, window.innerWidth - 300);

    gsap.to(p(".bg_movingdiv"), {
      left: clampedX(d.x),
      yPercent: -20,
      xPercent: -50,
    });
  });

  gsap.registerPlugin(MotionPathPlugin);
}
