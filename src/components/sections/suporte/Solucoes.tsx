import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7272:8156).
const SOLUCOES = [
  {
    icon: "/assets/footer/icon-headset.svg",
    title: "Assistência Técnica",
    description:
      "Atendimento especializada para diagnóstico remoto ou presencial, resolução de problemas orientações técnicas completas.",
  },
  {
    icon: "/assets/suporte/icon-garantia-shield.svg",
    title: "Garantia",
    description:
      "Consulte a cobertura de garantia dos equipamentos Injectra e registre sua garantia de forma rápida e fácil.",
  },
  {
    icon: "/assets/suporte/icon-manuais-book.svg",
    title: "Manuais",
    description:
      "Acesse manuais de instalação, operação e manutenção dos equipamentos Injectra.",
  },
  {
    icon: "/assets/suporte/icon-downloads-cloud.svg",
    title: "Downloads",
    description:
      "Baixe softwares, firmwares, documentações técnicas e outros recursos importantes.",
  },
  {
    icon: "/assets/representantes/icon-avaliacao.svg",
    title: "FAQ",
    description:
      "Encontre respostas rápidas para as principais dúvidas sobre nossos produtos e serviços.",
  },
  {
    icon: "/assets/suporte/icon-pecas-container.svg",
    title: "Solicitação de Peças",
    description: "Solicite peças de reposição originais com segurança e agilidade.",
  },
];

export default function Solucoes() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Nossas soluções de suporte
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {SOLUCOES.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="min-h-[35px] text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {item.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="min-h-[60px] text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
            <a href="#" className="flex items-center gap-[5px]">
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <span className="text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                Acessar
              </span>
              <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
