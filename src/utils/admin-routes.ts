import { useSelector } from 'react-redux';

const getRoutes = (languageData: any) => [
  {
    path: "/dashboard/control-panel",
    name: languageData?.routes?.dashboard || 'Dashboard',
    icon: 'control-panel',
  },
  {
    path: "/dashboard/alerts",
    name: languageData?.routes?.alerts || "Alerts",
    icon: 'alerts',
},
{
    path: "/dashboard/stores",
    name: languageData?.routes?.stores || "Stores",
    icon: 'stores',
},
{
    path: "/dashboard/warehouses",
    name: languageData?.routes?.warehouses || "Warehouses",
    icon: 'warehouses'
},
{
    path: "/dashboard/batteries",
    name: languageData?.routes?.batteries || "Batteries",
    icon: 'batteries'
},
{
    path: "/dashboard/scanners",
    name: languageData?.routes?.scanners || "Scanners",
    icon: 'scanners'
},
{
    path: "/dashboard/users",
    name: languageData?.routes?.users || "Users",
    icon: 'users'
},
{
    path: "/dashboard/battery-types",
    name: languageData?.routes?.batteryTypes || "BatteryTypes",
    icon: 'battery-types'
},
{
    path: "/dashboard/providers",
    name: languageData?.routes?.defineProviders || "DefineProviders",
    icon: 'providers',
},
{
    path: "/dashboard/services",
    name: languageData?.routes?.defineServices || "DefineServices",
    icon: 'services',
},
  
];

export const getAdminSettingRoutes = (languageData: any) => [
  {
    path: '/dashboard/settings',
    name: languageData?.common?.settings || 'Settings',
    icon: 'settings',
  },
  {
    path: '/dashboard/profile',
    name: languageData?.common?.profile || 'Profile',
    icon: 'person',
  },
];

export const useAdminRoutes = () => {
  const languageData = useSelector((state: any) => state.website.languageData);
  return getRoutes(languageData);
};

export const useAdminSettingRoutes = () => {
  const languageData = useSelector((state: any) => state.website.languageData);
  return getAdminSettingRoutes(languageData);
};

export default useAdminRoutes;