import { createTheme } from '@mui/material';
import { CheckBox, CheckBoxChecked } from '../../components/Icons/CheckBox';
import { btnContainedPrimary, btnContainedSecondary, btnOutlined, btnText } from './btnTheme';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5b99bf',
    },
  },
  typography: {
    button: {
      fontFamily: 'Avenir',
      textTransform: 'none',
      fontWeight: '800',
      lineHeight: 1,
    },
    h2: {
      fontWeight: '700',
    },
    h4: {
      color: '#070707',
      fontSize: '24px',
      fontFamily: 'Avenir',
      fontWeight: '800',
    },
    allVariants: {
      color: '#282828',
      fontFamily: 'Montserrat',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained-primary' },
          style: { ...btnContainedPrimary },
        },
        {
          props: { variant: 'contained-secondary' },
          style: { ...btnContainedSecondary },
        },
        {
          props: { variant: 'outlined' },
          style: { ...btnOutlined },
        },
        {
          props: { variant: 'text' },
          style: { ...btnText },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
      // styleOverrides: {
      //   root: {
      //     height: '56px',
      //   },
      // },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Avenir',
          fontWeight: 500,
          color: '#282828',
          fontSize: '16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Avenir',
          color: 'rgba(40, 40, 40, 0.5)',
          fontSize: '16px',
          // '&.MuiInputLabel-shrink': {
          //   transform: 'translate(0, -1.5px) scale(1)',
          // },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckBox />,
        checkedIcon: <CheckBoxChecked />,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.06)',
          borderRadius: '20px',
          padding: '24px',
        },
      },
    },
  },
});
