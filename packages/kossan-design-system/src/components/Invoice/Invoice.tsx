// make react component which render Invoice using react MUI
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { InvoiceProps } from './types';

const Invoice: FC<InvoiceProps> = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Invoice #
      </Typography>
    </Box>
  );
};

export default Invoice;
