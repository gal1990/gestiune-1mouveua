import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingOverlayProps {
  active: boolean;
  children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ active, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: 'absolute',
        }}
        open={active}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </div>
  );
};

export default LoadingOverlay;