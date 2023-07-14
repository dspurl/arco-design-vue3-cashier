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
import { CommoditySkuRecord } from '@/api/dashboard';
import { v4 as uuidv4 } from 'uuid';

function objectValues(obj: any) {
  const res: any[] = [];
  Object.keys(obj).forEach((i) => {
    if (Reflect.has(obj, i)) {
      res.push(obj[i]);
    }
  });
  return res;
}
const creatIds = (skus: any) =>
  skus.reduce(
    (total: any, prev: { k_id: any; v_id: any }, index: number) =>
      `${total}${prev.k_id}-${prev.v_id}${
        index === skus.length - 1 ? '' : '_'
      }`,
    ''
  );
function getCombFlags(m: any, n: any) {
  if (!n || n < 1) {
    return [];
  }

  const aResult = [];
  const aFlag = [];
  let bNext = true;
  let i;
  let j;
  let iCnt1;

  for (i = 0; i < m; i += 1) {
    aFlag[i] = i < n ? 1 : 0;
  }

  aResult.push(aFlag.concat());

  while (bNext) {
    iCnt1 = 0;
    for (i = 0; i < m - 1; i += 1) {
      if (aFlag[i] === 1 && aFlag[i + 1] === 0) {
        for (j = 0; j < i; j += 1) {
          aFlag[j] = j < iCnt1 ? 1 : 0;
        }
        aFlag[i] = 0;
        aFlag[i + 1] = 1;
        const aTmp = aFlag.concat();
        aResult.push(aTmp);
        if (aTmp.slice(-n).join('').indexOf('0') === -1) {
          bNext = false;
        }
        break;
      }
      if (aFlag[i] === 1) {
        iCnt1 += 1;
      }
    }
  }
  return aResult;
}
function combInArray(aData: any) {
  if (!aData || !aData.length) {
    return [];
  }

  const len = aData.length;
  const aResult = [];
  const ids = [];
  for (let n = 1; n < len; n += 1) {
    const aaFlags = getCombFlags(len, n);

    while (aaFlags.length) {
      const aComb = [];
      for (let i = 0; i < len; i += 1) {
        if (aaFlags.shift()) {
          aComb.push(aData[i].v_id);
        }
      }
      aResult.push(aComb);
    }
  }
  for (let n = 0; n < len; n += 1) {
    ids.push(aData[n].v_id);
  }
  aResult.push(ids);
  return aResult;
}

export interface dataRecord {
  id: number;
  name: string;
  img: string;
  price: number;
  inventory: number;
  ids: string;
  number: number;
  product: any;
}
export default function param2Data(productSkuData: any) {
  const specificationObj: any[] = [];
  const specIdDict: string[] = [];
  const productSkus = productSkuData.sku.map((item: CommoditySkuRecord) => {
    const skusObj = {
      ...item,
      productSkuId: item.id,
      skus: item?.product?.map((sku: any) => {
        const specRandomId = uuidv4().replace(/[-]/g, '');
        const optionRandomId = uuidv4().replace(/[-]/g, '');
        if (!specIdDict[sku.key]) specIdDict[sku.key] = specRandomId;
        if (!specIdDict[sku.value]) specIdDict[sku.value] = optionRandomId;
        const sepcId = specIdDict[sku.key];
        const optionId = specIdDict[sku.value];
        specificationObj[sku.key] = {
          value: sku.key,
          id: sepcId,
          leaf: {
            ...(specificationObj[sku.key]
              ? specificationObj[sku.key].leaf
              : {}),
            [sku.value]: {
              value: sku.value,
              id: optionId,
              selected: false,
            },
          },
        };

        return {
          k_id: sepcId,
          k: sku.key,
          v_id: optionId,
          v: sku.value,
        };
      }),
    };
    return {
      ...skusObj,
      ids: creatIds(skusObj.skus),
      data: combInArray(skusObj.skus),
    };
  });
  const specification = objectValues(specificationObj).map((item) => ({
    ...item,
    leaf: objectValues(item.leaf),
  }));
  let data: dataRecord = {
    id: 0,
    name: '',
    img: '',
    price: 0,
    inventory: 0,
    ids: '',
    number: 0,
    product: [],
  };
  let ids = '';
  // 默认值
  specification.forEach((item) => {
    item.leaf[0].selected = true;
    ids += `${item.id}-${item.leaf[0].id}_`;
  });
  ids = ids.slice(0, -1);
  productSkus.forEach((item: dataRecord) => {
    if (item.ids === ids) {
      data = {
        id: productSkuData.id,
        name: productSkuData.name,
        img: item.img ? item.img : productSkuData.img,
        inventory: item.inventory,
        price: item.price,
        number: 0,
        ids,
        product: item.product,
      };
    }
  });
  return {
    ...data,
    productSkus,
    specification,
  };
}
