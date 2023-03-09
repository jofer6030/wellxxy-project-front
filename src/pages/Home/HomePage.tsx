import { Box, Button, Grid, Paper, Typography } from '@mui/material';

import product from '../../assets/images/product_01.png';
import OrdersEmpty from './OrdersEmpty';
const HomePage = () => {
  return (
    <Box className='home__page'>
      <Typography variant='h2' className='home__page-title'>
        Bienvenida, <span>Allison.</span>
      </Typography>
      <Paper className='home__page-orders'>
        <Typography variant='h3'>Mis pedidos</Typography>
        <OrdersEmpty width='195px' />
      </Paper>
      <Grid container className='home__page-orders_bottom' columnSpacing={4}>
        <Grid item xs={8}>
          <Paper className='oders_bottom-cards'>
            <Typography variant='h3'>Nuestros productos</Typography>
            <Grid container className='card-product' columnSpacing={4}>
              <Grid item xs={5}>
                <img src={product} alt='KIT VPH' />
              </Grid>
              <Grid item xs={7} className='card-product-info'>
                <Typography variant='h4'>KIT VPH</Typography>
                <Typography className='product__desc'>Precio de delivery desde 5 soles adicionales.</Typography>
                <Typography className='product__price'>S/169</Typography>
                <Button variant='contained-secondary' className='product__btn'>
                  Lo quiero
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className='oders_bottom-cards'>
            <Typography variant='h3' mb='42px'>
              Historial
            </Typography>
            <OrdersEmpty width='120px' fz='16px' relative={false} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
