import Mock from 'mockjs';
import { GetParams } from '@/types/global';
import qs from 'query-string';
import setupMock, {
  successResponseWrap,
  failResponseWrap,
} from '@/utils/setup-mock';

import { MockParams } from '@/types/mock';
import { isLogin } from '@/utils/auth';

const userList = [
  {
    id: 1,
    nickname: '你猜我的昵称有多长，请打开开发者工具查看',
    cellphone: '13053422345',
    portrait:
      'https://img0.baidu.com/it/u=779040798,3900256075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=38ec55c143e6f84df85131de580f27b3',
    money: 0,
  },
  {
    id: 2,
    nickname: 'ご潴潴の蔸ゞ',
    cellphone: '13022322345',
    portrait:
      'https://img1.baidu.com/it/u=2697728810,3402346877&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=69c48e15312c8769024f85d0bfef41dd',
    money: 0,
  },
  {
    id: 3,
    nickname: '夜晚の星光',
    cellphone: '13021222345',
    portrait:
      'https://img1.baidu.com/it/u=1240466764,3606188766&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=ac1901bb68b45112f4fd2fa8f0ae6fb3',
    money: 0,
  },
  {
    id: 4,
    nickname: 'ご听雨づ',
    cellphone: '13522342345',
    portrait:
      'https://img1.baidu.com/it/u=22553051,3834724655&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 5,
    nickname: '幻想の糖果',
    cellphone: '13821562345',
    portrait:
      'https://img2.baidu.com/it/u=2897986867,1306328153&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=478',
    money: 0,
  },
  {
    id: 6,
    nickname: '咃の泠漠,ńīの嗳',
    cellphone: '13267892345',
    portrait:
      'https://img2.baidu.com/it/u=2936712511,437520682&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 7,
    nickname: '温暖眼瞳▌',
    cellphone: '13411112345',
    portrait:
      'https://img1.baidu.com/it/u=3834720726,3866537895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 8,
    nickname: '↑⑤的阳光',
    cellphone: '13987667777',
    portrait:
      'https://img0.baidu.com/it/u=4000744292,251769259&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 9,
    nickname: '媞当初の怀淰',
    cellphone: '13088787888',
    portrait:
      'https://img1.baidu.com/it/u=1098032671,855478593&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 10,
    nickname: 'ぺ謉囧爧精',
    cellphone: '13867545678',
    portrait:
      'https://img2.baidu.com/it/u=1764313044,42117373&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 11,
    nickname: '栀夏微凉',
    cellphone: '1309892345',
    portrait:
      'https://img0.baidu.com/it/u=645505420,1762999555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 12,
    nickname: '是梦终空-',
    cellphone: '13290092345',
    portrait:
      'https://img1.baidu.com/it/u=428577822,2972406465&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 13,
    nickname: '鸢语',
    cellphone: '13976572345',
    portrait:
      'https://img1.baidu.com/it/u=2572927908,2874278370&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 14,
    nickname: '青衿.',
    cellphone: '13866783345',
    portrait:
      'https://img0.baidu.com/it/u=3557936872,1023152428&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
  {
    id: 15,
    nickname: '旧言.',
    cellphone: '13567896345',
    portrait:
      'https://img1.baidu.com/it/u=3244449899,1248709846&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    money: 0,
  },
];
setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;
    // 用户列表
    Mock.mock(new RegExp('/api/user/list'), (params: GetParams) => {
      const { keyword } = qs.parseUrl(params.url).query;
      let data = userList;
      const key = String(keyword);
      if (keyword) {
        data = data.filter((item) => {
          return (
            item.nickname.indexOf(key) !== -1 ||
            item.cellphone.indexOf(key) !== -1
          );
        });
      }
      return successResponseWrap([...data]);
    });
    // 用户信息
    Mock.mock(new RegExp('/api/user/infos'), (params: GetParams) => {
      const { id } = qs.parseUrl(params.url).query;
      const list = userList;
      const ids = Number(id);
      const data = list.find((item) => {
        return item.id === ids;
      });
      return successResponseWrap(data);
    });

    // 用户信息（框架的）
    Mock.mock(new RegExp('/api/user/info'), () => {
      if (isLogin()) {
        const role = window.localStorage.getItem('userRole') || 'admin';
        return successResponseWrap({
          name: '王立群',
          avatar:
            '//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
          email: 'wangliqun@email.com',
          job: 'frontend',
          jobName: '前端艺术家',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'beijing',
          locationName: '北京',
          introduction: '人潇洒，性温存',
          personalWebsite: 'https://www.arco.design',
          phone: '150****0000',
          registrationDate: '2013-05-10 12:10:00',
          accountId: '15012312300',
          certification: 1,
          role,
        });
      }
      return failResponseWrap(null, '未登录', 50008);
    });

    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 50000);
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 50000);
      }
      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('userRole', 'admin');
        return successResponseWrap({
          token: '12345',
        });
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('userRole', 'user');
        return successResponseWrap({
          token: '54321',
        });
      }
      return failResponseWrap(null, '账号或者密码错误', 50000);
    });

    // 登出
    Mock.mock(new RegExp('/api/user/logout'), () => {
      return successResponseWrap(null);
    });

    // 用户的服务端菜单
    Mock.mock(new RegExp('/api/user/menu'), () => {
      const menuList = [
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            locale: 'menu.server.dashboard',
            requiresAuth: true,
            icon: 'icon-dashboard',
            order: 1,
          },
          children: [
            {
              path: 'workplace',
              name: 'Workplace',
              meta: {
                locale: 'menu.server.workplace',
                requiresAuth: true,
              },
            },
            {
              path: 'https://arco.design',
              name: 'arcoWebsite',
              meta: {
                locale: 'menu.arcoWebsite',
                requiresAuth: true,
              },
            },
          ],
        },
      ];
      return successResponseWrap(menuList);
    });
  },
});
