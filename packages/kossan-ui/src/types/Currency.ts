export interface CurrencyUnit {
  code: string;
}

export interface CurrencyValue {
  amount: number;
  unit: CurrencyUnit;
}
