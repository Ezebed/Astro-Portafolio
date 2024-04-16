import type { ProjectCardProps } from "../utils/ProjectCardProps"

export default function ProjectCard({title,description,tecnologies,img,siteUrl,git}:ProjectCardProps){
    return(
        <figure className="w-fit h-[15rem] p-4 bg-[rgba(13_13_13_/.6)] rounded-md flex space-x-2">

			<img
				className="h-full object-contain" 
				src={img} 
				alt={title}></img>
					
			<div className="relative space-y-[10px]">
				<h3 className="font-bold text-2xl">{title}</h3>
				<p>{description}</p>

                <div className="w-10/12 flex flex-wrap space-x-1">
                    {tecnologies.map((tech:string)=>(<span className="py-1 px-2 border-2 rounded-md border-slate-600 capitalize " >{tech}</span>))}
                </div>

				<a className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 cursor-pointer font-bold rounded-md active:scale-[.9] shadow-[3px_3px_0_0_#000] active:shadow-[none] transition-all ease-in-out absolute bottom-2 right-2" 
					href={git} 
					target="_blank">Github</a>
			</div>

		</figure>
    )
}