import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import Logo from '../components/Icons/Logo';
import BtnGoogle from '../components/generals/BtnGoogle';
import BtnFacebook from '../components/generals/BtnFacebook';
import BtnPhone from '../components/generals/BtnPhone';
const LoginPage: FC = () => {
  return (
    <Grid container className='login__page-container'>
      <Grid item className='login__welcome' xs={12} md={6}>
        <Logo className='welcome__logo' />
        <Typography variant='h2' className='welcome__title'>
          Bienvenida
        </Typography>
        <Typography className='welcome__description'>
          Continuemos cuidando tu salud íntima.
        </Typography>
        <Grid container spacing={2} className='welcome__btns'>
          <Grid item xs={12} lg={6}>
            <BtnGoogle />
          </Grid>
          <Grid item xs={12} lg={6}>
            <BtnFacebook />
          </Grid>
        </Grid>
        <BtnPhone />
      </Grid>
      <Grid item className='login__img' xs={0} md={6} />
    </Grid>
  );
};

export default LoginPage;
