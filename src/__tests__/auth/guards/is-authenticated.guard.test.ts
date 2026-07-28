import isAuthenticatedGuard from '@/modules/auth/guards/is-autenticated.guard';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

describe('isAuthenticatedGuard.ts integration tests', () => {
  // Mocks para los argumentos del guard
  let toMock: Partial<RouteLocationNormalized>;
  let fromMock: Partial<RouteLocationNormalized>;
  let nextMock: NavigationGuardNext;

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();

    // Inicializamos los objetos falsos necesarios
    toMock = { path: '/home' };
    fromMock = {};
    nextMock = vi.fn(); // Creamos una función espía (spy)
  });

  test('should save the destination path in localStorage', () => {
    isAuthenticatedGuard(
      toMock as RouteLocationNormalized,
      fromMock as RouteLocationNormalized,
      nextMock,
    );

    // Verifica que siempre guarde la última ruta visitada
    expect(localStorage.getItem('lastPath')).toBe(toMock.path);
  });

  test('should save the destination path in localStorage', () => {
    isAuthenticatedGuard(
      toMock as RouteLocationNormalized,
      fromMock as RouteLocationNormalized,
      nextMock,
    );

    // Verifica que siempre guarde la última ruta visitada
    expect(localStorage.getItem('lastPath')).toBe('/home');
  });

  test('should block the destination if not authenticated', () => {
    isAuthenticatedGuard(
      toMock as RouteLocationNormalized,
      fromMock as RouteLocationNormalized,
      nextMock,
    );

    // Verifica que siempre guarde la última ruta visitada
    expect(nextMock).toHaveBeenCalledWith({ name: 'signin' });
  });

  test('should block the destination when user is authenticated', () => {
    localStorage.setItem('userId', 'ABC-123');
    isAuthenticatedGuard(
      toMock as RouteLocationNormalized,
      fromMock as RouteLocationNormalized,
      nextMock,
    );

    // Verifica que siempre guarde la última ruta visitada
    expect(nextMock).toHaveBeenCalledWith();
    expect(nextMock).toHaveBeenCalledTimes(1);
  });
});
