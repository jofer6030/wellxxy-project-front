import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes: FC = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    return <Navigate to='/register' />;
  }
  return <Outlet />;
};

export default PublicRoutes;
