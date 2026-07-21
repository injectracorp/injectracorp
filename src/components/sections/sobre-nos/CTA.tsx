import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7260:7827).
const TRUST_ITEMS = [
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
    icon: "/assets/footer/icon-headset.svg",
    title: "Suporte 24/7",
    subtitle: "Assistência técnica especializada",
  },
  {
    icon: "/assets/shared/icon-sustentabilidade.svg",
    title: "Sustentabilidade",
    subtitle: "Eficiência energética e ESG",
  },
];

export default function CTA() {
  return (
    <Section innerClassName="gap-10">
      <div
        className="flex w-full flex-wrap items-center gap-10 rounded-2xl bg-cover bg-center px-5 py-10 sm:px-20"
        style={{ backgroundImage: "url(/assets/sobre-nos/cta-bg.png)" }}
      >
        <div className="flex w-[110px] shrink-0 items-center justify-center">
          <span className="flex size-[110px] items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus p-1">
            <span className="flex size-[102px] items-center justify-center rounded-full bg-azul-claro-plus px-7 py-5">
              <Image src="/assets/sobre-nos/icon-injectra-mark.svg" alt="" width={40} height={51} className="object-contain" />
            </span>
          </span>
        </div>
        <div className="flex min-w-[210px] flex-1 flex-col items-center justify-center gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            Pronto para conhecer a Injectra?
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            Fale com nossos especialistas e descubra como nossas soluções
            podemos transformar sua indústria.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-5">
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
          >
            Solicitar Cotação
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Falar com Especialista
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {TRUST_ITEMS.map((item) => (
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
