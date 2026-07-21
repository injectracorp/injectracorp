import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:7313).
const ITEMS = [
  {
    icon: "/assets/fale-com-especialista/icon-selecao-linha.svg",
    title: "Seleção de linha ideal",
    description: "Ajudamos você a escolher a máquina perfeita para sua produção.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-analise-aplicacao.svg",
    title: "Análise de aplicação",
    description: "Estudamos seu processo e recomendamos a melhor configuração.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-automacao-robotica.svg",
    title: "Automação e robótica",
    description:
      "Soluções que aumentam a eficiência, qualidade e segurança da produção.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-integracao-digital.svg",
    title: "Integração Digital",
    description:
      "Conecte suas máquinas à Injectra AI e transforme dados em resultados.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-reducao-custos.svg",
    title: "Redução de Custos",
    description: "Mais produtividade, menos desperdício e maior eficiência.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-expansao-producao.svg",
    title: "Expansão de Produção",
    description:
      "Escalabilidade e soluções para acompanhar o crescimento do seu negócio.",
  },
];

export default function ComoAjudamos() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Como podemos ajudar
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          Soluções completas para os setores mais exigentes da indústria.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image src={item.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {item.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
