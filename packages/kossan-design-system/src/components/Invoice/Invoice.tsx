// make react component which render Invoice using react MUI
import { FC } from 'react';
import { InvoiceProps } from '@/components/Invoice/types';

import { Box, Typography } from '@mui/material';

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
