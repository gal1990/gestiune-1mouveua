export const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};

export const checkRouteAccessibleOrRedirect = async (
  roleRoutes: string[],
  router: any,
  pathname: string,
  publicRoutes: string[]
) => {
  if (publicRoutes.includes(pathname)) {
    return true;
  }

  if (!roleRoutes.includes(pathname)) {
    await router.push('/dashboard/welcome');
    return false;
  }

  return true;
};

export const getRoleRoutes = (role: string): string[] => {
  const routes: { [key: string]: string[] } = {
    admin: ['/dashboard/welcome', '/dashboard/users', '/dashboard/settings'],
    user: ['/dashboard/welcome', '/dashboard/profile'],
  };

  return routes[role] || [];
};
