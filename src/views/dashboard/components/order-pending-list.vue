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
  <a-drawer
    :width="380"
    :visible="isVisible"
    placement="left"
    unmount-on-close
    @cancel="handleCancel"
  >
    <template #title> 挂单列表 </template>
    <div class="list-box">
      <div v-for="(item, index) in pending" :key="item.uuid" class="item">
        <a-avatar v-if="item.user" :size="56">
          <img alt="avatar" :src="item.user.portrait" />
        </a-avatar>
        <a-avatar v-else :size="48" :style="{ backgroundColor: '#14a9f8' }">
          <IconUser />
        </a-avatar>
        <div class="info">
          <div class="top">
            <div class="nickname">{{
              item.user ? item.user.nickname : '游客'
            }}</div>
            <a-button
              class="delete"
              shape="circle"
              size="mini"
              @click="handleDelete(index)"
            >
              <icon-delete />
            </a-button>
          </div>
          <div class="operation">
            <div class="cellphone"
              >手机号：{{ item.user ? item.user.cellphone : '-' }}</div
            >
            <a-button
              type="primary"
              size="mini"
              shape="round"
              @click="handleExtract(item)"
              >提取</a-button
            >
          </div>
          <div class="bottom">
            <div>{{ item.time }}</div>
            <div
              >合计：<span class="price">￥{{ item.total }}</span></div
            >
          </div>
        </div>
      </div>
    </div>
    <!--清空 -->
    <a-modal v-model:visible="visible" @ok="handleEmpty">
      <template #title> 提示 </template>
      <div>确定要清空所有挂单吗？</div>
      <div>清空所有挂单后将无法恢复，请谨慎操作！</div>
    </a-modal>
    <template #footer>
      <a-button type="primary" size="mini" shape="round" @click="visible = true"
        >清空</a-button
      >
    </template>
  </a-drawer>
</template>

<script lang="ts" setup>
  import { computed, inject, ref } from 'vue';

  const { pending, deletePending, emptyPending } = inject<any>('pending');
  const { pendingToCart } = inject<any>('cart');
  const props = withDefaults(
    defineProps<{
      visible?: boolean;
    }>(),
    {
      visible: false,
    }
  );
  const emit = defineEmits(['cancel']);
  const visible = ref(false);
  const isVisible = computed(() => props.visible);
  const handleCancel = () => {
    emit('cancel', false);
  };
  const handleExtract = (item: any) => {
    pendingToCart(item);
    emit('cancel', false);
  };
  const handleDelete = (index: number) => {
    deletePending(index);
  };
  const handleEmpty = () => {
    emptyPending();
  };
</script>

<style scoped lang="less">
  .list-box {
    height: calc(~'100vh - 154px');
    .item {
      border-bottom: 1px solid var(--color-neutral-2);
      display: flex;
      padding: 10px 0;
      border-radius: 5px;
      align-items: center;
      &.on {
        background-color: rgb(var(--arcoblue-1));
        border-bottom: none;
      }
      &:last-child {
        border-bottom: none;
      }
      .info {
        margin-left: 20px;
        flex: 1;
        min-width: 0;
        position: relative;
        .top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
          align-items: center;
          .nickname {
            min-width: 0;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
          }
        }
        .operation {
          display: flex;
          justify-content: space-between;
          .cellphone {
            font-size: 12px;
            margin: 6px 0;
            color: var(--color-neutral-6);
            flex: 1;
          }
        }

        .bottom {
          font-size: 12px;
          color: var(--color-neutral-6);
          display: flex;
          justify-content: space-between;
          .price {
            color: rgb(var(--red-6));
          }
        }
      }
    }
  }
</style>
