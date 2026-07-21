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
  title: "Termos de Uso | Injectra",
  description:
    "Leia os Termos de Uso da Injectra Corporation: condições de uso do site, catálogos, cotações, plataforma Injectra AI e demais serviços.",
};

const NAV_ITEMS = [
  { id: "aceitacao", label: "1. Aceitação dos Termos" },
  { id: "sobre", label: "2. Sobre a Injectra" },
  { id: "uso-permitido", label: "3. Uso Permitido do Site" },
  { id: "contas", label: "4. Contas de Usuário" },
  { id: "produtos", label: "5. Produtos, Cotações e Serviços" },
  { id: "propriedade", label: "6. Propriedade Intelectual" },
  { id: "responsabilidade", label: "7. Limitação de Responsabilidade" },
  { id: "links", label: "8. Links de Terceiros" },
  { id: "privacidade", label: "9. Privacidade" },
  { id: "indenizacao", label: "10. Indenização" },
  { id: "modificacoes", label: "11. Modificações" },
  { id: "rescisao", label: "12. Rescisão" },
  { id: "legislacao", label: "13. Legislação Aplicável" },
  { id: "contato", label: "14. Contato" },
];

export default function TermosDeUso() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner
          eyebrow="INFORMAÇÕES LEGAIS"
          titleMain="Termos de"
          titleHighlight="Uso"
          subtitle="Leia com atenção os termos e condições que regem o uso do nosso site, catálogos, cotações e demais produtos e serviços."
          lastUpdated="Última atualização: 21 de julho de 2026"
        />

        <LegalContent navItems={NAV_ITEMS}>
          <LegalHighlight>
            <LegalP>
              Bem-vindo ao site da <strong>Injectra Corporation</strong> (&quot;Injectra&quot;,
              &quot;nós&quot; ou &quot;nosso&quot;). Ao acessar ou utilizar nosso site, catálogos,
              formulários de cotação, aplicativo ou serviços, você concorda com estes Termos de Uso.
              Se não concordar com qualquer parte destes termos, pedimos que não utilize nossos
              serviços.
            </LegalP>
            <LegalP>
              Estes termos constituem um acordo legal entre você (o usuário) e a Injectra
              Corporation, empresa constituída nos Estados Unidos e integrante do Interfy
              Corporation.
            </LegalP>
          </LegalHighlight>

          <LegalSection id="aceitacao" title="1. Aceitação dos Termos">
            <LegalP>
              Ao acessar e usar o site injectracorp.com (e seus subdomínios) ou qualquer catálogo,
              formulário de cotação, aplicativo ou serviço oferecido pela Injectra, você declara ter
              lido, compreendido e concordado com estes Termos de Uso, bem como com nossa{" "}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Política de Privacidade
              </Link>
              .
            </LegalP>
            <LegalP>
              Caso você esteja acessando os serviços em nome de uma empresa ou organização, você
              declara ter autoridade para vincular essa entidade a estes termos.
            </LegalP>
          </LegalSection>

          <LegalSection id="sobre" title="2. Sobre a Injectra">
            <LegalP>
              A Injectra Corporation é uma empresa americana, sediada em Orlando, Florida, EUA,
              especializada em máquinas injetoras (linhas hidráulicas e elétricas), robótica
              industrial e na plataforma Injectra AI, que integra software industrial, IoT, cloud e
              inteligência artificial para gestão de operações produtivas.
            </LegalP>
            <LegalP>
              A Injectra faz parte do Interfy Corporation, grupo global de tecnologia com mais de 26
              anos de atuação em inovação e transformação digital.
            </LegalP>
          </LegalSection>

          <LegalSection id="uso-permitido" title="3. Uso Permitido do Site">
            <LegalP>
              Você pode utilizar nosso site para fins lícitos e de acordo com estes Termos. É
              expressamente proibido:
            </LegalP>
            <LegalList
              items={[
                "Utilizar o site de forma que viole leis ou regulamentos aplicáveis",
                "Transmitir qualquer material publicitário ou promocional não solicitado",
                "Tentar obter acesso não autorizado a qualquer parte do site, portal ou plataforma Injectra AI",
                "Interferir ou interromper a integridade ou o desempenho do site",
                "Coletar ou colher dados de outros usuários sem consentimento",
                "Usar robôs, scrapers ou outros meios automatizados para acessar o site",
                "Fazer engenharia reversa, descompilar ou desmontar qualquer software da plataforma",
              ]}
            />
          </LegalSection>

          <LegalSection id="contas" title="4. Contas de Usuário">
            <LegalSubsection title="4.1 Criação de conta">
              <LegalP>
                Alguns recursos, como o portal do cliente e a plataforma Injectra AI, podem exigir o
                cadastro de uma conta. Ao criar uma conta, você se compromete a fornecer informações
                verdadeiras, precisas e completas.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="4.2 Responsabilidade pela conta">
              <LegalP>
                Você é responsável por manter a confidencialidade das suas credenciais de acesso e por
                todas as atividades realizadas com sua conta. Notifique imediatamente a Injectra sobre
                qualquer uso não autorizado.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="4.3 Cancelamento">
              <LegalP>
                A Injectra reserva-se o direito de cancelar ou suspender contas que violem estes
                Termos, sem aviso prévio.
              </LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="produtos" title="5. Produtos, Cotações e Serviços">
            <LegalSubsection title="5.1 Catálogos e especificações">
              <LegalP>
                Fazemos o possível para manter catálogos, fichas técnicas e especificações de
                máquinas e robótica precisos e atualizados. No entanto, não garantimos que essas
                informações estejam completas, livres de erros ou refletindo a configuração final de
                cada projeto, que pode variar conforme aplicação.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="5.2 Solicitação de cotação">
              <LegalP>
                O envio de um formulário de cotação ou o contato com um especialista não constitui um
                pedido de compra vinculante. Preços e condições comerciais são formalizados em
                proposta específica, enviada pela nossa equipe comercial.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="5.3 Plataforma Injectra AI e IoT">
              <LegalP>
                O uso da plataforma Injectra AI, do aplicativo mobile e dos dispositivos conectados de
                IoT está sujeito a termos específicos apresentados no momento da ativação. Esses
                termos complementam os presentes Termos de Uso gerais.
              </LegalP>
            </LegalSubsection>
            <LegalSubsection title="5.4 Representantes e parceiros">
              <LegalP>
                Representantes e parceiros comerciais autorizados atuam sob contrato próprio com a
                Injectra e não estão automaticamente vinculados a estes Termos em suas relações com
                terceiros.
              </LegalP>
            </LegalSubsection>
          </LegalSection>

          <LegalSection id="propriedade" title="6. Propriedade Intelectual">
            <LegalP>
              Todo o conteúdo presente no site da Injectra — incluindo textos, imagens, logotipos,
              ícones, vídeos, catálogos, software e design — é de propriedade exclusiva da Injectra
              Corporation ou de seus licenciadores, e está protegido por leis de direito autoral,
              marcas registradas e outras leis de propriedade intelectual aplicáveis.
            </LegalP>
            <LegalP>
              É proibida a reprodução, distribuição, modificação, exibição pública ou criação de obras
              derivadas de qualquer conteúdo do site sem autorização prévia e por escrito da Injectra.
            </LegalP>
            <LegalP>
              O nome Injectra, o logotipo e outras marcas comerciais da Injectra Corporation são
              marcas registradas ou em processo de registro. Seu uso não autorizado é proibido.
            </LegalP>
          </LegalSection>

          <LegalSection id="responsabilidade" title="7. Limitação de Responsabilidade">
            <LegalP>
              Na máxima extensão permitida pela lei aplicável, a Injectra não será responsável por
              danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso
              ou da incapacidade de uso do site, dos produtos ou dos serviços.
            </LegalP>
            <LegalP>
              A Injectra não se responsabiliza por interrupções causadas por fatores fora de seu
              controle, incluindo falhas de infraestrutura de terceiros, desastres naturais ou ataques
              cibernéticos.
            </LegalP>
            <LegalP>
              O usuário reconhece que o uso do site e dos serviços é por sua conta e risco, dentro dos
              limites previstos em lei.
            </LegalP>
          </LegalSection>

          <LegalSection id="links" title="8. Links de Terceiros">
            <LegalP>
              Nosso site pode conter links para sites de terceiros, incluindo representantes,
              parceiros e redes sociais. Esses links são fornecidos apenas para conveniência e
              informação. A Injectra não tem controle sobre o conteúdo desses sites e não se
              responsabiliza por seu conteúdo, práticas de privacidade ou disponibilidade.
            </LegalP>
            <LegalP>
              O acesso a sites de terceiros é de inteira responsabilidade do usuário, devendo este
              verificar os termos e políticas desses sites antes de utilizá-los.
            </LegalP>
          </LegalSection>

          <LegalSection id="privacidade" title="9. Privacidade">
            <LegalP>
              O tratamento de dados pessoais coletados pela Injectra é regido por nossa{" "}
              <Link
                href="/politicas-privacidade"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Política de Privacidade
              </Link>
              , que integra estes Termos de Uso. Ao utilizar nossos serviços, você consente com as
              práticas de coleta e uso de dados descritas nessa política.
            </LegalP>
            <LegalP>
              A Injectra está comprometida com a conformidade às legislações de proteção de dados
              aplicáveis, incluindo a Lei Geral de Proteção de Dados (LGPD) no Brasil e demais leis de
              proteção de dados vigentes nos países onde atuamos.
            </LegalP>
          </LegalSection>

          <LegalSection id="indenizacao" title="10. Indenização">
            <LegalP>
              Você concorda em defender, indenizar e isentar a Injectra Corporation, seus diretores,
              funcionários, parceiros e agentes de quaisquer reclamações, responsabilidades, danos,
              perdas e despesas (incluindo honorários advocatícios razoáveis) decorrentes do seu uso
              do site ou violação destes Termos.
            </LegalP>
          </LegalSection>

          <LegalSection id="modificacoes" title="11. Modificações dos Termos">
            <LegalP>
              A Injectra reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As
              alterações entrarão em vigor imediatamente após a publicação no site, com a atualização
              da data no topo desta página.
            </LegalP>
            <LegalP>
              O uso continuado do site após a publicação de alterações constitui aceitação dos novos
              Termos. Recomendamos que você revise esta página periodicamente.
            </LegalP>
          </LegalSection>

          <LegalSection id="rescisao" title="12. Rescisão">
            <LegalP>
              A Injectra pode encerrar ou suspender seu acesso ao site, ao portal do cliente ou à
              plataforma Injectra AI a qualquer momento, com ou sem aviso prévio, por qualquer motivo,
              incluindo violação destes Termos.
            </LegalP>
            <LegalP>
              Após a rescisão, as disposições destes Termos que por sua natureza devam sobreviver
              permanecerão em vigor, incluindo as seções de propriedade intelectual, limitação de
              responsabilidade e indenização.
            </LegalP>
          </LegalSection>

          <LegalSection id="legislacao" title="13. Legislação Aplicável e Foro">
            <LegalP>
              Estes Termos de Uso são regidos pelas leis do Estado da Florida, Estados Unidos, sem
              prejuízo das leis de proteção ao consumidor aplicáveis no país de residência do usuário.
            </LegalP>
            <LegalP>
              No Brasil, as relações com usuários e clientes brasileiros estão também sujeitas ao
              Código de Defesa do Consumidor (Lei nº 8.078/1990) e à legislação brasileira aplicável.
            </LegalP>
            <LegalP>
              Qualquer disputa decorrente destes Termos será preferencialmente resolvida por meio de
              mediação. Não sendo possível, fica eleito o foro da comarca de residência do usuário,
              nos termos da legislação aplicável.
            </LegalP>
          </LegalSection>

          <LegalSection id="contato" title="14. Contato">
            <LegalP>
              Em caso de dúvidas, sugestões ou reclamações relacionadas a estes Termos de Uso, entre
              em contato com a Injectra:
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
