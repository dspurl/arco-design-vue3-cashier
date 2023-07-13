import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DEFAULT_LAYOUT,
  redirect: '/cashier',
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    hideChildrenInMenu: true,
    icon: 'icon-computer',
    order: 0,
  },
  children: [
    {
      path: '/cashier',
      name: 'Cashier',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        locale: 'menu.dashboard',
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'Dashboard',
      },
    },
  ],
};

export default DASHBOARD;
