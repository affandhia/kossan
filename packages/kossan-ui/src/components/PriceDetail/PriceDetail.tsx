import { FC, Fragment } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Unstable_Grid2 as Grid,
  TypographyProps,
  Stack,
} from '@mui/material';

import { PriceDetailProps, PriceItem } from './types';

const TextItem = ({
  label,
  value,
  labelProps,
  valueProps,
}: {
  label: string;
  value: number | string;
  labelProps?: TypographyProps;
  valueProps?: TypographyProps;
}) => (
  <Grid container>
    <Grid xs={12} sm={6}>
      <Typography color="primary.light" variant="body1" {...labelProps}>
        {label}
      </Typography>
    </Grid>
    <Grid xs={12} sm={6} textAlign={{ xs: 'left', sm: 'right' }}>
      <Typography color="primary.light" variant="caption" {...valueProps}>
        {value}
      </Typography>
    </Grid>
  </Grid>
);

const NestedListItem = ({ label, amount, subItems }: PriceItem) => (
  <Fragment key={label}>
    <ListItem sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
      <ListItemText primary={<TextItem label={label} value={amount} />} />
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

const PriceDetail: FC<PriceDetailProps> = ({ prices, discount }) => {
  const totalAmount = prices.reduce((acc, { amount }) => acc + amount, 0);
  const discountedAmount = discount ? totalAmount * (1 - discount / 100) : totalAmount;

  return (
    <>
      <List>
        <ListItem sx={{ backgroundColor: 'primary.dark' }}>
          <ListItemText
            primary={
              <TextItem
                label="ITEM"
                value="HARGA"
                labelProps={{ fontWeight: 'bold', color: 'grey.50' }}
                valueProps={{ color: 'grey.50', variant: 'body1', fontWeight: 'bold' }}
              />
            }
          />
        </ListItem>
        {prices.map((item) => (
          <NestedListItem {...item} />
        ))}
      </List>

      <Grid container justifyContent="end" p={2}>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <TextItem
              label={discount ? 'SUBTOTAL' : 'TOTAL'}
              value={totalAmount.toFixed(2)}
              labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
            />
            {discount && (
              <>
                <TextItem
                  label="DISCOUNT"
                  value={`${discount}% ($${(totalAmount - discountedAmount).toFixed(2)})`}
                  labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
                />
                <TextItem
                  label="TOTAL"
                  value={discountedAmount.toFixed(2)}
                  labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
                />
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default PriceDetail;
