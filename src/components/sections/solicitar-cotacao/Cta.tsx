import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7268:9108).
export default function Cta() {
  return (
    <Section innerClassName="gap-10">
      <div
        className="relative flex w-full flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-cover bg-center p-10"
        style={{ backgroundImage: "url(/assets/solicitar-cotacao/cta-banner-bg.png)" }}
      >
        <div className="flex min-w-[210px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            Pronto para receber sua proposta personalizada?
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            Preencha as informações, configure sua máquina e envie sua solicitação. Nossa equipe retornará em breve com a melhor solução para o seu projeto.
          </p>
        </div>
        <div className="flex min-w-[250px] max-w-[480px] flex-1 flex-wrap items-center justify-center gap-5">
          <a
            href="#formulario"
            className="flex min-h-[30px] min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
          >
            <Image src="/assets/footer/icon-doc.svg" alt="" width={18} height={18} className="object-contain" />
            SOLICITAR COTAÇÃO
          </a>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-[30px] min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-azul-claro transition-colors hover:bg-bg-light-clean"
          >
            <Image src="/assets/footer/icon-headset.svg" alt="" width={18} height={18} className="object-contain" />
            FALAR COM ESPECIALISTA
          </Link>
        </div>
      </div>
    </Section>
  );
}
