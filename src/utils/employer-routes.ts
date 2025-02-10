import { useSelector } from 'react-redux';

const getRoutes = (languageData: any) => [
  {
    path: '/dashboard',
    name: languageData?.routes?.dashboard || 'Dashboard',
    icon: 'dashboard',
  },
  {
    path: '/dashboard/profile',
    name: languageData?.common?.profile || 'Profile',
    icon: 'people',
  },
  {
    path: '/dashboard/muncitori',
    name: languageData?.routes?.workers || 'Workers',
    icon: 'people',
    subItems: [
      {
        path: '/dashboard/muncitori/nealocati',
        name: languageData?.routes?.unallocated || 'Unallocated',
      },
      {
        path: '/dashboard/muncitori/in-curs-de-alocare',
        name: languageData?.routes?.inAllocation || 'In Allocation',
      },
      {
        path: '/dashboard/muncitori/alocati',
        name: languageData?.routes?.allocated || 'Allocated',
      },
    ],
  },
];

export const getEmployerSettingRoutes = (languageData: any) => [
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

export const useEmployerRoutes = () => {
  const languageData = useSelector((state: any) => state.website.languageData);
  return getRoutes(languageData);
};

export const useEmployerSettingRoutes = () => {
  const languageData = useSelector((state: any) => state.website.languageData);
  return getEmployerSettingRoutes(languageData);
};

export default useEmployerRoutes;