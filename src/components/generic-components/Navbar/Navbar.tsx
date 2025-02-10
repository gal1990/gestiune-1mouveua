import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  styled,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../../store/slices/auth/thunks';

interface NavbarProps {
  handleDrawerToggle: () => void;
  routes: any[];
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  width: 'calc(100% - 208px)',
  marginLeft: '208px',
}));

const StyledMenuIcon = styled(MenuIcon)({
  fontSize: '1.2rem',
});

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  cursor: 'pointer',
  backgroundColor: '#5045E2',
  '&:hover': {
    opacity: 0.8,
  },
}));

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle, routes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedItem = useSelector((state: any) => state.website.selectedRoute);
  const user = useSelector((state: any) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    handleClose();
  };

  const findRouteByPath = (routes: any[], path: string): any => {
    for (const route of routes) {
      if (route.path === path) return route;
      if (route.subItems) {
        const found = findRouteByPath(route.subItems, path);
        if (found) return { ...found, parent: route };
      }
    }
    return null;
  };

  const selectedRoute = selectedItem ? findRouteByPath(routes, selectedItem) : null;

  const renderTitle = () => {
    if (!selectedRoute) return null;

    if (selectedRoute.parent) {
      return (
        <Typography 
          variant="h6" 
          noWrap 
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
            color: '#000000'
          }}
        >
          {selectedRoute.parent.name} / {selectedRoute.name}
        </Typography>
      );
    }

    return (
      <Typography 
        variant="h6" 
        noWrap 
        component="div"
        sx={{
          fontWeight: 600,
          fontSize: '1.125rem',
          color: '#000000'
        }}
      >
        {selectedRoute.name}
      </Typography>
    );
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            mr: 2, 
            display: { sm: 'none' },
            padding: '6px',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          <StyledMenuIcon />
        </IconButton>
        {renderTitle()}
        <Box sx={{ flexGrow: 1 }} />
        
        {/* User Profile Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <UserAvatar>{user?.name?.charAt(0) || 'U'}</UserAvatar>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
              mt: 1.5,
              width: 200,
              '& .MuiMenuItem-root': {
                px: 2,
                py: 1,
                fontSize: '0.875rem',
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <LockIcon fontSize="small" />
            </ListItemIcon>
            Schimba parola
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Deconecteaza-te
          </MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;