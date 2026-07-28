import App from '@/App.vue';
import { router } from '@/router';
import { mount, VueWrapper } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

describe('Router integration test', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders HomePage when visiting "/" route', async () => {
    await router.replace('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Home Page');
  });

  test('renders FeaturesPage when visiting "/features" route', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Deploy faster');
  });

  test('renders FeaturesPage when visiting "{name: features}" path', async () => {
    await router.replace('/');
    await router.replace({ name: 'features' });
    await router.isReady();
    expect(wrapper.html()).toContain('Deploy faster');
  });

  test('renders PricingPage when visiting "{name: pricing}" path', async () => {
    await router.replace('/');
    await router.replace({ name: 'pricing' });
    await router.isReady();
    expect(wrapper.html()).toContain('Pricing');
  });

  test('renders ContactPage when visiting "/contact" route', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain(
      'Aute magna irure deserunt veniam aliqua magna enim voluptate.',
    );
  });

  test('renders SignInPage when visiting "/auth" route', async () => {
    await router.replace('/auth');
    await router.isReady();
    expect(wrapper.html()).toContain('Login');
  });

  test('renders SignUpPage when visiting "{name: signup}" path', async () => {
    await router.replace('/');
    await router.replace({ name: 'signup' });
    await router.isReady();
    expect(wrapper.html()).toContain('Register');
  });

  test('renders SignInPage when visiting "{name: pokemon/:id}" path and user in not authenticated', async () => {
    localStorage.clear();
    await router.replace({ name: 'pokemon', params: { id: 45 } });
    await router.isReady();
    expect(wrapper.html()).toContain('Login');
  });

  test('renders PokemonPage when visiting "{name: pokemon/:id}" path and user is authenticated', async () => {
    localStorage.setItem('userId', 'ABC-123');
    await router.replace({ name: 'pokemon', params: { id: 45 } });
    await router.isReady();
    expect(wrapper.html()).toContain('Pokémon <small class="text-blue-500">#45</small>');
  });

  test('renders NotFounPage when visiting a unknow raoute', async () => {
    await router.replace('pagina-unknow');
    await router.isReady();
    expect(wrapper.html()).toContain('Page not found');
  });

  test('should convert the segment into number', () => {
    const route: Partial<RouteLocationNormalized> = {
      params: { id: '2' },
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(2);
  });

  test('should convert the segment into number', () => {
    const route: Partial<RouteLocationNormalized> = {
      params: { id: '2abc' },
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(1);
  });
});
