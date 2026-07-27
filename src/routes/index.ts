import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturePage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
  ],
});
