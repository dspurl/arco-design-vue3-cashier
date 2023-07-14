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
import axios from 'axios';

export interface CommoditySkuProductRecord {
  key: string;
  value: string;
}
export interface CommoditySkuRecord {
  id?: number;
  price?: number;
  img?: string;
  inventory?: number;
  product?: Array<CommoditySkuProductRecord>[];
}
export interface CommodityRecord {
  id: number;
  name?: string;
  price: number;
  img?: string;
  no?: string;
  number: number;
  inventory: number;
  classify_id?: number;
  sku?: Array<CommoditySkuRecord>[];
  specification?: any;
  productSkus?: any;
  ids?: string;
  product?: any;
}

export function commodityList(params: { classifyId: number; keyword: string }) {
  return axios.get<CommodityRecord[]>('/api/commodity/list', { params });
}

export interface ClassifyRecord {
  id: number;
  name: string;
}

export function classifyList() {
  return axios.get<ClassifyRecord[]>('/api/classify/list');
}
