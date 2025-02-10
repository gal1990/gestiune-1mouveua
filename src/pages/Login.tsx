import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link,
  InputAdornment,
  IconButton,
  styled,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login } from '../store/slices/auth/thunks';
import loginImage from '../assets/images/login-page.jpg';
import PeopleIcon from '../components/icons/PeopleIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import { PLATFORM_NAME } from '../assets/language/constants';

const LoginContainer = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
});

const ImageSection = styled(Box)({
  flex: 1,
  backgroundImage: `url(${loginImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(80, 69, 226, 0.4)',
  },
});

const ImageOverlayText = styled(Box)({
  position: 'absolute',
  bottom: '48px',
  left: '48px',
  color: '#FFFFFF',
  zIndex: 1,
  textAlign: 'left',
});

const FormSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px',
  backgroundColor: '#fff',
});

const IconsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  marginBottom: '2px',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    transform: 'none',
    position: 'relative',
    marginBottom: '8px',
    color: '#000000',
  },
  '& .MuiInputLabel-asterisk': {
    color: '#d32f2f',
  },
  '& .MuiInputBase-root': {
    marginTop: 0,
    height: '36px', // Reduced from default ~56px to 36px
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      padding: '8px 14px', // Reduced padding to match the new height
    },
    '& input::placeholder': {
      opacity: 1,
      color: '#919EAB',
    },
    '&.Mui-focused input::placeholder': {
      opacity: 0,
    },
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state: any) => state.auth?.loading);
  const error = useSelector((state: any) => state.auth?.error);
  const languageData = useSelector((state: any) => state.website.languageData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ email, password }));
      if (result) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginContainer>
      <ImageSection>
        <ImageOverlayText>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 0.5, letterSpacing: '0.5px', fontSize: '1.5rem' }}>
            {PLATFORM_NAME} MAN POWER
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
            Empowering workforce management for a better tomorrow
          </Typography>
        </ImageOverlayText>
      </ImageSection>
      <FormSection>
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconsContainer>
            <PeopleIcon />
            <WarehouseIcon />
          </IconsContainer>
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mt: '2px' }}>
              {languageData?.auth?.welcomeBack}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
              {languageData?.auth?.loginToAccount}
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
            <StyledTextField
              fullWidth
              label={`${languageData?.auth?.email}*`}
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              placeholder={languageData?.auth?.write}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              fullWidth
              label={`${languageData?.auth?.password}*`}
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error}
              placeholder={languageData?.auth?.write}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ height: '36px', width: '36px' }} // Match the new height
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ mt: 1, mb: 2, textAlign: 'right' }}>
              <Link href="#" underline="none" color="primary">
                {languageData?.auth?.forgotPassword}
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {languageData?.auth?.loginButton}
            </Button>

            {error && (
              <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
          </form>
        </Container>
      </FormSection>
    </LoginContainer>
  );
};

export default Login;