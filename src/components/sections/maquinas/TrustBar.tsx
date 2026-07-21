import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7199:4419) —
// mesmo bloco de confiança reutilizado em outras páginas do site (ex.: industria/TrustBar.tsx).
const ITEMS = [
  {
    icon: "/assets/footer/usa-flag.svg",
    title: "Tecnologia Americana",
    subtitle: "Desenvolvida nos EUA",
  },
  {
    icon: "/assets/shared/icon-presenca-americas.svg",
    title: "Presença nas Américas",
    subtitle: "Atendimento local",
  },
  {
    icon: "/assets/shared/icon-experiencia-anos.svg",
    title: "Mais de 30 anos de experiência",
    subtitle: "em soluções industriais",
  },
  {
    icon: "/assets/shared/icon-suporte-247.svg",
    title: "Suporte 24/7",
    subtitle: "Assistência técnica especializada",
  },
  {
    icon: "/assets/shared/icon-sustentabilidade.svg",
    title: "Sustentabilidade",
    subtitle: "Eficiência energética e ESG",
  },
];

export default function TrustBar() {
  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={item.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <p className="w-full text-xs font-normal leading-[14px] tracking-normal text-texto">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
