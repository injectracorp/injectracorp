import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalBanner from "@/components/sections/legal/LegalBanner";
import LegalContent, {
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalList,
  LegalHighlight,
  LegalContactCard,
} from "@/components/sections/legal/LegalContent";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Cookies | Injectra",
  description:
    "Entenda quais cookies o site da Injectra utiliza, para que servem e como gerenciar suas preferências.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

const NAV_IDS = [
  "o-que-sao",
  "como-usamos",
  "tipos",
  "terceiros",
  "gerenciar",
  "alteracoes",
  "contato",
];

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Cookies({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.legal.cookies;
  const s = t.sections;
  const contact = dict.legal.shared.contact;
  const contactLabels = dict.legal.shared.contactLabels;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner dict={dict} page="cookies" />

        <LegalContent dict={dict} page="cookies" navIds={NAV_IDS}>
          <LegalHighlight>
            <LegalP>
              {t.introBefore}
              <strong>Injectra Corporation</strong>
              {t.introMiddle}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {t.introLinkLabel}
              </Link>
              {t.introAfter}
            </LegalP>
          </LegalHighlight>

          <LegalSection id="o-que-sao" title={s.oQueSao.title}>
            <LegalP>{s.oQueSao.p1}</LegalP>
          </LegalSection>

          <LegalSection id="como-usamos" title={s.comoUsamos.title}>
            <LegalP>{s.comoUsamos.p1}</LegalP>
            <LegalList items={s.comoUsamos.list} />
          </LegalSection>

          <LegalSection id="tipos" title={s.tipos.title}>
            <LegalSubsection title={s.tipos.subsections.essenciais.title}>
              <LegalP>{s.tipos.subsections.essenciais.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.tipos.subsections.desempenho.title}>
              <LegalP>{s.tipos.subsections.desempenho.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.tipos.subsections.funcionalidade.title}>
              <LegalP>{s.tipos.subsections.funcionalidade.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.tipos.subsections.marketing.title}>
              <LegalP>{s.tipos.subsections.marketing.p}</LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="terceiros" title={s.terceiros.title}>
            <LegalP>{s.terceiros.p1}</LegalP>
          </LegalSection>

          <LegalSection id="gerenciar" title={s.gerenciar.title}>
            <LegalP>{s.gerenciar.p1}</LegalP>
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
              ]}
            />
          </LegalSection>
        </LegalContent>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
