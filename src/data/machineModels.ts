// Dados da página de modelo de máquina (MÁQUINAS - NAVEGAÇÃO).
// Nomenclatura, toneladas de força e tie bar de TODOS os modelos vêm da
// planilha oficial de preços ("Tabela de Preços - Injectra.xlsx", aba
// Planilha1) — fonte enviada pelo usuário em 2026-07-24, não do Figma.
//
// Correções aplicadas em relação à planilha original (valores claramente
// digitados errado, já que quebram o padrão do restante da própria linha):
// - Atlas IA-368: a coluna TONELADAS trazia "268T" (a linha inteira usa o
//   número do modelo como tonelagem; nenhum outro Atlas tem esse desvio).
// - Equora IE-200-IU580(H) e Neo IN-200-IU580: a coluna TONELADAS trazia
//   "2008T".
// - Form IF-188: TIE BAR trazia "4800 x 480 mm" (o "480 x 480 mm" já
//   aparece exatamente igual em Prime IP-188 e Speed IS-230ES, mesma
//   tonelagem).
//
// Simplificações conscientes ao popular as 138 linhas de uma vez:
// - `specs.tecnologia` é o mesmo texto para todos os modelos de uma mesma
//   linha (a planilha não distingue tecnologia por modelo, só por série).
// - `applicationsAndBenefits` reaproveita os 4 ícones/textos já usados pela
//   linha PRIME (dict.maquinas.modelo.aplicacoesBeneficios.items) — a
//   planilha não tem esse dado por linha; ajustar por linha fica para uma
//   etapa futura, se desejado.
// - Nenhum modelo tem tie bar/tonelagem "inventados": onde a planilha não
//   trazia o dado (linhas NEO, EQUORA, e os 3 maiores da MAX), o campo
//   `tieBar` fica ausente e a UI (QuickSpecs/Comparativo) já lida com isso
//   (linha "Tie Bar" simplesmente não aparece).
// - Imagem de cada modelo: por enquanto é a foto da LINHA inteira (mesma
//   already-existente getMachinePhoto(line.shortName) em modelo/Hero.tsx) —
//   fotos individuais por modelo (com etiqueta do modelo) ficam para depois,
//   por pedido explícito do usuário.
//
// i18n: descrição da linha, aplicações/benefícios, e os campos de ficha
// técnica que são genuinamente por LINHA (não por modelo) — aplicações
// indicadas, configuração comercial, suporte — vivem no dicionário, em
// dict.maquinas.modelo.linhas[line.slug],
// dict.maquinas.modelo.aplicacoesBeneficios.items[item.key] e
// dict.maquinas.modelo.especificacoes[line.slug] — ver
// src/components/sections/maquinas/modelo/*.tsx e
// src/dictionaries/*.json (chave "maquinas"). Tonelagem e tie bar NÃO estão
// mais no dicionário: variam por modelo, então vivem aqui em `MachineModel`.
// `model.name` e `specs.tecnologia` permanecem como texto literal aqui
// porque são lidos diretamente (sem acesso ao dicionário) por
// generateMetadata em src/app/[lang]/maquinas/[linha]/[modelo]/page.tsx.

export type ModelSpecs = {
  /** Usado diretamente por generateMetadata (fora do escopo deste grupo) para
   * montar a <meta description> da página — por isso permanece literal aqui
   * em vez de mover para o dicionário. Mesmo texto para todos os modelos de
   * uma linha (a planilha de preços não distingue tecnologia por modelo). */
  tecnologia: string;
};

export type MachineModel = {
  slug: string;
  /** Usado diretamente por generateMetadata (fora do escopo deste grupo) para
   * montar o <title> da página — por isso permanece literal aqui em vez de
   * mover para o dicionário. Também usado como label "Modelo" no
   * comparativo (modelo/Comparativo.tsx). */
  name: string;
  /** Toneladas de força de fechamento, só o número (ex.: "60", "140") —
   * interpolado em "{tonnage} T de Força" (QuickSpecs) e no comparativo. */
  tonnage: string;
  /** Distância entre colunas (ex.: "290 x 270 mm"). Ausente quando a
   * planilha de preços não informa o dado (linhas NEO, EQUORA, e os 3
   * maiores modelos da MAX) — a UI então omite a linha/spec de Tie Bar. */
  tieBar?: string;
  specs?: ModelSpecs;
};

export type ApplicationBenefit = {
  icon: string;
  /** Chave estável usada para localizar o texto (title/description) em
   * dict.maquinas.modelo.aplicacoesBeneficios.items — o texto em si vive no
   * dicionário, não aqui. */
  key: string;
};

export type MachineLineDetail = {
  slug: string;
  /** Rótulo curto usado na linha "Série" do comparativo e na busca de fotos
   * (getMachinePhoto), ex.: "Prime". */
  shortName: string;
  color: string;
  applicationsAndBenefits: ApplicationBenefit[];
  models: MachineModel[];
};

export const MACHINE_LINE_DETAILS: MachineLineDetail[] = [
  {
    slug: "prime-ip",
    shortName: "Prime",
    color: "var(--color-prime-ip)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "60",
        name: "Prime IP - 60",
        tonnage: "60",
        tieBar: "290 x 270 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "70",
        name: "Prime IP - 70",
        tonnage: "70",
        tieBar: "320 x 320 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "108",
        name: "Prime IP - 108",
        tonnage: "108",
        tieBar: "360 x 360 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "138",
        name: "Prime IP - 138",
        tonnage: "138",
        tieBar: "420 x 420 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "170",
        name: "Prime IP - 170",
        tonnage: "170",
        tieBar: "470 x 470 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "188",
        name: "Prime IP - 188",
        tonnage: "188",
        tieBar: "480 x 480 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "198",
        name: "Prime IP - 198",
        tonnage: "198",
        tieBar: "525 x 465 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "228",
        name: "Prime IP - 228",
        tonnage: "228",
        tieBar: "530 x 530 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "268",
        name: "Prime IP - 268",
        tonnage: "268",
        tieBar: "580 x 580 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "300",
        name: "Prime IP - 300",
        tonnage: "300",
        tieBar: "630 x 630 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "368",
        name: "Prime IP - 368",
        tonnage: "368",
        tieBar: "680 x 680 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "380",
        name: "Prime IP - 380",
        tonnage: "380",
        tieBar: "730 x 670 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "400",
        name: "Prime IP - 400",
        tonnage: "400",
        tieBar: "730 x 730 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "450",
        name: "Prime IP - 450",
        tonnage: "450",
        tieBar: "760 x 760 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "530",
        name: "Prime IP - 530",
        tonnage: "530",
        tieBar: "830 x 830 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "550",
        name: "Prime IP - 550",
        tonnage: "550",
        tieBar: "870 x 870 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "650",
        name: "Prime IP - 650",
        tonnage: "650",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "800",
        name: "Prime IP - 800",
        tonnage: "800",
        tieBar: "1020 x 960 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
      {
        slug: "1000",
        name: "Prime IP - 1000",
        tonnage: "1000",
        tieBar: "1125 x 1085 mm",
        specs: { tecnologia: "Máquina injetora hidráulica premium" },
      },
    ],
  },
  {
    slug: "speed-is",
    shortName: "Speed",
    color: "var(--color-speed-is)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "140s",
        name: "Speed IS - 140S",
        tonnage: "140",
        tieBar: "290 x 270 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "140es",
        name: "Speed IS - 140ES",
        tonnage: "140",
        tieBar: "320 x 320 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "170s",
        name: "Speed IS - 170S",
        tonnage: "170",
        tieBar: "360 x 360 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "170es",
        name: "Speed IS - 170ES",
        tonnage: "170",
        tieBar: "420 x 420 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "230s",
        name: "Speed IS - 230S",
        tonnage: "230",
        tieBar: "470 x 470 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "230es",
        name: "Speed IS - 230ES",
        tonnage: "230",
        tieBar: "480 x 480 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "270s",
        name: "Speed IS - 270S",
        tonnage: "270",
        tieBar: "425 x 465 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
      {
        slug: "270es",
        name: "Speed IS - 270ES",
        tonnage: "270",
        tieBar: "530 x 530 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta velocidade" },
      },
    ],
  },
  {
    slug: "velocity-iv",
    shortName: "Velocity",
    color: "var(--color-velocity-iv)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "140es",
        name: "Velocity IV - 140ES",
        tonnage: "140",
        tieBar: "730 x 670 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "170es",
        name: "Velocity IV - 170ES",
        tonnage: "170",
        tieBar: "730 x 730 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "230es",
        name: "Velocity IV - 230ES",
        tonnage: "230",
        tieBar: "760 x 760 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "270es",
        name: "Velocity IV - 270ES",
        tonnage: "270",
        tieBar: "830 x 830 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "250",
        name: "Velocity IV - 250",
        tonnage: "250",
        tieBar: "870 x 870 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "290",
        name: "Velocity IV - 290",
        tonnage: "290",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "308",
        name: "Velocity IV - 308",
        tonnage: "308",
        tieBar: "1020 x 960 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "360",
        name: "Velocity IV - 360",
        tonnage: "360",
        tieBar: "1125 x 1085 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "388",
        name: "Velocity IV - 388",
        tonnage: "388",
        tieBar: "870 x 870 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "410",
        name: "Velocity IV - 410",
        tonnage: "410",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "458",
        name: "Velocity IV - 458",
        tonnage: "458",
        tieBar: "1020 x 960 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
      {
        slug: "500",
        name: "Velocity IV - 500",
        tonnage: "500",
        tieBar: "1125 x 1085 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de ultra alta velocidade" },
      },
    ],
  },
  {
    slug: "atlas-ia",
    shortName: "Atlas",
    color: "var(--color-atlas-ia)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "300",
        name: "Atlas IA - 300",
        tonnage: "300",
        tieBar: "630 x 630 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "368",
        name: "Atlas IA - 368",
        tonnage: "368",
        tieBar: "680 x 680 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "380",
        name: "Atlas IA - 380",
        tonnage: "380",
        tieBar: "730 x 670 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "400",
        name: "Atlas IA - 400",
        tonnage: "400",
        tieBar: "730 x 730 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "450",
        name: "Atlas IA - 450",
        tonnage: "450",
        tieBar: "760 x 760 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "530",
        name: "Atlas IA - 530",
        tonnage: "530",
        tieBar: "830 x 830 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "550",
        name: "Atlas IA - 550",
        tonnage: "550",
        tieBar: "870 x 820 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
      {
        slug: "650",
        name: "Atlas IA - 650",
        tonnage: "650",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de grande porte" },
      },
    ],
  },
  {
    slug: "form-if",
    shortName: "Form",
    color: "var(--color-form-if)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "138",
        name: "Form IF - 138",
        tonnage: "138",
        tieBar: "420 x 420 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "170",
        name: "Form IF - 170",
        tonnage: "170",
        tieBar: "470 x 470 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "188",
        name: "Form IF - 188",
        tonnage: "188",
        tieBar: "480 x 480 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "198",
        name: "Form IF - 198",
        tonnage: "198",
        tieBar: "525 x 465 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "228",
        name: "Form IF - 228",
        tonnage: "228",
        tieBar: "530 x 530 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "268",
        name: "Form IF - 268",
        tonnage: "268",
        tieBar: "580 x 580 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "300",
        name: "Form IF - 300",
        tonnage: "300",
        tieBar: "630 x 630 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "368",
        name: "Form IF - 368",
        tonnage: "368",
        tieBar: "680 x 980 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "380",
        name: "Form IF - 380",
        tonnage: "380",
        tieBar: "730 x 670 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "400",
        name: "Form IF - 400",
        tonnage: "400",
        tieBar: "730 x 730 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "450",
        name: "Form IF - 450",
        tonnage: "450",
        tieBar: "760 x 760 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "530",
        name: "Form IF - 530",
        tonnage: "530",
        tieBar: "830 x 830 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "550",
        name: "Form IF - 550",
        tonnage: "550",
        tieBar: "870 x 820 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
      {
        slug: "650",
        name: "Form IF - 650",
        tonnage: "650",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta precisão" },
      },
    ],
  },
  {
    slug: "hydro-ih",
    shortName: "Hydro",
    color: "var(--color-hydro-ih)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "140",
        name: "Hydro IH - 140",
        tonnage: "140",
        tieBar: "420 x 420 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "170",
        name: "Hydro IH - 170",
        tonnage: "170",
        tieBar: "470 x 470 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "230",
        name: "Hydro IH - 230",
        tonnage: "230",
        tieBar: "530 x 530 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "270",
        name: "Hydro IH - 270",
        tonnage: "270",
        tieBar: "580 x 580 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "300",
        name: "Hydro IH - 300",
        tonnage: "300",
        tieBar: "630 x 630 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "330",
        name: "Hydro IH - 330",
        tonnage: "330",
        tieBar: "680 x 680 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "380",
        name: "Hydro IH - 380",
        tonnage: "380",
        tieBar: "730 x 670 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "400",
        name: "Hydro IH - 400",
        tonnage: "400",
        tieBar: "730 x 730 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "450",
        name: "Hydro IH - 450",
        tonnage: "450",
        tieBar: "760 x 760 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "530",
        name: "Hydro IH - 530",
        tonnage: "530",
        tieBar: "830 x 830 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "550",
        name: "Hydro IH - 550",
        tonnage: "550",
        tieBar: "870 x 820 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
      {
        slug: "630",
        name: "Hydro IH - 630",
        tonnage: "630",
        tieBar: "925 x 875 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de alta potência" },
      },
    ],
  },
  {
    slug: "titan-it",
    shortName: "Titan",
    color: "var(--color-titan-it)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "780",
        name: "Titan IT - 780",
        tonnage: "780",
        tieBar: "980 x 980 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "800",
        name: "Titan IT - 800",
        tonnage: "800",
        tieBar: "1020 x 980 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1000",
        name: "Titan IT - 1000",
        tonnage: "1000",
        tieBar: "1125 x 1085 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1200",
        name: "Titan IT - 1200",
        tonnage: "1200",
        tieBar: "1260 x 1200 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1300",
        name: "Titan IT - 1300",
        tonnage: "1300",
        tieBar: "1360 x 1300 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1400",
        name: "Titan IT - 1400",
        tonnage: "1400",
        tieBar: "1450 x 1350 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1500",
        name: "Titan IT - 1500",
        tonnage: "1500",
        tieBar: "1450 x 1350 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "1680",
        name: "Titan IT - 1680",
        tonnage: "1680",
        tieBar: "1560 x 1480 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "2000",
        name: "Titan IT - 2000",
        tonnage: "2000",
        tieBar: "1650 x 1500 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "2200",
        name: "Titan IT - 2200",
        tonnage: "2200",
        tieBar: "1650 x 1500 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "2500",
        name: "Titan IT - 2500",
        tonnage: "2500",
        tieBar: "1650 x 1500 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
      {
        slug: "2800",
        name: "Titan IT - 2800",
        tonnage: "2800",
        tieBar: "1650 x 1500 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de três colunas (three-platen)" },
      },
    ],
  },
  {
    slug: "max-im",
    shortName: "Max",
    color: "var(--color-max-im)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "1200",
        name: "Max IM - 1200",
        tonnage: "1200",
        tieBar: "1300 x 1100 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "1400",
        name: "Max IM - 1400",
        tonnage: "1400",
        tieBar: "1400 x 1280 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "1600",
        name: "Max IM - 1600",
        tonnage: "1600",
        tieBar: "1450 x 1360 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "1800",
        name: "Max IM - 1800",
        tonnage: "1800",
        tieBar: "1580 x 1480 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "2000",
        name: "Max IM - 2000",
        tonnage: "2000",
        tieBar: "1650 x 1550 mm",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "2800",
        name: "Max IM - 2800",
        tonnage: "2800",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "3300",
        name: "Max IM - 3300",
        tonnage: "3300",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
      {
        slug: "3600",
        name: "Max IM - 3600",
        tonnage: "3600",
        specs: { tecnologia: "Máquina injetora hidráulica de duas colunas (two-platen)" },
      },
    ],
  },
  {
    slug: "neo-ex-ie",
    shortName: "Neo",
    color: "var(--color-neo-ex-ie)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "90-iu90",
        name: "Neo IN - 90-IU90",
        tonnage: "90",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "90-iu180",
        name: "Neo IN - 90-IU180",
        tonnage: "90",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "120-iu180",
        name: "Neo IN - 120-IU180",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "120-iu260",
        name: "Neo IN - 120-IU260",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "160-iu260",
        name: "Neo IN - 160-IU260",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "160-iu410",
        name: "Neo IN - 160-IU410",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "200-iu410",
        name: "Neo IN - 200-IU410",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "200-iu580",
        name: "Neo IN - 200-IU580",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "260-iu580",
        name: "Neo IN - 260-IU580",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "260-iu790",
        name: "Neo IN - 260-IU790",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "320-iu790",
        name: "Neo IN - 320-IU790",
        tonnage: "320",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "320-iu1000",
        name: "Neo IN - 320-IU1000",
        tonnage: "320",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "380-iu1000",
        name: "Neo IN - 380-IU1000",
        tonnage: "380",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "380-iu1400",
        name: "Neo IN - 380-IU1400",
        tonnage: "380",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "450-iu1400",
        name: "Neo IN - 450-IU1400",
        tonnage: "450",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "450-iu2100",
        name: "Neo IN - 450-IU2100",
        tonnage: "450",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
      {
        slug: "450-iu3100",
        name: "Neo IN - 450-IU3100",
        tonnage: "450",
        specs: { tecnologia: "Máquina injetora 100% elétrica de alta precisão" },
      },
    ],
  },
  {
    slug: "equora-iq",
    shortName: "Equora",
    color: "var(--color-equora-iq)",
    applicationsAndBenefits: [
      { icon: "/assets/maquinas/icon-pecas-tecnicas.svg", key: "pecasTecnicas" },
      { icon: "/assets/maquinas/icon-consumo.svg", key: "consumo" },
      { icon: "/assets/maquinas/icon-automacao-integrada.svg", key: "automacaoIntegrada" },
      { icon: "/assets/maquinas/icon-baixo-custo.svg", key: "baixoCusto" },
    ],
    models: [
      {
        slug: "90-iu180",
        name: "Equora IE - 90-IU180",
        tonnage: "90",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "90-iu180h",
        name: "Equora IE - 90-IU180H",
        tonnage: "90",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "120-iu180",
        name: "Equora IE - 120-IU180",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "120-iu180h",
        name: "Equora IE - 120-IU180H",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "120-iu260",
        name: "Equora IE - 120-IU260",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "120-iu260h",
        name: "Equora IE - 120-IU260H",
        tonnage: "120",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "160-iu260",
        name: "Equora IE - 160-IU260",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "160-iu260h",
        name: "Equora IE - 160-IU260H",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "160-iu410",
        name: "Equora IE - 160-IU410",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "160-iu410h",
        name: "Equora IE - 160-IU410H",
        tonnage: "160",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "200-iu410",
        name: "Equora IE - 200-IU410",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "200-iu410h",
        name: "Equora IE - 200-IU410H",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "200-iu580",
        name: "Equora IE - 200-IU580",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "200-iu580h",
        name: "Equora IE - 200-IU580H",
        tonnage: "200",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "260-iu580",
        name: "Equora IE - 260-IU580",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "260-iu580h",
        name: "Equora IE - 260-IU580H",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "260-iu790",
        name: "Equora IE - 260-IU790",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "260-iu790h",
        name: "Equora IE - 260-IU790H",
        tonnage: "260",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "300-iu790",
        name: "Equora IE - 300-IU790",
        tonnage: "300",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "300-iu790h",
        name: "Equora IE - 300-IU790H",
        tonnage: "300",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "300-iu1000",
        name: "Equora IE - 300-IU1000",
        tonnage: "300",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "300-iu1000h",
        name: "Equora IE - 300-IU1000H",
        tonnage: "300",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "350-iu1000",
        name: "Equora IE - 350-IU1000",
        tonnage: "350",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "350-iu1000h",
        name: "Equora IE - 350-IU1000H",
        tonnage: "350",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "350-iu1400",
        name: "Equora IE - 350-IU1400",
        tonnage: "350",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "350-iu1400h",
        name: "Equora IE - 350-IU1400H",
        tonnage: "350",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "400-iu1400",
        name: "Equora IE - 400-IU1400",
        tonnage: "400",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
      {
        slug: "400-iu1400h",
        name: "Equora IE - 400-IU1400H",
        tonnage: "400",
        specs: { tecnologia: "Máquina injetora híbrida (hidráulica e elétrica)" },
      },
    ],
  },
];

export function getMachineLine(linhaSlug: string): MachineLineDetail | undefined {
  return MACHINE_LINE_DETAILS.find((line) => line.slug === linhaSlug);
}

export function getMachineModel(
  linhaSlug: string,
  modeloSlug: string
): { line: MachineLineDetail; model: MachineModel } | undefined {
  const line = getMachineLine(linhaSlug);
  const model = line?.models.find((m) => m.slug === modeloSlug);
  if (!line || !model) return undefined;
  return { line, model };
}
