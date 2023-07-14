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
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <Cart @clearing="visible = true" />
      </div>
    </div>
    <div class="right-side">
      <Commodity />
    </div>
    <Pay :visible="visible" @cancel="visible = false" />
  </div>
</template>

<script lang="ts" setup>
  import { v4 as uuidv4 } from 'uuid';
  import { Message, Modal } from '@arco-design/web-vue';
  import moment from 'moment';
  import { provide, ref } from 'vue';
  import { onBeforeRouteLeave } from 'vue-router';
  import { CommodityRecord } from '@/api/dashboard';
  import Cart from './components/cart.vue';
  import Commodity from './components/commodity.vue';
  import Pay from './components/pay.vue';

  const visible = ref(false);
  const user = ref();
  interface CartData {
    uuid: string;
    commodity: any;
    sum: number;
    total: number;
    user: any;
    time: string | null;
  }
  const cart = ref<CartData>({
    uuid: '',
    commodity: [],
    sum: 0,
    total: 0,
    user: null,
    time: '',
  } as unknown as CartData); // 购物车
  const isDefaultUser = false; // 是否需要默认选中用户
  const pending = ref();
  pending.value = localStorage.getItem('order-pending')
    ? JSON.parse(String(localStorage.getItem('order-pending')))
    : [];
  function updateUser(value: any) {
    user.value = value;
  }
  // 更新购物车
  function updateCart(commodity: CommodityRecord) {
    if (!cart.value.uuid) {
      // 首次触发
      cart.value.uuid = uuidv4().replace(/[-]/g, '');
      // sku商品
      if (Reflect.has(commodity, 'ids')) {
        cart.value.commodity.push({
          id: commodity.id,
          number: commodity.number,
          sku: [],
        });
        cart.value.commodity[0].sku.push(commodity);
      } else {
        cart.value.commodity.push(commodity);
      }
    } else {
      let isAdd = true;
      let isAddSku = true;
      cart.value.commodity.map(
        (item: { id: number; number: number; sku: any }) => {
          if (item.id === commodity.id) {
            // sku商品
            if (Reflect.has(item, 'sku')) {
              item.sku.map((item2: any) => {
                if (
                  item2.product.every(
                    (items: { value: any }, indexs: string | number) => {
                      return items.value === commodity.product[indexs].value;
                    }
                  )
                ) {
                  item2.number += commodity.number;
                  isAddSku = false;
                }
                return item2;
              });
              if (isAddSku) {
                item.sku.unshift(commodity);
              }
            }
            item.number += commodity.number;
            isAdd = false;
          }
          return item;
        }
      );
      if (isAdd) {
        if (Reflect.has(commodity, 'ids')) {
          cart.value.commodity.unshift({
            id: commodity.id,
            number: commodity.number,
            sku: [],
          });
          cart.value.commodity[0].sku.unshift(commodity);
        } else {
          cart.value.commodity.unshift(commodity);
        }
      }
    }
    cart.value.user = user.value;
    Message.success('加购成功');
  }
  // 删除购物车
  function deleteCart(index: number, index2: number) {
    if (index2 !== -1) {
      cart.value.commodity[index].sku.splice(index2, 1);
      if (cart.value.commodity[index].sku.length === 0) {
        cart.value.commodity.splice(index, 1);
      }
    } else {
      cart.value.commodity.splice(index, 1);
    }
    Message.success('删除成功');
  }
  // 清空购物车
  function emptyCart(isClearing = false) {
    cart.value.commodity = [];
    cart.value.sum = 0;
    cart.value.total = 0;
    if (!isClearing) {
      Message.success('清空成功');
    } else {
      Message.success('结算成功');
    }
  }
  // 挂单到购物车
  function pendingToCart(item: any) {
    cart.value = item;
    if (item.user) {
      user.value = item.user;
    } else {
      user.value = null;
    }
  }
  // 挂单
  function addPending() {
    if (cart.value.commodity.length === 0) {
      Message.error('请先添加商品');
    } else {
      cart.value.user = user.value;
      cart.value.sum = 0;
      cart.value.total = 0;
      let isAdd = true;
      // 计算总数和总金额
      cart.value.commodity.forEach(
        (item: { price: number; number: number; sku: any }) => {
          // sku商品
          if (Reflect.has(item, 'sku')) {
            item.sku.forEach((item2: { price: number; number: number }) => {
              cart.value.sum += item2.number;
              cart.value.total += item2.number * item2.price;
            });
          } else {
            cart.value.sum += item.number;
            cart.value.total += item.number * item.price;
          }
        }
      );
      cart.value.total = parseFloat(cart.value.total.toFixed(2));
      cart.value.time = moment().format('YYYY-MM-DD HH:mm:ss');
      // 如果已存在的挂单则更新
      pending.value.map((item: any) => {
        if (item.uuid === cart.value.uuid) {
          item = cart.value;
          isAdd = false;
        }
        return item;
      });
      if (isAdd) {
        pending.value.unshift(cart.value);
      }

      localStorage.setItem('order-pending', JSON.stringify(pending.value));
      cart.value = {
        uuid: '',
        commodity: [],
        sum: 0,
        total: 0,
        user: null,
        time: null,
      };
      user.value = null;
      Message.success('挂单成功');
    }
  }
  // 删除挂单
  function deletePending(index: number) {
    pending.value.splice(index, 1);
    localStorage.setItem('order-pending', JSON.stringify(pending.value));
    Message.success('删除成功');
  }
  // 清空挂单
  function emptyPending() {
    pending.value = [];
    localStorage.removeItem('order-pending');
    Message.success('清空成功');
  }
  // 结算
  function clearing() {
    cart.value.user = user.value;
    cart.value.sum = 0;
    cart.value.total = 0;
    // 计算总数和总金额
    cart.value.commodity.forEach(
      (item: { price: number; number: number; sku: any }) => {
        // sku商品
        if (Reflect.has(item, 'sku')) {
          item.sku.forEach((item2: { price: number; number: number }) => {
            cart.value.sum += item2.number;
            cart.value.total += item2.number * item2.price;
          });
        } else {
          cart.value.sum += item.number;
          cart.value.total += item.number * item.price;
        }
      }
    );
    cart.value.total = parseFloat(cart.value.total.toFixed(2));
    cart.value.time = moment().format('YYYY-MM-DD HH:mm:ss');
  }
  provide('pending', {
    pending,
    addPending,
    deletePending,
    emptyPending,
  });
  provide('user', {
    user,
    updateUser,
  });
  provide('isDefaultUser', isDefaultUser);
  provide('cart', {
    cart,
    updateCart,
    deleteCart,
    emptyCart,
    pendingToCart,
  });
  provide('clearing', clearing);
  onBeforeRouteLeave((to, from, next) => {
    if (cart.value.commodity.length === 0) {
      next();
    } else {
      Modal.info({
        title: '提示',
        content: '离开当前页，当前购物车将被清空，是否继续？',
        hideCancel: false,
        onOk: () => {
          next();
        },
      });
    }
  });
</script>

<script lang="ts">
  export default {
    name: 'Cashier',
  };
</script>

<style scoped lang="less">
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    padding-bottom: 0;
    display: flex;
  }

  .left-side {
    width: 380px;
    overflow: auto;
  }

  .right-side {
    flex: 1;
    width: 0;
    margin-left: 16px;
  }

  .panel {
    background-color: var(--color-bg-2);
    border-radius: 4px;
    overflow: auto;
  }

  :deep(.panel-border) {
    margin-bottom: 0;
    border-bottom: 1px solid rgb(var(--gray-2));
  }
</style>

<style lang="less" scoped>
  // responsive
  .mobile {
    .container {
      display: block;
    }

    .right-side {
      // display: none;
      width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
</style>
