import { FC, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

import HeaderLayout from '../layout/Header/HeaderLayout';

import LoginPage from '../pages/Login/LoginPage';
import LoginMobile from '../pages/LoginMobile/LoginMobilePage';
import ShoppingCartPage from '../pages/ShoppingCart/ShoppingCartPage';
import HomePage from '../pages/Home/HomePage';

import Loading from '../components/generals/Loading';

import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import { checkingAuthAction } from '../redux/reducers/authReducer';
import SidebarLayout from '../layout/Sidebar/SidebarLayout';

const RouterApp: FC = () => {
  const { token, isLoading } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: revalidacion de login
    dispatch(checkingAuthAction(token));
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route element={<SidebarLayout />}>
            <Route index element={<HomePage />} />
            <Route path='orders' element={<div>ordersPage</div>} />
            <Route path='configuration' element={<div>configurationPage</div>} />
          </Route>
          <Route element={<HeaderLayout />}>
            <Route path='shopping-cart' element={<ShoppingCartPage />} />
          </Route>
        </Route>
        <Route path='/' element={<PublicRoutes />}>
          <Route path='login' element={<LoginPage />} />
          <Route element={<HeaderLayout />}>
            <Route path='login-mobile' element={<LoginMobile />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
