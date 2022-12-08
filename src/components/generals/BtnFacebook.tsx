import { Button } from '@mui/material';
import {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from '../Icons/FacebookIcon';

const BtnFacebook = () => {
  const responseFacebook = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId='825161595227652'
      callback={responseFacebook}
      render={(renderProps) => (
        <Button
          fullWidth
          variant='outlined'
          startIcon={<FacebookIcon className='btn__icon' />}
          onClick={renderProps.onClick}
        >
          Ingresa con Facebook
        </Button>
      )}
    />
  );
};

export default BtnFacebook;
