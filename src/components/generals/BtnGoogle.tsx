import { Button } from '@mui/material';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import GoogleIcon from '../Icons/GoogleIcon';

type LoginSuccess = Omit<
  TokenResponse,
  'error' | 'error_description' | 'error_uri'
>;

const BtnGoogle = () => {
  const loginSuccess = async (tokenResponse: LoginSuccess) => {
    try {
      const { data } = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logingGoogle = useGoogleLogin({ onSuccess: loginSuccess });

  return (
    <Button
      fullWidth
      variant='outlined'
      startIcon={<GoogleIcon className='btn__icon' />}
      onClick={() => logingGoogle()}
    >
      Ingresa con Google
    </Button>
  );
};

export default BtnGoogle;
