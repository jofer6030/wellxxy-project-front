import { Button } from '@mui/material';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import { IUser, loginAction } from '../../redux/reducers/authReducer';

import GoogleIcon from '../../components/Icons/GoogleIcon';

type LoginSuccess = Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>;

const BtnGoogle = () => {
  const dispatch = useAppDispatch();

  const loginSuccess = async (tokenResponse: LoginSuccess) => {
    try {
      const {
        data,
        // : { name, picture, email },
      } = await axios.get<IUser>('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });
      console.log(data);
      // const dataGoogle = { name, email, picture };
      // dispatch(authSuccess(dataGoogle));

      dispatch(loginAction());
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
      onClick={() => {
        logingGoogle();
      }}
    >
      Ingresa con Google
    </Button>
  );
};

export default BtnGoogle;
