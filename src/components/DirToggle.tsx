"use client";

import { useLang } from "@/context/LanguageContext";

// Só é visível quando o idioma atual é nativamente RTL (hebraico). Visual
// compacto, alinhado ao botão do LanguageSelector (mesmas classes de
// borda/raio/padding).
export default function DirToggle() {
  const { dirOverride, setDirOverride, nativeDir, effectiveDir } = useLang();

  if (nativeDir !== "rtl") return null;

  function handleClick() {
    if (dirOverride === "auto") {
      setDirOverride(effectiveDir === "rtl" ? "ltr" : "rtl");
    } else {
      setDirOverride("auto");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={effectiveDir === "rtl" ? "Mudar para LTR" : "Mudar para RTL"}
      title={effectiveDir === "rtl" ? "Mudar para LTR" : "Mudar para RTL"}
      className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-line-bd p-2.5 text-sm font-bold text-texto transition-colors hover:text-azul-claro"
    >
      {effectiveDir === "rtl" ? "RTL" : "LTR"}
    </button>
  );
}
