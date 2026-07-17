import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7168:4645).
export default function Recursos() {
  return (
    <Section innerClassName="gap-5" direction="row">
      <div className="flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]">
        <div className="flex flex-col items-start gap-5">
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <span className="text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
            CATÁLOGOS
          </span>
          <span
            className="h-0.5 w-[60px] rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
          Baixe os cátalogos completos de todas as linhas e máquinas
        </p>
        <a
          href="#catalogos"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          Ver todos os catálogos
          <Image src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
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
          Fale com nosso especialista e controle a melhor solução para sua aplicação.
        </p>
        <a
          href="#contato"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          Fala com especialista
          <Image src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
        </a>
      </div>

      <div
        className="relative flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 py-[30px]"
        style={{ backgroundImage: "url(/assets/shared/video-card-bg.jpg)" }}
      >
        <div className="flex flex-col items-start gap-5">
          <span className="text-lg font-bold leading-[22px] tracking-normal text-wt">
            Tecnologia que move a indústria.
          </span>
          <span className="h-0.5 w-[60px] rounded-full bg-wt" />
        </div>
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-wt">
          Assista ao vídeo e conheça os diferenciais Injectra.
        </p>
        <button
          type="button"
          aria-label="Assistir ao vídeo"
          className="flex size-[30px] shrink-0 items-center justify-center"
        >
          <Image src="/assets/maquinas/icon-play.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </Section>
  );
}
