import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:7158).
// A tira de selos é a mesma da INDÚSTRIA (TrustBar.tsx) e do EXPERIENCE CENTER
// (Confianca.tsx).
const STATS = [
  {
    icon: "/assets/footer/usa-flag.svg",
    title: "Tecnologia Americana",
    description: "Desenvolvida nos EUA",
  },
  {
    icon: "/assets/shared/icon-presenca-americas.svg",
    title: "Presença nas Américas",
    description: "Atendimento local",
  },
  {
    icon: "/assets/shared/icon-experiencia-anos.svg",
    title: "Mais de 30 anos de experiência",
    description: "em soluções industriais",
  },
  {
    icon: "/assets/shared/icon-suporte-247.svg",
    title: "Suporte 24/7",
    description: "Assistência técnica especializada",
  },
  {
    icon: "/assets/shared/icon-sustentabilidade.svg",
    title: "Sustentabilidade",
    description: "Eficiência energética e ESG",
  },
];

export default function CTA() {
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-wrap items-center gap-5 rounded-2xl bg-bg-cinza p-10">
        <div className="flex min-w-[200px] max-w-[389px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            Baixe o catálogo ideal para o seu projeto
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            Fale com nossos especialistas e encontre a solução Injectra
            perfeita para sua indústria.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-5">
          <span className="flex size-[110px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-blue-lt bg-bg-light-clean-plus p-7">
            <Image src="/assets/catalogos/icon-cloud-download.svg" alt="" width={49} height={40} />
          </span>
          <a
            href="#contato"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
          >
            Solicitar Catálogo
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </a>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Falar com um Especialista
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Solicitar Cotação
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {STATS.map((stat) => (
          <div key={stat.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={stat.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-dark-blue">
                {stat.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <p className="w-full text-xs font-normal leading-[14px] tracking-normal text-texto">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
