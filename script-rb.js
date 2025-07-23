import gsap from "gsap";

Shery.imageEffect("#back-rb", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.94, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.082236837977518 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.84, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 14.5, range: [0, 100] },
  },
  gooey: true,
});

// --- INITIAL IMAGE SETUP ---
// Get all the images and hide all but the first one
const allImages = document.querySelectorAll("#back-rb img");
gsap.set(allImages, { opacity: 0 });
gsap.set(allImages[0], { opacity: 1 });

// --- CLICK FUNCTIONALITY ---
// --- CLICK FUNCTIONALITY ---
let i = 1;
let animating = false;

// CORRECTED: Use the underscore to match your HTML ID
const main_rb = document.querySelector("#main_rb");

if (main_rb) {
  main_rb.onclick = () => {
    if (!animating) {
      animating = true;
      const currentElementIndex = i;

      // Fade out the current image
      gsap.to(allImages[currentElementIndex - 1], {
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });

      // Animate the text out
      gsap.to(`.elem-rb h1:nth-child(${currentElementIndex})`, {
        top: "-=100%",
        ease: "expo.inOut",
        duration: 1,
        onComplete: () => {
          gsap.set(`.elem-rb h1:nth-child(${currentElementIndex})`, {
            top: "100%",
          });
        },
      });

      // Update the counter
      i = i >= 2 ? 1 : i + 1;

      // Fade in the next image
      gsap.to(allImages[i - 1], {
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
      const imgDiv = document.querySelector(".img-div-rb");
      const fadeLayer = document.querySelector(".img-fade-layer");

      if (imgDiv && fadeLayer) {
        const newImage =
          i === 1 ? "/projects/feedlytic.png" : "/projects/FeedLyticdark.png";

        // Set the fade layer image and fade it in
        fadeLayer.style.backgroundImage = `url(${newImage})`;
        fadeLayer.style.opacity = "1";

        // After transition, update the main background and hide the fade layer
        setTimeout(() => {
          imgDiv.style.backgroundImage = `url(${newImage})`;
          fadeLayer.style.opacity = "0";
        }, 800); // match with transition duration
      }

      // Animate the next text in
      gsap.to(`.elem-rb h1:nth-child(${i})`, {
        top: "0",
        ease: "expo.inOut",
        duration: 1,
        onComplete: () => {
          animating = false;
        },
      });
    }
  };
}
const mainRb = document.getElementById("main_rb");

const clickCursor = document.createElement("div");
clickCursor.id = "click-cursor";
clickCursor.innerHTML = "Featured<br/>Project";
document.body.appendChild(clickCursor);

mainRb.addEventListener("mousemove", (e) => {
  clickCursor.style.left = `${e.clientX}px`;
  clickCursor.style.top = `${e.clientY}px`;
  clickCursor.style.display = "flex";
});

mainRb.addEventListener("mouseleave", () => {
  clickCursor.style.display = "none";
});
