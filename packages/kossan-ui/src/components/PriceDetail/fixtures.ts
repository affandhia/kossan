import { PriceDetailProps } from './types';

export const defaultData: PriceDetailProps = {
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
  discount: 10,
};

export default defaultData;
