import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7202:5393).
const TRUST_ITEMS = [
  { icon: "/assets/plataforma-ai/icon-cloud-segura.svg", label: "Cloud 100% Segura" },
  { icon: "/assets/plataforma-ai/icon-inteligencia-artificial.svg", label: "Inteligência Artificial" },
  { icon: "/assets/plataforma-ai/icon-decisoes-tempo-real.svg", label: "Decisões em Tempo Real" },
  { icon: "/assets/plataforma-ai/icon-maxima-seguranca.svg", label: "Máxima Segurança e Confiabilidade" },
];

export default function Banner() {
  return (
    <div
      className="relative flex w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/shared/banner-bg.png)" }}
    >
      <Section innerClassName="gap-10" className="py-10">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[680px] flex-1 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                PLATAFORMA AI
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              Dados, conectividade e inteligência para transformar sua produção.
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              A Plataforma Injectra AI conecta máquinas, pessoas e processos em
              um ecossistema inteligente para aumentar produtividade, reduzir
              paradas e gerar decisões em tempo real.
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                Solicitar Demonstração
                <Image src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                Falar com um Especialista
                <Image src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </a>
            </div>
            <div className="flex w-full items-start gap-5">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
                >
                  <Image src={item.icon} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo já fazem parte da
              imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>
      </Section>
    </div>
  );
}
