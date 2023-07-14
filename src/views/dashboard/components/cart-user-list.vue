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
    <template #title> 会员列表 </template>
    <User />
    <template #footer>
      <a-button type="primary" size="mini" shape="round" @click="handleTourist"
        >游客</a-button
      >
    </template>
  </a-drawer>
</template>

<script lang="ts" setup>
  import { computed, inject, watch } from 'vue';
  import User from '../../member/components/user.vue';

  const { user, updateUser } = inject<any>('user');
  const props = withDefaults(
    defineProps<{
      visible?: boolean;
    }>(),
    {
      visible: false,
    }
  );
  const emit = defineEmits(['cancel']);
  const isVisible = computed(() => props.visible);
  const handleCancel = () => {
    emit('cancel', false);
  };
  const handleTourist = () => {
    updateUser(null);
    emit('cancel', false);
  };
  watch(
    () => user.value,
    () => {
      emit('cancel', false);
    }
  );
</script>

<style scoped lang="less">
  :deep(.list-box) {
    height: calc(~'100vh - 200px');
  }
</style>
