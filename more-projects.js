// tech stack animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", () => {
  const split = new SplitType(".text-revel", { types: "chars" });

  const highlightedSpan = document.querySelector(".highlights");
  highlightedSpan.innerHTML += `<span class="highlighted-one">1</span>`;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-animation",
      scroller: "body",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%", // Add more if animation isn't finishing
    },
  });

  scrollTl
    .from(".text-revel .char", {
      yPercent: -20,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.out",
      duration: 0.6,
    })
    .to(highlightedSpan, { color: "#c75656", duration: 0.5 })
    .to(
      ".highlighted-one",
      {
        keyframes: {
          yPercent: [0, -50, 0],
          opacity: [0, 1, 1],
        },
        duration: 1,
      },
      "-=0.5"
    );

  // Smooth Scroll
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
});

document.addEventListener("DOMContentLoaded", function () {
  const techsRow1 = [
    {
      name: "HTML",
      color: "#E34F26",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      color: "#1572B6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      color: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      color: "#000000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
    },
    {
      name: "Redux",
      color: "#764ABC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Figma",
      color: "#F24E1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "GSAP",
      color: "#88CE02",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUASnkyRvUnJRW94LrX7WDDB0aJB3k15O2A&s",
    },
    {
      name: "Posthog",
      color: "#000000",
      icon: "https://posthog.com/brand/posthog-logo-stacked@2x.png",
    },
    {
      name: "VS Code",
      color: "#007ACC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "NPM",
      color: "#CB3837",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  ];
  const techsRow2 = [
    {
      name: "Python",
      color: "#3776AB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      color: "#000000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Node.js",
      color: "#339933",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      color: "#000000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "GraphQL",
      color: "#E10098",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "MongoDB",
      color: "#47A248",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      color: "#336791",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "NeonDB",
      color: "#000000",
      icon: "https://neon.com/favicon/favicon.png",
    },
    {
      name: "Drizzle ORM",
      color: "#0088CC",
      icon: "https://pbs.twimg.com/media/F7V2rLQWUAAgaLh.jpg",
    },
    {
      name: "Apollo GraphQL",
      color: "#0088CC",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0BhgRSouFN6N0xkKL4fbpFIvZoKfFrVsJA&s",
    },
    {
      name: "Supabase",
      color: "#3ECF8E",
      icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
    },
    {
      name: "Qdrant",
      color: "#FF6B00",
      icon: "https://raw.githubusercontent.com/deepset-ai/haystack-integrations/main/logos/qdrant.png",
    },
    {
      name: "LangChain",
      color: "#000000",
      icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0",
    },
    {
      name: "HuggingFace",
      color: "#FFD21F",
      icon: "https://cas-bridge.xethub.hf.co/xet-bridge-us/63d3eec885118edc0439bd98/42dd3b8c53d22decf93648f619813e61c44a32e939e705ce5a00d182cbda6fea?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20250723%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250723T114628Z&X-Amz-Expires=3600&X-Amz-Signature=a9b3d474c5e60f8b07100e348a205d5d2c6b1ea41557a17fc4ec609460d6f0bc&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=6684cf0446da9ec5d6a3a975&response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.png%3B+filename%3D%22hf-logo.png%22%3B&response-content-type=image%2Fpng&x-id=GetObject&Expires=1753274788&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc1MzI3NDc4OH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82M2QzZWVjODg1MTE4ZWRjMDQzOWJkOTgvNDJkZDNiOGM1M2QyMmRlY2Y5MzY0OGY2MTk4MTNlNjFjNDRhMzJlOTM5ZTcwNWNlNWEwMGQxODJjYmRhNmZlYSoifV19&Signature=ZY4dEHA8WYYkp9O%7EKjwgGQAkmvHKUOXEkHHcA9glInn-l1YeplMQuRpmlPeIBnV8%7EYv2XFpP2-wsVm4rrOR3a7JVrQ8ISfGe5hQXNNIxiOrn1z-04U8PYX3S3Vd1Qwl5IWzcnij0G6KrYk9zWTVWtrTKg95InVY%7E3IpV1waHkvW7cB%7EZbMX-QfT27ttjzcZvdZ4qaSPMIQDgFDdkgEdboi5BZz3XeK5U-MAACmkiSjzCF9NTVgV4XlxQtOtwZtD3pP91CwqCcJThGeAfK8XMsa7CU3pZGIgDd4BJEKIbKIgsbMsamq%7Ef54GhDWOlOrxZC2nchMRQ0TG6ApGPGgWk5w__&Key-Pair-Id=K2L8F4GPSG1IFC",
    },
    {
      name: "BeautifulSoup",
      color: "#000000",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-Yl2BxNCcGpmqIk6cr9k94R1C0ggio2nHw&s", // fallback unofficial icon
    },
    {
      name: "AWS S3/EC2",
      color: "#FF9900",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8_ACwdQT0NMs_ptU8917_1THnLQqxK_u8Q&s",
    },
    {
      name: "Docker",
      color: "#0db7ed",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      color: "#FF6C37",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Git",
      color: "#F05032",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      color: "#181717",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Cloudinary",
      color: "#3448C5",
      icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAg1AAZAA0",
    },
    {
      name: "Clerk",
      color: "#3E5FE0",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG6N_SAABvc99uhpvkvpXpVDZyuX0Nyaeag&s",
    },
  ];

  const row1 = document.getElementById("tech-scroll-row-1");
  const row2 = document.getElementById("tech-scroll-row-2");

  const renderTechRow = (techs, row) => {
    const doubledTechs = [...techs, ...techs]; // for smooth infinite scroll
    doubledTechs.forEach((tech) => {
      const wrapper = document.createElement("div");
      wrapper.className =
        "flex-shrink-0 group relative hover:-translate-y-2 hover:scale-105 transition-all duration-300";

      const iconWrapper = document.createElement("div");
      iconWrapper.className =
        "flex h-20 w-20 items-center justify-center rounded-xl bg-white dark:bg-white/10 p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl";
      iconWrapper.style.boxShadow = `0 8px 30px ${tech.color}33`;

      const img = document.createElement("img");
      img.src = tech.icon;
      img.alt = tech.name;
      img.className = "h-10 w-10 object-contain";

      const dot = document.createElement("div");
      dot.className =
        "absolute -bottom-1 -right-1 h-3 w-3 rounded-full opacity-50 group-hover:opacity-100";
      dot.style.backgroundColor = tech.color;

      iconWrapper.appendChild(img);
      wrapper.appendChild(iconWrapper);
      wrapper.appendChild(dot);

      row.appendChild(wrapper);
    });
  };

  renderTechRow(techsRow1, row1);
  renderTechRow(techsRow2, row2);
});

// more-projects script
import { homepage } from "./js/data.json";
const { moreProjects } = homepage;

const container = document.getElementById("project-list");

moreProjects.forEach((project) => {
  const div = document.createElement("div");
  div.className =
    "hover-target group flex flex-wrap justify-center items-center gap-3 text-[clamp(3.5rem,4vw,3rem)] hover:text-white cursor-pointer";
  div.dataset.index = project.index;

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "relative group/image overflow-hidden rounded-md";

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;
  img.className = "hover-img object-cover";
  img.style.width = "4rem";
  img.style.height = "4rem";

  // Overlay div
  const overlay = document.createElement("a");
  overlay.href = project.github;
  overlay.className =
    "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center";
  // GitHub SVG icon
  overlay.innerHTML = `
  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.289 3.438 9.775 8.207 11.387.6.111.793-.261.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.335-1.756-1.335-1.756-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.525 11.525 0 0 1 3.003-.403c1.019.005 2.045.137 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.652.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.07 24 17.584 24 12.297 24 5.67 18.627.297 12 .297z"
    />
  </svg>
`;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(overlay);

  const a = document.createElement("a");
  a.textContent = project.title;
  a.href = project.link;

  // Alternate layout: even => text + image, odd => image + text
  if (project.index % 2 === 0) {
    div.appendChild(a);
    div.appendChild(imageWrapper);
  } else {
    div.appendChild(imageWrapper);
    div.appendChild(a);
  }

  container.appendChild(div);
});
// Now attach the hover animation after elements are in DOM
document.querySelectorAll(".hover-target").forEach((container) => {
  const img = container.querySelector(".hover-img");

  container.addEventListener("mouseenter", () => {
    gsap.to(img, {
      width: "11rem",
      height: "8rem",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(img, {
      width: "4rem",
      height: "4rem",
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  });
});

const wrapper = document.querySelector("#horizontal-section-wrapper");
const section = document.querySelector("#horizontal-section");
const heading = document.querySelector(".horizontal-heading");
const elements = document.querySelector(".horizontal-elements");

// Get width of horizontal content (elements)
const totalScrollWidth = elements.scrollWidth;
const viewportWidth = window.innerWidth;
const scrollDistance = totalScrollWidth - viewportWidth;

// Set wrapper height equal to scroll distance + viewport height (so it pins long enough)
wrapper.style.height = `${scrollDistance + window.innerHeight}px`;

gsap
  .timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: section,
      anticipatePin: 1,
    },
  })
  .to(section, {
    clipPath: "circle(100% at 50% 50%)",
    ease: "power1.out",
  })
  .to(
    heading,
    {
      x: -scrollDistance * 0.73,
      ease: "none",
    },
    "<"
  )
  .to(
    elements,
    {
      x: -scrollDistance * 0.845,
      ease: "none",
    },
    "<"
  );