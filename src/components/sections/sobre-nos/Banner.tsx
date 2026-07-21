import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7260:8461).
const HIGHLIGHTS = [
  { icon: "/assets/footer/usa-flag.svg", label: "Empresa Americana" },
  { icon: "/assets/sobre-nos/icon-planet-web.svg", label: "Presença nas Américas" },
  { icon: "/assets/footer/icon-scale-graphic.svg", label: "Foco em Indústria e Inovação" },
];

export default function Banner() {
  return (
    <div
      className="relative flex w-full min-h-[calc(100vh-80px)] flex-col bg-cover bg-right"
      style={{ backgroundImage: "url(/assets/sobre-nos/banner-bg.png)" }}
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[520px] flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-injectra">
                SOBRE NÓS
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-injectra)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              Sobre a Injectra
            </h1>
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <p className="text-xl font-bold leading-[22px] tracking-normal text-texto">
              Tecnologia industrial para transformar a manufatura nas Américas.
            </p>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              A Injectra Corporation é uma empresa americana focada em máquinas
              injetoras, robótica, software industrial, IoT, cloud e
              inteligência artificial. Nosso objetivo é entregar
              produtividade, automação e eficiência para indústrias que
              buscam crescer com tecnologia.
            </p>
            <div className="flex w-full items-center gap-[15px]">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-[110px] flex-1 items-center justify-center gap-2.5"
                >
                  <Image className="shrink-0 object-contain" src={item.icon} alt="" width={30} height={30} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full flex-1 text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo + robô já fazem parte
              da imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>
      </Section>
    </div>
  );
}
