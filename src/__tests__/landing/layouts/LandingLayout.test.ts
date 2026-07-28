import { RouterLinkStub, shallowMount, VueWrapper } from '@vue/test-utils';
import { RouterView } from 'vue-router';
import { router } from '@/router';

import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';

describe('LandingLayout.vue integration test', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('should be render properly', () => {
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').text()).toContain(new Date().getFullYear());
    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
  });

  test('Elements RouterLink should be render properly', () => {
    const expectedRoutes = ['/home', '/features', '/pricing', '/contact', '/pokemon/2', '/auth'];

    const routerLinkStubs = wrapper.findAllComponents(RouterLinkStub);
    const currentRoutes = routerLinkStubs.map((link) => link.props().to);

    expect(currentRoutes).toEqual(expect.arrayContaining(expectedRoutes));
    expect(currentRoutes.length).toBe(expectedRoutes.length);
  });
});
