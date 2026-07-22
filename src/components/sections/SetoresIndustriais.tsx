import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7113:3844).
// Labels (traduzíveis) vivem em dict.home.setoresIndustriais.items, na mesma ordem.
const SETORES_IMAGES = [
  "/assets/setores/automotivo.png",
  "/assets/setores/embalagens.png",
  "/assets/setores/medico.png",
  "/assets/setores/construcao.png",
  "/assets/setores/eletronicos.png",
  "/assets/setores/utilidades-domesticas.png",
  "/assets/setores/logistica.png",
];

export default function SetoresIndustriais({ dict }: { dict: Dictionary }) {
  const t = dict.home.setoresIndustriais;
  const setores = SETORES_IMAGES.map((image, i) => ({
    image,
    label: t.items[i].label,
  }));
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
      <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
        {t.title}
      </h2>
      {/* Cards com largura fixa (157.5px, igual ao Figma) e centralizados —
          não usam flex-1 para não esticar de forma desigual quando a última
          linha do wrap tem menos itens que as demais. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {setores.map((setor) => (
          <div
            key={setor.label}
            className="flex w-[157.5px] flex-none flex-col items-center gap-2.5 rounded-xl bg-bg-cinza p-5"
          >
            <div className="flex h-[120px] w-full items-center justify-center overflow-hidden">
              <Image
                src={setor.image}
                alt={setor.label}
                width={117}
                height={100}
                className="h-auto max-h-[120px] w-auto max-w-[117px] object-contain"
              />
            </div>
            {/* Label 14 — 14px/17px, 85 Heavy (700) — min-h reserva 2 linhas p/ labels longos (ex.: "Utilidades Domésticas") */}
            <span className="flex min-h-[34px] w-full items-center justify-center text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
              {setor.label}
            </span>
          </div>
        ))}
        <Link
          href="/industria"
          className="flex w-[157.5px] flex-none flex-col items-center gap-2.5 rounded-xl bg-bg-cinza p-5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-[120px] w-full items-center justify-center">
            <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-border-line-bd bg-wt">
              <Image src="/assets/setores/mais-icon.svg" alt="" width={40} height={8} />
            </span>
          </div>
          <span className="flex min-h-[34px] w-full items-center justify-center text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
            {t.moreLabel}
          </span>
        </Link>
      </div>
    </Section>
  );
}
