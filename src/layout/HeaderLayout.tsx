import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import HeaderTitle from '../components/generals/HeaderTitle';
import Steps from '../components/generals/Steps';

import { dataStepsVerification } from '../data/dataSteps';

const HeaderLayout = () => {
  return (
    <Box className='header__layout'>
      <HeaderTitle title='Verificación de celular' />
      <Steps dataSteps={dataStepsVerification} />
      <Outlet />
    </Box>
  );
};

export default HeaderLayout;
