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
  <a-modal
    :visible="isVisible"
    :footer="false"
    :width="350"
    draggable
    @cancel="handleCancel"
  >
    <template #title> 小票预览 </template>
    <div class="title">XX商城</div>
    <a-divider />
    <div>单号：{{ info.uuid }}</div>
    <div>{{ info.time ?? '-' }}</div>
    <a-divider />
    <div class="table">
      <div class="thead">
        <div class="name">商品</div>
        <div class="number">数量</div>
        <div class="price">单价</div>
        <div class="total">总价</div>
      </div>
      <div
        v-for="(item, index) in info.commodity"
        :key="index"
        class="item-box"
      >
        <template v-if="item.sku">
          <template v-for="item1 in item.sku" :key="item1.id">
            <div class="item">
              <div class="no">{{ item1.uuid }}</div>
              <div class="number">{{ item1.number }}</div>
              <div class="price">{{ thousands(item1.price) }}</div>
              <div class="total">{{ subtotal(item1) }}</div>
            </div>
            <div class="name">{{ item1.name }}</div>
          </template>
        </template>
        <template v-else>
          <div class="item">
            <div class="no">{{ item.uuid }}</div>
            <div class="number">{{ item.number }}</div>
            <div class="price">{{ thousands(item.price) }}</div>
            <div class="total">{{ subtotal(item) }}</div>
          </div>
          <div class="name">{{ item.name }}</div>
        </template>
      </div>
      <div class="item-box" style="margin-top: 20px">
        <div class="item">
          <div class="no">合计</div>
          <div class="number"></div>
          <div class="price"></div>
          <div class="total">{{ thousands(info.total) }}</div>
        </div>
      </div>
      <a-divider />
      <div class="count">
        <div class="name">应付金额</div>
        <div class="value">{{ thousands(info.total) }}</div>
      </div>
      <div class="count">
        <div class="name">支付方式</div>
        <div v-if="info.way === 1" class="value">会员支付</div>
        <div v-else-if="info.way === 2" class="value">在线支付</div>
        <div v-else class="value">现金支付</div>
      </div>
      <div class="count">
        <div class="name">实付金额</div>
        <div class="value">{{ thousands(String(info.amount_paid)) }}</div>
      </div>
      <template v-if="info.user">
        <a-divider />
        <div class="count">
          <div class="name">会员昵称</div>
          <div class="value">{{ info.user.nickname }}</div>
        </div>
        <div class="count">
          <div class="name">会员手机</div>
          <div class="value">{{ info.user.cellphone }}</div>
        </div>
        <div class="count">
          <div class="name">会员余额</div>
          <div class="value">{{ thousands(info.user.money) }}</div>
        </div>
      </template>
    </div>
    <div class="explain">小票预览，请通过后端实现，调用小票打印机</div>
  </a-modal>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { thousands } from '@/utils';

  const props = withDefaults(
    defineProps<{
      visible?: boolean;
      info?: any;
    }>(),
    {
      visible: false,
    }
  );
  const isVisible = computed(() => props.visible);
  const subtotal = computed(() => (item: { price: number; number: number }) => {
    return thousands(String(item.price * item.number));
  });
  const emit = defineEmits(['cancel']);
  const handleCancel = () => {
    emit('cancel', false);
  };
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
  .table {
    line-height: 25px;
    .thead {
      display: flex;
      justify-content: center;
      .name {
        flex: 4;
      }
      .number {
        flex: 2;
      }
      .price {
        flex: 2;
      }
      .total {
        flex: 2;
      }
    }
  }
  .item-box {
    .item {
      display: flex;
      .no {
        flex: 4;
      }
      .number {
        flex: 2;
      }
      .price {
        flex: 2;
      }
      .total {
        flex: 2;
      }
    }
  }
  .count {
    display: flex;
    justify-content: space-between;
  }
  .explain {
    margin-top: 20px;
    text-align: center;
  }
</style>
