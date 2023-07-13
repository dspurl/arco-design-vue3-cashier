<template>
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <Order />
      </div>
    </div>
    <div class="right-side">
      <Info />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { provide, ref } from 'vue';
  import Order from './components/order.vue';
  import Info from './components/info.vue';

  const indentId = ref(0);

  function updateIndent(value: number) {
    indentId.value = value;
  }

  provide('indent', {
    indentId,
    updateIndent,
  });
</script>

<script lang="ts">
  export default {
    name: 'Member',
  };
</script>

<style scoped lang="less">
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    padding-bottom: 0;
    display: flex;
  }

  .left-side {
    width: 380px;
    overflow: auto;
  }

  .right-side {
    flex: 1;
    width: 0;
    margin-left: 16px;
  }

  .panel {
    background-color: var(--color-bg-2);
    border-radius: 4px;
    overflow: auto;
  }

  :deep(.panel-border) {
    margin-bottom: 0;
    border-bottom: 1px solid rgb(var(--gray-2));
  }
</style>

<style lang="less" scoped>
  // responsive
  .mobile {
    .container {
      display: block;
    }

    .right-side {
      // display: none;
      width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
</style>
