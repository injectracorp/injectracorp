import Image from "next/image";
import { getMachinePhoto } from "@/data/machinePhotos";
import type { Dictionary } from "@/lib/i18n/dictionary";

export type CatalogItem = {
  name: string;
  color: string;
  description: string;
};

// Card reutilizado nas 3 seções de catálogos (Catálogos Gerais, Linhas de
// Máquinas e Soluções Digitais e Automação) — mesma estrutura no Figma
// (componente "Frame 240/Variante 6"), só muda o conteúdo. `name` e
// `description` já chegam traduzidos via dict.catalogos.*.items nas seções
// que renderizam este card; `dict` é recebido apenas para manter a assinatura
// consistente com as demais seções de catálogos (nenhum texto é lido daqui).
export default function CatalogCard({
  name,
  color,
  description,
}: CatalogItem & { dict: Dictionary }) {
  const photo = getMachinePhoto(name);
  return (
    <div className="flex min-w-[260px] max-w-[300px] flex-1 flex-col items-center justify-center gap-10 rounded-2xl bg-bg-cinza p-5">
      <div className="relative flex aspect-[363/300] w-full items-center justify-center overflow-hidden rounded-xl p-5">
        <Image src="/assets/shared/catalog-card-bg.png" alt="" fill className="object-cover" />
        <Image
          src={photo?.src ?? "/assets/shared/machine-photo.png"}
          alt={name}
          width={photo?.width ?? 300}
          height={photo?.height ?? 112}
          className="relative h-auto w-full max-w-[300px] object-contain"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-5">
        <div className="flex w-full items-center gap-2.5">
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <span
            className="flex-1 text-lg font-bold leading-[22px] tracking-normal"
            style={{ color }}
          >
            {name}
          </span>
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-lg border border-azul-claro-minus">
            <Image src="/assets/catalogos/icon-download.svg" alt="" width={16} height={16} />
          </span>
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <p className="w-full text-sm font-bold leading-[17px] tracking-normal text-texto">
          {description}
        </p>
      </div>
    </div>
  );
}
