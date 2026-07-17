import Image from "next/image";
import Section from "@/components/layout/Section";

const ROBOTICA_ITEMS = [
  "Robô Humanoide Neo",
  "Robôs Cartesianos",
  "Células Robotizadas",
  "Soluções Personalizadas",
];

const PLATAFORMA_ITEMS = [
  "Dashboard em tempo real",
  "OEE e Performance",
  "Manutenção Preditiva",
  "Produção e Qualidade",
  "Alertas e Notificações",
  "Assistente de IA",
];

const EXPERIENCE_ITEMS = [
  { icon: "/assets/capacidade/icon-tecnologia.svg", label: "Showroom Tecnológico" },
  { icon: "/assets/capacidade/icon-demonstracoes.svg", label: "Demonstrações ao Vivo" },
  { icon: "/assets/capacidade/icon-testes.svg", label: "Testes de Aplicação" },
  { icon: "/assets/capacidade/icon-treinamentos.svg", label: "Treinamentos Especializados" },
  { icon: "/assets/capacidade/icon-eventos.svg", label: "Eventos e Workshops" },
];

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="flex w-full max-w-[250px] min-w-[200px] flex-col items-start gap-2.5">
      {items.map((item) => (
        <div key={item} className="flex w-full items-center gap-2.5">
          <Image src="/assets/capacidade/checkin.svg" alt="" width={14} height={14} />
          {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
          <p className="flex-1 text-base font-normal leading-5 tracking-normal text-texto">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Capacidade() {
  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex w-full flex-col gap-5 lg:flex-row">
        {/* Robótica Neo */}
        <div
          className="relative flex min-h-[400px] flex-1 flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 pt-5"
          style={{ backgroundImage: "url(/assets/capacidade/panel-neo-bg.png)" }}
        >
          <div className="flex max-w-[280px] min-w-[200px] flex-1 flex-col items-start gap-5 self-start pb-5">
            {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
            <h3 className="text-2xl font-extrabold leading-[30px] tracking-normal text-gradient-brand sm:text-[32px] sm:leading-[39px]">
              Robótica Neo
            </h3>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              Automação inteligente que impulsiona resultados.
            </p>
            <Checklist items={ROBOTICA_ITEMS} />
            {/* Label 14 — 14px/17px, 85 Heavy (700) */}
            <a
              href="#robotica-neo"
              className="flex items-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
            >
              Conheça o Neo
              <Image src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </a>
          </div>
          <div className="flex h-[380px] flex-1 items-center justify-end self-end">
            <Image
              src="/assets/capacidade/robot-photo.png"
              alt="Robô Humanoide Neo"
              width={420}
              height={392}
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </div>

        {/* Plataforma Injectra AI */}
        <div
          className="relative flex min-h-[400px] flex-1 flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 py-2.5"
          style={{ backgroundImage: "url(/assets/shared/panel-gradient-bg.png)" }}
        >
          <div className="flex max-w-[280px] min-w-[200px] flex-1 flex-col items-start gap-5 py-2.5">
            {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
            <h3 className="text-2xl font-extrabold leading-[30px] tracking-normal text-azul-claro-plus sm:text-[32px] sm:leading-[39px]">
              Plataforma Injectra AI
            </h3>
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              Dados, inteligência e controle total na palma da sua mão.
            </p>
            <Checklist items={PLATAFORMA_ITEMS} />
            <a
              href="#plataforma-ai"
              className="flex items-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
            >
              Explorar Plataforma
              <Image src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </a>
          </div>
          <div className="flex h-[351px] flex-1 items-center justify-center">
            <Image
              src="/assets/capacidade/tablet-phone-photo.png"
              alt="Plataforma Injectra AI"
              width={420}
              height={347}
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </div>
      </div>

      {/* Experience Center */}
      <div
        className="relative flex w-full flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center p-5"
        style={{ backgroundImage: "url(/assets/shared/panel-gradient-bg.png)" }}
      >
        <Image
          src="/assets/capacidade/building-photo.png"
          alt="Experience Center Injectra"
          width={360}
          height={176}
          className="h-[176px] w-[360px] max-w-full rounded-xl object-cover"
        />
        <div className="flex min-w-[300px] flex-1 flex-col items-start gap-5">
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            <div className="flex min-w-[200px] flex-1 flex-col items-start gap-5 text-dark-blue">
              {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
              <h3 className="text-[26px] font-bold leading-[28px] tracking-normal">
                Experience Center
              </h3>
              <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
                Inovação para você ver, testar e transformar.
              </p>
            </div>
            <a
              href="#experience-center"
              className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
            >
              Agendar visita
              <Image src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
            </a>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {EXPERIENCE_ITEMS.map((item) => (
              <div key={item.label} className="flex min-w-[120px] flex-1 items-center gap-2.5">
                <Image src={item.icon} alt="" width={30} height={30} className="shrink-0" />
                <span className="flex-1 text-sm font-normal leading-[17px] tracking-normal text-dark-blue">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
