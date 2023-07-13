<template>
  <a-card
    class="general-card cart-box"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '0 0' }"
  >
    <UserSearch @keyword-input="keywordInput" />
    <UserList :keyword="keyword" />
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import UserSearch from './user-search.vue';
  import UserList from './user-list.vue';

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
