import type { SkillCardProps } from "@/utils/SkillCardProps";
import type { ProjectCardProps } from "@/utils/ProjectCardProps";
import type { CertificateCardProps } from "@/utils/CertificateCardProps";

export const skills: SkillCardProps[] = [
  {
    skillText: "html5",
    bgColor: "shadow-[#e44d26]",
    logoClass: "logos--html-5",
  },
  {
    skillText: "css",
    bgColor: "shadow-[#264de4]",
    logoClass: "logos--css-3",
  },
  {
    skillText: "javascript",
    bgColor: "shadow-[#f7df1e]",
    logoClass: "logos--javascript",
  },
  {
    skillText: "laravel",
    bgColor: "shadow-[#ff2d20]",
    logoClass: "logos--laravel",
  },
  {
    skillText: "tailwindcss",
    bgColor: "shadow-[#2298bd]",
    logoClass: "logos--tailwindcss-icon",
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
    git: "https://github.com/Ezebed/Laravel-To-Do-List",
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
