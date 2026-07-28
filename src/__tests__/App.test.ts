import { shallowMount } from '@vue/test-utils';

import App from '../App.vue';
import { router } from '@/router';
import { RouterView } from 'vue-router';

describe('App.vue integration test', () => {
  test('should be render properly', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent(RouterView);
    expect(routerView.exists()).toBe(true);
  });
});
