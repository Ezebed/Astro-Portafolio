import type { CertificateCardProps } from "@/utils/CertificateCardProps";

export default function CertificateCard({
  imgSrc,
  courseName,
  date,
  pdfPath,
}: CertificateCardProps): JSX.Element {
  return (
    <a
      className="waiter flex h-fit w-[16rem] flex-col gap-y-2 rounded-md bg-[#222] pb-2"
      href={pdfPath}
      target="_blank"
    >
      <img
        src={imgSrc}
        alt={`${courseName} preview`}
        className="h-[10rem] rounded-t-md object-cover"
      />
      <strong className="ml-2 font-bold uppercase">{courseName}</strong>
      <span className="ml-2 text-sm text-[#777]">{date}</span>
    </a>
  );
}
