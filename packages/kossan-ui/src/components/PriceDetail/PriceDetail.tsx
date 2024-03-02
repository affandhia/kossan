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
import { createStateContext } from 'react-use';

import { PriceDetailProps, PriceItem } from './types';

import { currencyIDR } from '@/utils';

const [useProps, PropsProvider] = createStateContext(null as unknown as PriceDetailProps);

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
    <Grid xs={12} md={6}>
      <Typography color="primary.light" variant="body1" {...labelProps}>
        {label}
      </Typography>
    </Grid>
    <Grid xs={12} md={6} textAlign={{ xs: 'left', md: 'right' }}>
      <Typography color="primary.light" variant="caption" {...valueProps}>
        {value}
      </Typography>
    </Grid>
  </Grid>
);

const NestedListItem: FC<PriceItem> = (props) => {
  const { label, subItems } = props;
  const [{ currencyFormatter }] = useProps();

  return (
    <Fragment key={label}>
      <ListItem sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
        <ListItemText
          primary={
            <TextItem
              label={label}
              value={subItems ? `${currencyFormatter(props)} (Total)` : currencyFormatter(props)}
            />
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
};

const PriceDetail: FC<PriceDetailProps> = (props) => {
  const { prices, discount } = props;
  const totalAmount = prices.reduce((acc, { amount }) => acc + amount, 0);
  const discountedAmount = discount ? totalAmount * (1 - discount / 100) : totalAmount;

  return (
    <PropsProvider initialValue={props}>
      <List>
        <ListItem sx={{ backgroundColor: 'primary.dark' }}>
          <ListItemText
            primary={
              <TextItem
                label="ITEM"
                value="HARGA"
                labelProps={{ fontWeight: 'bold', color: 'grey.50' }}
                valueProps={{
                  color: 'grey.50',
                  variant: 'body1',
                  fontWeight: 'bold',
                  display: { xs: 'none', md: 'initial' },
                }}
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
              value={currencyIDR(totalAmount)}
              labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
            />
            {discount && (
              <>
                <TextItem
                  label="DISCOUNT"
                  value={`${discount}% ($${currencyIDR(totalAmount - discountedAmount)})`}
                  labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
                />
                <TextItem
                  label="TOTAL"
                  value={currencyIDR(discountedAmount)}
                  labelProps={{ fontWeight: 'bold', color: 'primary.dark' }}
                />
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </PropsProvider>
  );
};

export default PriceDetail;
