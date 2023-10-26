import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { PriceDetailProps, PriceItem } from './types';

const NestedListItem = ({ label, amount, subItems }: PriceItem) => (
  <Fragment key={label}>
    <ListItem sx={{ borderBottom: 1 }}>
      <ListItemText
        primary={
          <Grid container>
            <Grid xs={12} sm={6}>
              <Typography variant="body1">{label}</Typography>
            </Grid>
            <Grid xs={12} sm={6} textAlign={{ xs: 'left', sm: 'right' }}>
              <Typography variant="caption">{amount}</Typography>
            </Grid>
          </Grid>
        }
      />
    </ListItem>
    {subItems && (
      <List disablePadding sx={{ pl: 1 }}>
        {subItems.map((subItem) => (
          <NestedListItem {...subItem} />
        ))}
      </List>
    )}
  </Fragment>
);

const PriceDetail: React.FC<PriceDetailProps> = ({ prices, discount }) => {
  const totalAmount = prices.reduce((acc, { amount }) => acc + amount, 0);
  const discountedAmount = discount ? totalAmount * (1 - discount / 100) : totalAmount;

  return (
    <>
      <List>
        {prices.map((item) => (
          <NestedListItem {...item} />
        ))}
      </List>
      <Typography variant="h6" align="right">
        {'Total: $'}
        {totalAmount.toFixed(2)}
      </Typography>
      {discount && (
        <Typography variant="h6" align="right">
          {'Discount: '}
          {discount}
          {'% ($'}
          {(totalAmount - discountedAmount).toFixed(2)}
          {')'}
        </Typography>
      )}
      <Typography variant="h5" align="right">
        {discount ? `Total after discount: $${discountedAmount.toFixed(2)}` : ''}
      </Typography>
    </>
  );
};

export default PriceDetail;
