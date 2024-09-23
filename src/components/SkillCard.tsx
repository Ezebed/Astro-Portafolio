import type { SkillCardProps } from "@/utils/SkillCardProps";

export default function SkillCard({
  skillText,
  bgColor,
  logoClass,
}: SkillCardProps): JSX.Element {
  return (
    <figure
      className={
        "flex items-center gap-2 rounded-full border-2 bg-[rgba(13_13_13_/.4)] px-4 py-2 transition-all hover:scale-[1.1]"
      }
      style={{ borderColor: bgColor }}
    >
      <span className={logoClass + " text-[1rem]"}></span>

      <p className="text-xl capitalize">{skillText}</p>
    </figure>
  );
}
