import type { CertificateCardProps } from "@/utils/CertificateCardProps"

export default function CertificateCard({imgSrc,courseName,date}:CertificateCardProps): JSX.Element
{
    return(
        <figure
          className="waiter flex h-fit w-[16rem] flex-col gap-y-2 rounded-md bg-[#222] pb-2"
        >
          <img
            src={imgSrc}
            alt="certificate_alt"
            className="h-[10rem] rounded-t-md object-cover"
          />
          <strong className="ml-2 font-bold uppercase">{courseName}</strong>
          <span className="ml-2 text-sm text-[#777]">{date}</span>
        </figure>
    )
}