import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7260:7670).
const ITENS = [
  {
    icon: "/assets/sobre-nos/icon-alvo.svg",
    title: "Missão",
    description: "Impulsionar a indústria com soluções inteligentes, acessíveis e escaláveis.",
    bg: "bg-blue-lt",
    titleColor: "text-azul-claro-plus",
  },
  {
    icon: "/assets/sobre-nos/icon-olhos.svg",
    title: "Visão",
    description: "Construir uma das principais plataformas industriais inteligentes das Américas.",
    bg: "bg-roxo-lt",
    titleColor: "text-roxo",
  },
  {
    icon: "/assets/sobre-nos/icon-coroa.svg",
    title: "Valores",
    description: "Inovação, confiança, eficiência, proximidade com o cliente e crescimento sustentável.",
    bg: "bg-verde-lt",
    titleColor: "text-equora-iq",
  },
];

export default function MissaoVisaoValores() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Nossa Missão, Visão e Valores
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {ITENS.map((item) => (
          <div
            key={item.title}
            className={`flex min-w-[180px] flex-1 items-center gap-5 rounded-2xl px-5 py-[30px] ${item.bg}`}
          >
            <Image src={item.icon} alt="" width={80} height={80} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start">
              {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
              <span className={`min-h-[35px] w-full text-xl font-bold leading-[22px] tracking-normal ${item.titleColor}`}>
                {item.title}
              </span>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[45px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
