import type { ProjectCardProps } from "../utils/ProjectCardProps";
import { Suspense } from "react";

export default function ProjectCard({
  title,
  description,
  tecnologies,
  img,
  siteUrl,
  git,
}: ProjectCardProps) {
  return (
    <Suspense fallback={<SkeletonProjectCard />}>
      <figure className="waiter flex h-fit w-[50rem] flex-col gap-y-3 rounded-md bg-[rgba(13_13_13_/.6)] sm:flex-row sm:gap-x-2">
        <img
          src={img}
          alt={title + " img"}
          className="h-[12rem] w-[20rem] rounded-l-md object-cover hover:object-contain"
        />
        <div className="flex w-full flex-col py-2 pr-2">
          <strong className="mb-2 text-2xl">{title}</strong>
          <p className="mb-2">{description}</p>
          <div className="mb-auto flex flex-wrap gap-1">
            {tecnologies.map((tech) => (
              <span className="rounded-lg border-2 border-slate-400 px-2 py-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="sm:flex sm:flex-row-reverse">
            <a
              href={git}
              className="w-fit rounded-md bg-indigo-600 px-4 py-2 font-bold shadow-[0_2px_#000,inset_0_2px_rgb(129_140_248)] hover:bg-indigo-800 active:shadow-none"
            >
              Github
            </a>
          </div>
        </div>
      </figure>
    </Suspense>
  );
}

// loader

function SkeletonProjectCard() {
  return (
    <figure className="flex h-[15rem] w-fit animate-pulse space-x-2 rounded-md bg-[rgba(13_13_13_/.6)] p-4">
      <img className="h-full w-[40%] bg-[#222] object-contain"></img>

      <div className="relative space-y-[10px]">
        <h3 className="h-2 w-16 bg-[#222] text-2xl font-bold"></h3>
        <p className="h-2 w-full bg-[#222]"></p>
        <p className="h-2 w-full bg-[#222]"></p>
        <p className="h-2 w-full bg-[#222]"></p>

        <div className="flex w-10/12 flex-wrap space-x-1">
          <p className="h-2 w-4 rounded-md bg-[#222] px-2 py-1"></p>
          <p className="h-2 w-4 rounded-md bg-[#222] px-2 py-1"></p>
          <p className="h-2 w-4 rounded-md bg-[#222] px-2 py-1"></p>
          <p className="h-2 w-4 rounded-md bg-[#222] px-2 py-1"></p>
        </div>

        <a className="absolute bottom-2 right-2 h-2 w-4 rounded-md bg-[#222] px-4 py-2"></a>
      </div>
    </figure>
  );
}
