import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7223:5440).
const REGIOES = [
  {
    title: "América do Norte",
    description: "Estados Unidos, Canadá e México",
  },
  {
    title: "América Central",
    description: "Guatemala, Panamá, Costa Rica e outros.",
  },
  {
    title: "Caribe",
    description: "Ilhas do Caribe e nações caribenhas.",
  },
  {
    title: "América do Sul",
    description: "Brasil, Argentina, Chile, Colômbia e outros.",
  },
  {
    title: "Região Andina",
    description: "Equador, Peru, Bolívia e Venezuela.",
  },
  {
    title: "Outros Mercados",
    description: "Oportunidades em novos mercados.",
  },
];

export default function NossasExperiencias() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Nossas Experiências
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
        <div className="relative h-[306px] w-full max-w-[197px] shrink-0 self-center lg:self-stretch">
          <Image
            src="/assets/representantes/mapa-americas.png"
            alt="Mapa das Américas"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REGIOES.map((regiao) => (
            <div
              key={regiao.title}
              className="flex min-w-[180px] flex-col items-start justify-center gap-10 rounded-2xl bg-bg-cinza px-5 py-[30px]"
            >
              <div className="flex w-full flex-col items-start gap-2.5">
                {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
                <h3 className="w-full text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
                  {regiao.title}
                </h3>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                  {regiao.description}
                </p>
              </div>
              <a
                href="#contato"
                className="flex items-center justify-center gap-[5px]"
              >
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <span className="text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                  Ver oportunidades
                </span>
                <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
