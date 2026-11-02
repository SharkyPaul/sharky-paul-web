// Česká typografie: jednopísmenné předložky a spojky nesmí zůstat na konci řádku
// a číslo se nemá oddělit od jednotky. Nahrazuje mezeru za nimi nezlomitelnou mezerou.
const PREP = /(?<=^|[\s(„–])([AaIiKkOoSsUuVvZz])\s+/g;
const NUM = /(\d) (?=[^\s\d])/g;

export function nb(s: string): string {
  return s.replace(PREP, "$1 ").replace(NUM, "$1 ");
}

export function typoDeep<T>(value: T): T {
  if (typeof value === "string") return nb(value) as T;
  if (Array.isArray(value)) return value.map((v) => typoDeep(v)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = k === "href" || k.endsWith("Href") ? v : typoDeep(v);
    }
    return out as T;
  }
  return value;
}
