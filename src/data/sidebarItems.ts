import ConfigurationIcon from '../components/Icons/ConfigurationIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import OrderIcon from '../components/Icons/OrderIcon';

export const linksSidebar = [
  {
    to: '/',
    Icon: HomeIcon,
    text: 'Inicio',
  },
  {
    to: '/orders',
    Icon: OrderIcon,
    text: 'Mis pedidos',
  },
  {
    to: '/configuration',
    Icon: ConfigurationIcon,
    text: 'Configuración',
  },
];
