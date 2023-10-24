import { defaultData } from './constants';

type InvoiceData = typeof defaultData;
export interface InvoiceProps {
  data: InvoiceData;
}
