import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PhoneNumber, CodeSMS } from '../components/verificationPhone/';
import { useAppSelector, useAppDispatch } from '../redux/hooks/reduxHooks';
import { nextStep, resetStep } from '../redux/reducers/stepReducer';

const RegisterPage = () => {
  const { steps } = useAppSelector((state) => state.Steps);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickStep = () => {
    if (steps < 2) {
      dispatch(nextStep());
      return;
    }
    dispatch(resetStep());
    navigate('/home', { replace: true });
  };

  return (
    <Box className='register__page'>
      <Box className='register__page-container'>
        {steps === 1 ? <PhoneNumber /> : <CodeSMS />}
        <Button
          className='register__btn'
          variant='contained-primary'
          fullWidth
          onClick={handleClickStep}
        >
          Continuar
        </Button>

        {steps === 2 && (
          <>
            <Typography className='register__timer' align='center'>
              24 segundos
            </Typography>
            <Typography className='register__resend-code' align='center'>
              Volver a enviar código
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default RegisterPage;
