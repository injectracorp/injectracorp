import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7267:8281).
export default function Cta({ dict }: { dict: Dictionary }) {
  const t = dict.contato.cta;
  return (
    <Section>
      <div
        className="flex w-full flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-cover bg-center p-10"
        style={{ backgroundImage: "url(/assets/contato/cta-banner-bg.png)" }}
      >
        <div className="flex min-w-[210px] flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-2.5">
            <h2 className="w-full text-[26px] font-bold leading-7 tracking-normal text-dark-blue">
              {t.title}
            </h2>
            <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
              {t.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/solicitar-cotacao"
              className="flex min-h-[30px] min-w-[200px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
            >
              <Image src="/assets/footer/icon-doc.svg" alt="" width={18} height={18} />
              {t.quoteButton}
            </Link>
            <Link
              href="/fale-com-especialista"
              className="flex min-h-[30px] min-w-[200px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-azul-claro transition-colors hover:bg-bg-light-clean"
            >
              <Image src="/assets/footer/icon-headset.svg" alt="" width={18} height={18} />
              {t.specialistButton}
            </Link>
          </div>
        </div>
        <div className="relative h-[120px] w-full max-w-[500px] flex-1 sm:h-[188px]">
          <Image
            src="/assets/contato/machine-titan.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
