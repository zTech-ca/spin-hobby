export function roundToDecimal(number: number, decimal: number) {
  const multiplier = Math.pow(10, decimal);
  return Math.round(number * multiplier) / multiplier;
}
