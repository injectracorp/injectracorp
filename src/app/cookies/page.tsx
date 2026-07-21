import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Cookies | Injectra",
  description:
    "Entenda quais cookies o site da Injectra utiliza, para que servem e como gerenciar suas preferências.",
};

const NAV_ITEMS = [
  { id: "o-que-sao", label: "1. O que são Cookies" },
  { id: "como-usamos", label: "2. Como Utilizamos" },
  { id: "tipos", label: "3. Tipos de Cookies" },
  { id: "terceiros", label: "4. Cookies de Terceiros" },
  { id: "gerenciar", label: "5. Como Gerenciar" },
  { id: "alteracoes", label: "6. Atualizações" },
  { id: "contato", label: "7. Contato" },
];

export default function Cookies() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner
          eyebrow="INFORMAÇÕES LEGAIS"
          titleMain="Política de"
          titleHighlight="Cookies"
          subtitle="Saiba o que são cookies, quais tipos utilizamos no site da Injectra e como você pode gerenciar suas preferências."
          lastUpdated="Última atualização: 21 de julho de 2026"
        />

        <LegalContent navItems={NAV_ITEMS}>
          <LegalHighlight>
            <LegalP>
              Esta Política de Cookies explica como a <strong>Injectra Corporation</strong> utiliza
              cookies e tecnologias semelhantes no site injectracorp.com, complementando nossa{" "}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Política de Privacidade
              </Link>
              .
            </LegalP>
          </LegalHighlight>

          <LegalSection id="o-que-sao" title="1. O que são Cookies">
            <LegalP>
              Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo
              quando você visita um site. Eles permitem que o site reconheça seu dispositivo, lembre
              preferências e colete informações sobre como o site é utilizado.
            </LegalP>
          </LegalSection>

          <LegalSection id="como-usamos" title="2. Como Utilizamos Cookies">
            <LegalP>Utilizamos cookies para:</LegalP>
            <LegalList
              items={[
                "Garantir o funcionamento correto do site e do formulário de solicitação de cotação",
                "Lembrar preferências de navegação, como idioma e região",
                "Entender como os visitantes utilizam nosso site, quais catálogos e linhas de máquinas geram mais interesse",
                "Medir a eficácia de campanhas de marketing e comunicação",
              ]}
            />
          </LegalSection>

          <LegalSection id="tipos" title="3. Tipos de Cookies que Utilizamos">
            <LegalSubsection title="3.1 Cookies essenciais">
              <LegalP>
                Necessários para o funcionamento básico do site, como navegação entre páginas e envio
                de formulários. Não podem ser desativados em nossos sistemas.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="3.2 Cookies de desempenho e analytics">
              <LegalP>
                Coletam informações sobre como os visitantes utilizam o site — páginas mais acessadas,
                tempo de navegação e origem do tráfego — para nos ajudar a melhorar conteúdo e
                usabilidade.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="3.3 Cookies de funcionalidade">
              <LegalP>
                Permitem lembrar escolhas feitas pelo usuário, como idioma, região ou preenchimento
                prévio de formulários, para uma experiência mais personalizada.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="3.4 Cookies de marketing">
              <LegalP>
                Utilizados para exibir comunicações e anúncios mais relevantes com base no seu
                interesse em nossas linhas de máquinas, robótica e plataforma Injectra AI, dentro e
                fora do nosso site.
              </LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="terceiros" title="4. Cookies de Terceiros">
            <LegalP>
              Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas,
              como ferramentas de análise de tráfego, mapas e vídeos incorporados. A Injectra não
              controla esses cookies, que estão sujeitos às políticas de privacidade dos respectivos
              provedores.
            </LegalP>
          </LegalSection>

          <LegalSection id="gerenciar" title="5. Como Gerenciar suas Preferências de Cookies">
            <LegalP>
              Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador,
              bloqueando cookies novos ou removendo os já armazenados. Note que desativar cookies
              essenciais pode afetar o funcionamento correto do site, incluindo o envio de formulários
              de cotação e contato.
            </LegalP>
          </LegalSection>

          <LegalSection id="alteracoes" title="6. Atualizações desta Política">
            <LegalP>
              Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças em
              nossas práticas ou nas tecnologias utilizadas. A data da última atualização consta no
              topo desta página.
            </LegalP>
          </LegalSection>

          <LegalSection id="contato" title="7. Contato">
            <LegalP>
              Em caso de dúvidas sobre o uso de cookies no nosso site, entre em contato:
            </LegalP>
            <LegalContactCard
              items={[
                { label: "E-mail", value: "info@injectracorp.com" },
                { label: "Telefone", value: "+1 (321) 888-7963" },
              ]}
            />
          </LegalSection>
        </LegalContent>
      </main>
      <Footer />
    </div>
  );
}
