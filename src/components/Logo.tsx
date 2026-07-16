import Image from "next/image";

export default function Logo({
  className = "",
  src = "/assets/header/injectra-logo.svg",
}: {
  className?: string;
  src?: string;
}) {
  return (
    <Image
      src={src}
      alt="Injectra"
      width={160}
      height={38}
      className={`h-[38px] w-[160px] ${className}`}
      priority
    />
  );
}
