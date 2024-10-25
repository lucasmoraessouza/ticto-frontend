export function formatMoney(v: any) {
  console.log("v2", v);
  const isNegative = v < 0;
  if (typeof v !== "string") {
    v = String(v);
  }
  v = v.replace(".", "").replace(",", "").replace(/\D/g, "");
  let numericValue = parseFloat(v) / 100;
  if (isNegative) {
    numericValue = -Math.abs(numericValue);
  }
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(numericValue);
  return result;
}
