"use client";

import { type ReactNode, useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Locale } from "@/lib/i18n/locales";
import { getLocaleEntry } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { getCountryOptions } from "@/lib/forms/countryList";
import { isValidEmail, validatePhoneForCountry, getPhoneExamplePlaceholder } from "@/lib/forms/contactValidation";

const toOptions = (list: readonly string[]) => list.map((value) => ({ value, label: value }));

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
    <div className="relative flex w-full">
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${fieldClass} appearance-none pr-10`}
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

export default function FormularioInteligente({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = { ...dict.forms.shared, ...dict.forms.solicitarCotacao };
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
  const [tipoProjeto, setTipoProjeto] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [prazoProjeto, setPrazoProjeto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [politica, setPolitica] = useState(false);

  const [emailTouched, setEmailTouched] = useState(false);
  const [telefoneTouched, setTelefoneTouched] = useState(false);

  const emailValid = isValidEmail(email);
  const phoneResult = validatePhoneForCountry(telefone, pais);
  const telefonePlaceholder = useMemo(() => getPhoneExamplePlaceholder(pais), [pais]);

  const isFormValid =
    nome.trim() !== "" &&
    empresa.trim() !== "" &&
    emailValid &&
    phoneResult.valid &&
    pais !== "" &&
    segmento !== "" &&
    tipoProjeto !== "" &&
    capacidade.trim() !== "" &&
    prazoProjeto !== "" &&
    politica;

  const showPhoneFeedback = telefoneTouched && telefone.trim() !== "";

  return (
    <Section id="formulario" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex w-full items-center gap-[15px]">
          <Image src="/assets/footer/icon-doc.svg" alt="" width={40} height={40} className="shrink-0 object-contain" />
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="flex-1 text-2xl font-bold leading-7 tracking-normal text-azul-claro-plus">
            {t.title}
          </h2>
        </div>

        <form className="flex w-full flex-col items-start gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full flex-wrap items-start gap-5">
            <Field label={t.fields.nome.label}>
              <input
                type="text"
                name="nome"
                placeholder={t.fields.nome.placeholder}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={fieldClass}
              />
            </Field>
            <Field label={t.fields.empresa.label}>
              <input
                type="text"
                name="empresa"
                placeholder={t.fields.empresa.placeholder}
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className={fieldClass}
              />
            </Field>
            <Field label={t.fields.email.label}>
              <input
                type="email"
                name="email"
                placeholder={t.fields.email.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                className={fieldClass}
              />
            </Field>
            <Field label={t.fields.telefone.label}>
              <div className="flex w-full flex-col gap-1.5">
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="telefone"
                    placeholder={telefonePlaceholder}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    onBlur={() => setTelefoneTouched(true)}
                    className={`${fieldClass} pr-10`}
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
            </Field>
            <Field label={t.fields.pais.label}>
              <SelectField
                name="pais"
                placeholder={t.fields.pais.placeholder}
                options={paisOptions}
                value={pais}
                onChange={setPais}
              />
            </Field>
            <Field label={t.fields.segmento.label}>
              <SelectField
                name="segmento"
                placeholder={t.fields.segmento.placeholder}
                options={toOptions(t.options.segmentos)}
                value={segmento}
                onChange={setSegmento}
              />
            </Field>
            <Field label={t.fields.tipoProjeto.label}>
              <SelectField
                name="tipoProjeto"
                placeholder={t.fields.tipoProjeto.placeholder}
                options={toOptions(t.options.tiposProjeto)}
                value={tipoProjeto}
                onChange={setTipoProjeto}
              />
            </Field>
            <Field label={t.fields.capacidade.label}>
              <input
                type="text"
                name="capacidade"
                placeholder={t.fields.capacidade.placeholder}
                value={capacidade}
                onChange={(e) => setCapacidade(e.target.value)}
                className={fieldClass}
              />
            </Field>
            <Field label={t.fields.prazoProjeto.label}>
              <SelectField
                name="prazoProjeto"
                placeholder={t.fields.prazoProjeto.placeholder}
                options={toOptions(t.options.prazosProjeto)}
                value={prazoProjeto}
                onChange={setPrazoProjeto}
              />
            </Field>
            <Field label={t.fields.mensagem.label} required={false}>
              <textarea
                name="mensagem"
                placeholder={t.fields.mensagem.placeholder}
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className={`${fieldClass} h-auto min-h-[140px] items-start py-5`}
              />
            </Field>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-5">
            <label className="flex flex-1 min-w-[280px] items-center gap-2.5 text-lg font-bold leading-[22px] tracking-normal text-texto">
              <input
                type="checkbox"
                name="politica"
                checked={politica}
                onChange={(e) => setPolitica(e.target.checked)}
                className="size-5 shrink-0 rounded border border-border-line-bd accent-[#1441e8]"
              />
              {t.consent.prefix}{" "}
              <span className="text-[#1441e8]">{t.consent.linkLabel}</span>
            </label>
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex min-h-[50px] flex-1 items-center justify-center gap-2.5 rounded-md px-[15px] py-2.5 text-xl font-bold leading-[22px] tracking-normal text-wt transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
              style={{ background: "var(--gradient-injectra)" }}
            >
              {t.submitButton}
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
