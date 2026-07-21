import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 5161:2417).
// O primeiro item (bandeira) preenche o círculo inteiro sem padding interno;
// os outros 4 têm o ícone menor, com respiro ao redor (12px) — diferença real do Figma.
const TRUST_ITEMS = [
  {
    icon: "/assets/footer/usa-flag.svg",
    bg: "bg-[#F4F4F5]",
    iconSize: 60,
    padded: false,
    title: "Especificações",
    subtitle: "Americanas",
  },
  {
    icon: "/assets/hero/globe.svg",
    bg: "bg-azul-light-bg",
    iconSize: 36,
    padded: true,
    title: "Performance",
    subtitle: "Alta Velocidade",
  },
  {
    icon: "/assets/hero/pet-bottle.svg",
    bg: "bg-azul-light-bg",
    iconSize: 36,
    padded: true,
    title: "Soluções",
    subtitle: "PET",
  },
  {
    icon: "/assets/hero/handshake.svg",
    bg: "bg-azul-light-bg",
    iconSize: 36,
    padded: true,
    title: "Serviço",
    subtitle: "Solução Completa",
  },
  {
    icon: "/assets/hero/ai-chip.svg",
    bg: "bg-azul-light-bg",
    iconSize: 36,
    padded: true,
    title: "AI",
    subtitle: "Injectra",
  },
];

export default function Hero() {
  return (
    <div
      id="top"
      className="relative flex w-full min-h-[calc(100vh-80px)] flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/hero/banner-bg.png)" }}
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        {/* Ocupa todo o espaço acima da barra de confiança e centraliza o conteúdo
            verticalmente nele — a barra de confiança fica sempre colada na base do banner. */}
        <div className="flex w-full flex-1 items-center">
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
            <div className="flex w-full min-w-[280px] max-w-[540px] flex-1 flex-col items-start justify-center gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-dark-blue">
                TECNOLOGIA INDUSTRIAL AMERICANA
              </span>
              {/* Título 56 — 56px/60px, 95 Black (800) */}
              <h1 className="text-[32px] font-extrabold leading-[36px] tracking-normal text-dark-blue sm:text-[44px] sm:leading-[48px] lg:text-[56px] lg:leading-[60px]">
                O Futuro da Indústria Começa{" "}
                <span className="text-gradient-brand">Aqui.</span>
              </h1>
              {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
              <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
                Máquinas. Robótica. Inteligência Artificial. Software Industrial.
                <br />
                Tudo conectado em uma única plataforma inteligente.
              </p>
              <div className="flex w-full flex-wrap items-center gap-5">
                <Link
                  href="/plataforma-ai"
                  className="flex h-[42px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
                >
                  Explore a Plataforma
                  <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
                </Link>
                <Link
                  href="/fale-com-especialista"
                  className="flex h-[42px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
                >
                  <Image src="/assets/shared/mail-icon.svg" alt="" width={18} height={18} />
                  Falar com Especialista
                  <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
                </Link>
              </div>
            </div>

            {/* Espaço reservado à direita — a ilustração (máquina + tablet + robô)
                já faz parte da imagem de fundo full-bleed da seção. */}
            <div className="hidden min-w-[280px] flex-1 lg:block" />
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-2.5 rounded-[20px] px-5">
          <div className="flex w-full flex-wrap items-center justify-center gap-8">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex min-w-[160px] flex-1 flex-wrap items-center justify-center gap-5"
              >
                <span
                  className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full ${item.bg}`}
                >
                  <Image src={item.icon} alt="" width={item.iconSize} height={item.iconSize} />
                </span>
                <div className="flex flex-1 flex-col items-start gap-1">
                  {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
                  <span className="text-xl font-bold leading-[22px] tracking-normal text-dark-blue">
                    {item.title}
                  </span>
                  {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
                  <span className="text-base font-normal leading-5 tracking-normal text-texto">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
