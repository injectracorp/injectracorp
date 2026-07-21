import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7261:8682).
const DESTAQUES = [
  {
    icon: "/assets/shared/icon-experiencia-anos.svg",
    title: "Mais de 26 anos de experiência",
  },
  {
    icon: "/assets/sobre-nos/icon-planet-web.svg",
    title: "Visão Global",
  },
  {
    icon: "/assets/sobre-nos/icon-empresas.svg",
    title: "Estrutura Corporativa",
  },
  {
    icon: "/assets/sobre-nos/icon-lampada.svg",
    title: "Inovação & Tecnologia",
  },
];

export default function GrupoInterfy() {
  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex min-w-[350px] max-w-[380px] flex-1 flex-col items-start gap-5">
          <Image
            src="/assets/footer/interfy-group-logo.svg"
            alt="Interfy Corporation"
            width={250}
            height={64.79}
            className="h-auto max-h-[65px] w-full max-w-[250px] object-contain"
          />
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <div className="w-full text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
            <p className="mb-2.5">
              A Injectra faz parte do Grupo Interfy Corporation, possuímos
              mais de 26 anos de experiência em tecnologia, software,
              transformação digital e expansão de negócios.
            </p>
            <p>
              Essa base fortalece a Injectra com visão global, estrutura
              corporativa, experiência em inovação e capacidade de
              crescimento internacional.
            </p>
          </div>
        </div>
        <div className="flex h-[284px] min-w-[350px] flex-[1_0_0] flex-wrap items-center gap-5">
          {DESTAQUES.map((destaque) => (
            <div
              key={destaque.title}
              className="flex h-full min-h-[200px] min-w-[180px] flex-1 flex-col items-center justify-center gap-10 rounded-2xl bg-wt p-5"
            >
              <Image src={destaque.icon} alt="" width={50} height={50} className="object-contain" />
              {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
              <span className="min-h-[35px] w-full text-center text-xl font-bold leading-[22px] tracking-normal text-prime-ip">
                {destaque.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
