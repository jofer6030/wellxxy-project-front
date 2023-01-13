import { Button } from '@mui/material';
import { BsPhone } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const BtnPhone = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login-mobile');
  };
  return (
    <Button
      onClick={handleClickLogin}
      fullWidth
      startIcon={<BsPhone />}
      variant='contained-primary'
    >
      Ingresar con número de celular
    </Button>
  );
};

export default BtnPhone;
