import { Typography, Box, Stack, Unstable_Grid2 as Grid } from '@mui/material';
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
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4} pl={{ md: 10 }} bgcolor="primary.main">
          <Typography variant="h4" fontWeight="bold" color="grey.50">
            {'BUKTI PEMBAYARAN'}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          md={8}
          borderRight={{ md: 40 }}
          borderColor={{ md: 'primary.main' }}
          alignItems="center"
          display="flex"
          justifyContent={{ md: 'end' }}
        >
          <Stack
            spacing={1}
            direction={{ xs: 'row', md: 'column' }}
            alignItems={{ xs: 'center', md: 'end' }}
          >
            <Typography variant="h6" color="primary.light" fontWeight="bold">
              {'INVOICE #'}
            </Typography>
            <Typography variant="subtitle1" color="primary.dark">
              {invoice.number}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={4}>
          <Box p={2} borderBottom={1} borderColor="grey.300">
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight="bold" color="primary.light">
                {'Ringkasan'}
              </Typography>
              <Box>
                <Typography variant="body1" color="grey.500">
                  {'Tanggal Pembayaran'}
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="primary.main">
                  {invoice.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="grey.500">
                  {'Status Transaksi'}
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="primary.main">
                  {status}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid xs={12} md={8}>
          <Stack spacing={2}>
            <Box p={2} borderBottom={1} borderColor="grey.300">
              <Stack spacing={1}>
                <Typography variant="h5" fontWeight="bold" color="primary.light">
                  {'Informasi Penyewa'}
                </Typography>
                <Box>
                  <Typography variant="body1" color="grey.500">
                    {'Nama Penyewa'}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="primary.main">
                    {tenant.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="grey.500">
                    {'Unit'}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="primary.main">
                    {property.name}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box sx={{ p: 2 }}>
              <Stack spacing={1}>
                <Typography variant="h5" fontWeight="bold" color="primary.light">
                  {'Rincian Pembayaran'}
                </Typography>
                <Box>
                  <PriceDetail {...invoice.priceDetail} />
                </Box>
              </Stack>
            </Box>
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
    </Stack>
  );
};

export default Invoice;
