import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 5057:1336).
const PAISES_ESTADOS = ["Estados Unidos", "Brasil", "México", "Outro país das Américas"];

const SEGMENTOS_INDUSTRIAIS = [
  "Automotiva",
  "Embalagens",
  "Médico",
  "Consumo",
  "Eletrônicos",
  "Construção",
  "Logística",
  "Outros Segmentos",
];

const SOLUCOES_INTERESSE = ["Máquinas", "Robótica", "Plataforma AI", "Indústrias", "Outro"];

const CONTATOS = [
  {
    icon: "/assets/fale-com-especialista/icon-equipe-analisa.svg",
    title: "Especialista Comercial",
    description: "Soluções e propostas comerciais",
  },
  {
    icon: "/assets/fale-com-especialista/icon-consultoria-tecnica.svg",
    title: "Especialista Técnico",
    description: "Especificações e requisitos técnicos",
  },
  {
    icon: "/assets/fale-com-especialista/icon-personalizacao.svg",
    title: "Engenharia de Aplicação",
    description: "Soluções personalizadas e processos",
  },
  {
    icon: "/assets/fale-com-especialista/icon-suporte-regional.svg",
    title: "Suporte Regional",
    description: "Atendimento próximo e especializado",
  },
];

const DESTAQUES = [
  {
    icon: "/assets/fale-com-especialista/icon-atendimento-americas.svg",
    label: "Atendimento nas Américas",
  },
  {
    icon: "/assets/fale-com-especialista/icon-raio.svg",
    label: "Repostas rápida e personalizada",
  },
  {
    icon: "/assets/fale-com-especialista/icon-consultoria-comercial.svg",
    label: "Suporte em PT · EN · ES",
  },
];

const fieldClass =
  "flex h-[60px] flex-1 min-w-[250px] items-center rounded-xl border-[0.5px] border-border-line-bd bg-wt px-5 text-base font-bold leading-5 tracking-normal text-texto-sem-destaque-2 placeholder:text-texto-sem-destaque-2 focus:outline-none focus:border-azul-claro";

const selectWrapClass = "relative flex flex-1 min-w-[250px]";

function SelectField({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  return (
    <div className={selectWrapClass}>
      <select
        name={name}
        defaultValue=""
        className={`${fieldClass} w-full appearance-none pr-10`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-texto">
            {option}
          </option>
        ))}
      </select>
      <Image
        src="/assets/fale-com-especialista/icon-dropdown.svg"
        alt=""
        width={10}
        height={20}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

export default function Contato() {
  return (
    <Section innerClassName="items-start gap-5">
      <div className="flex w-full flex-1 flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700), GD BLUE */}
          <h2
            className="bg-clip-text text-[26px] font-bold leading-[28px] tracking-normal text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0233c3, #0569ff)" }}
          >
            Envie uma mensagem
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
            Soluções completas para os setores mais exigentes da indústria.
          </p>
        </div>

        <form className="flex w-full flex-1 flex-col items-start gap-5">
          <div className="flex w-full flex-wrap items-center gap-5">
            <input type="text" name="nome" placeholder="Nome completo" className={fieldClass} />
            <input type="text" name="empresa" placeholder="Empresa" className={fieldClass} />
            <input
              type="email"
              name="email"
              placeholder="E-mail corporativo"
              className={fieldClass}
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone / Whatsapp"
              className={fieldClass}
            />
            <SelectField name="pais" placeholder="País / Estado" options={PAISES_ESTADOS} />
            <SelectField
              name="segmento"
              placeholder="Segmento Industrial"
              options={SEGMENTOS_INDUSTRIAIS}
            />
          </div>
          <SelectField
            name="solucao"
            placeholder="Solução de Interesse"
            options={SOLUCOES_INTERESSE}
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem (opcional)"
            rows={5}
            className={`${fieldClass} h-auto min-h-[157px] w-full flex-1 items-start py-5`}
          />

          <div className="flex w-full flex-col items-start gap-5">
            <button
              type="submit"
              className="flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-md px-[15px] py-2.5 text-lg font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90"
              style={{
                backgroundImage:
                  "linear-gradient(133deg, var(--color-azul-claro) 6.191%, var(--color-magenta-claro) 93.351%)",
              }}
            >
              Enviar Solicitação
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
            <label className="flex items-center gap-2.5 text-base font-bold leading-5 tracking-normal text-texto">
              <input
                type="checkbox"
                name="politica"
                className="size-5 shrink-0 rounded border border-border-line-bd accent-[#0569ff]"
              />
              Li e concordo com as{" "}
              <span className="text-[#0569ff]">Políticas de Privacidade.</span>
            </label>
          </div>
        </form>
      </div>

      <div className="flex w-full flex-1 flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex flex-col items-start gap-2.5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700), GD BLUE */}
          <h2
            className="bg-clip-text text-[26px] font-bold leading-[28px] tracking-normal text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0233c3, #0569ff)" }}
          >
            Fale com nossa equipe
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
            Especialistas prontos para ajudar você.
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-5">
          {CONTATOS.map((contato) => (
            <div
              key={contato.title}
              className="flex h-[70px] flex-1 min-w-[335px] items-center gap-5 rounded-xl border-[0.5px] border-border-line-bd bg-wt p-5"
            >
              <Image className="object-contain" src={contato.icon} alt="" width={30} height={30} />
              <div className="flex flex-1 flex-col items-start justify-center text-texto">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="text-base font-bold leading-5 tracking-normal">
                  {contato.title}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <span className="text-sm font-normal leading-4 tracking-normal">
                  {contato.description}
                </span>
              </div>
              <Image src="/assets/fale-com-especialista/icon-telefone.svg" alt="" width={30} height={30} />
              <Image src="/assets/fale-com-especialista/icon-mail.svg" alt="" width={30} height={30} />
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-2.5">
          {DESTAQUES.map((destaque) => (
            <div
              key={destaque.label}
              className="flex h-[70px] w-full items-center gap-5 rounded-xl border-[0.5px] border-border-line-bd bg-wt p-5"
            >
              <Image className="object-contain" src={destaque.icon} alt="" width={30} height={30} />
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <span className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                {destaque.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
