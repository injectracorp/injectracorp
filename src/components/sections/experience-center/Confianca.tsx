import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:3842).
const ITEMS = [
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

export default function Confianca() {
  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex min-w-[180px] flex-1 items-center justify-center gap-5"
          >
            <Image src={item.icon} alt="" width={40} height={40} className="shrink-0" />
            <div className="flex flex-1 flex-col items-start gap-2.5 text-xs">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <span className="font-normal leading-[14px] tracking-normal text-texto">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
