"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import { getMachinePhoto } from "@/data/machinePhotos";

// Conteúdo exato extraído via Figma MCP (get_design_context, nodes 7269:8058 e 7269:8242).
// As 10 linhas reaproveitam a foto genérica já usada em MachineLines/LinhasDeMaquinas
// (mesma imagem placeholder no Figma para todos os cards desta seção).
const LINHAS = [
  { name: "Prime", description: "Confiabilidade e versatilidade." },
  { name: "Speed", description: "Alta performance e produtividade." },
  { name: "Velocity", description: "Precisão e força para grandes desafios." },
  { name: "Form", description: "Precisão para peças técnicas e finas." },
  { name: "Neo", description: "Eficiência elétrica e baixo consumo." },
  { name: "Atlas", description: "Força e estabilidade para grandes peças." },
  { name: "Hydro", description: "Hidráulica avançada e robustez." },
  { name: "Titan", description: "Máxima força para aplicações extremas." },
  { name: "Max", description: "Soluções de altíssima capacidade." },
  { name: "Equora", description: "Equilíbrio entre força, eficiência e economia com tecnologia híbrida." },
];

// As opções abaixo não estão especificadas no Figma (o design só mostra o campo
// fechado com placeholder) — conjunto funcional mínimo para o select operar;
// "Força de Fechamento" reaproveita as tonelagens reais da linha Prime IP
// (src/data/machineModels.ts).
const FORCAS = ["60", "70", "108", "138", "170", "188", "198", "228", "300", "368", "380", "400", "450", "530", "550", "650", "800", "1000"].map(
  (t) => `${t} Toneladas`
);
const APLICACOES = ["Embalagens", "Automotivo", "Eletrônicos", "Médico", "Consumo", "Construção", "Outros"];
const AUTOMACOES = ["Manual", "Semi-automática", "Automação Integrada", "Automação Total com Robótica"];
const ROBOTICAS = ["Sem robótica", "Robô Cartesiano", "Robô Antropomórfico (6 eixos)", "Robô Colaborativo"];
const OPCIONAIS = ["Nenhum", "Sistema de Refrigeração Avançado", "Alimentador Automático", "Central de Secagem", "Outros"];
const VOLTAGENS = ["220V", "380V", "440V", "Outra"];
const PRODUTIVIDADES = ["Baixo volume", "Médio volume", "Alto volume", "Altíssimo volume (24/7)"];
const ACESSORIOS = ["Nenhum", "Moldes sob medida", "Sistema de Automação", "Central de Secagem", "Outros"];
const INTEGRACOES_AI = ["Sem integração", "Monitoramento Básico", "Plataforma Injectra AI Completa"];

const fieldClass =
  "flex h-[60px] w-full items-center rounded-xl border-[0.5px] border-border-line-bd bg-wt px-5 text-base font-bold leading-5 tracking-normal text-texto-sem-destaque-2 placeholder:text-texto-sem-destaque-2 focus:outline-none focus:border-azul-claro appearance-none pr-10";

type ConfigState = {
  forca: string;
  aplicacao: string;
  automacao: string;
  robotica: string;
  opcionais: string;
  voltagem: string;
  produtividade: string;
  acessorios: string;
  integracaoAI: string;
};

const CONFIG_INICIAL: ConfigState = {
  forca: "",
  aplicacao: "",
  automacao: "",
  robotica: "",
  opcionais: "",
  voltagem: "",
  produtividade: "",
  acessorios: "",
  integracaoAI: "",
};

function ConfigSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex min-w-[260px] flex-1 flex-col items-start gap-2.5">
      <div className="flex items-center gap-1.5">
        {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
        <span className="text-base font-bold leading-5 tracking-normal text-texto">{label}</span>
        <Image src="/assets/solicitar-cotacao/icon-required.svg" alt="" width={7} height={7} />
      </div>
      <div className="relative flex w-full">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClass}
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
    </div>
  );
}

export default function Configurador() {
  const [linhaSelecionada, setLinhaSelecionada] = useState<string | null>(null);
  const [config, setConfig] = useState<ConfigState>(CONFIG_INICIAL);

  const setField = (field: keyof ConfigState) => (value: string) =>
    setConfig((prev) => ({ ...prev, [field]: value }));

  const resumo: { label: string; value: string }[] = [
    { label: "Linha Selecionada", value: linhaSelecionada ?? "-" },
    { label: "Força de Fechamento", value: config.forca || "-" },
    { label: "Aplicação", value: config.aplicacao || "-" },
    { label: "Automação", value: config.automacao || "-" },
    { label: "Robótica", value: config.robotica || "-" },
    { label: "Opcionais", value: config.opcionais || "-" },
    { label: "Voltagem", value: config.voltagem || "-" },
    { label: "Produtividade Estimada", value: config.produtividade || "-" },
    { label: "Acessórios", value: config.acessorios || "-" },
    { label: "Integração com Injectra AI", value: config.integracaoAI || "-" },
  ];

  return (
    <>
      {/* Seleção da Linha — node 7269:8058 */}
      <Section innerClassName="gap-5" className="bg-bg-cinza">
        <div className="flex w-full flex-col items-start gap-10 rounded-2xl bg-wt p-10">
          <div className="flex w-full items-center gap-[15px]">
            <Image src="/assets/contato/icon-machine-gear.svg" alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
              <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-azul-claro-plus">
                Seleção da Linha
              </h2>
              {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
              <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
                Escolha a linha de máquinas de seu interesse
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {LINHAS.map((linha) => {
              const selected = linhaSelecionada === linha.name;
              const photo = getMachinePhoto(linha.name);
              return (
                <button
                  key={linha.name}
                  type="button"
                  onClick={() => setLinhaSelecionada(linha.name)}
                  className={`flex min-h-[240px] min-w-[230px] flex-1 flex-col items-center gap-5 rounded-2xl border-2 bg-bg-cinza p-5 text-left transition-colors ${
                    selected ? "border-azul-claro-plus" : "border-transparent"
                  }`}
                >
                  <div className="flex min-h-[120px] w-full max-w-[300px] items-center justify-center">
                    <Image
                      src={photo?.src ?? "/assets/shared/machine-photo.png"}
                      alt={linha.name}
                      width={photo?.width ?? 300}
                      height={photo?.height ?? 112}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
                  <span className="w-full text-center text-xl font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                    {linha.name}
                  </span>
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-texto">
                    {linha.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex w-full flex-wrap items-center gap-5">
            <div className="flex min-w-[280px] flex-1 items-center gap-2.5">
              <Image src="/assets/solicitar-cotacao/icon-alerta.svg" alt="" width={23} height={23} className="shrink-0 object-contain" />
              <p className="flex-1 text-base font-bold leading-5 tracking-normal text-texto">
                Você poderá configurar todos os detalhes da máquina na próxima etapa.
              </p>
            </div>
            <button
              type="button"
              className="flex min-h-[50px] flex-1 items-center justify-center gap-2.5 rounded-md px-[15px] py-2.5 text-xl font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-injectra)" }}
            >
              Próximo: Configuração da Máquina
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
          </div>
        </div>
      </Section>

      {/* Configuração da Máquina — node 7269:8242 */}
      <Section innerClassName="items-stretch gap-10" direction="row">
        <div className="flex w-full flex-1 min-w-[335px] flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
          <div className="flex w-full items-center gap-[15px]">
            <Image src="/assets/fale-com-especialista/icon-personalizacao.svg" alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-azul-claro-plus">
                Configuração da Máquina
              </h2>
              <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
                Personalize sua máquina conforme as necessidades do seu projeto.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start gap-5">
            <ConfigSelect label="Força de Fechamento" placeholder="Selecione a força (ton)" options={FORCAS} value={config.forca} onChange={setField("forca")} />
            <ConfigSelect label="Tipo de Aplicação" placeholder="Selecione a aplicação" options={APLICACOES} value={config.aplicacao} onChange={setField("aplicacao")} />
            <ConfigSelect label="Automação" placeholder="Selecione o nível" options={AUTOMACOES} value={config.automacao} onChange={setField("automacao")} />
            <ConfigSelect label="Robótica" placeholder="Seleciona a opção" options={ROBOTICAS} value={config.robotica} onChange={setField("robotica")} />
            <ConfigSelect label="Opcionais" placeholder="Selecione os opcionais" options={OPCIONAIS} value={config.opcionais} onChange={setField("opcionais")} />
            <ConfigSelect label="Voltagem" placeholder="Selecione a voltagem" options={VOLTAGENS} value={config.voltagem} onChange={setField("voltagem")} />
            <ConfigSelect label="Produtividade Estimada" placeholder="Selecione a produtividade" options={PRODUTIVIDADES} value={config.produtividade} onChange={setField("produtividade")} />
            <ConfigSelect label="Acessórios" placeholder="Selecione os acessórios" options={ACESSORIOS} value={config.acessorios} onChange={setField("acessorios")} />
            <ConfigSelect label="Integração com Injectra AI" placeholder="Selecione a integração" options={INTEGRACOES_AI} value={config.integracaoAI} onChange={setField("integracaoAI")} />
          </div>

          <div className="flex w-full items-center gap-2.5 rounded-xl border-2 border-azul-claro-plus p-2.5">
            <Image src="/assets/solicitar-cotacao/icon-alerta.svg" alt="" width={23} height={23} className="shrink-0 object-contain" />
            <p className="flex-1 text-base font-bold leading-5 tracking-normal text-azul-claro-plus">
              Nossa equipe técnica utilizará essas informações para criar a solução ideal para o seu projeto.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-1 min-w-[335px] max-w-[400px] flex-col items-start overflow-hidden rounded-2xl border-[0.5px] border-border-line-bd bg-wt">
          <div className="flex w-full items-center bg-blue-lt p-5">
            <h3 className="flex-1 text-xl font-bold leading-[22px] tracking-normal text-azul-claro-plus">
              Configuração Selecionada
            </h3>
          </div>
          <div className="flex w-full flex-1 flex-col gap-5 p-5">
            {resumo.map((item) => (
              <div key={item.label} className="flex w-full items-start gap-2.5 text-base font-bold leading-5 tracking-normal">
                <span className="flex-1 text-texto">{item.label}</span>
                <span className="shrink-0 text-texto">{item.value}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex min-h-[50px] w-full items-center justify-center gap-2.5 px-[15px] py-2.5 text-xl font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90"
            style={{ background: "var(--gradient-injectra)" }}
          >
            Salvar Configuração
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </button>
        </div>
      </Section>
    </>
  );
}
