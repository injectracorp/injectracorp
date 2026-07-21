import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7266:8001).
const DESTAQUES = [
  {
    icon: "/assets/contato/icon-check.svg",
    title: "Resposta consultiva",
    description: "Entendemos seu desafio e sugerimos a melhor solução.",
  },
  {
    icon: "/assets/contato/icon-ramificacoes.svg",
    title: "Soluções completas",
    description: "Máquinas, robótica, software e serviço integrados.",
  },
  {
    icon: "/assets/contato/icon-machine-gear.svg",
    title: "Especialistas industriais",
    description: "Equipe experiente com conhecimento de aplicação real.",
  },
  {
    icon: "/assets/sobre-nos/icon-ia.svg",
    title: "Integração com Injectra AI",
    description: "Tecnologia e dados para elevar a produtividade.",
  },
];

export default function Presenca() {
  return (
    <Section innerClassName="items-stretch gap-5" direction="row">
      <div className="flex w-full flex-1 min-w-[260px] items-center gap-5 rounded-2xl bg-bg-cinza p-5">
        <div className="flex flex-1 flex-col items-start gap-10">
          <span className="text-xl font-bold leading-[22px] tracking-normal text-prime-ip">
            Presença nas Américas
          </span>
          <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
            Com sede nos Estados Unidos, a Injectra apoia clientes, parceiros
            e projetos industriais em toda a América do Norte, Central e Sul.
          </p>
          <a
            href="#"
            className="flex min-h-10 items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Ver regiões de atuação
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="hidden h-full items-center justify-end sm:flex">
          <div className="relative aspect-[1019/1471] h-full max-h-[220px] w-auto">
            <Image src="/assets/contato/map-americas.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 min-w-[260px] flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-5">
        <span className="text-xl font-bold leading-[22px] tracking-normal text-prime-ip">
          Presença nas Américas
        </span>
        <div className="flex w-full flex-col items-start gap-5">
          {DESTAQUES.map((item) => (
            <div key={item.title} className="flex w-full items-center gap-5">
              <Image src={item.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
              <div className="flex flex-1 flex-col items-start gap-2.5 text-texto">
                <span className="w-full text-base font-bold leading-5 tracking-normal">
                  {item.title}
                </span>
                <span className="w-full text-sm font-normal leading-4 tracking-normal">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
