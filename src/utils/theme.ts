import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6600',
      dark: '#FF6600',
    },
    secondary: {
      main: '#93C25C',
    },
    background: {
      default: '#FFFFFF',
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
          backgroundColor: '#FF6600',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#FF8800',
          },
        },
        outlined: {
          borderColor: '#FF6600',
          color: '#FF6600',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 0, 0.04)',
            borderColor: '#FF6600',
          },
        },
        text: {
          color: '#FF6600',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 0, 0.04)',
          },
        },
      },
    },
  },
});

export default theme;