import type { ReactNode } from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7268:9052).
// As listas de opções de País e Segmento reaproveitam o conteúdo já usado no
// formulário de Contato (mesmos campos); "Tipo de projeto" e "Prazo do projeto"
// não têm opções especificadas no Figma (só o placeholder do campo fechado) —
// os valores abaixo são um conjunto funcional mínimo, não conteúdo do design.
const PAISES = ["Estados Unidos", "Brasil", "México", "Outro país das Américas"];

const SEGMENTOS = [
  "Automotiva",
  "Embalagens",
  "Médico",
  "Consumo",
  "Eletrônicos",
  "Construção",
  "Logística",
  "Outros Segmentos",
];

const TIPOS_PROJETO = [
  "Novo Projeto",
  "Expansão de Produção",
  "Substituição de Equipamento",
  "Consultoria e Avaliação Técnica",
  "Outro",
];

const PRAZOS_PROJETO = ["Imediato", "1 a 3 meses", "3 a 6 meses", "6 a 12 meses", "A definir"];

const fieldClass =
  "flex h-[60px] w-full items-center rounded-xl border-[0.5px] border-border-line-bd bg-wt px-5 text-base font-bold leading-5 tracking-normal text-texto-sem-destaque-2 placeholder:text-texto-sem-destaque-2 focus:outline-none focus:border-azul-claro";

function RequiredMark() {
  return <Image src="/assets/solicitar-cotacao/icon-required.svg" alt="" width={7} height={7} />;
}

function Field({
  label,
  required = true,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-[280px] flex-1 flex-col items-start gap-2.5">
      <div className="flex items-center gap-1.5">
        {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
        <span className="text-base font-bold leading-5 tracking-normal text-texto">{label}</span>
        {required && <RequiredMark />}
      </div>
      {children}
    </div>
  );
}

function SelectField({
  name,
  placeholder,
  options,
}: {
  name: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative flex w-full">
      <select name={name} defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
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

export default function FormularioInteligente() {
  return (
    <Section id="formulario" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex w-full items-center gap-[15px]">
          <Image src="/assets/footer/icon-doc.svg" alt="" width={40} height={40} className="shrink-0 object-contain" />
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="flex-1 text-2xl font-bold leading-7 tracking-normal text-azul-claro-plus">
            Formulário Inteligente
          </h2>
        </div>

        <form className="flex w-full flex-col items-start gap-5">
          <div className="flex w-full flex-wrap items-start gap-5">
            <Field label="Nome">
              <input type="text" name="nome" placeholder="Digite seu nome" className={fieldClass} />
            </Field>
            <Field label="Empresa">
              <input type="text" name="empresa" placeholder="Digite o nome da empresa" className={fieldClass} />
            </Field>
            <Field label="E-mail">
              <input type="email" name="email" placeholder="seuemail@empresa.com" className={fieldClass} />
            </Field>
            <Field label="Telefone">
              <input type="tel" name="telefone" placeholder="(11 99999-9999" className={fieldClass} />
            </Field>
            <Field label="País">
              <SelectField name="pais" placeholder="Selecione o país" options={PAISES} />
            </Field>
            <Field label="Segmento">
              <SelectField name="segmento" placeholder="Selecione o segmento" options={SEGMENTOS} />
            </Field>
            <Field label="Tipo de projeto">
              <SelectField name="tipoProjeto" placeholder="Selecione o tipo de projeto" options={TIPOS_PROJETO} />
            </Field>
            <Field label="Capacidade desejada">
              <input
                type="text"
                name="capacidade"
                placeholder="Selecione a capacidade"
                className={fieldClass}
              />
            </Field>
            <Field label="Prazo do projeto">
              <SelectField name="prazoProjeto" placeholder="Selecione o prazo" options={PRAZOS_PROJETO} />
            </Field>
            <Field label="Mensagem" required={false}>
              <textarea
                name="mensagem"
                placeholder="Conte-nos mais sobre o seu projeto, objetivos e necessidades específicas."
                rows={5}
                className={`${fieldClass} h-auto min-h-[140px] items-start py-5`}
              />
            </Field>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-5">
            <label className="flex flex-1 min-w-[280px] items-center gap-2.5 text-lg font-bold leading-[22px] tracking-normal text-texto">
              <input
                type="checkbox"
                name="politica"
                className="size-5 shrink-0 rounded border border-border-line-bd accent-[#1441e8]"
              />
              Li e concordo com as{" "}
              <span className="text-[#1441e8]">Políticas de Privacidade.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-[50px] flex-1 items-center justify-center gap-2.5 rounded-md px-[15px] py-2.5 text-xl font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-injectra)" }}
            >
              Próximo: Selecionar Linha
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
