import { useState } from 'react';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import InputPhoneNumber from '../generals/InputPhoneNumber';
// import InputTel from '../generals/InputTel';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <Box className='phone__number'>
      <Typography variant='h2' className='title'>
        Índícanos tu número
      </Typography>
      <InputPhoneNumber
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Grid container className='phone__number-check'>
        <Grid item xs={2}>
          <Checkbox />
        </Grid>
        <Grid item xs={10}>
          <Typography>
            Leo, comprendo y acepto los{' '}
            <Link to='#' className='phone__number-link'>
              términos y condiciones
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhoneNumber;
