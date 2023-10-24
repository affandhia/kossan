import { Typography, Box } from '@mui/material';
import { FC } from 'react';

import { defaultData } from './constants';
import { InvoiceProps } from './types';

const Invoice: FC<InvoiceProps> = ({ data = defaultData }) => {
  const { landlord, tenant, invoice, property, payment, otherCharges, paymentTerms, comments } =
    data;
  return (
    <Box>
      <Typography variant="h4" component="div">
        {'Room Rent Invoice'}
      </Typography>
      <Typography variant="h5" component="div">
        {'Landlord'}&rsquo;{'s Information:'}
      </Typography>
      <Typography>
        {'Name: '}
        {landlord.name}
      </Typography>
      <Typography>
        {'Company Name: '}
        {landlord.companyName}
      </Typography>
      <Typography>
        {'Address: '}
        {landlord.address}
      </Typography>
      <Typography>
        {'Contact Number: '}
        {landlord.contactNumber}
      </Typography>
      <Typography>
        {'Email Address: '}
        {landlord.emailAddress}
      </Typography>
      <Typography>
        {'Website: '}
        {landlord.website}
      </Typography>

      <Typography variant="h5" component="div">
        {'Tenant'}&rsquo;{'s Information:'}
      </Typography>
      <Typography>
        {'Name: '}
        {tenant.name}
      </Typography>
      <Typography>
        {'Contact Details: '}
        {tenant.contactDetails}
      </Typography>

      <Typography variant="h5" component="div">
        {'Invoice Information:'}
      </Typography>
      <Typography>
        {'Date: '}
        {invoice.date}
      </Typography>
      <Typography variant="h5" component="div">
        {'Property and Rent Information:'}
      </Typography>
      <Typography>
        {'Property Address: '}
        {property.address}
      </Typography>
      <Typography>
        {'Rent Due: '}
        {property.rentDue}
      </Typography>
      <Typography>
        {'Rent Frequency: '}
        {property.rentFrequency}
      </Typography>
      <Typography>
        {'Rent Due Date: '}
        {property.rentDueDate}
      </Typography>

      <Typography variant="h5" component="div">
        {'Payment Information:'}
      </Typography>
      <Typography>
        {'Accepted Payment Methods: '}
        {payment.acceptedMethods.join(', ')}
      </Typography>

      <Typography variant="h5" component="div">
        {'Other Charges:'}
      </Typography>
      <Typography>
        {'Taxes: '}
        {otherCharges.taxes}
      </Typography>

      <Typography variant="h5" component="div">
        {'Payment Terms:'}
      </Typography>
      <Typography>
        {'Late Payment Penalty: '}
        {paymentTerms.latePaymentPenalty}
        {' after '}
        {paymentTerms.latePaymentDate}
      </Typography>

      <Typography variant="h5" component="div">
        {'Comments or Notes:'}
      </Typography>
      <Typography>{comments}</Typography>
    </Box>
  );
};

export default Invoice;
