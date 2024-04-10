import type {SkillCardProps} from "../utils/SkillCardProps"

export default function SkillCard({skillText,bgColor,logoClass}:SkillCardProps){
    return(
        <figure className="bg-[rgba(13_13_13_/.4)] w-[10rem] h-[8rem] flex flex-col items-center justify-center rounded-md space-y-2 shadow-lg hover:scale-125 transition-transform ease-in-out">
            <span className={logoClass+" text-7xl "}></span>

            <p className="text-2xl capitalize ">{skillText}</p>
        </figure>
    )
}


