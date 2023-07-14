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
    :loading="loading"
    class="general-card classify-box"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px' }"
  >
    <a-tabs type="rounded" :hide-content="true" @tab-click="tabClick">
      <a-tab-pane
        v-for="item of list"
        :key="item.id"
        :title="item.name"
      ></a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { classifyList, ClassifyRecord } from '@/api/dashboard';

  const emit = defineEmits(['tabClick']);
  const list = ref<ClassifyRecord[]>();
  const { loading, setLoading } = useLoading();
  async function getClassifyList() {
    try {
      setLoading(true);
      const { data } = await classifyList();
      list.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  }
  getClassifyList();
  function tabClick(key: any) {
    emit('tabClick', key);
  }
</script>

<style scoped lang="less">
  .classify-box {
    margin: 10px 0;
  }
</style>
