import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Collapse,
  styled,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { websiteActions } from '../../../store/slices/website/website-slice';
import ControlPanelIcon from '../../icons/ControlPanelIcon';
import AlertIcon from '../../icons/AlertIcon';
import StoreIcon from '../../icons/StoreIcon';
import BatteryIcon from '../../icons/BatteryIcon';
import ScannerIcon from '../../icons/ScannerIcon';
import UsersIcon from '../../icons/UsersIcon';
import BatteryTypeIcon from '../../icons/BatteryTypeIcon';
import AddProvidersIcon from '../../icons/AddProvidersIcon';
import ServicesIcon from '../../icons/ServicesIcon';
import WarehouseIcon from '../../icons/WarehouseIcon';
import DashboardIcon from '../../icons/Dashboard';

interface Route {
  path: string;
  name: string;
  icon?: string;
  subItems?: Route[];
}

interface SidebarProps {
  bgColor: string;
  routes: Route[];
  logoText: string;
  logo: string;
  handleDrawerToggle: () => void;
  open: boolean;
}

const StyledDrawer = styled(Drawer)(({ }) => ({
  width: 208,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 208,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    color: '#637381',
  },
}));

const LogoText = styled(Typography)({
  width: '100%',
  padding: '0 20px',
  '& .logo-container': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    lineHeight: 1,
  },
  '& .vesna': {
    color: '#FF6B00',
    fontWeight: 700,
    fontSize: '3rem',
    letterSpacing: '0.5px',
    textAlign: 'right',
    lineHeight: 0.8,
  },
  '& .power': {
    color: '#5045E2',
    fontWeight: 500,
    fontSize: '1.5rem',
    textAlign: 'right',
    width: '100%',
    lineHeight: 1,
  },
});

const StyledIcon = styled('span')({
  '& .MuiSvgIcon-root': {
    fontSize: '1.05rem',
  },
});

const FooterLogo = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '20px',
  textAlign: 'center',
  '& img': {
    width: '150px',
    height: 'auto',
  },
});

const getIcon = (iconName: string) => {
  const icon = (() => {
    switch (iconName) {
      case 'control-panel':
        return <ControlPanelIcon />;
      case 'alerts':
        return <AlertIcon />;
      case 'stores':
        return <StoreIcon />;
      case 'warehouses':
        return <WarehouseIcon />;
      case 'batteries':
        return <BatteryIcon />;
      case 'scanners':
        return <ScannerIcon />;
      case 'users':
        return <UsersIcon />;
      case 'battery-types':
        return <BatteryTypeIcon />;
      case 'providers':
        return <AddProvidersIcon />;
      case 'services':
        return <ServicesIcon />;
      default:
        return <DashboardIcon />;
    }
  })();
  
  return <StyledIcon>{icon}</StyledIcon>;
};

const Sidebar: React.FC<SidebarProps> = ({
  routes,
  open,
}) => {
  const dispatch = useDispatch();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const selectedItem = useSelector((state: any) => state.website.selectedRoute);
  const navigate = useNavigate();

  const handleSubmenuClick = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  const handleItemClick = (path: string) => {
    dispatch(websiteActions.setSelectedRoute(path));
    navigate(path);
  };

  const renderMenuItem = (route: Route, isSubItem = false) => (
    <React.Fragment key={route.path}>
      <ListItem
        button
        onClick={() => {
          handleItemClick(route.path);
          if (route.subItems) handleSubmenuClick(route.path);
        }}
        sx={{
          pl: isSubItem ? 4 : 2,
          backgroundColor: selectedItem === route.path ? '#F4F6F8' : 'transparent',
          borderRadius: '8px',
          mx: 1,
          width: 'calc(100% - 16px)',
          mb: 0.5,
          '&:hover': {
            backgroundColor: '#F4F6F8',
          },
        }}
      >
        {!isSubItem && (
          <ListItemIcon sx={{ color: 'inherit', minWidth: 32 }}>
            {getIcon(route.icon || 'dashboard')}
          </ListItemIcon>
        )}
        <ListItemText 
          primary={route.name}
          sx={{
            '& .MuiTypography-root': {
              fontSize: isSubItem ? '14px' : '16px',
              fontWeight: selectedItem === route.path ? 600 : 500,
            },
          }}
        />
        {route.subItems && (
          openSubmenu === route.path ? <ExpandLess /> : <ExpandMore />
        )}
      </ListItem>
      {route.subItems && (
        <Collapse in={openSubmenu === route.path} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.subItems.map((subItem) => renderMenuItem(subItem, true))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  return (
    <StyledDrawer variant="permanent" open={open}>
      <Box sx={{ py: 3 }}>
        <LogoText variant="h6">
          <div className="logo-container">
            <img src='src/assets/images/logo-acumulatori.png'></img>
          </div>
        </LogoText>
      </Box>
      <List sx={{ pt: 2, pb: 10 }}>
        {routes.map((route) => renderMenuItem(route))}
      </List>
      <FooterLogo>
        <img 
          src={'src/assets/images/footer-logo.png'}
          alt="Cicada Technologies"
        />
      </FooterLogo>
    </StyledDrawer>
  );
};

export default Sidebar;