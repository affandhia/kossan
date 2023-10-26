import { Typography, Box, Stack, Paper, Unstable_Grid2 as Grid } from '@mui/material';
import { FC } from 'react';

import { InvoiceProps } from './types';

import PriceDetail from '@/components/PriceDetail/PriceDetail';

const Invoice: FC<InvoiceProps> = ({ data }) => {
  const {
    // landlord,
    tenant,
    invoice,
    property,
    // payment,
    // otherCharges,
    // paymentTerms,
    // comments,
    status,
  } = data;
  return (
    <Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{'Bukti Pembayaran'}</Typography>
        <Typography variant="h6">{`No. Invoice: ${invoice.number}`}</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Stack gap={1}>
              <Typography variant="h5" fontWeight="bold">
                {'Ringkasan'}
              </Typography>
              <Box>
                <Typography variant="body1" color="gray">
                  {'Tanggal Pembayaran'}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {invoice.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="gray">
                  {'Status Transaksi'}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {status}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={12} md={8}>
          <Stack spacing={2}>
            <Paper sx={{ p: 2 }}>
              <Stack gap={1}>
                <Typography variant="h5" fontWeight="bold">
                  {'Informasi Penyewa'}
                </Typography>
                <Box>
                  <Typography variant="body1" color="gray">
                    {'Nama Penyewa'}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {tenant.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="gray">
                    {'Unit'}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {property.name}
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <Stack gap={1}>
                <Typography variant="h5" fontWeight="bold">
                  {'Rincian Pembayaran'}
                </Typography>
                <Box>
                  <PriceDetail {...invoice.priceDetail} />
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      {/* <Typography variant="h5">
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
      <Typography variant="h5">
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

      <Typography variant="h5">{'Invoice Information:'}</Typography>
      <Typography>
        {'Date: '}
        {invoice.date}
      </Typography>
      <Typography variant="h5">{'Property and Rent Information:'}</Typography>
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

      <Typography variant="h5">{'Payment Information:'}</Typography>
      <Typography>
        {'Accepted Payment Methods: '}
        {payment.acceptedMethods.join(', ')}
      </Typography>

      <Typography variant="h5">{'Other Charges:'}</Typography>
      <Typography>
        {'Taxes: '}
        {otherCharges.taxes}
      </Typography>

      <Typography variant="h5">{'Payment Terms:'}</Typography>
      <Typography>
        {'Late Payment Penalty: '}
        {paymentTerms.latePaymentPenalty}
        {' after '}
        {paymentTerms.latePaymentDate}
      </Typography>

      <Typography variant="h5">{'Comments or Notes:'}</Typography>
      <Typography>{comments}</Typography> */}
    </Box>
  );
};

export default Invoice;
