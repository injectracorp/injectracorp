import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7257:6958).
// As fotos das soluções ainda não existem no Figma — os cards usam um
// retângulo cinza (#9a9a9a) como placeholder de imagem, igual ao design.
type Solucao = { title: string; description: string };

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
            <div className="h-[220px] w-full shrink-0 bg-[#9a9a9a]" />
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
