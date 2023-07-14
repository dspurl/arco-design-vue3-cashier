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
    :body-style="{ padding: '0 0' }"
  >
    <OrderSearch @keyword-input="keywordInput" />
    <OrderList :keyword="keyword" />
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import OrderSearch from './order-search.vue';
  import OrderList from './order-list.vue';

  const keyword = ref();
  const keywordInput = (value: any) => {
    keyword.value = value;
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
