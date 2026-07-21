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
  title: "Políticas de Privacidade | Injectra",
  description:
    "Conheça a Política de Privacidade da Injectra Corporation: quais dados coletamos, como usamos, com quem compartilhamos e quais são os seus direitos.",
};

const NAV_ITEMS = [
  { id: "controlador", label: "1. Controlador de Dados" },
  { id: "coleta", label: "2. Dados Coletados" },
  { id: "finalidades", label: "3. Finalidades do Tratamento" },
  { id: "bases-legais", label: "4. Bases Legais" },
  { id: "compartilhamento", label: "5. Compartilhamento" },
  { id: "cookies", label: "6. Cookies" },
  { id: "retencao", label: "7. Retenção" },
  { id: "seguranca", label: "8. Segurança" },
  { id: "direitos", label: "9. Seus Direitos" },
  { id: "transferencias", label: "10. Transferências Internacionais" },
  { id: "menores", label: "11. Menores de Idade" },
  { id: "alteracoes", label: "12. Alterações" },
  { id: "contato", label: "13. Encarregado de Proteção de Dados" },
];

export default function PoliticasPrivacidade() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner
          eyebrow="PRIVACIDADE & TRANSPARÊNCIA"
          titleMain="Políticas de"
          titleHighlight="Privacidade"
          subtitle="Saiba como a Injectra coleta, usa, compartilha e protege os dados pessoais tratados através do nosso site, catálogos, cotações e plataforma Injectra AI."
          lastUpdated="Última atualização: 21 de julho de 2026"
        />

        <LegalContent navItems={NAV_ITEMS}>
          <LegalHighlight>
            <LegalP>
              Esta Política de Privacidade descreve como a <strong>Injectra Corporation</strong>{" "}
              (&quot;Injectra&quot;, &quot;nós&quot; ou &quot;nosso&quot;) coleta, usa, armazena e
              protege os dados pessoais de visitantes do site, solicitantes de cotação, clientes,
              representantes e usuários da plataforma Injectra AI.
            </LegalP>
            <LegalP>
              Ao utilizar nossos canais, você concorda com as práticas descritas nesta Política, que
              complementa os nossos{" "}
              <Link
                href="/termos-de-uso"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Termos de Uso
              </Link>
              .
            </LegalP>
          </LegalHighlight>

          <LegalSection id="controlador" title="1. Controlador de Dados">
            <LegalP>
              A controladora dos dados pessoais tratados neste site é a Injectra Corporation, empresa
              constituída nos Estados Unidos, com sede em Orlando, Florida, e integrante do Interfy
              Corporation.
            </LegalP>
          </LegalSection>

          <LegalSection id="coleta" title="2. Dados Coletados">
            <LegalP>Podemos coletar as seguintes categorias de dados:</LegalP>
            <LegalList
              items={[
                "Dados de identificação e contato: nome, e-mail, telefone, empresa e cargo, fornecidos em formulários de cotação, contato ou download de catálogos",
                "Dados comerciais: segmento industrial, produtos de interesse, volume de produção e demais informações fornecidas para elaboração de propostas",
                "Dados de navegação: endereço IP, tipo de dispositivo, páginas visitadas e origem do acesso, coletados via cookies e tecnologias semelhantes",
                "Dados operacionais e de telemetria: quando aplicável, dados de desempenho e utilização de máquinas conectadas à plataforma Injectra AI/IoT, conforme contrato específico com o cliente",
              ]}
            />
          </LegalSection>

          <LegalSection id="finalidades" title="3. Finalidades do Tratamento">
            <LegalList
              items={[
                "Responder a solicitações de cotação, contato e suporte técnico",
                "Elaborar propostas comerciais e viabilizar a venda de máquinas, robótica e serviços",
                "Disponibilizar e melhorar a plataforma Injectra AI, o aplicativo mobile e os serviços de IoT/analytics",
                "Enviar comunicações comerciais, catálogos e novidades, quando autorizado pelo usuário",
                "Cumprir obrigações legais, regulatórias e contratuais",
                "Prevenir fraudes e garantir a segurança do site e da plataforma",
              ]}
            />
          </LegalSection>

          <LegalSection id="bases-legais" title="4. Bases Legais">
            <LegalP>
              O tratamento de dados pessoais pela Injectra fundamenta-se, conforme o caso, na execução
              de contrato ou de procedimentos preliminares a ele (como a elaboração de cotações), no
              cumprimento de obrigação legal, no legítimo interesse da Injectra e no consentimento do
              titular, especialmente para o envio de comunicações de marketing e uso de cookies não
              essenciais.
            </LegalP>
          </LegalSection>

          <LegalSection id="compartilhamento" title="5. Compartilhamento de Dados">
            <LegalP>Seus dados podem ser compartilhados com:</LegalP>
            <LegalList
              items={[
                "Empresas do Interfy Corporation, para fins administrativos e de suporte corporativo",
                "Representantes e parceiros comerciais autorizados, exclusivamente para viabilizar cotações e atendimento local",
                "Prestadores de serviço (hospedagem, e-mail marketing, análise de dados), sob obrigações contratuais de confidencialidade e segurança",
                "Autoridades públicas, quando exigido por lei, ordem judicial ou requisição regulatória",
              ]}
            />
            <LegalP>A Injectra não vende dados pessoais a terceiros.</LegalP>
          </LegalSection>

          <LegalSection id="cookies" title="6. Cookies">
            <LegalP>
              Utilizamos cookies e tecnologias semelhantes para viabilizar e melhorar a navegação no
              site. Os detalhes sobre os tipos de cookies utilizados e como gerenciar suas preferências
              estão disponíveis em nossa{" "}
              <Link
                href="/cookies"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Política de Cookies
              </Link>
              .
            </LegalP>
          </LegalSection>

          <LegalSection id="retencao" title="7. Retenção de Dados">
            <LegalP>
              Mantemos os dados pessoais pelo tempo necessário ao cumprimento das finalidades
              descritas nesta Política, observados prazos legais, contratuais e regulatórios
              aplicáveis. Dados de relacionamento comercial e propostas são retidos durante a vigência
              da relação e por prazo adicional exigido para fins fiscais, contábeis e de defesa em
              processos judiciais ou administrativos.
            </LegalP>
          </LegalSection>

          <LegalSection id="seguranca" title="8. Segurança da Informação">
            <LegalP>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
              contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo
              controles de acesso, criptografia em trânsito e monitoramento de nossos sistemas e da
              plataforma Injectra AI.
            </LegalP>
          </LegalSection>

          <LegalSection id="direitos" title="9. Seus Direitos">
            <LegalP>
              Nos termos da legislação de proteção de dados aplicável, você pode solicitar:
            </LegalP>
            <LegalList
              items={[
                "Confirmação da existência de tratamento e acesso aos seus dados",
                "Correção de dados incompletos, inexatos ou desatualizados",
                "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei",
                "Portabilidade dos dados a outro fornecedor de serviço ou produto",
                "Revogação do consentimento e oposição a tratamentos realizados com base no legítimo interesse",
              ]}
            />
            <LegalP>
              Para exercer esses direitos, entre em contato pelos canais indicados na seção 13.
            </LegalP>
          </LegalSection>

          <LegalSection id="transferencias" title="10. Transferências Internacionais">
            <LegalP>
              Como empresa americana com atuação nas Américas, a Injectra pode transferir dados
              pessoais entre países, incluindo aos Estados Unidos, para as finalidades descritas nesta
              Política. Nessas transferências, adotamos salvaguardas contratuais e técnicas compatíveis
              com a legislação aplicável, incluindo a LGPD, quando o titular estiver no Brasil.
            </LegalP>
          </LegalSection>

          <LegalSection id="menores" title="11. Menores de Idade">
            <LegalP>
              Nossos produtos e serviços são destinados a empresas e profissionais e não são
              direcionados a menores de idade. Não coletamos intencionalmente dados pessoais de
              crianças ou adolescentes.
            </LegalP>
          </LegalSection>

          <LegalSection id="alteracoes" title="12. Alterações desta Política">
            <LegalP>
              A Injectra pode atualizar esta Política de Privacidade periodicamente para refletir
              mudanças em nossas práticas ou na legislação aplicável. A data da última atualização
              consta no topo desta página. Recomendamos a revisão periódica deste documento.
            </LegalP>
          </LegalSection>

          <LegalSection id="contato" title="13. Encarregado de Proteção de Dados">
            <LegalP>
              Em caso de dúvidas sobre esta Política ou para exercer seus direitos como titular de
              dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
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
