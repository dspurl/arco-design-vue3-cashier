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
    class="general-card"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px' }"
  >
    <a-input-search
      ref="keywordRef"
      placeholder="搜索商品名称/货号或点击聚焦扫码"
      allow-clear
      @change="keywordInput"
    />
  </a-card>
</template>

<script lang="ts" setup>
  import { nextTick, ref } from 'vue';

  const emit = defineEmits(['keywordInput']);
  const keywordRef = ref();
  function keywordInput(value: any) {
    emit('keywordInput', value);
  }
  nextTick(() => {
    keywordRef.value.focus();
  });
</script>

<style scoped lang="less"></style>
