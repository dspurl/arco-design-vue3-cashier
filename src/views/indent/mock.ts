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

const indentList = [
  {
    id: 1,
    uuid: '38af35cfead2479f97185898722ecc8d',
    sum: 1,
    total: 89,
    amount_paid: 89,
    user: null,
    state: 1,
    way: 1,
    cashier: '小新',
    time: '2023-07-12 10:27:07',
    pay_time: '2023-07-12 10:28:57',
    refund_amount: 0,
    refund_time: '',
    commodity: [
      {
        id: 3,
        classify_id: 1,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/708558593/O1CN01loSYi52DLeFEZCmJs_!!708558593.jpg_580x580q90.jpg_.webp',
        inventory: 2,
        name: '泡泡袖V领轻薄别致漂亮小衫上衣',
        no: '0003',
        number: 1,
        price: 89,
      },
    ],
  },
  {
    id: 2,
    state: 4,
    way: 2,
    uuid: '38af35cfead2479f97185893319ecc8d',
    commodity: [
      {
        id: 1,
        number: 1,
        sku: [
          {
            id: 1,
            name: '真维斯全棉短袖t恤女夏季初中学生宽松字母印花半袖日系女装上衣D',
            img: 'https://gw.alicdn.com/imgextra/i2/707994265/O1CN01UJ2ha01hNQ3zyV8dt_!!707994265.jpg_Q75.jpg_.webp',
            inventory: 30,
            price: 59,
            number: 1,
            ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
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
            productSkus: [
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
                productSkuId: 1,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 2,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 3,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
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
                productSkuId: 4,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 5,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 6,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
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
                productSkuId: 7,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 8,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 9,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                ],
              },
            ],
            specification: [
              {
                value: '颜色',
                id: '474335f880734dd191b8670e8e33e03c',
                leaf: [
                  {
                    value: '浅蓝',
                    id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    selected: false,
                  },
                  {
                    value: '紫色',
                    id: 'c03489d98adf41b18d79cbea956c7a52',
                    selected: true,
                  },
                  {
                    value: '果绿',
                    id: '906ecaaac4f548439b6d3a826d937625',
                    selected: false,
                  },
                ],
              },
              {
                value: '尺码',
                id: '6b75adcd6d0b490284617c615f4212d9',
                leaf: [
                  {
                    value: 'S',
                    id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    selected: true,
                  },
                  {
                    value: 'M',
                    id: '321af298c03c4937af32b8185e4604e5',
                    selected: false,
                  },
                  {
                    value: 'L',
                    id: 'b6b453983d92413ba2a072c6c0785f60',
                    selected: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: '森马集团GENIOLAMODE男生短袖t恤男夏季',
        price: 59,
        img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2213900457790/O1CN01mxYi1N27PsCTssCOW_!!2213900457790.jpg_580x580q90.jpg_.webp',
        no: '0005',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 3,
        name: '泡泡袖V领轻薄别致漂亮小衫上衣',
        price: 89,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/708558593/O1CN01loSYi52DLeFEZCmJs_!!708558593.jpg_580x580q90.jpg_.webp',
        no: '0003',
        classify_id: 1,
        inventory: 2,
        number: 1,
      },
    ],
    sum: 3,
    total: 207,
    amount_paid: 207,
    user: {
      id: 2,
      nickname: 'ご潴潴の蔸ゞ',
      cellphone: '13022322345',
      portrait:
        'https://img1.baidu.com/it/u=2697728810,3402346877&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=69c48e15312c8769024f85d0bfef41dd',
      money: 0,
    },
    cashier: '小新',
    time: '2023-07-12 10:27:07',
    pay_time: '',
    refund_time: '',
    refund_amount: 0,
  },
  {
    id: 3,
    state: 2,
    way: 3,
    uuid: '38af35cfead2479f97185448719ecc8d',
    commodity: [
      {
        id: 9,
        name: 'WASSUP ISUE美式短袖T恤男圆领夏季潮牌宽松纯棉半袖衣服体恤男款',
        price: 63,
        img: 'https://img.alicdn.com/imgextra/i3/3074244816/O1CN016Vt81I1lRmHoFbIKz_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
        no: '0009',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 7,
        name: '新款T恤圆领短袖套头百搭舒适含棉亲肤简约短袖',
        price: 124,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/305358018/O1CN01MAYYrT296IVZb0FLz-305358018.jpg_580x580q90.jpg_.webp',
        no: '0007',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 8,
        name: '夏季短袖男款潮牌潮流ins美式简约男生半袖纯棉男士日系风',
        price: 29.9,
        img: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2086933893/O1CN01RL3o1B1ed2i5aXGWY_!!0-item_pic.jpg_580x580q90.jpg_.webp',
        no: '0008',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
    ],
    sum: 3,
    total: 216.9,
    amount_paid: 216.9,
    user: {
      id: 3,
      nickname: '夜晚の星光',
      cellphone: '13021222345',
      portrait:
        'https://img1.baidu.com/it/u=1240466764,3606188766&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=ac1901bb68b45112f4fd2fa8f0ae6fb3',
      money: 0,
    },
    cashier: '小新',
    time: '2023-07-12 10:29:58',
    pay_time: '',
    refund_time: '',
    refund_amount: 0,
  },
  {
    id: 4,
    state: 3,
    way: 1,
    uuid: '38af35cfead2479f97185598719ecc8d',
    commodity: [
      {
        id: 11,
        name: '高档塑胶纽扣扣子衣服腰带钮扣装饰扣环三档',
        price: 2.5,
        img: 'https://img.alicdn.com/imgextra/i4/106250389/TB25eTZC.R1BeNjy0FmXXb0wVXa_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
        no: '0011',
        classify_id: 3,
        inventory: 10,
        number: 1,
      },
      {
        id: 13,
        name: '木头纽扣复古木扣子毛衣外套女士西装两眼纽扣衣',
        price: 20.78,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2208617340277/O1CN01h1wLRR1DuuZ59m3Ix_!!0-item_pic.jpg_580x580q90.jpg_.webp',
        no: '0013',
        classify_id: 3,
        inventory: 10,
        number: 2,
      },
    ],
    sum: 3,
    total: 44.06,
    amount_paid: 44.06,
    user: null,
    cashier: '小新',
    time: '2023-07-12 10:30:57',
    pay_time: '2023-07-12 10:31:57',
    refund_time: '2023-07-13 10:31:57',
    refund_amount: 10,
  },
  {
    id: 5,
    state: 1,
    way: 1,
    uuid: '38af35cfead2479f97223898719ecc8d',
    commodity: [
      {
        id: 1,
        number: 1,
        sku: [
          {
            id: 1,
            name: '真维斯全棉短袖t恤女夏季初中学生宽松字母印花半袖日系女装上衣D',
            img: 'https://gw.alicdn.com/imgextra/i2/707994265/O1CN01UJ2ha01hNQ3zyV8dt_!!707994265.jpg_Q75.jpg_.webp',
            inventory: 30,
            price: 59,
            number: 1,
            ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
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
            productSkus: [
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
                productSkuId: 1,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 2,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 3,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    v: '浅蓝',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-048a5e2dc8004a6cb3d5fae3df2913c5_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    '048a5e2dc8004a6cb3d5fae3df2913c5',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
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
                productSkuId: 4,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 5,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 6,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: 'c03489d98adf41b18d79cbea956c7a52',
                    v: '紫色',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-c03489d98adf41b18d79cbea956c7a52_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    'c03489d98adf41b18d79cbea956c7a52',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
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
                productSkuId: 7,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    v: 'S',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                  ],
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
                productSkuId: 8,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: '321af298c03c4937af32b8185e4604e5',
                    v: 'M',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-321af298c03c4937af32b8185e4604e5',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    '321af298c03c4937af32b8185e4604e5',
                  ],
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
                productSkuId: 9,
                skus: [
                  {
                    k_id: '474335f880734dd191b8670e8e33e03c',
                    k: '颜色',
                    v_id: '906ecaaac4f548439b6d3a826d937625',
                    v: '果绿',
                  },
                  {
                    k_id: '6b75adcd6d0b490284617c615f4212d9',
                    k: '尺码',
                    v_id: 'b6b453983d92413ba2a072c6c0785f60',
                    v: 'L',
                  },
                ],
                ids: '474335f880734dd191b8670e8e33e03c-906ecaaac4f548439b6d3a826d937625_6b75adcd6d0b490284617c615f4212d9-b6b453983d92413ba2a072c6c0785f60',
                data: [
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                  [
                    '906ecaaac4f548439b6d3a826d937625',
                    'b6b453983d92413ba2a072c6c0785f60',
                  ],
                ],
              },
            ],
            specification: [
              {
                value: '颜色',
                id: '474335f880734dd191b8670e8e33e03c',
                leaf: [
                  {
                    value: '浅蓝',
                    id: '048a5e2dc8004a6cb3d5fae3df2913c5',
                    selected: false,
                  },
                  {
                    value: '紫色',
                    id: 'c03489d98adf41b18d79cbea956c7a52',
                    selected: true,
                  },
                  {
                    value: '果绿',
                    id: '906ecaaac4f548439b6d3a826d937625',
                    selected: false,
                  },
                ],
              },
              {
                value: '尺码',
                id: '6b75adcd6d0b490284617c615f4212d9',
                leaf: [
                  {
                    value: 'S',
                    id: '53e1a2df3a8f4d83bcc2a6e1f25fd73f',
                    selected: true,
                  },
                  {
                    value: 'M',
                    id: '321af298c03c4937af32b8185e4604e5',
                    selected: false,
                  },
                  {
                    value: 'L',
                    id: 'b6b453983d92413ba2a072c6c0785f60',
                    selected: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: '森马集团GENIOLAMODE男生短袖t恤男夏季',
        price: 59,
        img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2213900457790/O1CN01mxYi1N27PsCTssCOW_!!2213900457790.jpg_580x580q90.jpg_.webp',
        no: '0005',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 3,
        name: '泡泡袖V领轻薄别致漂亮小衫上衣',
        price: 89,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/708558593/O1CN01loSYi52DLeFEZCmJs_!!708558593.jpg_580x580q90.jpg_.webp',
        no: '0003',
        classify_id: 1,
        inventory: 2,
        number: 1,
      },
    ],
    sum: 3,
    total: 207,
    amount_paid: 207,
    user: {
      id: 2,
      nickname: 'ご潴潴の蔸ゞ',
      cellphone: '13022322345',
      portrait:
        'https://img1.baidu.com/it/u=2697728810,3402346877&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=69c48e15312c8769024f85d0bfef41dd',
      money: 0,
    },
    cashier: '小新',
    time: '2023-07-12 10:27:07',
    pay_time: '',
    refund_time: '',
    refund_amount: 0,
  },
  {
    id: 6,
    state: 1,
    way: 3,
    uuid: '38af35cfead2479123185898719ecc8d',
    commodity: [
      {
        id: 9,
        name: 'WASSUP ISUE美式短袖T恤男圆领夏季潮牌宽松纯棉半袖衣服体恤男款',
        price: 63,
        img: 'https://img.alicdn.com/imgextra/i3/3074244816/O1CN016Vt81I1lRmHoFbIKz_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
        no: '0009',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 7,
        name: '新款T恤圆领短袖套头百搭舒适含棉亲肤简约短袖',
        price: 124,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/305358018/O1CN01MAYYrT296IVZb0FLz-305358018.jpg_580x580q90.jpg_.webp',
        no: '0007',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
      {
        id: 8,
        name: '夏季短袖男款潮牌潮流ins美式简约男生半袖纯棉男士日系风',
        price: 29.9,
        img: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2086933893/O1CN01RL3o1B1ed2i5aXGWY_!!0-item_pic.jpg_580x580q90.jpg_.webp',
        no: '0008',
        classify_id: 2,
        inventory: 10,
        number: 1,
      },
    ],
    sum: 3,
    total: 216.9,
    amount_paid: 216.9,
    user: {
      id: 3,
      nickname: '夜晚の星光',
      cellphone: '13021222345',
      portrait:
        'https://img1.baidu.com/it/u=1240466764,3606188766&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1688490000&t=ac1901bb68b45112f4fd2fa8f0ae6fb3',
      money: 0,
    },
    cashier: '小新',
    time: '2023-07-12 10:29:58',
    pay_time: '',
    refund_time: '',
    refund_amount: 0,
  },
  {
    id: 8,
    state: 1,
    way: 1,
    uuid: '38af35cfead2479f97325898719ecc8d',
    commodity: [
      {
        id: 11,
        name: '高档塑胶纽扣扣子衣服腰带钮扣装饰扣环三档',
        price: 2.5,
        img: 'https://img.alicdn.com/imgextra/i4/106250389/TB25eTZC.R1BeNjy0FmXXb0wVXa_!!0-saturn_solar.jpg_580x580q90.jpg_.webp',
        no: '0011',
        classify_id: 3,
        inventory: 10,
        number: 1,
      },
      {
        id: 13,
        name: '木头纽扣复古木扣子毛衣外套女士西装两眼纽扣衣',
        price: 20.78,
        img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2208617340277/O1CN01h1wLRR1DuuZ59m3Ix_!!0-item_pic.jpg_580x580q90.jpg_.webp',
        no: '0013',
        classify_id: 3,
        inventory: 10,
        number: 2,
      },
    ],
    sum: 3,
    total: 44.06,
    amount_paid: 44.06,
    user: null,
    cashier: '小新',
    time: '2023-07-12 10:30:57',
    pay_time: '2023-07-12 10:31:57',
    refund_time: '2023-07-13 10:31:57',
    refund_amount: 10,
  },
];
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/indent/list'), (params: GetParams) => {
      const { keyword } = qs.parseUrl(params.url).query;
      let data = indentList;
      const key = String(keyword);
      if (keyword) {
        data = data.filter((item) => {
          return item.uuid.indexOf(key) !== -1;
        });
      }
      return successResponseWrap([...data]);
    });
    Mock.mock(new RegExp('/api/indent/infos'), (params: GetParams) => {
      const { id } = qs.parseUrl(params.url).query;
      const list = indentList;
      const ids = Number(id);
      const data = list.find((item) => {
        return item.id === ids;
      });
      return successResponseWrap(data);
    });
  },
});
