export function stringToDate(texto: string): Date {
  const [date, time] = texto.split(" ");
  const [dia, mes, ano] = date.split("/").map(Number);
  const [hora, minuto] = time.split(":").map(Number);
  return new Date(ano, mes - 1, dia, hora, minuto);
}
