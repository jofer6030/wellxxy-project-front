import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/reduxHooks';

const PublicRoutes: FC = () => {
  const { auth } = useAppSelector((state) => state.Auth);

  if (auth) {
    return <Navigate to='/' replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;
