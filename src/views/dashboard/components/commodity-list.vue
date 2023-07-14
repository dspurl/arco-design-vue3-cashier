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
  <a-spin dot :loading="loading" style="width: 100%; height: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '15px 5px 15px 15px' }"
    >
      <a-scrollbar style="overflow-y: auto">
        <div class="list-box">
          <a-row :gutter="[10, 10]">
            <a-col
              v-for="(item, index) in list"
              :key="index"
              :xs="24"
              :sm="24"
              :md="24"
              :lg="12"
              :xl="8"
              :xxl="6"
            >
              <div class="item-box">
                <div
                  class="item"
                  :class="{
                    no:
                      item.inventory === 0 ||
                      item.inventory === updateCartCommodityList(item.id),
                  }"
                  @click="handleGood(item)"
                >
                  <div class="nothing">售完</div>
                  <a-image
                    width="100"
                    height="100"
                    fit="cover"
                    :src="item.img"
                    :preview="false"
                  />
                  <div class="info">
                    <div class="name">{{ item.name }}</div>
                    <div class="price"
                      >￥{{ thousands(String(item.price)) }}</div
                    >
                  </div>
                </div>
                <div v-if="updateCartCommodityList(item.id)" class="badge">{{
                  updateCartCommodityList(item.id)
                }}</div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-scrollbar>
      <CommoditySku :sku="sku" :visible="visible" @cancel="visible = false" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, inject, watch, computed } from 'vue';
  import useLoading from '@/hooks/loading';
  import { thousands } from '@/utils';
  import { commodityList, CommodityRecord } from '@/api/dashboard';
  import CommoditySku from './commodity-sku.vue';
  import param2Data from '../skuParam';

  const visible = ref(false);
  const sku = ref<CommodityRecord>();
  const { cart, updateCart } = inject<any>('cart');
  const props = withDefaults(
    defineProps<{
      classifyId?: number;
      keyword?: string;
    }>(),
    {
      classifyId: 0,
      keyword: '',
    }
  );
  const classifyId = ref(0);
  const keyword = ref();
  const list = ref<CommodityRecord[]>();
  const { loading, setLoading } = useLoading();
  function paramData(data: CommodityRecord) {
    return param2Data(data);
  }
  const handleGood = (item: CommodityRecord) => {
    const { commodity } = cart.value;
    let number = 0;
    commodity.forEach((items: { id: number; number: number }) => {
      if (items.id === item.id) {
        number = items.number;
      }
    });
    if (item.sku) {
      visible.value = true;
      sku.value = paramData(item);
    } else if (item.inventory !== 0 && number < item.inventory) {
      const skus = JSON.parse(JSON.stringify(item));
      skus.number = 1;
      updateCart(skus);
    }
  };
  async function getCommodityList() {
    try {
      setLoading(true);
      const { data } = await commodityList({
        classifyId: classifyId.value,
        keyword: keyword.value,
      });
      list.value = data;
      if (keyword.value && list.value.length === 1) {
        handleGood(list.value[0]);
        console.log('直接加入购物车');
      }
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  }

  const updateCartCommodityList = computed(() => (id: number) => {
    const { commodity } = cart.value;
    let number = 0;
    commodity.forEach(
      (item: { id: number; number: number; sku: { number: number }[] }) => {
        if (item.id === id) {
          if (Reflect.has(item, 'sku')) {
            item.sku.forEach((item2: { number: number }) => {
              number += item2.number;
            });
          } else {
            number = item.number;
          }
        }
      }
    );
    return number;
  });
  watch([() => props.classifyId, () => props.keyword], ([newval1, newval2]) => {
    classifyId.value = newval1;
    keyword.value = newval2;
    getCommodityList();
  });
  getCommodityList();
</script>

<style scoped lang="less">
  .list-box {
    height: calc(~'100vh - 267px');
    width: 99%;
    padding-top: 10px;
  }
  .item-box {
    position: relative;
    .badge {
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      color: var(--color-white);
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      background-color: rgb(var(--danger-6));
      box-shadow: 0 0 0 2px var(--color-bg-2);
      border-radius: 20px;
      position: absolute;
      top: -4px;
      right: -4px;
      z-index: 2;
    }
  }
  .item {
    background-color: var(--color-neutral-1);
    display: flex;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    .nothing {
      display: none;
    }
    &.no {
      position: relative;
      color: var(--color-neutral-4);
      .nothing {
        z-index: 2;
        position: absolute;
        top: 10px;
        left: 10px;
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        background: rgba(0, 0, 0, 0.7);
      }
      &:hover {
        background-color: var(--color-neutral-1);
        color: var(--color-neutral-4);
      }
    }
    &:hover {
      background-color: #4cbee8;
      color: #fff;
    }
    .info {
      margin-left: 10px;
      flex: 1;
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-weight: 700;
        height: 40px;
        line-height: 20px;
      }
      .price {
        font-size: 16px;
        margin-top: 40px;
        text-align: right;
      }
    }
    &.on {
      background-color: #29abe2;
      color: #fff;
    }
  }
</style>
