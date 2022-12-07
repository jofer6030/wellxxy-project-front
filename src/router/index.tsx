import { FC } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

import HeaderLayout from '../layout/HeaderLayout';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

export const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <h1>hgola</h1>,
      },
    ],
  },
]);

const RouterApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<LoginPage />} />
        </Route>
        <Route path='/' element={<PrivateRoutes />}>
          <Route element={<HeaderLayout />}>
            <Route path='register' element={<RegisterPage />} />
            <Route path='shopping-cart' element={<ShoppingCartPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
