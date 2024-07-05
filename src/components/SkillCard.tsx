import type { SkillCardProps } from "@/utils/SkillCardProps";

export default function SkillCard({
  skillText,
  bgColor,
  logoClass,
}: SkillCardProps): JSX.Element {
  // return(
  //     <figure className="bg-[rgba(13_13_13_/.4)] w-[10rem] h-[8rem] flex flex-col items-center justify-center rounded-md space-y-2 shadow-lg hover:scale-125 transition-transform ease-in-out">
  //         <span className={logoClass+" text-7xl "}></span>

  //         <p className="text-2xl capitalize ">{skillText}</p>
  //     </figure>
  // )

  return (
    <figure
      className={
        "flex items-center space-x-2 rounded-full bg-[rgba(13_13_13_/.4)] px-4 py-2 shadow-sm transition-all hover:scale-[1.1] " +
        bgColor
      }
    >
      <span className={logoClass + " text-[1rem]"}></span>

      <p className="text-xl capitalize">{skillText}</p>
    </figure>
  );
}
