import { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks/reduxHooks';
import { nextStep, intialStep } from '../../redux/reducers/stepReducer';
import PhoneNumber from './PhoneNumber';
import CodeSMS from './CodeSMS';

export interface DataPhone {
  phoneNumber: string;
  termsAndCondition: boolean;
}

const LoginMobile = () => {
  const { steps } = useAppSelector((state) => state.Steps);
  const [dataPhone, setDataPhone] = useState<DataPhone>({ phoneNumber: '', termsAndCondition: false });
  const [receivedCode, setReceivedCode] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickStep = (): void => {
    if (steps < 2) {
      dispatch(nextStep());
      return;
    }
    dispatch(intialStep());
    navigate('/home', { replace: true });
  };

  const isDisbled = (): boolean => {
    if (steps === 1) {
      const { phoneNumber, termsAndCondition } = dataPhone;
      return phoneNumber.length < 1 || !termsAndCondition;
    }

    return !receivedCode;
  };

  return (
    <Box className='login__mobile__page'>
      <Box className='login__mobile__page-container'>
        {steps === 1 ? (
          <PhoneNumber dataPhone={dataPhone} setDataPhone={setDataPhone} />
        ) : (
          <CodeSMS receivedCode={receivedCode} setReceivedCode={setReceivedCode} />
        )}

        <Button
          className='login__resend__btn'
          variant='contained-primary'
          fullWidth
          onClick={handleClickStep}
          disabled={isDisbled()}
        >
          Continuar
        </Button>

        {steps === 2 && (
          <>
            <Typography className='login__timer' align='center'>
              24 segundos
            </Typography>
            <Typography className='login__resend-code' align='center'>
              Volver a enviar código
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default LoginMobile;
