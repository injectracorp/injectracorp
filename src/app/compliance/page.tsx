import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Compliance | Injectra",
  description:
    "Conheça o compromisso da Injectra Corporation com ética, integridade, anticorrupção e conformidade regulatória em toda a sua cadeia de valor.",
};

const NAV_ITEMS = [
  { id: "compromisso", label: "1. Nosso Compromisso" },
  { id: "codigo-conduta", label: "2. Código de Conduta" },
  { id: "anticorrupcao", label: "3. Anticorrupção" },
  { id: "protecao-dados", label: "4. Proteção de Dados" },
  { id: "fornecedores", label: "5. Fornecedores e Parceiros" },
  { id: "concorrencia", label: "6. Concorrência Leal" },
  { id: "canal-denuncias", label: "7. Canal de Denúncias" },
  { id: "alteracoes", label: "8. Atualizações" },
  { id: "contato", label: "9. Contato" },
];

export default function Compliance() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner
          eyebrow="ÉTICA & INTEGRIDADE"
          titleMain="Compliance"
          titleHighlight="Injectra"
          subtitle="Conheça o compromisso da Injectra Corporation com ética, integridade, anticorrupção e conformidade em toda a nossa cadeia de valor."
          lastUpdated="Última atualização: 21 de julho de 2026"
        />

        <LegalContent navItems={NAV_ITEMS}>
          <LegalHighlight>
            <LegalP>
              A <strong>Injectra Corporation</strong>, integrante do Interfy Corporation, pauta sua
              atuação pela ética, transparência e conformidade legal e regulatória em todos os países
              onde opera. Este documento resume os princípios de compliance que orientam nossas
              relações com clientes, representantes, fornecedores e colaboradores.
            </LegalP>
          </LegalHighlight>

          <LegalSection id="compromisso" title="1. Nosso Compromisso com a Ética e a Integridade">
            <LegalP>
              A Injectra se compromete a conduzir seus negócios com honestidade, respeito às leis
              aplicáveis e responsabilidade com clientes, colaboradores, representantes, fornecedores
              e comunidades onde atua, apoiando o crescimento sustentável da indústria nas Américas.
            </LegalP>
          </LegalSection>

          <LegalSection id="codigo-conduta" title="2. Código de Conduta">
            <LegalP>
              Colaboradores, diretores e representantes da Injectra devem observar princípios de
              integridade, respeito mútuo, não discriminação e segurança no trabalho, além de evitar
              conflitos de interesse e agir sempre em conformidade com a legislação vigente e as
              políticas internas da empresa.
            </LegalP>
          </LegalSection>

          <LegalSection id="anticorrupcao" title="3. Anticorrupção e Combate à Fraude">
            <LegalP>
              A Injectra não tolera qualquer forma de corrupção, suborno ou pagamento indevido em suas
              relações comerciais, sejam elas com agentes públicos ou privados. Como empresa americana,
              observamos os princípios do Foreign Corrupt Practices Act (FCPA) e demais legislações
              anticorrupção aplicáveis nos países onde atuamos, incluindo o Brasil.
            </LegalP>
            <LegalP>
              Representantes e parceiros comerciais autorizados também estão sujeitos a essas
              diretrizes em suas relações em nome da Injectra.
            </LegalP>
          </LegalSection>

          <LegalSection id="protecao-dados" title="4. Conformidade com Leis de Proteção de Dados">
            <LegalP>
              A Injectra trata dados pessoais em conformidade com as leis de proteção de dados
              aplicáveis, incluindo a Lei Geral de Proteção de Dados (LGPD) no Brasil, conforme
              detalhado em nossa{" "}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Política de Privacidade
              </Link>
              .
            </LegalP>
          </LegalSection>

          <LegalSection id="fornecedores" title="5. Relações com Fornecedores e Parceiros">
            <LegalP>
              Esperamos que fornecedores, representantes e parceiros comerciais da Injectra adotem
              padrões de ética, legalidade e respeito aos direitos humanos e trabalhistas equivalentes
              aos nossos, incluindo a rejeição a trabalho infantil, trabalho forçado e práticas
              anticoncorrenciais.
            </LegalP>
          </LegalSection>

          <LegalSection id="concorrencia" title="6. Concorrência Leal">
            <LegalP>
              A Injectra compete no mercado com base na qualidade de seus produtos e serviços,
              respeitando as leis de defesa da concorrência aplicáveis e evitando acordos ou práticas
              que restrinjam indevidamente a livre concorrência.
            </LegalP>
          </LegalSection>

          <LegalSection id="canal-denuncias" title="7. Canal de Denúncias">
            <LegalP>
              Colaboradores, clientes, representantes e fornecedores podem relatar, de forma
              confidencial, suspeitas de violação a este compromisso de compliance, incluindo condutas
              antiéticas, atos de corrupção ou descumprimento de leis aplicáveis, através do canal
              indicado na seção de contato abaixo.
            </LegalP>
          </LegalSection>

          <LegalSection id="alteracoes" title="8. Atualizações">
            <LegalP>
              Este documento pode ser atualizado periodicamente para refletir evoluções em nossas
              práticas de compliance ou na legislação aplicável. A data da última atualização consta
              no topo desta página.
            </LegalP>
          </LegalSection>

          <LegalSection id="contato" title="9. Contato">
            <LegalP>
              Para relatar uma preocupação ou obter mais informações sobre nosso programa de
              compliance, entre em contato:
            </LegalP>
            <LegalContactCard
              items={[
                { label: "E-mail", value: "info@injectracorp.com" },
                { label: "Telefone", value: "+1 (321) 888-7963" },
                { label: "Endereço", value: "Orlando, Florida, EUA" },
              ]}
            />
          </LegalSection>
        </LegalContent>
      </main>
      <Footer />
    </div>
  );
}
