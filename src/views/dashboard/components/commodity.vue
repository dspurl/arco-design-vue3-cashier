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
  <div>
    <CommoditySearch @keyword-input="keywordInput" />
    <CommodityClassify @tab-click="tabClick" />
    <CommodityList :classify-id="classifyId" :keyword="keyword" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import CommoditySearch from './commodity-search.vue';
  import CommodityClassify from './commodity-classify.vue';
  import CommodityList from './commodity-list.vue';

  const classifyId = ref(0);
  const keyword = ref();
  const tabClick = (key: any) => {
    classifyId.value = key;
  };
  const keywordInput = (value: any) => {
    keyword.value = value;
  };
</script>

<style scoped lang="less"></style>
