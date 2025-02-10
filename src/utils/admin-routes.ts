import { useSelector } from 'react-redux';

const getRoutes = (languageData: any) => [
  {
    path: '/dashboard',
    name: languageData?.routes?.dashboard || 'Dashboard',
    icon: 'dashboard',
  },
  {
    path: '/dashboard/angajatori',
    name: languageData?.routes?.employers || 'Employers',
    icon: 'business',
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
  {
    path: '/dashboard/locuri-de-munca',
    name: languageData?.routes?.jobs || 'Job Vacancies',
    icon: 'work',
  },
  {
    path: '/dashboard/utilizatori',
    name: languageData?.routes?.users || 'Users',
    icon: 'people',
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