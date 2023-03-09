import { FC } from 'react';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { DataPhone } from '../../pages/LoginMobile/LoginMobilePage';

import InputPhoneNumber from '../../components/generals/InputPhoneNumber';

interface Props {
  dataPhone: DataPhone;
  setDataPhone: React.Dispatch<React.SetStateAction<DataPhone>>;
}

const PhoneNumber: FC<Props> = ({ dataPhone, setDataPhone }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setDataPhone({
      ...dataPhone,
      [name]: name === 'termsAndCondition' ? checked : value,
    });
  };

  return (
    <Box className='phone__number'>
      <Typography variant='h2' className='title'>
        Índícanos tu número
      </Typography>
      <InputPhoneNumber name='phoneNumber' value={dataPhone.phoneNumber} onChange={handleChange} />
      <Grid container className='phone__number-check'>
        <Grid item xs={2}>
          <Checkbox checked={dataPhone.termsAndCondition} name='termsAndCondition' onChange={handleChange} />
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
