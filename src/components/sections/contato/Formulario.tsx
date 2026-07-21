import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7265:7666).
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

const CANAIS_ATENDIMENTO = [
  {
    icon: "/assets/representantes/icon-pessoas.svg",
    title: "Consultoria Comercial",
    description: "Soluções e propostas personalizadas",
  },
  {
    icon: "/assets/contato/icon-machine-gear.svg",
    title: "Consultoria Técnica",
    description: "Suporte técnico e especificações",
  },
  {
    icon: "/assets/fale-com-especialista/icon-personalizacao.svg",
    title: "Engenharia de Aplicação",
    description: "Análise e desenvolvimento de soluções",
  },
  {
    icon: "/assets/contato/icon-calendar.svg",
    title: "Agendamento de Reunião",
    description: "Reuniões presenciais ou online",
  },
  {
    icon: "/assets/contato/icon-parceria.svg",
    title: "Suporte Pós-Venda",
    description: "Acompanhamento e suporte contínuo",
  },
];

const EQUIPE_LINKS = [
  { icon: "/assets/footer/icon-doc.svg", title: "Solicitar Cotação" },
  { icon: "/assets/contato/icon-especialista-certificado.svg", title: "Falar com Especialista" },
  { icon: "/assets/footer/icon-headset.svg", title: "Suporte Técnico" },
  { icon: "/assets/catalogos/icon-download.svg", title: "Catálogos e Downloads" },
  { icon: "/assets/contato/icon-empresas.svg", title: "Experience Center" },
  { icon: "/assets/representantes/icon-pessoas.svg", title: "Representantes" },
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

export default function Formulario() {
  return (
    <Section innerClassName="items-stretch gap-5" direction="row">
      <div className="flex w-full flex-1 min-w-[335px] flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-azul-claro-plus">
            Envie uma mensagem
          </h2>
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
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
              style={{ background: "var(--gradient-injectra)" }}
            >
              Enviar Solicitação
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
            <label className="flex items-center gap-2.5 text-base font-bold leading-5 tracking-normal text-texto">
              <input
                type="checkbox"
                name="politica"
                className="size-5 shrink-0 rounded border border-border-line-bd accent-[#1441e8]"
              />
              Li e concordo com as{" "}
              <span className="text-[#1441e8]">Políticas de Privacidade.</span>
            </label>
          </div>
        </form>
      </div>

      <div className="flex w-full flex-1 min-w-[335px] flex-col items-start gap-[30px] rounded-2xl bg-bg-cinza p-10">
        <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-azul-claro-plus">
          Canais de Atendimento
        </h2>

        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
          {CANAIS_ATENDIMENTO.map((canal) => (
            <div key={canal.title} className="flex items-center gap-5">
              <Image src={canal.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
              <div className="flex flex-col items-start gap-2.5 text-texto">
                <span className="text-base font-bold leading-5 tracking-normal">
                  {canal.title}
                </span>
                <span className="text-sm font-normal leading-4 tracking-normal">
                  {canal.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-azul-claro-plus">
          Fale com nossa equipe
        </h2>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
          {EQUIPE_LINKS.map((link) => (
            <a
              key={link.title}
              href="#contato"
              className="flex min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-wt p-5 transition-opacity hover:opacity-80"
            >
              <Image src={link.icon} alt="" width={40} height={40} className="object-contain" />
              <span className="min-h-[35px] text-center text-base font-bold leading-5 tracking-normal text-prime-ip">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        <div className="flex w-full items-center gap-5 rounded-2xl bg-wt p-5">
          <span className="flex size-[110px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus p-1">
            <span
              className="flex size-full items-center justify-center rounded-full px-7 py-5"
              style={{ background: "var(--gradient-injectra)" }}
            >
              <Image src="/assets/contato/icon-relogio.svg" alt="" width={30} height={30} />
            </span>
          </span>
          <div className="flex flex-1 flex-col items-center justify-center gap-2.5 text-center">
            <span className="w-full text-xl font-bold leading-[22px] tracking-normal text-dark-blue">
              Horário de Atendimento
            </span>
            <span className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
              Segunda a Sexta
            </span>
            <span className="w-full text-[26px] font-bold leading-7 tracking-normal text-dark-blue">
              8:00 às 18:00
            </span>
            <span className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
              Atendimento comercial e técnico
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
