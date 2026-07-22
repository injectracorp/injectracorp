import Image from "next/image";
import Link from "@/components/LocaleLink";
import Logo from "@/components/Logo";
import { getNavColumns } from "@/data/navColumns";
import { MACHINE_PHOTOS } from "@/data/machinePhotos";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Ícones e estrutura (não-texto) permanecem aqui; o texto vem de
// dict.shared.footer.* (ver src/dictionaries/fragments/shared.json).
const SOCIAL_ICONS = [
  { icon: "/assets/footer/social-instagram.svg", key: "instagram", width: 22, height: 22 },
  { icon: "/assets/footer/social-x.svg", key: "x", width: 22, height: 22 },
  { icon: "/assets/footer/social-linkedin.svg", key: "linkedin", width: 22, height: 22 },
  { icon: "/assets/footer/social-youtube.svg", key: "youtube", width: 22, height: 15.5 },
  { icon: "/assets/footer/social-facebook.svg", key: "facebook", width: 22, height: 22 },
] as const;

const INFO_BAR_ICONS = [
  "/assets/footer/icon-local.svg",
  "/assets/footer/icon-telefone.svg",
  "/assets/footer/icon-mail.svg",
  "/assets/footer/icon-suporte-header.svg",
  "/assets/footer/icon-americas.svg",
];

export default function Footer({ dict }: { dict?: Dictionary }) {
  const footer = dict?.shared?.footer ?? {};
  const columns = getNavColumns(dict ?? {});
  const infoBar: Array<{ title: string; subtitle?: string }> = footer.infoBar ?? [];
  const legalLinks: Array<{ label: string; href: string }> = footer.legalLinks ?? [];
  const socialLabels: Record<string, string> = footer.socialLabels ?? {};
  const ctaBanner = footer.ctaBanner ?? {};
  const bottomBar = footer.bottomBar ?? {};

  return (
    <footer className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-bg-cinza pt-[50px]">
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply">
        <Image
          src="/assets/footer/footer-bg.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Colunas principais */}
      <div className="relative flex w-full flex-col items-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap justify-center gap-x-5 gap-y-10">
          <div className="flex max-w-[450px] flex-1 flex-col items-start gap-5 pr-0 lg:pr-[30px]">
            <div className="flex w-full flex-col items-start gap-[15px]">
              <Link href="/" aria-label={footer.logoAriaLabel}>
                <Logo src="/assets/footer/injectra-logo.svg" className="h-auto max-h-16 w-full max-w-[270px]" />
              </Link>
              {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
              <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
                {footer.taglinePrefix}
                <span className="font-bold text-azul-claro">{footer.taglineHighlight}</span>
                {footer.taglineSuffix}
              </p>
            </div>
            {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
            <p className="text-base font-normal leading-5 tracking-normal text-texto">
              {footer.description}
            </p>
            {/* Alinhado à base do bloco pai (que agora estica para a altura das colunas ao lado) */}
            <div className="mt-auto flex flex-wrap items-center gap-[15px]">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.key}
                  href="#"
                  aria-label={socialLabels[social.key]}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-border-line-bd bg-wt transition-colors hover:bg-bg-light-clean hover:border-azul-claro"
                >
                  <Image src={social.icon} alt="" width={social.width} height={social.height} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex min-w-[220px] flex-1 flex-col gap-10">
              <div className="flex flex-col items-start gap-2.5">
                {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
                <span className="text-gradient-navy text-lg font-bold leading-[22px] tracking-normal">
                  {column.title}
                </span>
                <span className="h-[1.5px] w-[30px] rounded-full bg-azul-claro-plus" />
              </div>
              <div className="flex flex-col items-start gap-5">
                {column.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex w-full items-center gap-2.5"
                  >
                    <Image src={item.icon} alt="" width={36} height={36} className="shrink-0 object-contain" />
                    <div className="flex flex-1 flex-col items-start gap-1 text-texto">
                      {/* 16px/20px, 85 Heavy (700) */}
                      <span className="text-base font-bold leading-5 tracking-normal transition-colors group-hover:text-azul-claro">
                        {item.title}
                      </span>
                      {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                      <span className="text-sm font-normal leading-4 tracking-normal transition-colors group-hover:text-azul-claro">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra de informações */}
      <div className="relative flex w-full items-center justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 rounded-2xl bg-wt px-10 py-5">
          {infoBar.map((info, i) => (
            <div key={info.title ?? i} className="flex min-w-[160px] shrink-0 items-center justify-center gap-2.5">
              <Image src={INFO_BAR_ICONS[i]} alt="" width={24} height={24} className="shrink-0 object-contain" />
              <div className="flex flex-col items-start gap-1 whitespace-nowrap text-dark-blue">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="text-base font-bold leading-5 tracking-normal">{info.title}</span>
                {info.subtitle && (
                  <span className="text-sm font-normal leading-4 tracking-normal">
                    {info.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="relative flex w-full items-center justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-wt p-10">
          <div className="flex min-w-px flex-1 flex-col items-start gap-10">
            <div className="flex w-full min-w-[210px] flex-wrap items-center justify-center gap-5">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-bg-cinza p-6">
                <Image src="/assets/footer/icon-scale-graphic.svg" alt="" width={30} height={30} />
              </span>
              <div className="flex min-w-[190px] flex-1 flex-col items-start gap-2.5">
                {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
                <h3 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
                  {ctaBanner.title}
                </h3>
                <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
                  {ctaBanner.description}
                </p>
              </div>
            </div>
            <div className="flex w-full max-w-[480px] min-w-[250px] flex-wrap items-center justify-center gap-5">
              <Link
                href="/solicitar-cotacao"
                className="flex min-w-[200px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal uppercase text-wt transition-opacity hover:opacity-90"
              >
                <Image className="object-contain" src="/assets/footer/icon-doc.svg" alt="" width={18} height={18} />
                {ctaBanner.quoteButton}
              </Link>
              <Link
                href="/fale-com-especialista"
                className="flex min-w-[200px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal uppercase text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                <Image className="object-contain" src="/assets/footer/icon-headset.svg" alt="" width={18} height={18} />
                {ctaBanner.specialistButton}
              </Link>
            </div>
          </div>
          <Image
            src={MACHINE_PHOTOS.MAX.src}
            alt={ctaBanner.machineImageAlt ?? ""}
            width={MACHINE_PHOTOS.MAX.width}
            height={MACHINE_PHOTOS.MAX.height}
            className="h-auto max-h-[188px] w-full max-w-[500px] flex-1 object-contain"
          />
        </div>
      </div>

      {/* Barra inferior */}
      <div className="flex min-h-[100px] w-full flex-col items-center justify-center bg-dark-blue p-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-y-3.5">
          <div className="flex w-full max-w-[618px] flex-wrap items-center justify-center gap-5 sm:w-auto sm:flex-1 sm:min-w-[400px] sm:justify-start">
            <div className="flex min-w-[200px] shrink-0 items-center gap-2.5">
              <Image src="/assets/footer/usa-flag.svg" alt="" width={30} height={30} />
              <div className="flex flex-col items-start gap-2.5 whitespace-nowrap text-wt">
                <span className="text-base font-bold leading-5 tracking-normal">
                  {bottomBar.countryBadge}
                </span>
                <span className="text-sm font-normal leading-4 tracking-normal">
                  {bottomBar.location}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-start justify-center gap-2.5">
              <span className="text-sm font-normal leading-4 tracking-normal text-wt">
                {bottomBar.groupLabel}
              </span>
              <Image
                src="/assets/footer/interfy-group-logo.svg"
                alt={bottomBar.groupLogoAlt ?? ""}
                width={140}
                height={36}
                className="h-auto max-w-[140px]"
              />
            </div>
            <p className="min-w-[200px] flex-1 text-sm font-normal leading-4 tracking-normal text-wt">
              {bottomBar.copyright}
            </p>
          </div>
          <span className="hidden h-[53px] w-px bg-white/20 sm:block" />
          <div className="flex w-full max-w-[580px] flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-sm font-normal leading-4 tracking-normal text-wt sm:w-auto sm:flex-1 sm:min-w-[400px] sm:justify-end">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-80">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
