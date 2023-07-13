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
