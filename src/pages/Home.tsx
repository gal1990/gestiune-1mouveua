import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const languageData = useSelector((state: any) => state.website.languageData);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {languageData?.common?.dashboard || 'Dashboard'}
      </Typography>
      <Typography variant="body1">
        {languageData?.common?.welcome || 'Welcome'}
      </Typography>
    </Box>
  );
};

export default Home;