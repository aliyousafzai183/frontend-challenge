export function combineDateTimeToISO(date: string, time: string): string | null {
  if (!date || !time) return null;
  const [year, month, day] = date.split('-').map((n) => Number(n));
  const [hour, minute] = time.split(':').map((n) => Number(n));
  if ([year, month, day, hour, minute].some((n) => Number.isNaN(n))) return null;
  const d = new Date(year, month - 1, day, hour, minute, 0, 0);
  return d.toISOString();
}
