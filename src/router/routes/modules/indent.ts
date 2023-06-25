import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/indentManage',
  name: 'IndentManage',
  component: DEFAULT_LAYOUT,
  redirect: '/indent',
  meta: {
    locale: 'menu.indent',
    requiresAuth: true,
    hideChildrenInMenu: true,
    icon: 'icon-archive',
  },
  children: [
    {
      path: '/indent',
      name: 'Indent',
      component: () => import('@/views/indent/index.vue'),
      meta: {
        locale: 'menu.indent',
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'IndentManage',
      },
    },
  ],
};

export default DASHBOARD;
