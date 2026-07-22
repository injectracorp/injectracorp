import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:7313).
const ITEM_ICONS = [
  "/assets/fale-com-especialista/icon-selecao-linha.svg",
  "/assets/fale-com-especialista/icon-analise-aplicacao.svg",
  "/assets/fale-com-especialista/icon-automacao-robotica.svg",
  "/assets/fale-com-especialista/icon-integracao-digital.svg",
  "/assets/fale-com-especialista/icon-reducao-custos.svg",
  "/assets/fale-com-especialista/icon-expansao-producao.svg",
];

type Props = {
  dict: Dictionary;
};

export default function ComoAjudamos({ dict }: Props) {
  const t = dict.faleComEspecialista.comoAjudamos;
  const items = t.items as { title: string; description: string }[];

  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image src={ITEM_ICONS[index]} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {item.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
