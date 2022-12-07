import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoutes: FC = () => {
  console.log("PrivateRoutes");
  return <Outlet />
}

export default PrivateRoutes