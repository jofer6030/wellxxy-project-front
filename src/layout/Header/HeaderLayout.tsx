import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import HeaderTitle from './HeaderTitle';
import Steps from './Steps';

import { dataStepsVerification } from '../../data/dataSteps';

type ITitle = Record<string, string>;

const HeaderLayout = () => {
  const { pathname } = useLocation();

  const title: ITitle = {
    '/login-mobile': 'Verificación de celular',
    '/shopping-cart': 'Wellxxy compra',
  };

  return (
    <Box className='header__layout'>
      <HeaderTitle title={title[pathname]} />
      <Steps dataSteps={dataStepsVerification} />
      <Outlet />
    </Box>
  );
};

export default HeaderLayout;
