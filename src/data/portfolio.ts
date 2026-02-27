import type { SharedData } from "@/types/portfolio";

export const sharedData: SharedData = {
  basic_info: {
    name: "Ngo Van Quan",
    titles: ["FULL-STACK DEVELOPER"],
    social: [
      {
        name: "github",
        url: "https://github.com/NVQuan25",
        class: "fab fa-github",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com",
        class: "fab fa-instagram",
      },
    ],
    email: "vq.2509.2003@gmail.com",
    phone: "0945797133",
    github: "https://github.com/NVQuan25",
    image: "MyImage.png",
  },
  skills: {
    icons: [
      { name: "ReactJs", class: "devicon-react-original", level: "60" },
      {
        name: "NextJs",
        class: "devicon-nextjs-original-wordmark",
        level: "60",
      },
      { name: "GitHub", class: "devicon-github-original", level: "60" },
      { name: "HTML 5", class: "devicon-html5-plain", level: "95" },
      { name: "CSS 3", class: "devicon-css3-plain", level: "95" },
      { name: "JavaScript", class: "devicon-javascript-plain", level: "70" },
      { name: "Sass", class: "devicon-sass-original", level: "75" },
      { name: "Bootstrap", class: "devicon-bootstrap-plain", level: "85" },
      {
        name: "TailwindCss",
        class: "devicon-tailwindcss-original",
        level: "85",
      },
      { name: "NestJs", class: "devicon-nestjs-plain", level: "60" },
      { name: "Docker", class: "devicon-docker-plain", level: "60" },
      { name: "Typescript", class: "devicon-typescript-plain", level: "60" },
      { name: "Figma", class: "devicon-figma-plain", level: "60" },
      { name: "MongoDB", class: "devicon-mongodb-plain", level: "60" },
      {
        name: "Express Js",
        class: "devicon-express-original-wordmark",
        level: "60",
      },
      { name: "NodeJs", class: "devicon-nodejs-plain", level: "60" },
      { name: "SQL", class: "devicon-azuresqldatabase-plain", level: "60" },
    ],
  },
};
