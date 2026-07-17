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

// Fonte única dos itens de navegação — usada pelo Header (nav + menus suspensos)
// e pelo Footer (colunas), para que ambos permaneçam sincronizados.
export const NAV_COLUMNS: NavColumn[] = [
  {
    title: "PRODUTOS",
    items: [
      {
        icon: "/assets/footer/icon-maquinas.svg",
        title: "Máquinas",
        description: "Linhas hidráulicas e elétricas para todos os segmentos.",
        href: "/maquinas",
      },
      {
        icon: "/assets/footer/icon-robotica.svg",
        title: "Robótica",
        description: "Robô Humanoide Neo, robôs cartesianos e automação.",
        href: "#",
      },
      {
        icon: "/assets/footer/icon-plataforma-ai.svg",
        title: "Plataforma AI",
        description: "Injectra AI, Cloud, IoT, Analytics, OEE e App Mobile.",
        href: "/plataforma-ai",
      },
      {
        icon: "/assets/footer/icon-industrias.svg",
        title: "Indústrias",
        description: "Soluções para diversos segmentos industriais em toda a América.",
        href: "/industria",
      },
    ],
  },
  {
    title: "SERVIÇOS",
    items: [
      {
        icon: "/assets/footer/icon-experience-center.svg",
        title: "Experience Center",
        description: "Demonstrações, testes de aplicação, treinamentos e showroom.",
        href: "/experience-center",
      },
      {
        icon: "/assets/footer/icon-representantes.svg",
        title: "Representantes",
        description: "Programa de representantes, expansão comercial e suporte.",
        href: "#",
      },
      {
        icon: "/assets/footer/icon-suporte.svg",
        title: "Suporte",
        description: "Assistência técnica, peças, manutenção, garantia e FAQ.",
        href: "#",
      },
      {
        icon: "/assets/footer/icon-catalogos.svg",
        title: "Catálogos",
        description: "Catálogos digitais. manuais técnicos, fichas técnicas e downloads.",
        href: "#",
      },
    ],
  },
  {
    title: "EMPRESA",
    items: [
      {
        icon: "/assets/footer/icon-sobre-nos.svg",
        title: "Sobre Nós",
        description: "Sobre a Injectra, Grupo Interfy, sustentabilidade e carreira.",
        href: "#",
      },
      {
        icon: "/assets/footer/icon-contato.svg",
        title: "Contato",
        description: "Telefones, e-mails, endereço e canais de atendimento.",
        href: "#",
      },
      {
        icon: "/assets/footer/icon-cotacao.svg",
        title: "Solicitar Cotação",
        description: "Receba uma proposta personalizada para sua operação industrial.",
        href: "#contato",
      },
      {
        icon: "/assets/footer/icon-especialista.svg",
        title: "Falar com Especialista",
        description: "Converse com nossa equipe técnica e comercial especializada.",
        href: "#contato",
      },
    ],
  },
];
