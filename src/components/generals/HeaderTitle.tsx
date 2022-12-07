import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const HeaderTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Box className='header__title-container'>
      <Typography variant='h2'>{title}</Typography>
    </Box>
  );
};

export default HeaderTitle;
