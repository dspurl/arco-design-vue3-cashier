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
  <a-card
    class="general-card cart-box"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px 15px 13px 20px' }"
  >
    <CartUser />
    <CartList />
    <div class="bottom-box">
      <div class="buttom">
        <div>
          <a-button style="margin-right: 10px" @click="visible = true"
            >整单取消</a-button
          >
          <a-button @click="handlePending">挂单</a-button>
        </div>
        <a-badge :count="pending.length">
          <a-button type="outline" @click="pendingVisible = true"
            >挂单</a-button
          >
        </a-badge>
      </div>
      <div class="info">
        <div class="number"
          >商品总数：<span>{{ countCart.sum }}件</span></div
        >
        <div class="total"
          >合计：<span
            ><span class="symbol">￥</span
            >{{ thousands(String(countCart.total)) }}</span
          ></div
        >
      </div>
      <a-button
        type="primary"
        long
        :disabled="cart.commodity.length === 0"
        @click="handleClearing"
        >结算</a-button
      >
    </div>
    <!--整单取消确认 -->
    <a-modal v-model:visible="visible" @ok="handleEmpty">
      <template #title> 提示 </template>
      <div>确定要清空该购物车吗？</div>
      <div>清空该购物车后将无法恢复，请谨慎操作！</div>
    </a-modal>
    <!-- 挂单列表 -->
    <OrderPendingList
      :visible="pendingVisible"
      @cancel="pendingVisible = false"
    />
  </a-card>
</template>

<script lang="ts" setup>
  import { inject, computed, ref } from 'vue';
  import { thousands } from '@/utils';
  import CartUser from './cart-user.vue';
  import CartList from './cart-list.vue';
  import OrderPendingList from './order-pending-list.vue';

  const { cart, emptyCart } = inject<any>('cart');
  const clearing = inject<any>('clearing');
  const { pending, addPending } = inject<any>('pending');
  const visible = ref(false);
  const pendingVisible = ref(false);
  const emit = defineEmits(['clearing']);
  const handleClearing = () => {
    clearing();
    emit('clearing', true);
  };
  const countCart = computed(() => {
    let sum = 0;
    let total = 0;
    cart.value.commodity.forEach(
      (item: { price: number; number: number; sku: any }) => {
        // sku商品
        if (Reflect.has(item, 'sku')) {
          item.sku.forEach((item2: { price: number; number: number }) => {
            sum += item2.number;
            total += item2.number * item2.price;
          });
        } else {
          sum += item.number;
          total += item.number * item.price;
        }
      }
    );
    return {
      sum,
      total,
    };
  });
  const handleEmpty = () => {
    emptyCart();
  };
  const handlePending = () => {
    addPending();
  };
</script>

<style scoped lang="less">
  .bottom-box {
    padding-top: 20px;
    .buttom {
      display: flex;
      justify-content: space-between;
    }
    .info {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 700;
      }
      .total {
        span {
          font-size: 18px;
          color: rgb(var(--red-6));
          .symbol {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
