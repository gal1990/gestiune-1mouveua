import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const ControlPanel = () => {
  const languageData = useSelector((state: any) => state.website.languageData);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {languageData?.common?.dashboard || 'Dashboard'}
      </Typography>
    </Box>
  );
};

export default ControlPanel;