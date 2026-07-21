export type MachinePhoto = { src: string; width: number; height: number };

// Fotos reais das linhas de máquinas (dimensões nativas do arquivo, para
// preservar o aspect ratio correto ao renderizar). Linhas ainda sem foto
// própria (upload futuro) ficam de fora do mapa — os consumidores devem usar
// um placeholder genérico como fallback quando `getMachinePhoto` retorna
// `undefined`.
export const MACHINE_PHOTOS: Record<string, MachinePhoto> = {
  PRIME: { src: "/assets/machines/PRIME.png", width: 8000, height: 3354 },
  SPEED: { src: "/assets/machines/SPEED.png", width: 5254, height: 2181 },
  VELOCITY: { src: "/assets/machines/VELOCITY.png", width: 5947, height: 2196 },
  FORM: { src: "/assets/machines/FORM.png", width: 5197, height: 1845 },
  ATLAS: { src: "/assets/machines/ATLAS.png", width: 8000, height: 2640 },
  TITAN: { src: "/assets/machines/TITAN.png", width: 4707, height: 1124 },
  MAX: { src: "/assets/machines/MAX.png", width: 8000, height: 3002 },
};

// Aceita variações como "PRIME", "PRIME - IP", "Prime IP - 60" ou "NEO EX - IE"
// e resolve para a chave da linha (primeira palavra) — undefined se a linha
// ainda não tiver foto própria cadastrada.
export function getMachinePhoto(name: string): MachinePhoto | undefined {
  const key = name.trim().toUpperCase().split(/[\s-]+/)[0];
  return MACHINE_PHOTOS[key];
}
