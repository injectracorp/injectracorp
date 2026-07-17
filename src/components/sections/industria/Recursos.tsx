import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7188:4676).
export default function Recursos() {
  return (
    <Section innerClassName="gap-5" direction="row">
      <div className="flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]">
        <div className="flex flex-col items-start gap-5">
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <span className="text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
            CATÁLOGOS POR INDÚSTRIA
          </span>
          <span
            className="h-0.5 w-[60px] rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
          Baixe catálogos e cases específicos para o seu segmento.
        </p>
        <a
          href="#catalogos"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          Ver catálogos
          <Image src="/assets/industria/arrow-side-blue-2.svg" alt="" width={9} height={9} />
        </a>
      </div>

      <div className="flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]">
        <div className="flex flex-col items-start gap-5">
          <span className="text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
            PRECISA DE AJUDA?
          </span>
          <span
            className="h-0.5 w-[60px] rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
          Nossa equipe entende seu segmento e ajuda a encontrar a melhor solução.
        </p>
        <a
          href="#contato"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          Entre em Contato
          <Image src="/assets/industria/arrow-side-blue-2.svg" alt="" width={9} height={9} />
        </a>
      </div>

      <div
        className="relative flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 py-[30px]"
        style={{ backgroundImage: "url(/assets/shared/video-card-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[rgba(0,13,89,0.5)]" />
        <div className="relative flex flex-col items-start gap-5">
          <span className="text-lg font-bold leading-[22px] tracking-normal text-wt">
            Tecnologia que se adapta ao seu segmento
          </span>
          <span className="h-0.5 w-[60px] rounded-full bg-wt" />
        </div>
        <p className="relative flex-1 text-sm font-bold leading-[17px] tracking-normal text-wt">
          Equipamentos, automação e inteligência para gerar resultados reais.
        </p>
        <a
          href="#contato"
          className="relative flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          Fala com especialista
          <Image src="/assets/industria/arrow-side-blue-2.svg" alt="" width={9} height={9} />
        </a>
      </div>
    </Section>
  );
}
