import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import { logout } from '../../redux/reducers/authReducer';
import { backStep } from '../../redux/reducers/stepReducer';

import CloseIcon from '../Icons/CloseIcon';

const HeaderTitle: FC<{ title: string }> = ({ title }) => {
  const { steps } = useAppSelector((state) => state.Steps);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickStep = () => {
    if (steps === 1) {
      dispatch(logout());
      navigate('/');
      localStorage.removeItem('step');
      return;
    }
    dispatch(backStep());
  };

  return (
    <Box className='header__title-container'>
      <Typography variant='h2'>{title}</Typography>
      <CloseIcon className='header__title-close' onClick={handleClickStep} />
    </Box>
  );
};

export default HeaderTitle;
