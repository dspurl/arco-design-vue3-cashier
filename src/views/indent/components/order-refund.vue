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
  <a-modal
    :visible="isVisible"
    :footer="false"
    draggable
    @cancel="handleCancel"
  >
    <template #title> 退款 </template>
    <a-form ref="formRef" :model="form" @submit="handleSubmit">
      <a-form-item field="size" label="退款方式">
        <a-radio-group v-model="form.way" type="button">
          <a-radio :value="1">现金退款</a-radio>
          <a-radio v-if="way === 2" :value="2">原路退还</a-radio>
          <a-radio :value="3">退款到余额</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        field="money"
        label="退款金额"
        :rules="[{ required: true, message: '请输入退款金额' }]"
        :validate-trigger="['change', 'input']"
      >
        <a-input-number
          v-model="form.money"
          :max="money"
          :min="1"
          placeholder="请输入退款金额"
        />
      </a-form-item>
      <a-form-item row-class="submit">
        <a-button html-type="submit" type="primary">提交</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { computed, reactive, watch } from 'vue';

  const props = withDefaults(
    defineProps<{
      visible?: boolean;
      money: number;
      way: number;
    }>(),
    {
      visible: false,
      money: 0,
      way: 2,
    }
  );
  const isVisible = computed(() => props.visible);
  const form = reactive({
    way: 2,
    money: 0,
  });
  const emit = defineEmits(['cancel']);
  const handleCancel = () => {
    emit('cancel', false);
  };
  const handleSubmit = (values: any) => {
    if (!values.errors) {
      handleCancel();
    }
  };
  watch([() => props.money, () => props.way], ([newval1, newval2]) => {
    form.money = newval1;
    form.way = newval2;
  });
</script>

<style scoped lang="less">
  .submit {
    :deep(.arco-form-item-content-flex) {
      justify-content: flex-end;
    }
  }
</style>
