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
  title: "Termos de Uso | Injectra",
  description:
    "Leia os Termos de Uso da Injectra Corporation: condições de uso do site, catálogos, cotações, plataforma Injectra AI e demais serviços.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

const NAV_IDS = [
  "aceitacao",
  "sobre",
  "uso-permitido",
  "contas",
  "produtos",
  "propriedade",
  "responsabilidade",
  "links",
  "privacidade",
  "indenizacao",
  "modificacoes",
  "rescisao",
  "legislacao",
  "contato",
];

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function TermosDeUso({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.legal.termsOfUse;
  const s = t.sections;
  const contact = dict.legal.shared.contact;
  const contactLabels = dict.legal.shared.contactLabels;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner dict={dict} page="termsOfUse" />

        <LegalContent dict={dict} page="termsOfUse" navIds={NAV_IDS}>
          <LegalHighlight>
            <LegalP>
              {t.introP1Before}
              <strong>Injectra Corporation</strong>
              {t.introP1After}
            </LegalP>
            <LegalP>{t.introP2}</LegalP>
          </LegalHighlight>

          <LegalSection id="aceitacao" title={s.aceitacao.title}>
            <LegalP>
              {s.aceitacao.p1Before}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.aceitacao.p1LinkLabel}
              </Link>
              {s.aceitacao.p1After}
            </LegalP>
            <LegalP>{s.aceitacao.p2}</LegalP>
          </LegalSection>

          <LegalSection id="sobre" title={s.sobre.title}>
            <LegalP>{s.sobre.p1}</LegalP>
            <LegalP>{s.sobre.p2}</LegalP>
          </LegalSection>

          <LegalSection id="uso-permitido" title={s.usoPermitido.title}>
            <LegalP>{s.usoPermitido.p1}</LegalP>
            <LegalList items={s.usoPermitido.list} />
          </LegalSection>

          <LegalSection id="contas" title={s.contas.title}>
            <LegalSubsection title={s.contas.subsections.criacao.title}>
              <LegalP>{s.contas.subsections.criacao.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.contas.subsections.responsabilidadeConta.title}>
              <LegalP>{s.contas.subsections.responsabilidadeConta.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.contas.subsections.cancelamento.title}>
              <LegalP>{s.contas.subsections.cancelamento.p}</LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="produtos" title={s.produtos.title}>
            <LegalSubsection title={s.produtos.subsections.catalogos.title}>
              <LegalP>{s.produtos.subsections.catalogos.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.produtos.subsections.cotacao.title}>
              <LegalP>{s.produtos.subsections.cotacao.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.produtos.subsections.plataforma.title}>
              <LegalP>{s.produtos.subsections.plataforma.p}</LegalP>
            </LegalSubsection>
            <LegalSubsection title={s.produtos.subsections.representantes.title}>
              <LegalP>{s.produtos.subsections.representantes.p}</LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="propriedade" title={s.propriedade.title}>
            <LegalP>{s.propriedade.p1}</LegalP>
            <LegalP>{s.propriedade.p2}</LegalP>
            <LegalP>{s.propriedade.p3}</LegalP>
          </LegalSection>

          <LegalSection id="responsabilidade" title={s.responsabilidade.title}>
            <LegalP>{s.responsabilidade.p1}</LegalP>
            <LegalP>{s.responsabilidade.p2}</LegalP>
            <LegalP>{s.responsabilidade.p3}</LegalP>
          </LegalSection>

          <LegalSection id="links" title={s.links.title}>
            <LegalP>{s.links.p1}</LegalP>
            <LegalP>{s.links.p2}</LegalP>
          </LegalSection>

          <LegalSection id="privacidade" title={s.privacidade.title}>
            <LegalP>
              {s.privacidade.p1Before}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                {s.privacidade.p1LinkLabel}
              </Link>
              {s.privacidade.p1After}
            </LegalP>
            <LegalP>{s.privacidade.p2}</LegalP>
          </LegalSection>

          <LegalSection id="indenizacao" title={s.indenizacao.title}>
            <LegalP>{s.indenizacao.p1}</LegalP>
          </LegalSection>

          <LegalSection id="modificacoes" title={s.modificacoes.title}>
            <LegalP>{s.modificacoes.p1}</LegalP>
            <LegalP>{s.modificacoes.p2}</LegalP>
          </LegalSection>

          <LegalSection id="rescisao" title={s.rescisao.title}>
            <LegalP>{s.rescisao.p1}</LegalP>
            <LegalP>{s.rescisao.p2}</LegalP>
          </LegalSection>

          <LegalSection id="legislacao" title={s.legislacao.title}>
            <LegalP>{s.legislacao.p1}</LegalP>
            <LegalP>{s.legislacao.p2}</LegalP>
            <LegalP>{s.legislacao.p3}</LegalP>
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
