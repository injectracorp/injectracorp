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
  title: "Compliance | Injectra",
  description:
    "Conheça o compromisso da Injectra Corporation com ética, integridade, anticorrupção e conformidade regulatória em toda a sua cadeia de valor.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

const NAV_IDS = [
  "compromisso",
  "codigo-conduta",
  "anticorrupcao",
  "protecao-dados",
  "fornecedores",
  "concorrencia",
  "canal-denuncias",
  "alteracoes",
  "contato",
];

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Compliance({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.legal.compliance;
  const s = t.sections;
  const contact = dict.legal.shared.contact;
  const contactLabels = dict.legal.shared.contactLabels;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner dict={dict} page="compliance" />

        <LegalContent dict={dict} page="compliance" navIds={NAV_IDS}>
          <LegalHighlight>
            <LegalP>
              {t.introBefore}
              <strong>Injectra Corporation</strong>
              {t.introAfter}
            </LegalP>
          </LegalHighlight>

          <LegalSection id="compromisso" title={s.compromisso.title}>
            <LegalP>{s.compromisso.p1}</LegalP>
          </LegalSection>

          <LegalSection id="codigo-conduta" title={s.codigoConduta.title}>
            <LegalP>{s.codigoConduta.p1}</LegalP>
          </LegalSection>

          <LegalSection id="anticorrupcao" title={s.anticorrupcao.title}>
            <LegalP>{s.anticorrupcao.p1}</LegalP>
            <LegalP>{s.anticorrupcao.p2}</LegalP>
          </LegalSection>

          <LegalSection id="protecao-dados" title={s.protecaoDados.title}>
            <LegalP>
              {s.protecaoDados.p1Before}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.protecaoDados.p1LinkLabel}
              </Link>
              {s.protecaoDados.p1After}
            </LegalP>
          </LegalSection>

          <LegalSection id="fornecedores" title={s.fornecedores.title}>
            <LegalP>{s.fornecedores.p1}</LegalP>
          </LegalSection>

          <LegalSection id="concorrencia" title={s.concorrencia.title}>
            <LegalP>{s.concorrencia.p1}</LegalP>
          </LegalSection>

          <LegalSection id="canal-denuncias" title={s.canalDenuncias.title}>
            <LegalP>{s.canalDenuncias.p1}</LegalP>
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
