/** +----------------------------------------------------------------------
 * | ADVC [ 基于Arco Design开箱即用的收银台前端/设计解决方案 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2023~2023 dspurl All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉ADVC相关版权
 * +----------------------------------------------------------------------
 * | Author: dsPurl <383354826@qq.com>
 * +----------------------------------------------------------------------
 */
import Mock from 'mockjs';
import qs from 'query-string';
import { GetParams } from '@/types/global';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

const commodityList = [
  {
    id: 1,
    name: '真维斯全棉短袖t恤女夏季初中学生宽松字母印花半袖日系女装上衣D',
    price: 49.9,
    img: 'https://gw.alicdn.com/imgextra/i4/707994265/O1CN01cXOnpO1hNQ4ftNkoa_!!0-item_pic.jpg_Q75.jpg_.webp',
    no: '0001',
    classify_id: 1,
    inventory: 100,
    sku: [
      {
        id: 1,
        price: 49.9,
        inventory: 1,
        img: 'https://gw.alicdn.com/imgextra/i4/707994265/O1CN01cXOnpO1hNQ4ftNkoa_!!0-item_pic.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '浅蓝',
          },
          {
            key: '尺码',
            value: 'S',
          },
        ],
      },
      {
        id: 2,
        price: 49.9,
        inventory: 9,
        img: 'https://gw.alicdn.com/imgextra/i4/707994265/O1CN01cXOnpO1hNQ4ftNkoa_!!0-item_pic.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '浅蓝',
          },
          {
            key: '尺码',
            value: 'M',
          },
        ],
      },
      {
        id: 3,
        price: 49.9,
        inventory: 20,
        img: 'https://gw.alicdn.com/imgextra/i4/707994265/O1CN01cXOnpO1hNQ4ftNkoa_!!0-item_pic.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '浅蓝',
          },
          {
            key: '尺码',
            value: 'L',
          },
        ],
      },
      {
        id: 4,
        price: 59,
        inventory: 30,
        img: 'https://gw.alicdn.com/imgextra/i2/707994265/O1CN01UJ2ha01hNQ3zyV8dt_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '紫色',
          },
          {
            key: '尺码',
            value: 'S',
          },
        ],
      },
      {
        id: 5,
        price: 49.9,
        inventory: 10,
        img: 'https://gw.alicdn.com/imgextra/i2/707994265/O1CN01UJ2ha01hNQ3zyV8dt_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '紫色',
          },
          {
            key: '尺码',
            value: 'M',
          },
        ],
      },
      {
        id: 6,
        price: 49.9,
        inventory: 5,
        img: 'https://gw.alicdn.com/imgextra/i2/707994265/O1CN01UJ2ha01hNQ3zyV8dt_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '紫色',
          },
          {
            key: '尺码',
            value: 'L',
          },
        ],
      },
      {
        id: 7,
        price: 59,
        inventory: 5,
        img: 'https://gw.alicdn.com/bao/uploaded/i3/707994265/O1CN01j3Gynj1hNQ3VTbpwr_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '果绿',
          },
          {
            key: '尺码',
            value: 'S',
          },
        ],
      },
      {
        id: 8,
        price: 49.9,
        inventory: 20,
        img: 'https://gw.alicdn.com/bao/uploaded/i3/707994265/O1CN01j3Gynj1hNQ3VTbpwr_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '果绿',
          },
          {
            key: '尺码',
            value: 'M',
          },
        ],
      },
      {
        id: 9,
        price: 49.9,
        inventory: 0,
        img: 'https://gw.alicdn.com/bao/uploaded/i3/707994265/O1CN01j3Gynj1hNQ3VTbpwr_!!707994265.jpg_Q75.jpg_.webp',
        product: [
          {
            key: '颜色',
            value: '果绿',
          },
          {
            key: '尺码',
            value: 'L',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '拉夏贝尔正肩短袖t恤女夏季2023年新款纯棉半袖体恤上衣大码',
    price: 39.92,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2207860246915/O1CN01qoCEAf20x7eF73Nu2_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0002',
    classify_id: 1,
    inventory: 1,
  },
  {
    id: 3,
    name: '泡泡袖V领轻薄别致漂亮小衫上衣',
    price: 89,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/708558593/O1CN01loSYi52DLeFEZCmJs_!!708558593.jpg_580x580q90.jpg_.webp',
    no: '0003',
    classify_id: 1,
    inventory: 2,
  },
  {
    id: 4,
    name: '新款休闲百搭纯棉宽松圆领短袖T恤',
    price: 147.95,
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/130974249/O1CN01OI64371hG5jko6ctb_!!130974249.jpg_580x580q90.jpg_.webp',
    no: '0004',
    classify_id: 1,
    inventory: 10,
  },
  {
    id: 5,
    name: '森马集团GENIOLAMODE男生短袖t恤男夏季',
    price: 59,
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2213900457790/O1CN01mxYi1N27PsCTssCOW_!!2213900457790.jpg_580x580q90.jpg_.webp',
    no: '0005',
    classify_id: 2,
    inventory: 10,
  },
  {
    id: 6,
    name: '[凉感黑科技] 英爵伦冰丝短袖t恤男休闲字母刺绣半袖',
    price: 58,
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1860270913/O1CN01pCEn6e1IcCSr5zGI5_!!1860270913.jpg_580x580q90.jpg_.webp',
    no: '0006',
    classify_id: 2,
    inventory: 10,
  },
  {
    id: 7,
    name: '新款T恤圆领短袖套头百搭舒适含棉亲肤简约短袖',
    price: 124,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/305358018/O1CN01MAYYrT296IVZb0FLz-305358018.jpg_580x580q90.jpg_.webp',
    no: '0007',
    classify_id: 2,
    inventory: 10,
  },
  {
    id: 8,
    name: '夏季短袖男款潮牌潮流ins美式简约男生半袖纯棉男士日系风',
    price: 29.9,
    img: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2086933893/O1CN01RL3o1B1ed2i5aXGWY_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0008',
    classify_id: 2,
    inventory: 10,
  },
  {
    id: 9,
    name: 'WASSUP ISUE美式短袖T恤男圆领夏季潮牌宽松纯棉半袖衣服体恤男款',
    price: 63,
    img: 'https://img.alicdn.com/imgextra/i3/3074244816/O1CN016Vt81I1lRmHoFbIKz_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
    no: '0009',
    classify_id: 2,
    inventory: 10,
  },
  {
    id: 10,
    name: 'princessoc 小香复古风金属扣子韩版锁链边纽扣大衣风衣外套装饰',
    price: 13.58,
    img: 'https://img.alicdn.com/imgextra/i2/34430578/O1CN01uOZezn1G8ldPzd65o_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
    no: '0010',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 11,
    name: '高档塑胶纽扣扣子衣服腰带钮扣装饰扣环三档',
    price: 2.5,
    img: 'https://img.alicdn.com/imgextra/i4/106250389/TB25eTZC.R1BeNjy0FmXXb0wVXa_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
    no: '0011',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 12,
    name: '中国风一字唐装手工复古纽扣',
    price: 3.98,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/4112383621/O1CN01TuhLfW1ccSq8iLCbo_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0012',
    classify_id: 3,
    inventory: 0,
  },
  {
    id: 13,
    name: '木头纽扣复古木扣子毛衣外套女士西装两眼纽扣衣',
    price: 20.78,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2208617340277/O1CN01h1wLRR1DuuZ59m3Ix_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0013',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 14,
    name: '防走光胸针衣服女金色樱花小狗高档女西装别针配饰小神器饰品',
    price: 12.9,
    img: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2214278836342/O1CN01lCjjCK1wighRVMfYi_!!2-item_pic.png_580x580q90.jpg_.webp',
    no: '0014',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 15,
    name: '可拆卸拉片羽绒服外套包包通用拉锁头卡扣修复吊坠拉链头万能',
    price: 2.48,
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/179917267/O1CN013EASzQ23YKzquxMHt_!!179917267.jpg_580x580q90.jpg_.webp',
    no: '0015',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 16,
    name: 's925纯银两世欢手链传承莲心莲蓬弹力绳串珠送女友',
    price: 139,
    img: 'https://img.alicdn.com/imgextra/i3/4108607577/O1CN012T7ThD25qJqWXlyvP_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
    no: '0016',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 17,
    name: '鳄鱼真皮腰带女士百搭潮流时尚',
    price: 35,
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3009953616/O1CN01n6k5Aq1caAr9EATXW_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0017',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 18,
    name: '尼龙腰带男士休闲帆布年轻人潮',
    price: 4.88,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2206612129679/O1CN01JUM8Cm2LN2EUYmDaO_!!2206612129679.jpg_580x580q90.jpg_.webp',
    no: '0018',
    classify_id: 3,
    inventory: 10,
  },
  {
    id: 19,
    name: '年轻人潮布料腰带百搭牛仔裤休闲青年裤带学生',
    price: 39,
    img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2928917259/O1CN01VqnhrD23UfhO4DzYZ_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    no: '0019',
    classify_id: 3,
    inventory: 10,
  },
];
const classifyList = [
  {
    id: 0,
    name: '全部',
  },
  {
    id: 1,
    name: '女装',
  },
  {
    id: 2,
    name: '男装',
  },
  {
    id: 3,
    name: '配件',
  },
];
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/classify/list'), () => {
      return successResponseWrap([...classifyList]);
    });
    Mock.mock(new RegExp('/api/commodity/list'), (params: GetParams) => {
      const { classifyId = 0 } = qs.parseUrl(params.url).query;
      const { keyword } = qs.parseUrl(params.url).query;
      let data = commodityList;
      const id = Number(classifyId);
      const key = String(keyword);
      if (id !== 0) {
        data = data.filter((item) => {
          return id === item.classify_id;
        });
      }
      if (keyword) {
        data = data.filter((item) => {
          return item.name.indexOf(key) !== -1 || keyword === item.no;
        });
      }
      return successResponseWrap([...data]);
    });
  },
});
