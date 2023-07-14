<!--
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
-->
<template>
  <a-spin :loading="loading" style="width: 100%; height: 100%">
    <div class="user-box">
      <div class="info-box">
        <a-avatar v-if="user" :image-url="user.portrait" :size="48"></a-avatar>
        <a-avatar v-else :size="48" :style="{ backgroundColor: '#14a9f8' }">
          <IconUser />
        </a-avatar>
        <div class="info">
          <div class="name">{{ user ? user.nickname : '游客' }}</div>
          <div
            >余额<span class="price">{{
              user ? thousands(String(user.money)) : '0.00'
            }}</span
            >元</div
          >
        </div>
      </div>
      <div class="button">
        <a-button
          type="primary"
          size="mini"
          shape="round"
          @click="visible = true"
          >{{ user ? '切换会员' : '会员登录' }}</a-button
        >
      </div>
      <CartUserList :visible="visible" @cancel="visible = false" />
    </div>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, inject } from 'vue';
  import useLoading from '@/hooks/loading';
  import { thousands } from '@/utils';
  import CartUserList from './cart-user-list.vue';

  const visible = ref(false);
  const { user } = inject<any>('user');
  const { loading, setLoading } = useLoading();
</script>

<style scoped lang="less">
  .user-box {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .info-box {
      display: flex;
      flex: 1;
      align-items: center;
      min-width: 0;
      .info {
        margin-left: 10px;
        font-size: 12px;
        flex: 1;
        min-width: 0;
        .name {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          color: rgb(var(--red-6));
          margin: 0 5px;
          font-weight: 700;
        }
      }
    }
  }
</style>
