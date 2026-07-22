// Dados da página de modelo de máquina (MÁQUINAS - NAVEGAÇÃO).
// Conteúdo exato extraído via Figma MCP (get_design_context, node 7234:6779),
// referente à linha PRIME - IP / modelo "Prime IP - 60".
//
// Os demais modelos da linha (nomes reais, extraídos do mesmo node) ainda não
// têm especificações técnicas reais fornecidas — por isso `specs` é opcional.
// Sem `specs`, a rota de modelo retorna 404 em vez de exibir dados inventados.
//
// i18n: a maior parte do texto exibido (descrição da linha, aplicações e
// benefícios, e os campos de ficha técnica além de `tecnologia`/`modeloLabel`)
// vive no dicionário, em dict.maquinas.modelo.linhas[line.slug],
// dict.maquinas.modelo.aplicacoesBeneficios.items[item.key] e
// dict.maquinas.modelo.especificacoes[line.slug] — ver
// src/components/sections/maquinas/modelo/*.tsx e
// src/dictionaries/fragments/maquinas.json.
// `model.name` e `specs.tecnologia` permanecem como texto literal aqui porque
// são lidos diretamente (sem acesso ao dicionário) por generateMetadata em
// src/app/[lang]/maquinas/[linha]/[modelo]/page.tsx, fora do escopo deste grupo.
// `specs.modeloLabel` também permanece literal: o comparativo do modelo
// (modelo/Comparativo.tsx) recebe apenas `specs`/`line`, sem o slug do
// modelo, então esse campo não pode ser indexado no dicionário por linha.

export type ModelSpecs = {
  /** Usado diretamente por generateMetadata (fora do escopo deste grupo) para
   * montar a <meta description> da página — por isso permanece literal aqui
   * em vez de mover para o dicionário. */
  tecnologia: string;
  /** Rótulo da linha "Modelo" no comparativo (ex.: "Prime IP -60"). O
   * componente de comparativo (modelo/Comparativo.tsx) só recebe `specs` e
   * `line`, sem o slug do modelo — por isso este campo, atrelado à
   * identidade do modelo, permanece aqui em vez de ir para o dicionário. Os
   * demais campos da ficha técnica vivem em
   * dict.maquinas.modelo.especificacoes[line.slug]. */
  modeloLabel: string;
};

export type MachineModel = {
  slug: string;
  /** Usado diretamente por generateMetadata (fora do escopo deste grupo) para
   * montar o <title> da página — por isso permanece literal aqui em vez de
   * mover para o dicionário. */
  name: string;
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
        specs: {
          tecnologia: "Máquina injetora hidráulica premium",
          modeloLabel: "Prime IP -60",
        },
      },
      { slug: "70", name: "Prime IP - 70" },
      { slug: "108", name: "Prime IP - 108" },
      { slug: "138", name: "Prime IP - 138" },
      { slug: "170", name: "Prime IP - 170" },
      { slug: "188", name: "Prime IP - 188" },
      { slug: "198", name: "Prime IP - 198" },
      { slug: "228", name: "Prime IP - 228" },
      { slug: "300", name: "Prime IP - 300" },
      { slug: "368", name: "Prime IP - 368" },
      { slug: "380", name: "Prime IP - 380" },
      { slug: "400", name: "Prime IP - 400" },
      { slug: "450", name: "Prime IP - 450" },
      { slug: "530", name: "Prime IP - 530" },
      { slug: "550", name: "Prime IP - 550" },
      { slug: "650", name: "Prime IP - 650" },
      { slug: "800", name: "Prime IP - 800" },
      { slug: "1000", name: "Prime IP - 1000" },
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
