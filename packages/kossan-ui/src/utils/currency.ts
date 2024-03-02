import currency from 'currency.js';

export const currencyIDR = (amount: number) =>
  currency(amount, { symbol: 'Rp ', separator: '.', decimal: ',', precision: 0 }).format();
