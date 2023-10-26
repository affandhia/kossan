import { InvoiceMock } from './fixtures';

type InvoiceData = typeof InvoiceMock;
export interface InvoiceProps {
  data: InvoiceData;
}
