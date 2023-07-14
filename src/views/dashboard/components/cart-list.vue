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
  <a-scrollbar style="overflow: auto">
    <div class="list-box">
      <div v-if="cart.commodity.length === 0" class="empty">
        <a-empty>暂无购物车商品</a-empty>
      </div>
      <template v-for="(item, index) in cart.commodity" :key="item.id">
        <template v-if="item.sku">
          <div
            v-for="(item2, index2) in item.sku"
            :key="item2.ids"
            class="item"
          >
            <div class="name-box">
              <div class="name">{{ item2.name }}</div>
              <a-button
                shape="circle"
                size="mini"
                @click="handleDelete(index, index2)"
              >
                <icon-delete />
              </a-button>
            </div>
            <div class="specification"
              ><span>￥{{ item2.price }}</span
              ><span v-for="(item3, index3) in item2.product" :key="index3">{{
                item3.value
              }}</span></div
            >
            <div class="total-box">
              <div class="total">
                小计：<span class="price">￥{{ subtotal(item2) }}</span>
              </div>
              <div class="number">
                <a-input-number
                  v-model="item2.number"
                  :max="item2.inventory"
                  :min="1"
                  :style="{ width: '120px' }"
                  size="small"
                  mode="button"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="item">
            <div class="name-box">
              <div class="name">{{ item.name }}</div>
              <a-button shape="circle" size="mini" @click="handleDelete(index)">
                <icon-delete />
              </a-button>
            </div>
            <div class="specification"
              ><span>￥{{ item.price }}</span
              ><span>{{ item.product }}</span></div
            >
            <div class="total-box">
              <div class="total">
                小计：<span class="price">￥{{ subtotal(item) }}</span>
              </div>
              <div class="number">
                <a-input-number
                  v-model="item.number"
                  :max="item.inventory"
                  :min="1"
                  :style="{ width: '120px' }"
                  size="small"
                  mode="button"
                />
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </a-scrollbar>
</template>

<script lang="ts" setup>
  import { inject, computed } from 'vue';
  import { thousands } from '@/utils';

  const { cart, deleteCart } = inject<any>('cart');

  const subtotal = computed(() => (item: { price: number; number: number }) => {
    return thousands(String(item.price * item.number));
  });
  const handleDelete = (index: number, index2 = -1) => {
    deleteCart(index, index2);
  };
</script>

<style scoped lang="less">
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .list-box {
    height: calc(~'100vh - 334px');
    padding-right: 20px;
    .item {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--color-neutral-2);
      &:last-child {
        border-bottom: none;
      }
      .name-box {
        display: flex;
        .name {
          font-weight: bold;
          font-size: 16px;
          height: 38px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          flex: 1;
          padding-right: 10px;
        }
      }
      .specification {
        line-height: 30px;
        color: var(--color-neutral-6);
        span {
          margin-right: 5px;
        }
      }
      .total-box {
        display: flex;
        align-items: center;
        .total {
          flex: 1;
          .price {
            color: rgb(var(--red-6));
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
