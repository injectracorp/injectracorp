import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7268:9108).
export default function Cta({ dict }: { dict: Dictionary }) {
  const t = dict.solicitarCotacao.cta;
  return (
    <Section innerClassName="gap-10">
      <div
        className="relative flex w-full flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-cover bg-center p-10"
        style={{ backgroundImage: "url(/assets/solicitar-cotacao/cta-banner-bg.png)" }}
      >
        <div className="flex min-w-[210px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            {t.title}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            {t.description}
          </p>
        </div>
        <div className="flex min-w-[250px] max-w-[480px] flex-1 flex-wrap items-center justify-center gap-5">
          <a
            href="#formulario"
            className="flex min-h-[30px] min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
          >
            <Image src="/assets/footer/icon-doc.svg" alt="" width={18} height={18} className="object-contain" />
            {t.primaryButton}
          </a>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-[30px] min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-azul-claro transition-colors hover:bg-bg-light-clean"
          >
            <Image src="/assets/footer/icon-headset.svg" alt="" width={18} height={18} className="object-contain" />
            {t.secondaryButton}
          </Link>
        </div>
      </div>
    </Section>
  );
}
