import Invoice from '@/components/Invoice/Invoice';

const landlord = {
  name: 'John Doe',
  companyName: 'ABC Rentals',
  address: '123 Main Street, Anytown USA',
  contactNumber: '(123) 456-7890',
  emailAddress: 'john.doe@abcrentals.com',
  website: 'www.abcrentals.com',
};

const tenant = {
  name: 'Jane Smith',
  contactDetails: 'jane.smith@email.com',
};

const invoice = {
  date: 'August 30, 2023',
  number: '001',
};

const property = {
  address: '456 Elm Street, Anytown USA',
  rentDue: '$500.00',
  rentFrequency: 'Monthly',
  rentDueDate: 'September 1, 2023',
};

const payment = {
  acceptedMethods: ['Check', 'Cash', 'Credit Card'],
};

const otherCharges = {
  taxes: '$50.00',
};

const paymentTerms = {
  latePaymentPenalty: '$25.00',
  latePaymentDate: 'September 5, 2023',
};

const comments = 'Please make checks payable to ABC Rentals.';

export default function InvoiceIdPage() {
  const invoiceData = {
    landlord,
    tenant,
    invoice,
    property,
    payment,
    otherCharges,
    paymentTerms,
    comments,
  };

  return (
    <main>
      <Invoice data={invoiceData} />
    </main>
  );
}
