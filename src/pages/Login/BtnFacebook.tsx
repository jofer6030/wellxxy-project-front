import axios from 'axios';
import { Button } from '@mui/material';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import FacebookIcon from '../../components/Icons/FacebookIcon';
import { IUser } from '../../redux/reducers/authReducer';
import { FC } from 'react';

const BtnFacebook: FC = () => {
  const responseFacebook = async (response: ReactFacebookLoginInfo): Promise<void> => {
    try {
      const {
        data: { picture, ...rest },
      } = await axios.get(
        `https://graph.facebook.com/${response.userID}?fields=name,email,picture&access_token=${response.accessToken}`
      );
      const dataUser: IUser = { ...rest, picture: picture.data.url };
      console.log(dataUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FacebookLogin
      appId='825161595227652'
      // appId='5614944421923060'
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
