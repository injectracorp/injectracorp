// Dados da página de modelo de máquina (MÁQUINAS - NAVEGAÇÃO).
// Conteúdo exato extraído via Figma MCP (get_design_context, node 7234:6779),
// referente à linha PRIME - IP / modelo "Prime IP - 60".
//
// Os demais modelos da linha (nomes reais, extraídos do mesmo node) ainda não
// têm especificações técnicas reais fornecidas — por isso `specs` é opcional.
// Sem `specs`, a rota de modelo retorna 404 em vez de exibir dados inventados.

export type ModelSpecs = {
  /** Texto da linha "Modelo" no comparativo — mantido literal ao Figma. */
  modeloLabel: string;
  forcaTonelagem: string;
  tieBar: string;
  tecnologia: string;
  aplicacoesIndicadas: string;
  configuracaoComercial: string;
  suporte: string;
};

export type MachineModel = {
  slug: string;
  name: string;
  specs?: ModelSpecs;
};

export type ApplicationBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type MachineLineDetail = {
  slug: string;
  /** Rótulo usado no breadcrumb, ex.: "Prime Series". */
  seriesLabel: string;
  /** Rótulo curto usado na linha "Série" do comparativo, ex.: "Prime". */
  shortName: string;
  color: string;
  /** Subtítulo exibido abaixo do H1 na página do modelo. */
  description: string;
  applicationsAndBenefits: ApplicationBenefit[];
  models: MachineModel[];
};

export const MACHINE_LINE_DETAILS: MachineLineDetail[] = [
  {
    slug: "prime-ip",
    seriesLabel: "Prime Series",
    shortName: "Prime",
    color: "var(--color-prime-ip)",
    description: "Precisão, versatilidade e performance para aplicações gerais.",
    applicationsAndBenefits: [
      {
        icon: "/assets/maquinas/icon-pecas-tecnicas.svg",
        title: "Peças Técnicas",
        description: "Ideal para componentes que exigem precisão e repetibilidade.",
      },
      {
        icon: "/assets/maquinas/icon-consumo.svg",
        title: "Consumo",
        description: "Soluções eficientes para produtos do dia a dia com alta qualidade.",
      },
      {
        icon: "/assets/maquinas/icon-automacao-integrada.svg",
        title: "Automação integrada",
        description: "Compatível com periféricos e sistemas de automação modernos.",
      },
      {
        icon: "/assets/maquinas/icon-baixo-custo.svg",
        title: "Baixo custo operacional",
        description: "Projeto eficiente que reduz consumo de energia e custos de manutenção.",
      },
    ],
    models: [
      {
        slug: "60",
        name: "Prime IP - 60",
        specs: {
          modeloLabel: "Prime IP -60",
          forcaTonelagem: "60 Toneladas",
          tieBar: "290 x 270 mm",
          tecnologia: "Máquina injetora hidráulica premium",
          aplicacoesIndicadas: "Utilidades, peças técnicas, consumo e componentes industriais",
          configuracaoComercial: "Disponível para cotação personalizada",
          suporte: "Assistência técnica e consultoria especializada",
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
