import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import medicOrders from '../../assets/images/medic-order.png';

interface Props {
  width?: string;
  fz?: string;
  relative?: boolean;
}

const OrdersEmpty: FC<Props> = ({ width = '195px', fz = '18px', relative = true }) => {
  return (
    <Box className='orders__empty' sx={{ position: relative ? 'relative' : 'initial' }}>
      <Box className='orders__empty-img' width={width}>
        <img src={medicOrders} alt='Medico Ordenes' />
      </Box>
      <Typography fontSize={fz}>Aún no tienes pedidos ¿Qué esperas?</Typography>
    </Box>
  );
};

export default OrdersEmpty;
