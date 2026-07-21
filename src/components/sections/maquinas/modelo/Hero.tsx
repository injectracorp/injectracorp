import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import type { MachineLineDetail, MachineModel, ModelSpecs } from "@/data/machineModels";
import { getMachinePhoto } from "@/data/machinePhotos";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7234:6779 —
// "MÁQUINAS - NAVEGAÇÃO", modelo de exemplo "Prime IP - 60").

function Breadcrumb({ model }: { model: MachineModel }) {
  const crumbTextClass =
    "text-lg font-normal leading-[22px] tracking-normal text-texto-sem-destaque-2 transition-colors hover:text-azul-claro-plus";

  return (
    <div className="flex w-full flex-wrap items-center gap-5">
      <Link href="/" className={crumbTextClass}>
        Home
      </Link>
      <Image src="/assets/shared/breadcrumb-chevron.svg" alt="" width={4} height={8} />
      <Link href="/maquinas" className={crumbTextClass}>
        Máquinas
      </Link>
      <Image src="/assets/shared/breadcrumb-chevron.svg" alt="" width={4} height={8} />
      {/* Label ativo — Label 18 / 85 Heavy, cor azul-claro-plus */}
      <span className="text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
        {model.name}
      </span>
    </div>
  );
}

function Sidebar({ line, activeSlug }: { line: MachineLineDetail; activeSlug: string }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border-[0.5px] border-border-line-bd lg:w-[360px] lg:shrink-0">
      {line.models.map((m) => {
        const active = m.slug === activeSlug;
        return (
          <Link
            key={m.slug}
            href={`/maquinas/${line.slug}/${m.slug}`}
            className={`flex min-h-[50px] items-center gap-2.5 border-b-[0.5px] border-border-line-bd px-[15px] py-2.5 last:border-b-0 ${
              active ? "bg-azul-claro-plus" : "bg-wt hover:bg-bg-light-clean"
            }`}
          >
            <span
              className={`flex-1 text-base font-bold leading-5 tracking-normal ${
                active ? "text-wt" : "text-texto"
              }`}
            >
              {m.name}
            </span>
            <Image className="object-contain"
              src={active ? "/assets/shared/arrow-side-white.svg" : "/assets/shared/arrow-side-texto.svg"}
              alt=""
              width={9}
              height={9}
            />
          </Link>
        );
      })}
    </div>
  );
}

function QuickSpecs({ model, specs }: { model: MachineModel; specs: ModelSpecs }) {
  const items = [
    {
      icon: "/assets/maquinas/icon-peso.svg",
      title: `${model.slug} T de Força`,
      subtitle: "de fechamento",
    },
    {
      icon: "/assets/maquinas/icon-tie-bar.svg",
      title: "Tie Bar",
      subtitle: specs.tieBar,
    },
    {
      icon: "/assets/maquinas/icon-precisao.svg",
      title: "Alta Precisão",
    },
    {
      icon: "/assets/shared/icon-suporte-247.svg",
      title: "Suporte técnico",
      subtitle: "especializado",
    },
  ];

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-y-10 rounded-2xl border-[0.5px] border-border-line-bd bg-wt py-10">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`flex min-w-[220px] flex-1 items-center justify-center gap-5 px-5 ${
            i > 0 ? "border-l-[0.5px] border-border-line-bd" : ""
          }`}
        >
          <Image src={item.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
          <div className="flex flex-col items-start gap-2.5 whitespace-nowrap text-dark-blue">
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="text-lg font-bold leading-[22px] tracking-normal">{item.title}</span>
            {item.subtitle && (
              // Texto menor 16 — 16px/20px, 55 Roman (400)
              <span className="text-base font-normal leading-5 tracking-normal">{item.subtitle}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero({
  line,
  model,
  specs,
}: {
  line: MachineLineDetail;
  model: MachineModel;
  specs: ModelSpecs;
}) {
  const photo = getMachinePhoto(line.shortName);
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col gap-10">
        <Breadcrumb model={model} />

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">
          <Sidebar line={line} activeSlug={model.slug} />

          <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
              <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
                {model.name}
              </h1>
              {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
              <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
                {line.description}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/solicitar-cotacao"
                  className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
                >
                  Solicitar Cotação
                  <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
                </Link>
                <Link
                  href="/catalogos"
                  className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
                >
                  Baixar Catálogo
                  <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
                </Link>
                <Link
                  href="/fale-com-especialista"
                  className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
                >
                  Falar com Especialista
                  <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
                </Link>
              </div>
            </div>

            <Image
              src={photo?.src ?? "/assets/shared/machine-photo.png"}
              alt={model.name}
              width={photo?.width ?? 1000}
              height={photo?.height ?? 375}
              className="h-auto w-full max-w-[1000px] object-contain"
            />

            <QuickSpecs model={model} specs={specs} />
          </div>
        </div>
      </div>
    </Section>
  );
}
