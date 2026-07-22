import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7270:8373).
const RAZAO_ICONS = [
  "/assets/solicitar-cotacao/icon-chat.svg",
  "/assets/fale-com-especialista/icon-personalizacao.svg",
  "/assets/solicitar-cotacao/icon-lamp-ideia.svg",
  "/assets/footer/icon-headset.svg",
  "/assets/solicitar-cotacao/icon-brain.svg",
  "/assets/solicitar-cotacao/icon-pessoa-global.svg",
];

export default function PorQueEscolher({ dict }: { dict: Dictionary }) {
  const t = dict.solicitarCotacao.porQueEscolher;
  const razoes = RAZAO_ICONS.map((icon: string, index: number) => ({
    icon,
    ...(t.razoes[index] as { title: string; description: string }),
  }));

  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {razoes.map((razao) => (
          <div key={razao.title} className="flex min-w-[180px] flex-1 flex-col items-center justify-center gap-5">
            <Image src={razao.icon} alt="" width={40} height={40} className="object-contain" />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <h3 className="min-h-[35px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {razao.title}
            </h3>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="w-full text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {razao.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
