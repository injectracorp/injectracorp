import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7268:9532).
const DESTAQUES = [
  {
    icon: "/assets/footer/usa-flag.svg",
    title: ["Tecnologia", "de Ponta"],
  },
  {
    icon: "/assets/sobre-nos/icon-planet-web.svg",
    title: ["Soluções", "Integradas"],
  },
  {
    icon: "/assets/footer/icon-scale-graphic.svg",
    title: ["Performance Comprovada"],
  },
];

export default function Banner() {
  return (
    <div
      className="relative flex w-full min-h-[875px] flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/solicitar-cotacao/banner-bg.png)" }}
    >
      <Section innerClassName="min-h-[280px] gap-10" className="py-10">
        <div className="flex w-full min-w-[280px] max-w-[560px] flex-1 flex-col items-start justify-center gap-5">
          <div className="flex flex-col items-start gap-5">
            {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
            <span className="text-base font-bold leading-5 tracking-normal text-gradient-injectra">
              SOLICITAR COTAÇÃO
            </span>
            <span
              className="h-[3px] w-10 rounded-full"
              style={{ background: "var(--gradient-injectra)" }}
            />
          </div>
          {/* Título 56 — 56px/60px, 95 Black (800) */}
          <h1 className="text-[32px] font-extrabold leading-[36px] tracking-normal text-dark-blue sm:text-[44px] sm:leading-[48px] lg:text-[56px] lg:leading-[60px]">
            Solicitar Cotação
          </h1>
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <p className="text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            Solicite uma proposta personalizada para máquinas, robótica e plataforma industrial Injectra.
          </p>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
            Conte com a nossa expertise para desenvolver a melhor solução para o seu projeto, com tecnologia, inovação e performance.
          </p>
          <div className="flex w-full flex-wrap items-center gap-[15px]">
            {DESTAQUES.map((item) => (
              <div key={item.title.join(" ")} className="flex min-w-[110px] flex-1 items-center justify-center gap-2.5">
                <Image src={item.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <div className="flex flex-1 flex-col items-start text-base font-bold leading-5 tracking-normal text-dark-blue">
                  {item.title.map((line) => (
                    <span key={line} className="w-full">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
      </Section>
    </div>
  );
}
