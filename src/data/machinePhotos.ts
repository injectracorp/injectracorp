export type MachinePhoto = { src: string; width: number; height: number };

// Fotos reais das linhas de máquinas (dimensões nativas do arquivo, para
// preservar o aspect ratio correto ao renderizar). Linhas ainda sem foto
// própria (upload futuro) ficam de fora do mapa — os consumidores devem usar
// um placeholder genérico como fallback quando `getMachinePhoto` retorna
// `undefined`.
export const MACHINE_PHOTOS: Record<string, MachinePhoto> = {
  PRIME: { src: "/assets/machines/PRIME.webp", width: 2400, height: 1006 },
  SPEED: { src: "/assets/machines/SPEED.webp", width: 2400, height: 996 },
  VELOCITY: { src: "/assets/machines/VELOCITY.webp", width: 2400, height: 886 },
  FORM: { src: "/assets/machines/FORM.webp", width: 2400, height: 852 },
  ATLAS: { src: "/assets/machines/ATLAS.webp", width: 2400, height: 792 },
  HYDRO: { src: "/assets/machines/HYDRO.webp", width: 2400, height: 994 },
  TITAN: { src: "/assets/machines/TITAN.webp", width: 2400, height: 573 },
  MAX: { src: "/assets/machines/MAX.webp", width: 2400, height: 901 },
};

// Aceita variações como "PRIME", "PRIME - IP", "Prime IP - 60" ou "NEO EX - IE"
// e resolve para a chave da linha (primeira palavra) — undefined se a linha
// ainda não tiver foto própria cadastrada.
export function getMachinePhoto(name: string): MachinePhoto | undefined {
  const key = name.trim().toUpperCase().split(/[\s-]+/)[0];
  return MACHINE_PHOTOS[key];
}
