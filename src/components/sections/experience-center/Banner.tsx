import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (componente com as 3 variações de
// breakpoint do banner — node 7191:4319 é "Padrão" (>=1280), node 7311:9203
// é "1279" (1024-1279px) e node 7316:9355 é "Variante 3" (<1024px)).
// - "Padrão": foto como background full-bleed da seção; título 48/55;
//   barra de confiança confinada à coluna de texto (max-w-520), à esquerda.
// - "1279": foto contida num card à direita (rounded-2xl, sem full-bleed);
//   título 40/40; barra de confiança em linha própria, largura total.
// - "Variante 3": tudo centralizado em coluna única; foto como card
//   full-width abaixo dos CTAs; título 40/40 (sem quebra forçada); barra de
//   confiança em linha própria, largura total.
const TRUST_ICONS = [
  "/assets/experience-center/icon-tecnologia-ponta.svg",
  "/assets/experience-center/icon-resultados-comprovados.svg",
  "/assets/experience-center/icon-especialistas.svg",
  "/assets/experience-center/icon-seguranca-confiabilidade.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.experienceCenter.banner;
  const titleLines: string[] = t.title.split("\n");

  return (
    <div className="flex w-full flex-col bg-wt lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/experience-center/experience-center-banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center gap-10 text-center lg:max-w-[520px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 40 (<1280) — 40px/40px | TÍTULO 48 (>=1280) — 48px/55px, 95 Black (800) */}
            <h1 className="text-[40px] font-extrabold leading-[40px] tracking-normal text-dark-blue xl:text-[48px] xl:leading-[55px]">
              {titleLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < titleLines.length - 1 ? " " : ""}
                  {index < titleLines.length - 1 && <br className="hidden lg:block" />}
                </span>
              ))}
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.subtitle}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.ctaVisita}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                {t.ctaEspecialista}
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </Link>
            </div>
          </div>

          {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida dentro
              deste bloco (rounded-2xl, sem full-bleed). >=1280: a foto já é o
              background full-bleed da seção — este bloco só reserva o espaço
              à direita. */}
          <div className="w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/assets/experience-center/experience-center-banner-1024.webp"
              alt=""
              width={2400}
              height={1314}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/experience-center/experience-center-banner-1280.webp"
              alt=""
              width={2400}
              height={2101}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden flex-1 xl:block" />
        </div>

        {/* Ocupa a largura total do banner em todos os breakpoints. */}
        <div className="flex w-full flex-col items-center xl:flex-row">
          <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-wt p-5">
            {t.trustItems.map((item: { label: string }, index: number) => (
              <div
                key={item.label}
                className="flex min-w-[80px] flex-1 flex-col items-center justify-center gap-5 xl:min-w-[110px]"
              >
                <Image src={TRUST_ICONS[index]} alt="" width={40} height={40} />
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden flex-1 xl:block" />
        </div>
      </Section>
    </div>
  );
}
