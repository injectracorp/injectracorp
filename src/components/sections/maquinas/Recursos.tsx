import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7168:4645).
export default function Recursos({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.recursos;
  return (
    <Section innerClassName="gap-5" direction="row">
      <div className="flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]">
        <div className="flex flex-col items-start gap-5">
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <span className="text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
            {t.catalogos.kicker}
          </span>
          <span
            className="h-0.5 w-[60px] rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
          {t.catalogos.description}
        </p>
        <Link
          href="/catalogos"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          {t.catalogos.cta}
          <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
        </Link>
      </div>

      <div className="flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]">
        <div className="flex flex-col items-start gap-5">
          <span className="text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
            {t.ajuda.kicker}
          </span>
          <span
            className="h-0.5 w-[60px] rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
          {t.ajuda.description}
        </p>
        <Link
          href="/fale-com-especialista"
          className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-border-line-bd bg-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
        >
          {t.ajuda.cta}
          <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
        </Link>
      </div>

      <div
        className="relative flex min-h-[200px] min-w-[260px] flex-1 flex-col items-start gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 py-[30px]"
        style={{ backgroundImage: "url(/assets/shared/video-card-bg.jpg)" }}
      >
        <div className="flex flex-col items-start gap-5">
          <span className="text-lg font-bold leading-[22px] tracking-normal text-wt">
            {t.video.title}
          </span>
          <span className="h-0.5 w-[60px] rounded-full bg-wt" />
        </div>
        <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-wt">
          {t.video.description}
        </p>
        <button
          type="button"
          aria-label={t.video.ariaPlay}
          className="flex size-[30px] shrink-0 items-center justify-center"
        >
          <Image src="/assets/maquinas/icon-play.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </Section>
  );
}
