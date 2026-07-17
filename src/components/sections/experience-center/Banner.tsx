import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:4319).
const TRUST_ITEMS = [
  { icon: "/assets/experience-center/icon-tecnologia-ponta.svg", label: "Tecnologia de Ponta" },
  { icon: "/assets/experience-center/icon-resultados-comprovados.svg", label: "Resultados Comprovados" },
  { icon: "/assets/experience-center/icon-especialistas.svg", label: "Especialistas Dedicados" },
  { icon: "/assets/experience-center/icon-seguranca-confiabilidade.svg", label: "Segurança e Confiabilidade" },
];

export default function Banner() {
  return (
    <div
      className="relative flex w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/shared/banner-bg.png)" }}
    >
      <Section innerClassName="gap-10" className="py-10">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[520px] flex-1 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                EXPERIENCE CENTER
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              Viva a tecnologia.
              <br />
              Transforme resultados.
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              O Experience Center Injectra foi criado para que você veja, teste
              e comprove na prática como nossas soluções podem elevar a
              produtividade, a qualidade e a competividade da sua indústria.
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                Agendar uma Visita
                <Image src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                Falar com um Especialista
                <Image src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </a>
            </div>
            <div className="flex w-full items-center gap-5">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
                >
                  <Image src={item.icon} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo já fazem parte da
              imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>
      </Section>
    </div>
  );
}
