import type { SkillCardProps } from "@/utils/SkillCardProps";

export default function SkillCard({
  skillText,
  bgColor,
  LogoIcon,
}: SkillCardProps): JSX.Element {
  return (
    <div
      className="flex items-center gap-2 rounded-full border-2 bg-[rgba(21_21_21_/1)] px-4 py-2 transition-all hover:scale-[1.1]"
      style={{ borderColor: bgColor }}
    >
      <LogoIcon />

      <p className="text-xl capitalize">{skillText}</p>
    </div>
  );
}
