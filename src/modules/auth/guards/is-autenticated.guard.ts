import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');

  localStorage.setItem('lastPath', to.path);

  if (!userId) {
    return next({
      name: 'signin',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
