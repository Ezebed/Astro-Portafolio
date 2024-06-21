import type { SkillCardProps } from "./SkillCardProps";
import type { ProjectCardProps } from "./ProjectCardProps";

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

export const projects: ProjectCardProps[] = [
  {
    title: "Laravel To Do List",
    description:
      "Sitio web responsive donde se pueden crear,eliminar, editar y marcar como realizadas una lista de tareas. ademas cuenta con autenticacion de usuarios utilizado breeze.",
    tecnologies: ["laravel", "livewire", "breeze", "tailwindcss"],
    img: "https://raw.githubusercontent.com/Ezebed/Laravel-To-Do-List/main/public/img/example.png",
    siteUrl: "",
    git: "https://github.com/Ezebed/Laravel-To-Do-List",
  },
];
