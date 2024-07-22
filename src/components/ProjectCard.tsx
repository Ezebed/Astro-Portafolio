import type { ProjectCardProps } from "@/utils/ProjectCardProps";

export default function ProjectCard({
  title,
  description,
  tecnologies,
  img,
  siteUrl,
  git,
}: ProjectCardProps): JSX.Element {
  return (
    <figure className="waiter black-gradient relative flex h-fit w-[20rem] flex-col gap-y-3 rounded-md bg-[rgba(13_13_13_/.6)] sm:h-[15rem] sm:w-[30rem] sm:flex-row sm:justify-end">
      <img
        src={img}
        alt={title + " img"}
        className="absolute left-0 top-0 h-1/2 w-full rounded-t-md sm:h-full sm:w-4/5 sm:rounded-bl-md sm:rounded-tr-none"
      />
      <div className="z-10 mt-[10rem] flex w-full flex-col px-2 py-2 sm:mt-0 sm:w-4/6">
        <strong className="mb-2 text-2xl">{title}</strong>
        <p className="mb-2">{description}</p>
        <div className="mb-4 flex flex-wrap gap-1 sm:mb-auto">
          {tecnologies.map((tech) => (
            <span className="rounded-lg border-2 border-slate-400 px-2 py-1 text-xs capitalize">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col-reverse gap-2 sm:flex-row-reverse">
          {siteUrl && (
            <a
              href={siteUrl}
              className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-center font-bold capitalize shadow-[0_2px_#000,inset_0_2px_rgb(129_140_248)] hover:bg-indigo-800 active:shadow-none sm:w-fit"
              target="_blank"
            >
              pagina
            </a>
          )}
          <a
            href={git}
            className="block w-full rounded-md bg-slate-600 px-4 py-2 text-center font-bold capitalize shadow-[0_2px_#000,inset_0_2px_rgb(119_137_163)] hover:bg-indigo-800 active:shadow-none sm:w-fit"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </figure>
  );
}
