import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7214:5008).
const HIGHLIGHTS = [
  { icon: "/assets/catalogos/icon-especificacoes.svg", label: "Especificações Técnicas" },
  { icon: "/assets/catalogos/icon-aplicacoes.svg", label: "Aplicações recomendadas" },
  { icon: "/assets/catalogos/icon-diferenciais.svg", label: "Diferenciais e benefícios" },
  { icon: "/assets/catalogos/icon-opcionais.svg", label: "Opcionais e acessórios" },
  { icon: "/assets/catalogos/icon-automacao.svg", label: "Automação e robótica" },
  { icon: "/assets/catalogos/icon-ai-iot.svg", label: "Injectra AI e IoT" },
  { icon: "/assets/catalogos/icon-suporte-comercial.svg", label: "Suporte e contato comercial" },
];

export default function Banner() {
  return (
    <div
      className="relative flex w-full min-h-[calc(100vh-80px)] flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/shared/banner-bg.png)" }}
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[680px] flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                CATÁLOGOS
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              Catálogos Injectra
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              Acesse os materiais técnicos e comerciais das linhas de máquinas,
              robótica e plataforma digital Injectra.
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
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
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo já fazem parte da
              imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>

        <div className="flex w-full flex-col items-start gap-10 rounded-2xl bg-wt p-5">
          <div className="flex w-full flex-col items-start gap-5">
            {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
            <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
              O que você encontra em nossos catálogos
            </h2>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
              Viva a tecnologia Injectra na prática e descubra como podemos
              levar sua produção para o próximo nível.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-start justify-center gap-x-2.5 gap-y-5">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="flex min-w-[160px] flex-1 items-start gap-2.5">
                <Image src={item.icon} alt="" width={35} height={35} className="shrink-0" />
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <span className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
