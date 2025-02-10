import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5045E2',
      dark: '#2065D1',
    },
    secondary: {
      main: '#637381',
    },
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#5045E2',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4238B5',
          },
        },
        outlined: {
          borderColor: '#5045E2',
          color: '#5045E2',
          '&:hover': {
            backgroundColor: 'rgba(80, 69, 226, 0.04)',
            borderColor: '#5045E2',
          },
        },
        text: {
          color: '#5045E2',
          '&:hover': {
            backgroundColor: 'rgba(80, 69, 226, 0.04)',
          },
        },
      },
    },
  },
});

export default theme;