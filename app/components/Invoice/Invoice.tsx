import { Typography, Box } from '@mui/material'

const defaultData = {
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
  },
  property: {
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
}

type InvoiceData = typeof defaultData

interface InvoiceProps {
  data: InvoiceData
}

const Invoice = ({ data = defaultData }) => {
  const {
    landlord,
    tenant,
    invoice,
    property,
    payment,
    otherCharges,
    paymentTerms,
    comments,
  } = data
  return (
    <Box>
      <Typography variant="h4" component="div">
        Room Rent Invoice
      </Typography>
      <Typography variant="h5" component="div">
        Landlord&rsquo;s Information:
      </Typography>
      <Typography>Name: {landlord.name}</Typography>
      <Typography>Company Name: {landlord.companyName}</Typography>
      <Typography>Address: {landlord.address}</Typography>
      <Typography>Contact Number: {landlord.contactNumber}</Typography>
      <Typography>Email Address: {landlord.emailAddress}</Typography>
      <Typography>Website: {landlord.website}</Typography>

      <Typography variant="h5" component="div">
        Tenant&rsquo;s Information:
      </Typography>
      <Typography>Name: {tenant.name}</Typography>
      <Typography>Contact Details: {tenant.contactDetails}</Typography>

      <Typography variant="h5" component="div">
        Invoice Information:
      </Typography>
      <Typography>Date: {invoice.date}</Typography>
      <Typography variant="h5" component="div">
        Property and Rent Information:
      </Typography>
      <Typography>Property Address: {property.address}</Typography>
      <Typography>Rent Due: {property.rentDue}</Typography>
      <Typography>Rent Frequency: {property.rentFrequency}</Typography>
      <Typography>Rent Due Date: {property.rentDueDate}</Typography>

      <Typography variant="h5" component="div">
        Payment Information:
      </Typography>
      <Typography>
        Accepted Payment Methods: {payment.acceptedMethods.join(', ')}
      </Typography>

      <Typography variant="h5" component="div">
        Other Charges:
      </Typography>
      <Typography>Taxes: {otherCharges.taxes}</Typography>

      <Typography variant="h5" component="div">
        Payment Terms:
      </Typography>
      <Typography>
        Late Payment Penalty: {paymentTerms.latePaymentPenalty} after{' '}
        {paymentTerms.latePaymentDate}
      </Typography>

      <Typography variant="h5" component="div">
        Comments or Notes:
      </Typography>
      <Typography>{comments}</Typography>
    </Box>
  )
}

export default Invoice
