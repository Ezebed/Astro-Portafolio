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
      <figure className="waiter w-fit min-h-[15rem] p-4 bg-[rgba(13_13_13_/.6)] rounded-md flex flex-col md:flex-row space-y-3 md:space-x-2">
        <img
          className="h-full w-full md:max-w-[35%] object-contain"
          src={img}
          alt={title}
        ></img>

        <div className="relative space-y-[10px]">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p>{description}</p>

          <div className="w-10/12 flex flex-wrap space-x-1">
            {tecnologies.map((tech: string) => (
              <span className="py-1 px-2 border-2 rounded-md border-slate-600 capitalize ">
                {tech}
              </span>
            ))}
          </div>

          <a
            className="w-full md:w-fit px-4 py-2 flex justify-center bg-indigo-500 hover:bg-indigo-600 cursor-pointer font-bold rounded-md active:scale-[.9] shadow-[3px_3px_0_0_#000] active:shadow-[none] transition-all ease-in-out md:absolute md:bottom-2 md:right-2"
            href={git}
            target="_blank"
          >
            Github
          </a>
        </div>
      </figure>
    </Suspense>
  );
}

// loader

function SkeletonProjectCard() {
  return (
    <figure className="w-fit h-[15rem] p-4 bg-[rgba(13_13_13_/.6)] rounded-md flex space-x-2 animate-pulse">
      <img className="h-full w-[40%] object-contain bg-[#333]"></img>

      <div className="relative space-y-[10px]">
        <h3 className="font-bold text-2xl h-2 w-16 bg-[#333]"></h3>
        <p className="h-2 w-full bg-[#333]"></p>
        <p className="h-2 w-full bg-[#333]"></p>
        <p className="h-2 w-full bg-[#333]"></p>

        <div className="w-10/12 flex flex-wrap space-x-1">
          <p className="h-2 w-4 py-1 px-2 rounded-md bg-[#333]"></p>
          <p className="h-2 w-4 py-1 px-2 rounded-md bg-[#333]"></p>
          <p className="h-2 w-4 py-1 px-2 rounded-md bg-[#333]"></p>
          <p className="h-2 w-4 py-1 px-2 rounded-md bg-[#333]"></p>
        </div>

        <a className=" w-4 h-2 px-4 py-2 rounded-md  absolute bottom-2 right-2 bg-[#333]"></a>
      </div>
    </figure>
  );
}
