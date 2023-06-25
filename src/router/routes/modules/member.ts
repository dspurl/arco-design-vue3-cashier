import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/memberManage',
  name: 'MemberManage',
  component: DEFAULT_LAYOUT,
  redirect: '/member',
  meta: {
    locale: 'menu.member',
    requiresAuth: true,
    hideChildrenInMenu: true,
    icon: 'icon-user',
  },
  children: [
    {
      path: '/member',
      name: 'Member',
      component: () => import('@/views/member/index.vue'),
      meta: {
        locale: 'menu.member',
        requiresAuth: true,
        roles: ['*'],
        activeMenu: 'MemberManage',
      },
    },
  ],
};

export default DASHBOARD;
