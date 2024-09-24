import type { SkillCardProps } from "@/utils/SkillCardProps";
import type { ProjectCardProps } from "@/utils/ProjectCardProps";
import type { CertificateCardProps } from "@/utils/CertificateCardProps";

import { DeviconHtml5 } from "@/icons/DeviconHtml5";
import { DeviconCss3 } from "@/icons/DeviconCss3";
import { LogosJavascript } from "@/icons/LogosJavascript";
import { LogosLaravel } from "@/icons/LogosLaravel";
import { DeviconReact } from "@/icons/DeviconReact";
import { DeviconTypescript } from "@/icons/DeviconTypescript";
import { LogosTailwindcssIcon } from "@/icons/LogosTailwindcssIcon";

export const skills: SkillCardProps[] = [
  {
    skillText: "html5",
    bgColor: "#e44d26",
    LogoIcon: DeviconHtml5,
  },
  {
    skillText: "css",
    bgColor: "#264de4",
    LogoIcon: DeviconCss3,
  },
  {
    skillText: "javascript",
    bgColor: "#f7df1e",
    LogoIcon: LogosJavascript,
  },
  {
    skillText: "laravel",
    bgColor: "#ff2d20",
    LogoIcon: LogosLaravel,
  },
  {
    skillText: "React",
    bgColor: "#00d8ff",
    LogoIcon: DeviconReact,
  },
  {
    skillText: "typescript",
    bgColor: "#3178c6",
    LogoIcon: DeviconTypescript,
  },
  {
    skillText: "tailwindcss",
    bgColor: "#2298bd",
    LogoIcon: LogosTailwindcssIcon,
  },
];

import scrollImg from "@/assets/img/projects/infinite-scroll-page-min.png";

export const projects: ProjectCardProps[] = [
  {
    title: "Laravel To Do List",
    description: "Aplicacion web de listas de tareas.",
    tecnologies: ["laravel", "livewire", "breeze", "tailwindcss"],
    img: "https://raw.githubusercontent.com/Ezebed/Laravel-To-Do-List/main/public/img/example.png",
    siteUrl: "",
    git: "https://github.com/Ezebed/Laravel-To-Do-List",
  },
  {
    title: "Poke Infinite Scroll",
    description: "scroll infinito usando un custom hook.",
    tecnologies: ["react", "typescript", "tailwindcss"],
    img: scrollImg.src,
    siteUrl: "https://poke-infinite-scroll.netlify.app",
    git: "https://github.com/Ezebed/infinite-scroll-react",
  },
  {
    title: "E-commerce Shop Cart",
    description: "simulacion de un carrito de compras de un e-commerce.",
    tecnologies: [
      "react",
      "typescript",
      "ChakraUI",
      "react router dom",
      "tanstack query",
    ],
    img: "https://raw.githubusercontent.com/Ezebed/e-commerce-react-ts/main/src/assets/img/ezeStore-min.png",
    siteUrl: "https://ezebed-e-commerce-shop-cart.netlify.app/",
    git: "https://github.com/Ezebed/e-commerce-react-ts",
  },
];

import certificateLaravelImg from "@/assets/img/cursos/curso-de-laravel.webp";
import certificateLaravelPdf from "@/assets/certificates/diploma-laravel_compressed.pdf";

export const certificates: CertificateCardProps[] = [
  {
    imgSrc: certificateLaravelImg.src,
    courseName: "Curso de Laravel",
    date: "2024",
    pdfPath: certificateLaravelPdf,
  },
];
