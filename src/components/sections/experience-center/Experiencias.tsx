import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:3805).
const EXPERIENCIAS = [
  {
    icon: "/assets/experience-center/icon-card-demonstracoes.svg",
    title: "Demonstrações",
    description:
      "Veja nossas máquinas & soluções em funcionamento e descubra como a tecnologia Injectra pode transformar sua produção.",
  },
  {
    icon: "/assets/experience-center/icon-card-testes.svg",
    title: "Testes de Aplicação",
    description:
      "Traga seu molde, material ou peça e realize testes reais com o suporte dos nossos especialistas.",
  },
  {
    icon: "/assets/experience-center/icon-card-showroom.svg",
    title: "Showroom",
    description:
      "Conheça de perto nossa linha completa de máquinas, robótica e soluções inteligentes em um ambiente inovador.",
  },
  {
    icon: "/assets/experience-center/icon-card-treinamentos.svg",
    title: "Treinamentos",
    description:
      "Capacite sua equipe com treinamentos técnicos e operacionais para extrair o máximo desempenho.",
  },
  {
    icon: "/assets/experience-center/icon-card-validacao.svg",
    title: "Validação de Projetos",
    description:
      "Validamos junto com você a melhor solução para o seu projeto, garantindo performance e retorno sobre o investimento.",
  },
];

export default function Experiencias() {
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

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {EXPERIENCIAS.map((item) => (
          <div
            key={item.title}
            className="relative flex min-w-[230px] flex-1 flex-col items-center gap-[50px] overflow-hidden rounded-2xl bg-wt pb-[30px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="h-[250px] w-full shrink-0 bg-[#9a9a9a]" />
            <div className="flex w-full flex-col items-start justify-center gap-5 px-5">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <h3 className="min-h-[25px] w-full text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {item.title}
              </h3>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[95px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
              <div className="flex items-center gap-[5px]">
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <span className="text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                  Saiba mais
                </span>
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </div>
            </div>
            <span className="absolute left-5 top-[220px] flex size-[60px] shrink-0 items-center justify-center rounded-full bg-wt p-4 shadow-[2px_2px_6px_0px_rgba(76,95,224,0.25)]">
              <Image src={item.icon} alt="" width={30} height={30} />
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
