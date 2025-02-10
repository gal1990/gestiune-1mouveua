import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default SnackbarProvider;