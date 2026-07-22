"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Locale } from "@/lib/i18n/locales";
import { getLocaleEntry } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { getCountryOptions } from "@/lib/forms/countryList";
import { isValidEmail, validatePhoneForCountry } from "@/lib/forms/contactValidation";

const toOptions = (list: readonly string[]) => list.map((value) => ({ value, label: value }));

const CONTATOS_ICONS = [
  "/assets/fale-com-especialista/icon-equipe-analisa.svg",
  "/assets/fale-com-especialista/icon-consultoria-tecnica.svg",
  "/assets/fale-com-especialista/icon-personalizacao.svg",
  "/assets/fale-com-especialista/icon-suporte-regional.svg",
];

const DESTAQUES_ICONS = [
  "/assets/fale-com-especialista/icon-atendimento-americas.svg",
  "/assets/fale-com-especialista/icon-raio.svg",
  "/assets/fale-com-especialista/icon-consultoria-comercial.svg",
];

const fieldClass =
  "flex h-[60px] flex-1 min-w-[250px] items-center rounded-xl border-[0.5px] border-border-line-bd bg-wt px-5 text-base font-bold leading-5 tracking-normal text-texto-sem-destaque-2 placeholder:text-texto-sem-destaque-2 focus:outline-none focus:border-azul-claro";

const selectWrapClass = "relative flex flex-1 min-w-[250px]";

type Option = { value: string; label: string };

function SelectField({
  name,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
}: {
  name: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}) {
  return (
    <div className={selectWrapClass}>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${fieldClass} w-full appearance-none pr-10`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-texto">
            {option.label}
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

export default function Contato({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = { ...dict.forms.shared, ...dict.forms.faleComEspecialista };
  const localeEntry = getLocaleEntry(lang);
  const countryOptions = useMemo(() => getCountryOptions(localeEntry.bcp47), [localeEntry.bcp47]);
  const paisOptions = useMemo(
    () => countryOptions.map((c) => ({ value: c.code, label: c.name })),
    [countryOptions]
  );

  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState(localeEntry.country);
  const [segmento, setSegmento] = useState("");
  const [solucao, setSolucao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [politica, setPolitica] = useState(false);

  const [emailTouched, setEmailTouched] = useState(false);
  const [telefoneTouched, setTelefoneTouched] = useState(false);

  const emailValid = isValidEmail(email);
  const phoneResult = validatePhoneForCountry(telefone, pais);

  const isFormValid =
    nome.trim() !== "" &&
    empresa.trim() !== "" &&
    emailValid &&
    phoneResult.valid &&
    pais !== "" &&
    segmento !== "" &&
    solucao !== "" &&
    politica;

  const showPhoneFeedback = telefoneTouched && telefone.trim() !== "";

  return (
    <Section innerClassName="items-start gap-5">
      <div className="flex w-full flex-1 flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700), GD BLUE */}
          <h2
            className="bg-clip-text text-[26px] font-bold leading-[28px] tracking-normal text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0233c3, #0569ff)" }}
          >
            {t.title}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
            {t.subtitle}
          </p>
        </div>

        <form className="flex w-full flex-1 flex-col items-start gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full flex-wrap items-center gap-5">
            <input
              type="text"
              name="nome"
              placeholder={t.fields.nome.placeholder}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={fieldClass}
            />
            <input
              type="text"
              name="empresa"
              placeholder={t.fields.empresa.placeholder}
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              placeholder={t.fields.email.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              className={`${fieldClass} ${emailTouched && !emailValid ? "border-[#d74b4d]" : ""}`}
            />
            <div className="flex flex-1 min-w-[250px] flex-col gap-1.5">
              <div className="relative flex items-center">
                <input
                  type="tel"
                  name="telefone"
                  placeholder={t.fields.telefone.placeholder}
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  onBlur={() => setTelefoneTouched(true)}
                  className={`${fieldClass} w-full pr-10`}
                />
                {showPhoneFeedback && (
                  <Image
                    src={
                      phoneResult.valid
                        ? "/assets/contato/icon-check.svg"
                        : "/assets/solicitar-cotacao/icon-alerta.svg"
                    }
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 object-contain"
                  />
                )}
              </div>
              {showPhoneFeedback && !phoneResult.valid && (
                <span className="text-sm font-normal leading-4 tracking-normal text-[#d74b4d]">
                  {t.validation.phoneInvalid}
                </span>
              )}
            </div>
            <SelectField
              name="pais"
              placeholder={t.fields.pais.placeholder}
              options={paisOptions}
              value={pais}
              onChange={setPais}
            />
            <SelectField
              name="segmento"
              placeholder={t.fields.segmento.placeholder}
              options={toOptions(t.options.segmentos)}
              value={segmento}
              onChange={setSegmento}
            />
          </div>
          <SelectField
            name="solucao"
            placeholder={t.fields.solucao.placeholder}
            options={toOptions(t.options.solucoes)}
            value={solucao}
            onChange={setSolucao}
          />
          <textarea
            name="mensagem"
            placeholder={t.fields.mensagem.placeholder}
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className={`${fieldClass} h-auto min-h-[157px] w-full flex-1 items-start py-5`}
          />

          <div className="flex w-full flex-col items-start gap-5">
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-md px-[15px] py-2.5 text-lg font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(133deg, var(--color-azul-claro) 6.191%, var(--color-magenta-claro) 93.351%)",
              }}
            >
              {t.submitButton}
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
            <label className="flex items-center gap-2.5 text-base font-bold leading-5 tracking-normal text-texto">
              <input
                type="checkbox"
                name="politica"
                checked={politica}
                onChange={(e) => setPolitica(e.target.checked)}
                className="size-5 shrink-0 rounded border border-border-line-bd accent-[#0569ff]"
              />
              {t.consent.prefix}{" "}
              <span className="text-[#0569ff]">{t.consent.linkLabel}</span>
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
            {t.equipeTitle}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
            {t.equipeSubtitle}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-5">
          {t.contatos.map((contato: { title: string; description: string }, i: number) => (
            <div
              key={contato.title}
              className="flex h-[70px] flex-1 min-w-[335px] items-center gap-5 rounded-xl border-[0.5px] border-border-line-bd bg-wt p-5"
            >
              <Image className="object-contain" src={CONTATOS_ICONS[i]} alt="" width={30} height={30} />
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
          {t.destaques.map((destaque: { label: string }, i: number) => (
            <div
              key={destaque.label}
              className="flex h-[70px] w-full items-center gap-5 rounded-xl border-[0.5px] border-border-line-bd bg-wt p-5"
            >
              <Image className="object-contain" src={DESTAQUES_ICONS[i]} alt="" width={30} height={30} />
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
