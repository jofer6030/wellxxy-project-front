import { Box, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../../components/Icons/Logo';
import { linksSidebar } from '../../data/sidebarItems';
import LogoutIcon from '../../components/Icons/LogoutIcon';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';

import { logout } from '../../redux/reducers/authReducer';

const SidebarLayout = () => {
  const dispatch = useAppDispatch();
  const handleClickLogout = () => {
    dispatch(logout());
  };
  return (
    <Grid container className='sidebar__layout'>
      <Grid item className='sidebar__layout-nav'>
        <Box className='nav__logo-container'>
          <Logo className='nav__logo' />
        </Box>
        <Grid container className='nav__items' direction='column' justifyContent='space-between'>
          <Grid item>
            <List>
              {linksSidebar.map(({ to, Icon, text }) => (
                <NavLink key={to} to={to} className='nav__link'>
                  <ListItem>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    {text}
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Grid container className='nav__perfil-container'>
              <Box className='nav__perfil-img'>
                <img
                  src='https://www.nicepng.com/png/full/105-1053345_comment-from-dj-buck-perfil-anonimo.png'
                  alt='Perfil Imagen'
                />
              </Box>
              <Typography className='nav__perfil-info'>
                Allison Valencia <span>32 años</span>
              </Typography>
            </Grid>
            <Box className='nav__logout' onClick={handleClickLogout}>
              Cesar sesión <LogoutIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className='sidebar__layout-content'>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default SidebarLayout;
