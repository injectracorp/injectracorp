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
  title: "Políticas de Privacidade | Injectra",
  description:
    "Conheça a Política de Privacidade da Injectra Corporation: quais dados coletamos, como usamos, com quem compartilhamos e quais são os seus direitos.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

const NAV_IDS = [
  "controlador",
  "coleta",
  "finalidades",
  "bases-legais",
  "compartilhamento",
  "cookies",
  "retencao",
  "seguranca",
  "direitos",
  "transferencias",
  "menores",
  "alteracoes",
  "contato",
];

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function PoliticasPrivacidade({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.legal.privacyPolicy;
  const s = t.sections;
  const contact = dict.legal.shared.contact;
  const contactLabels = dict.legal.shared.contactLabels;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner dict={dict} page="privacyPolicy" />

        <LegalContent dict={dict} page="privacyPolicy" navIds={NAV_IDS}>
          <LegalHighlight>
            <LegalP>
              {t.introP1Before}
              <strong>Injectra Corporation</strong>
              {t.introP1After}
            </LegalP>
            <LegalP>
              {t.introP2Before}
              <Link
                href="/termos-de-uso"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {t.introP2LinkLabel}
              </Link>
              {t.introP2After}
            </LegalP>
          </LegalHighlight>

          <LegalSection id="controlador" title={s.controlador.title}>
            <LegalP>{s.controlador.p1}</LegalP>
          </LegalSection>

          <LegalSection id="coleta" title={s.coleta.title}>
            <LegalP>{s.coleta.p1}</LegalP>
            <LegalList items={s.coleta.list} />
          </LegalSection>

          <LegalSection id="finalidades" title={s.finalidades.title}>
            <LegalList items={s.finalidades.list} />
          </LegalSection>

          <LegalSection id="bases-legais" title={s.basesLegais.title}>
            <LegalP>{s.basesLegais.p1}</LegalP>
          </LegalSection>

          <LegalSection id="compartilhamento" title={s.compartilhamento.title}>
            <LegalP>{s.compartilhamento.p1}</LegalP>
            <LegalList items={s.compartilhamento.list} />
            <LegalP>{s.compartilhamento.p2}</LegalP>
          </LegalSection>

          <LegalSection id="cookies" title={s.cookies.title}>
            <LegalP>
              {s.cookies.p1Before}
              <Link
                href="/cookies"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.cookies.p1LinkLabel}
              </Link>
              {s.cookies.p1After}
            </LegalP>
          </LegalSection>

          <LegalSection id="retencao" title={s.retencao.title}>
            <LegalP>{s.retencao.p1}</LegalP>
          </LegalSection>

          <LegalSection id="seguranca" title={s.seguranca.title}>
            <LegalP>{s.seguranca.p1}</LegalP>
          </LegalSection>

          <LegalSection id="direitos" title={s.direitos.title}>
            <LegalP>{s.direitos.p1}</LegalP>
            <LegalList items={s.direitos.list} />
            <LegalP>{s.direitos.p2}</LegalP>
          </LegalSection>

          <LegalSection id="transferencias" title={s.transferencias.title}>
            <LegalP>{s.transferencias.p1}</LegalP>
          </LegalSection>

          <LegalSection id="menores" title={s.menores.title}>
            <LegalP>{s.menores.p1}</LegalP>
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
