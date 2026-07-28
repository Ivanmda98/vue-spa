import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import isAuthenticatedGuard from '@/modules/auth/guards/is-autenticated.guard';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        { path: 'home', name: 'home', component: HomePage },
        {
          path: 'features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturePage.vue'),
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: 'pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          props: (route) => {
            const id = Number(route.params.id);
            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemon/pages/PokemosPAge.vue'),
        },
      ],
    },

    {
      path: '/auth',
      redirect: { name: 'signin' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/signin',
          name: 'signin',
          component: () => import('@/modules/auth/pages/SignInPage.vue'),
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('@/modules/auth/pages/SignUpPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/commons/pages/NotFound404.vue'),
    },
  ],
});
