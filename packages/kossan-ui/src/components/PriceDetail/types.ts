export interface PriceItem {
  label: string;
  amount: number;
  subItems?: PriceItem[];
}

export interface PriceDetailProps {
  prices: PriceItem[];
  currencyFormatter: (item: PriceItem) => string;
  discount?: number;
}
