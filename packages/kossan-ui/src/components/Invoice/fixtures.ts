import PriceDetailMock from '@/components/PriceDetail/fixtures';

export const InvoiceMock = {
  landlord: {
    name: 'John Doe',
    companyName: 'ABC Rentals',
    address: '123 Main Street, Anytown USA',
    contactNumber: '(123) 456-7890',
    emailAddress: 'john.doe@abcrentals.com',
    website: 'www.abcrentals.com',
  },
  tenant: {
    name: 'Jane Smith',
    contactDetails: 'jane.smith@email.com',
  },
  invoice: {
    date: 'August 30, 2023',
    number: '001',
    priceDetail: {
      ...PriceDetailMock,
      discount: undefined,
    },
  },
  property: {
    name: 'Herliana Apartments',
    address: '456 Elm Street, Anytown USA',
    rentDue: '$500.00',
    rentFrequency: 'Monthly',
    rentDueDate: 'September 1, 2023',
  },
  payment: {
    acceptedMethods: ['Check', 'Cash', 'Credit Card'],
  },
  otherCharges: {
    taxes: '$50.00',
  },
  paymentTerms: {
    latePaymentPenalty: '$25.00',
    latePaymentDate: 'September 5, 2023',
  },
  comments: 'Please make checks payable to ABC Rentals.',
  status: 'Paid',
};

export default InvoiceMock;
