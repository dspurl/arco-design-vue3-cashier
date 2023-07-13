<template>
  <a-card
    class="general-card"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px' }"
  >
    <a-input-search
      placeholder="搜索手机号/昵称"
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
