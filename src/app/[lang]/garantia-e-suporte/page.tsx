import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalBanner from "@/components/sections/legal/LegalBanner";
import LegalContent, {
  LegalSection,
  LegalP,
  LegalList,
  LegalHighlight,
  LegalContactCard,
} from "@/components/sections/legal/LegalContent";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Garantia e Suporte | Injectra",
  description:
    "Conheça a política de garantia da Injectra para máquinas injetoras e robótica, e como solicitar assistência técnica e peças de reposição.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

const NAV_IDS = [
  "cobertura",
  "prazo",
  "exclusoes",
  "como-solicitar",
  "pecas",
  "canais",
  "contratos",
  "alteracoes",
  "contato",
];

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function GarantiaESuporte({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.legal.warrantySupport;
  const s = t.sections;
  const contact = dict.legal.shared.contact;
  const contactLabels = dict.legal.shared.contactLabels;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner dict={dict} page="warrantySupport" />

        <LegalContent dict={dict} page="warrantySupport" navIds={NAV_IDS}>
          <LegalHighlight>
            <LegalP>
              {t.introBefore}
              <strong>Injectra Corporation</strong>
              {t.introAfter}
            </LegalP>
          </LegalHighlight>

          <LegalSection id="cobertura" title={s.cobertura.title}>
            <LegalP>{s.cobertura.p1}</LegalP>
          </LegalSection>

          <LegalSection id="prazo" title={s.prazo.title}>
            <LegalP>{s.prazo.p1}</LegalP>
            <LegalP>{s.prazo.p2}</LegalP>
          </LegalSection>

          <LegalSection id="exclusoes" title={s.exclusoes.title}>
            <LegalP>{s.exclusoes.p1}</LegalP>
            <LegalList items={s.exclusoes.list} />
          </LegalSection>

          <LegalSection id="como-solicitar" title={s.comoSolicitar.title}>
            <LegalP>{s.comoSolicitar.p1}</LegalP>
          </LegalSection>

          <LegalSection id="pecas" title={s.pecas.title}>
            <LegalP>
              {s.pecas.p1Before}
              <Link
                href="/catalogos"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.pecas.p1LinkLabel}
              </Link>
              {s.pecas.p1After}
            </LegalP>
          </LegalSection>

          <LegalSection id="canais" title={s.canais.title}>
            <LegalP>
              {s.canais.p1Before}
              <Link
                href="/suporte"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.canais.p1LinkLabel}
              </Link>
              {s.canais.p1After}
            </LegalP>
          </LegalSection>

          <LegalSection id="contratos" title={s.contratos.title}>
            <LegalP>{s.contratos.p1}</LegalP>
          </LegalSection>

          <LegalSection id="alteracoes" title={s.alteracoes.title}>
            <LegalP>{s.alteracoes.p1}</LegalP>
          </LegalSection>

          <LegalSection id="contato" title={s.contato.title}>
            <LegalP>{s.contato.p1}</LegalP>
            <LegalContactCard
              dict={dict}
              items={[
                { label: contactLabels.email, value: contact.email },
                { label: contactLabels.phone, value: contact.phone },
                { label: contactLabels.address, value: contact.address },
              ]}
            />
          </LegalSection>
        </LegalContent>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
