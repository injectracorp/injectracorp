import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7257:6958).
// O slot de imagem (h-220, pt-5 px-2.5, bg-cinza) é igual nos 6 cards, mas o
// justify-content muda por card: os 4 primeiros (fotos em pé/retrato) usam
// justify-end para ancorar a foto embaixo (o topo é cortado pelo
// overflow-hidden do slot); os 2 últimos (fotos deitadas/paisagem) usam
// justify-center. A imagem interna preserva seu próprio aspect-ratio real
// (não estica para preencher o slot inteiro).
type Solucao = { title: string; description: string };

const SOLUCAO_IMAGES: { src: string; aspect: string; align: "end" | "center" }[] = [
  { src: "/assets/robotica/solucao-neo.webp", aspect: "1386/1947", align: "end" },
  { src: "/assets/robotica/solucao-cartesianos.webp", aspect: "2231/2761", align: "end" },
  { src: "/assets/robotica/solucao-celulas.webp", aspect: "1/1", align: "end" },
  { src: "/assets/robotica/solucao-paletizacao.webp", aspect: "3175/3573", align: "end" },
  { src: "/assets/robotica/solucao-automacao.webp", aspect: "3675/1779", align: "center" },
  { src: "/assets/robotica/solucao-integracao-ai.webp", aspect: "3962/2302", align: "center" },
];

export default function Solucoes({ dict }: { dict: Dictionary }) {
  const t = dict.robotica.solucoes;
  const solucoes: Solucao[] = t.items;

  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {solucoes.map((solucao, i) => (
          <div
            key={solucao.title}
            className="relative flex min-w-[200px] flex-1 flex-col items-center overflow-hidden rounded-2xl bg-wt pb-[30px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
          >
            <div
              className={`flex h-[220px] max-h-[220px] min-h-[220px] w-full shrink-0 flex-col items-center overflow-hidden bg-bg-cinza px-2.5 pt-5 ${
                SOLUCAO_IMAGES[i].align === "end" ? "justify-end" : "justify-center"
              }`}
            >
              <div className="relative w-full shrink-0" style={{ aspectRatio: SOLUCAO_IMAGES[i].aspect }}>
                <Image src={SOLUCAO_IMAGES[i].src} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-5 px-5 pt-5">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <span className="w-full text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {solucao.title}
              </span>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[95px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {solucao.description}
              </p>
              <a
                href="#contato"
                className="flex items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
              >
                {t.detailsLabel}
                <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
              </a>
            </div>
            <span className="absolute left-3 top-3 flex size-[50px] items-center justify-center rounded-xl bg-azul-claro-plus shadow-[2px_2px_6px_0px_rgba(76,95,224,0.25)]">
              {/* Label 20 — 20px/22px, 85 Heavy (700) */}
              <span className="text-xl font-bold leading-[22px] tracking-normal text-wt">
                {i + 1}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
