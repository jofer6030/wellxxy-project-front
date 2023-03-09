import { Button } from '@mui/material';
import { BsPhone } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import { intialStep } from '../../redux/reducers/stepReducer';

const BtnPhone = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    dispatch(intialStep());
    navigate('/login-mobile');
  };
  return (
    <Button onClick={handleClickLogin} fullWidth startIcon={<BsPhone />} variant='contained-primary'>
      Ingresar con número de celular
    </Button>
  );
};

export default BtnPhone;
