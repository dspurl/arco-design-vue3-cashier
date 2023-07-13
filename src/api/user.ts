import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}

export interface UserRecord {
  nickname: string;
  cellphone?: string;
  portrait?: string;
  money?: number;
  id?: number;
}

export function userList(params: { keyword: string; page: number }) {
  return axios.get<UserRecord[]>('/api/user/list', { params });
}

export function userInfo(params: { id: number }) {
  return axios.get<UserRecord>('/api/user/infos', { params });
}
