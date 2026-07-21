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
  title: "Garantia e Suporte | Injectra",
  description:
    "Conheça a política de garantia da Injectra para máquinas injetoras e robótica, e como solicitar assistência técnica e peças de reposição.",
};

const NAV_ITEMS = [
  { id: "cobertura", label: "1. Cobertura da Garantia" },
  { id: "prazo", label: "2. Prazo de Garantia" },
  { id: "exclusoes", label: "3. Exclusões da Garantia" },
  { id: "como-solicitar", label: "4. Como Solicitar Atendimento" },
  { id: "pecas", label: "5. Peças de Reposição" },
  { id: "canais", label: "6. Canais de Suporte" },
  { id: "contratos", label: "7. Contratos e Garantia Estendida" },
  { id: "alteracoes", label: "8. Alterações" },
  { id: "contato", label: "9. Contato" },
];

export default function GarantiaESuporte() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <LegalBanner
          eyebrow="INFORMAÇÕES LEGAIS"
          titleMain="Garantia e"
          titleHighlight="Suporte"
          subtitle="Conheça as condições de garantia das máquinas e robótica Injectra, e como acessar assistência técnica, peças e suporte especializado."
          lastUpdated="Última atualização: 21 de julho de 2026"
        />

        <LegalContent navItems={NAV_ITEMS}>
          <LegalHighlight>
            <LegalP>
              Esta política descreve as condições gerais de garantia aplicáveis às máquinas
              injetoras e soluções de robótica da <strong>Injectra Corporation</strong>, bem como os
              canais disponíveis para assistência técnica e suporte. Condições específicas de cada
              equipamento prevalecem sobre esta política geral quando previstas em contrato ou nota
              fiscal.
            </LegalP>
          </LegalHighlight>

          <LegalSection id="cobertura" title="1. Cobertura da Garantia">
            <LegalP>
              A garantia Injectra cobre defeitos de fabricação em materiais e componentes das
              máquinas injetoras (linhas hidráulicas e elétricas) e das soluções de robótica
              industrial, quando o equipamento é operado, instalado e mantido conforme as
              especificações técnicas e manuais fornecidos pela Injectra.
            </LegalP>
          </LegalSection>

          <LegalSection id="prazo" title="2. Prazo de Garantia">
            <LegalP>
              O prazo padrão de garantia é informado na proposta comercial, no contrato de venda e na
              documentação técnica que acompanha cada equipamento, podendo variar por linha de
              máquina (PRIME, SPEED, VELOCITY, FORM, NEO, ATLAS, HYDRO, TITAN, MAX, EQUORA) e por
              componente (por exemplo, sistemas eletrônicos, hidráulicos e periféricos).
            </LegalP>
            <LegalP>
              A contagem do prazo de garantia inicia-se na data de entrega ou de start-up do
              equipamento, conforme definido em contrato.
            </LegalP>
          </LegalSection>

          <LegalSection id="exclusoes" title="3. Exclusões da Garantia">
            <LegalP>Não estão cobertos pela garantia:</LegalP>
            <LegalList
              items={[
                "Desgaste natural de peças de consumo, como vedações, filtros e componentes de atrito",
                "Danos causados por operação inadequada, instalação em desacordo com as especificações técnicas ou uso fora da capacidade nominal do equipamento",
                "Intervenções técnicas realizadas por terceiros não autorizados pela Injectra",
                "Uso de peças ou insumos que não sejam originais ou homologados pela Injectra",
                "Danos decorrentes de instalação elétrica, hidráulica ou de infraestrutura inadequada do cliente",
                "Eventos de força maior, como quedas de energia, desastres naturais ou acidentes",
              ]}
            />
          </LegalSection>

          <LegalSection id="como-solicitar" title="4. Como Solicitar Atendimento em Garantia">
            <LegalP>
              Para solicitar atendimento em garantia, o cliente deve entrar em contato com a Injectra
              ou com o representante autorizado responsável pela sua região, informando o número de
              série do equipamento, a nota fiscal de compra e a descrição da ocorrência. Nossa equipe
              técnica avaliará o caso e definirá o procedimento adequado, que pode incluir atendimento
              remoto, visita técnica ou envio de peças.
            </LegalP>
          </LegalSection>

          <LegalSection id="pecas" title="5. Peças de Reposição e Assistência Técnica">
            <LegalP>
              A Injectra e sua rede de representantes disponibilizam peças de reposição originais e
              assistência técnica especializada para toda a linha de máquinas e robótica, mesmo após
              o término do período de garantia. Consulte nossos{" "}
              <Link
                href="/catalogos"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                catálogos técnicos
              </Link>{" "}
              para especificações de peças e manuais.
            </LegalP>
          </LegalSection>

          <LegalSection id="canais" title="6. Canais de Suporte Técnico">
            <LegalP>
              Além desta política, mantemos uma central de suporte dedicada com assistência técnica,
              solicitação de peças, manutenção preventiva e corretiva e FAQ. Acesse a página de{" "}
              <Link
                href="/suporte"
                className="text-azul-claro underline underline-offset-2 transition-colors hover:text-azul-claro-plus"
              >
                Suporte
              </Link>{" "}
              para abrir um chamado ou falar com nossa equipe técnica.
            </LegalP>
          </LegalSection>

          <LegalSection id="contratos" title="7. Contratos de Manutenção e Garantia Estendida">
            <LegalP>
              A Injectra oferece contratos de manutenção preventiva e programas de garantia estendida
              para clientes que desejam ampliar a cobertura padrão ou formalizar rotinas periódicas de
              manutenção. As condições comerciais desses contratos são negociadas individualmente com
              nossa equipe ou representante autorizado.
            </LegalP>
          </LegalSection>

          <LegalSection id="alteracoes" title="8. Alterações desta Política">
            <LegalP>
              A Injectra pode atualizar esta política de garantia e suporte periodicamente. Alterações
              entram em vigor a partir da publicação nesta página, sem prejuízo das condições de
              garantia já formalizadas em contratos e notas fiscais vigentes.
            </LegalP>
          </LegalSection>

          <LegalSection id="contato" title="9. Contato">
            <LegalP>
              Para dúvidas sobre garantia, peças ou assistência técnica, entre em contato:
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
