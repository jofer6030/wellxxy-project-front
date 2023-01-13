import { FC, useEffect } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

import HeaderLayout from '../layout/HeaderLayout';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import HomePage from '../pages/HomePage';

import Loading from '../components/generals/Loading';

import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import { checkingAuthAction } from '../redux/reducers/authReducer';
import SidebarLayout from '../layout/SidebarLayout';

// export const router = createBrowserRouter([
//   {
//     element: <PublicRoutes />,
//     children: [
//       {
//         path: '/',
//         element: <LoginPage />,
//       },
//     ],
//   },
//   {
//     element: <PrivateRoutes />,
//     children: [
//       {
//         path: '/',
//         element: <h1>hgola</h1>,
//       },
//     ],
//   },
// ]);

const RouterApp: FC = () => {
  const { token, isLoading } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: revalidacion de login
    dispatch(checkingAuthAction(token));
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRoutes />}>
            <Route element={<SidebarLayout />}>
              <Route index element={<HomePage />} />
              <Route path='orders' element={<div>ordersPage</div>} />
              <Route
                path='configuration'
                element={<div>configurationPage</div>}
              />
            </Route>
            <Route element={<HeaderLayout />}>
              <Route path='shopping-cart' element={<ShoppingCartPage />} />
            </Route>
          </Route>
          <Route path='/' element={<PublicRoutes />}>
            <Route path='login' element={<LoginPage />} />
            <Route element={<HeaderLayout />}>
              <Route path='login-mobile' element={<RegisterPage />} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterApp;
