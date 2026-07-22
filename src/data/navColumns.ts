import type { Dictionary } from "@/lib/i18n/dictionary";

export type NavItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type NavColumn = {
  title: string;
  items: NavItem[];
};

type NavItemStructure = {
  icon: string;
  href: string;
};

type NavColumnStructure = {
  items: NavItemStructure[];
};

// Dados estruturais (ícones e hrefs) — o texto (título/descrição de cada
// coluna e item) vem do dicionário (dict.shared.nav.columns), mantendo a
// mesma ordem/índices. Usado por getNavColumns() para montar a estrutura
// final consumida pelo Header (nav + menus suspensos) e pelo Footer (colunas).
const NAV_STRUCTURE: NavColumnStructure[] = [
  {
    items: [
      { icon: "/assets/footer/icon-maquinas.svg", href: "/maquinas" },
      { icon: "/assets/footer/icon-robotica.svg", href: "/robotica" },
      { icon: "/assets/footer/icon-plataforma-ai.svg", href: "/plataforma-ai" },
      { icon: "/assets/footer/icon-industrias.svg", href: "/industria" },
    ],
  },
  {
    items: [
      { icon: "/assets/footer/icon-experience-center.svg", href: "/experience-center" },
      { icon: "/assets/footer/icon-representantes.svg", href: "/representantes" },
      { icon: "/assets/footer/icon-suporte.svg", href: "/suporte" },
      { icon: "/assets/footer/icon-catalogos.svg", href: "/catalogos" },
    ],
  },
  {
    items: [
      { icon: "/assets/footer/icon-sobre-nos.svg", href: "/sobre-nos" },
      { icon: "/assets/footer/icon-contato.svg", href: "/contato" },
      { icon: "/assets/footer/icon-cotacao.svg", href: "/solicitar-cotacao" },
      { icon: "/assets/footer/icon-especialista.svg", href: "/fale-com-especialista" },
    ],
  },
];

export function getNavColumns(dict: Dictionary): NavColumn[] {
  const textColumns: Array<{ title?: string; items?: Array<{ title?: string; description?: string }> }> =
    dict?.shared?.nav?.columns ?? [];

  return NAV_STRUCTURE.map((structCol, columnIndex) => {
    const textCol = textColumns[columnIndex] ?? {};
    return {
      title: textCol.title ?? "",
      items: structCol.items.map((structItem, itemIndex) => {
        const textItem = textCol.items?.[itemIndex] ?? {};
        return {
          icon: structItem.icon,
          href: structItem.href,
          title: textItem.title ?? "",
          description: textItem.description ?? "",
        };
      }),
    };
  });
}
