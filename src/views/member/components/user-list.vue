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
          <a-avatar :size="58">
            <img alt="avatar" :src="item.portrait" />
          </a-avatar>
          <div class="info">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="cellphone">手机号：{{ item.cellphone }}</div>
            <div class="bottom">
              <div class="price"
                >余额：<span>{{ thousands(String(item.money)) }}</span></div
              >
            </div>
          </div>
        </div>
        <div v-if="isLoading" class="loading">加载中...</div>
      </template>
    </div>
  </a-scrollbar>
</template>

<script lang="ts" setup>
  import { userList, UserRecord } from '@/api/user';
  import useLoading from '@/hooks/loading';
  import { thousands } from '@/utils';
  import { ref, watch, toRaw, inject } from 'vue';

  const keyword = ref();
  let page = 1;
  const isLoading = ref(false);
  const { loading, setLoading } = useLoading();
  const checkedId = ref();
  const list = ref<UserRecord[]>();
  const { updateUser } = inject<any>('user');
  const isDefaultUser = inject<boolean>('isDefaultUser');
  const props = withDefaults(
    defineProps<{
      keyword?: string;
    }>(),
    {
      keyword: '',
    }
  );
  async function getUserList(_more = false) {
    try {
      if (_more) {
        isLoading.value = true;
      } else {
        setLoading(true);
      }
      const { data } = await userList({
        keyword: keyword.value,
        page,
      });
      if (_more) {
        list.value?.push(...data);
      } else {
        list.value = data;
      }
      page += 1;
      if (isDefaultUser) {
        checkedId.value = toRaw(list.value)?.[0].id;
        updateUser(toRaw(list.value)?.[0]);
      }
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
    updateUser(item);
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
      getUserList(true);
    }
  }
  getUserList();
  watch(
    () => props.keyword,
    (newval) => {
      keyword.value = newval;
      getUserList();
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
      display: flex;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 5px;
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
        .nickname {
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cellphone {
          font-size: 12px;
          margin: 6px 0;
          color: var(--color-neutral-6);
        }
        .bottom {
          font-size: 12px;
          color: var(--color-neutral-6);
          span {
            color: rgb(var(--red-6));
          }
        }
      }
    }
  }
</style>
