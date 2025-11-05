export function isFutureISO(iso: string): boolean {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  return t > Date.now();
}

export function withinStoreHours(time: string, open = '09:00', close = '21:00'): boolean {
  if (!time) return false;
  const toMin = (hhmm: string) => {
    const [h, m] = hhmm.split(':').map((n) => Number(n));
    if (Number.isNaN(h) || Number.isNaN(m)) return NaN;
    return h * 60 + m;
  };
  const openMin = toMin(open);
  const closeMin = toMin(close);
  const tMin = toMin(time);
  if ([openMin, closeMin, tMin].some((n) => Number.isNaN(n))) return false;
  return tMin >= openMin && tMin <= closeMin;
}
