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
    class="general-card classify-box"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px' }"
  >
    <a-tabs lazy-load>
      <a-tab-pane key="1" title="会员信息">
        <!-- 会员信息-->
        <a-descriptions
          v-if="user"
          :loading="loading"
          :column="3"
          layout="vertical"
          bordered
        >
          <a-descriptions-item label="昵称">
            {{ user.nickname }}
          </a-descriptions-item>
          <a-descriptions-item label="手机号码">
            {{ user.cellphone }}
          </a-descriptions-item>
          <a-descriptions-item label="余额">
            {{ thousands(user.money) }}
          </a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
      <a-tab-pane key="2" title="消费明细">
        <!-- 消费明细-->
        <a-table :data="orderData" :scroll="{ x: 800 }">
          <template #columns>
            <a-table-column
              title="订单ID"
              :width="200"
              data-index="identification"
            ></a-table-column>
            <a-table-column
              title="商品数量"
              data-index="number"
              :width="200"
              align="center"
            ></a-table-column>
            <a-table-column
              title="商品总价"
              :width="200"
              data-index="total"
            ></a-table-column>
            <a-table-column
              title="实付金额"
              :width="200"
              data-index="amountPaid"
            ></a-table-column>
            <a-table-column
              title="订单状态"
              :width="200"
              align="center"
              data-index="state"
            ></a-table-column>
            <a-table-column
              :width="200"
              title="订单时间"
              data-index="time"
            ></a-table-column>
            <a-table-column title="操作" :width="120">
              <template #cell="{ record }">
                <a-button
                  @click="$modal.info({ title: 'Name', content: record.name })"
                  >详情</a-button
                >
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="3" title="资金记录">
        <!-- 资金记录-->
        <a-table :data="moneyData" :scroll="{ x: 800 }">
          <template #columns>
            <a-table-column
              title="操作类型"
              :width="100"
              data-index="type"
            ></a-table-column>
            <a-table-column
              title="操作金额"
              data-index="money"
              :width="200"
              align="center"
            ></a-table-column>
            <a-table-column
              title="操作时间"
              :width="200"
              data-index="time"
            ></a-table-column>
            <a-table-column
              title="操作说明"
              :width="300"
              data-index="remark"
            ></a-table-column>
          </template>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import useLoading from '@/hooks/loading';
  import { thousands } from '@/utils';

  const { user } = inject<any>('user');
  const { loading, setLoading } = useLoading();
  const orderData = [
    {
      identification: '1663389047305999440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
    {
      identification: '1663389047305993440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
    {
      identification: '1663389047305499440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
    {
      identification: '1663389047305199440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
    {
      identification: '1663389047305659440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
    {
      identification: '1663389017305999440',
      number: 3,
      total: 1200,
      amountPaid: 1200,
      state: '已完成',
      time: '2023-07-01',
    },
  ];
  const moneyData = [
    {
      type: '收入',
      money: 100,
      time: '2023-07-01',
      remark: '会员充值100元',
    },
    {
      type: '支出',
      money: 100,
      time: '2023-07-01',
      remark: '对订单：123123123123的付款',
    },
  ];
</script>

<style scoped lang="less">
  .classify-box {
    height: calc(~'100vh - 92px');
    margin-bottom: 10px;
  }
</style>
