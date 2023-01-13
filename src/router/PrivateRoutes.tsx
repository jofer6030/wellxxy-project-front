import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/reduxHooks';

const PrivateRoutes: FC = () => {
  const { auth } = useAppSelector((state) => state.Auth);

  if (!auth) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
