import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import PokemosPAge from '@/modules/pokemon/pages/PokemosPAge.vue';

describe('LandingLayout.vue integration test', () => {
  const wrapper = shallowMount(PokemosPAge, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('should be render properly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('small').html()).toContain('#25');
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true);
    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'pokemon',
      params: {
        id: 26,
      },
    });
  });
});
