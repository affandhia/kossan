import { PriceDetailProps } from './types';

import { currencyIDR } from '@/utils';

export const PriceDetailMock: PriceDetailProps = {
  prices: [
    { label: 'Price', amount: 100 },
    { label: 'Tax', amount: 20 },
    {
      label: 'Shipping',
      amount: 10,
      subItems: [
        { label: 'Shipping 1', amount: 5, subItems: [{ label: 'Shipping 1.1', amount: 5 }] },
        { label: 'Shipping 2', amount: 5 },
      ],
    },
  ],
  currencyFormatter: (item) => currencyIDR(item.amount),
  discount: 10,
};

export default PriceDetailMock;
