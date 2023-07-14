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
  <a-modal :visible="isVisible" width="600" draggable @cancel="handleCancel">
    <template #title> 商品规格 </template>
    <div
      class="top"
      :class="{
        no: disabled,
      }"
    >
      <div class="nothing">售完</div>
      <a-image :preview="false" width="140px" :src="skus.img" />
      <div class="info">
        <div class="name">{{ skus.name }}</div>
        <div class="price">￥{{ skus.price }}</div>
        <div class="value">库存：{{ skus.inventory }}</div>
      </div>
    </div>
    <div class="specification">
      <div v-for="(item, index) in skus.specification" :key="index">
        <div class="name">{{ item.value }}</div>
        <div class="option-box">
          <div
            v-for="(item2, index2) in item.leaf"
            :key="index2"
            class="option"
            :class="{ on: item2.selected }"
            @click="handleSpecification(index, index2)"
            >{{ item2.value }}</div
          >
        </div>
      </div>
    </div>
    <template #footer>
      <a-button @click="handleCancel">取消</a-button>
      <a-button type="primary" :disabled="disabled" @click="handleCart"
        >确认</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
  import { computed, inject, watch, ref } from 'vue';
  import { CommodityRecord } from '@/api/dashboard';

  const { cart, updateCart } = inject<any>('cart');
  const disabled = ref(false);
  let skus: any = {};
  const number = ref(0);
  const props = withDefaults(
    defineProps<{
      visible?: boolean;
      sku?: CommodityRecord;
    }>(),
    {
      visible: false,
    }
  );
  const emit = defineEmits(['cancel']);
  const isVisible = computed(() => props.visible);
  const handleCancel = () => {
    emit('cancel', false);
  };
  const handleCart = () => {
    skus.number = 1;
    updateCart(skus);
    emit('cancel', false);
  };
  const handleSpecification = (index: number, index2: number) => {
    const specificationDaTa = skus.specification;
    specificationDaTa[index].leaf.map((item: { selected: boolean }) => {
      item.selected = false;
      return item;
    });
    specificationDaTa[index].leaf[index2].selected = true;
    let { ids } = skus;
    ids = ids?.split('_');
    ids[
      index
    ] = `${specificationDaTa[index].id}-${specificationDaTa[index].leaf[index2].id}`;
    ids = ids.join('_');
    const { productSkus } = skus;
    productSkus.forEach(
      (item: {
        ids: string;
        img: string;
        inventory: number;
        price: number;
        name: string;
        product: any;
      }) => {
        if (item.ids === ids) {
          if (item.img) {
            skus.img = item.img;
          }
          skus.inventory = item.inventory;
          skus.price = item.price;
          skus.ids = ids;
          skus.product = item.product;
          if (item.inventory === 0 || number.value >= item.inventory) {
            disabled.value = true;
          } else {
            disabled.value = false;
          }
        }
      }
    );
  };
  // 获取已加购的数量
  const getNumber = () => {
    disabled.value = false;
    number.value = 0;
    const commodity = cart.value.commodity.find(
      (item: { id: number }) => item.id === skus.id
    );
    if (commodity) {
      const commoditySku = commodity.sku.find((item: { product: any }) => {
        return item.product.every(
          (items: { value: any }, indexs: string | number) => {
            return items.value === skus.product[indexs].value;
          }
        );
      });
      if (commoditySku) {
        number.value = commoditySku.number;
        if (skus.inventory <= commoditySku.number) {
          disabled.value = true;
        }
      }
    }
  };
  watch(
    () => props.sku,
    (newval) => {
      skus = newval;
      getNumber();
    }
  );
</script>

<style scoped lang="less">
  .top {
    display: flex;
    .nothing {
      display: none;
    }
    .info {
      margin-left: 20px;
      flex: 1;
      .name {
        font-weight: 700;
        font-size: 18px;
        height: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .price {
        color: rgb(var(--red-6));
        margin: 5px 0;
        font-weight: 700;
        font-size: 18px;
      }
      .value {
        color: var(--color-neutral-8);
      }
    }
    &.no {
      position: relative;
      color: var(--color-neutral-4);
      .price {
        color: var(--color-neutral-4);
      }
      .value {
        color: var(--color-neutral-4);
      }
      .nothing {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .specification {
    .name {
      line-height: 45px;
    }
    .option-box {
      display: flex;
      .option {
        background-color: var(--color-neutral-2);
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 50px;
        min-width: 30px;
        height: 30px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.on {
          color: #fff;
          background-color: #4cbee8;
        }
      }
    }
  }
</style>
