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
      placeholder="搜索订单号"
      allow-clear
      @input="keywordInput"
    />
  </a-card>
</template>

<script lang="ts" setup>
  const emit = defineEmits(['keywordInput']);
  function keywordInput(value: any) {
    emit('keywordInput', value);
  }
</script>

<style scoped lang="less"></style>
