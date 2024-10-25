export function formatMoney(v: any) {
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

export function FormatMoneyDynamicWithoutSymbol(v: any) {
  if (typeof v !== "string") {
    v = String(v);
  }
  v = v.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(v) / 100
  );

  return result;
}

export function parseCurrency(value: any) {
  const valueReplaced = String(value).replace(/[^0-9s]/g, "");
  let valueDouble = (Number(valueReplaced) / 100).toFixed(2);

  return Number(valueDouble)?.toFixed(2);
}
