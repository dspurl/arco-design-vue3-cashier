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
