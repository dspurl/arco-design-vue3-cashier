import axios from 'axios';

export interface IndentRecord {
  id: number;
  uuid: string;
  price: number;
  sum: number;
  total: number;
  amount_paid: number;
  user: any;
  time: string;
  pay_time?: string;
  refund_amount?: number;
  refund_time?: string;
  cashier?: string;
  state: number;
  classify_id?: number;
  commodity: Array<any>[];
}

export function indentList(params: { keyword: string; page: number }) {
  return axios.get<IndentRecord[]>('/api/indent/list', { params });
}
export function indentInfo(params: { id: number }) {
  return axios.get<IndentRecord>('/api/indent/infos', { params });
}
