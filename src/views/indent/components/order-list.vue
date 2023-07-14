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
  <a-scrollbar style="overflow: auto" @scroll="scrollEventFn">
    <div class="list-box">
      <a-spin
        v-if="loading"
        style="
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      />
      <template v-else>
        <div
          v-for="(item, index) in list"
          :key="index"
          class="item"
          :class="{ on: item.id === checkedId }"
          @click="handleClick(item)"
        >
          <div class="order-box">
            <div class="order"> 单号：{{ item.uuid }}</div>
          </div>
          <div class="state-box">
            <div class="state">
              <div v-if="item.state === 1" class="finish"
                ><icon-check-circle-fill /><span>已完成</span></div
              >
              <div v-else-if="item.state === 2" class="not"
                ><icon-close-circle-fill /><span>未支付</span></div
              >
              <div v-else-if="item.state === 3" class="refund"
                ><icon-minus-circle-fill /><span>已退款</span></div
              >
              <div v-else class="cancel"
                ><icon-minus-circle-fill /><span>已取消</span></div
              >
            </div>
            <div class="total">￥{{ thousands(String(item.total)) }}</div>
          </div>
          <div class="bottom">
            <div class="time">下单时间:{{ item.time }}</div>
            <div class="sum"
              >共<span>{{ item.sum }}</span
              >件商品</div
            >
          </div>
        </div>
        <div v-if="isLoading" class="loading">加载中...</div>
      </template>
    </div>
  </a-scrollbar>
</template>

<script lang="ts" setup>
  import { indentList, IndentRecord } from '@/api/indent';
  import useLoading from '@/hooks/loading';
  import { thousands } from '@/utils';
  import { ref, watch, inject } from 'vue';

  const keyword = ref();
  let page = 1;
  const isLoading = ref(false);
  const { loading, setLoading } = useLoading();
  const checkedId = ref(1);
  const list = ref<IndentRecord[]>();
  const { updateIndent } = inject<any>('indent');
  const props = withDefaults(
    defineProps<{
      keyword?: string;
    }>(),
    {
      keyword: '',
    }
  );
  async function getIndentList(_more = false) {
    try {
      if (_more) {
        isLoading.value = true;
      } else {
        setLoading(true);
      }
      const { data } = await indentList({
        keyword: keyword.value,
        page,
      });
      if (_more) {
        list.value?.push(...data);
      } else {
        list.value = data;
        updateIndent(list.value[0].id);
      }
      page += 1;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      isLoading.value = false;
      setLoading(false);
    }
  }
  // 返回选中的用户
  function handleClick(item: any) {
    checkedId.value = item.id;
    updateIndent(item.id);
  }
  function scrollEventFn(
    this: any,
    e: {
      srcElement: { scrollTop: any; clientHeight: any; scrollHeight: number };
    }
  ) {
    if (
      e.srcElement.scrollTop + e.srcElement.clientHeight >=
      e.srcElement.scrollHeight
    ) {
      getIndentList(true);
    }
  }
  getIndentList();
  watch(
    () => props.keyword,
    (newval) => {
      keyword.value = newval;
      getIndentList();
    }
  );
</script>

<style scoped lang="less">
  .list-box {
    height: calc(~'100vh - 154px');
    .loading {
      line-height: 50px;
      text-align: center;
      color: var(--color-neutral-4);
    }
    .item {
      border-bottom: 1px solid var(--color-neutral-2);
      cursor: pointer;
      padding: 20px 20px;
      &.on {
        background-color: rgb(var(--arcoblue-1));
      }
      .order-box {
        display: flex;
        .order {
          font-weight: 700;
          font-size: 14px;
          flex: 1;
        }
      }
      .state-box {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .state {
          flex: 1;
          font-weight: 700;
          span {
            margin-left: 5px;
          }
          .finish {
            color: rgb(var(--green-6));
          }
          .not {
            color: rgb(var(--orange-6));
          }
          .refund {
            color: rgb(var(--red-6));
          }
        }
        .total {
          font-weight: 700;
          font-size: 14px;
        }
      }
      .bottom {
        display: flex;
        .time {
          flex: 1;
          color: var(--color-neutral-8);
        }
        .sum {
          color: var(--color-neutral-8);
          span {
            color: #4cbee8;
            font-weight: 700;
            padding: 0 2px;
          }
        }
      }
    }
  }
</style>
