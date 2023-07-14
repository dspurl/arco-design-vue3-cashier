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
    class="general-card"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px' }"
  >
    <a-spin :loading="loading" dot>
      <div>
        <div class="top">
          <div v-if="info.state === 1" class="state finish"
            ><icon-check-circle-fill style="font-size: 26px" /><span
              >已完成</span
            ></div
          >
          <div v-else-if="info.state === 2" class="state not"
            ><icon-close-circle-fill style="font-size: 26px" /><span
              >未支付</span
            ></div
          >
          <div v-else-if="info.state === 3" class="state refund"
            ><icon-minus-circle-fill style="font-size: 26px" /><span
              >已退款</span
            ></div
          >
          <div v-else class="state cancel"
            ><icon-minus-circle-fill style="font-size: 26px" /><span
              >已取消</span
            ></div
          >
          <div class="info">
            <div class="item-box">
              <div class="item">
                <div class="name">订单号</div>
                <div class="value">{{ info.uuid }}</div>
              </div>
              <div class="item">
                <div class="name">下单时间</div>
                <div class="value">{{ info.time ?? '-' }}</div>
              </div>
            </div>
            <div class="item-box">
              <div class="item">
                <div class="name">收银员</div>
                <div class="value">{{ info.cashier ?? '-' }}</div>
              </div>
              <div class="item">
                <div class="name">支付时间</div>
                <div class="value">{{
                  info.pay_time ? info.pay_time : '-'
                }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-box">
          <div class="commodity-info">
            <div class="name">商品信息</div>
            <div class="list">
              <div
                v-for="(item, index) in info.commodity"
                :key="index"
                class="item"
              >
                <template v-if="item.sku">
                  <template v-for="item1 in item.sku" :key="item1.id">
                    <div class="img">
                      <a-image width="70" :src="item1.img" />
                    </div>
                    <div class="details">
                      <div class="title">{{ item1.name }}</div>
                      <div class="specification">
                        <template
                          v-for="item2 in item1.product"
                          :key="item2.key"
                        >
                          <span>{{ item2.value }}</span>
                        </template>
                      </div>
                      <div class="property">
                        <div class="number">x{{ item1.number }}</div>
                        <div class="price">{{ thousands(item1.price) }}</div>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <div class="img">
                    <a-image width="70" :src="item.img" />
                  </div>
                  <div class="details">
                    <div class="title">{{ item.name }}</div>
                    <div class="specification"></div>
                    <div class="property">
                      <div class="number">x{{ item.number }}</div>
                      <div class="price">{{ thousands(item.price) }}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="other-info">
            <div class="name">结算信息</div>
            <div class="item">
              <div class="tt">商品合计</div>
              <div class="value">{{
                info.total ? '￥' + thousands(info.total) : '-'
              }}</div>
            </div>
            <div class="item">
              <div class="tt">付款方式</div>
              <div v-if="info.way === 1" class="value">会员支付</div>
              <div v-else-if="info.way === 2" class="value">在线支付</div>
              <div v-else class="value">现金支付</div>
            </div>
            <div class="item">
              <div class="tt">实付金额</div>
              <div class="value">{{
                info.amount_paid
                  ? '￥' + thousands(String(info.amount_paid))
                  : '-'
              }}</div>
            </div>
            <div v-if="info.refund_amount" class="item">
              <div class="tt">退款金额</div>
              <div class="value"
                >￥{{ thousands(String(info.refund_amount)) }}</div
              >
            </div>
            <div v-if="info.refund_time" class="item">
              <div class="tt">退款时间</div>
              <div class="value">{{ info.refund_time }}</div>
            </div>
            <template v-if="info.user">
              <div class="item">
                <div class="tt">会员昵称</div>
                <div class="value">{{ info.user.nickname }}</div>
              </div>
              <div class="item">
                <div class="tt">会员手机</div>
                <div class="value">{{ info.user.cellphone }}</div>
              </div>
              <div class="item">
                <div class="tt">会员余额</div>
                <div class="value">￥{{ thousands(info.user.money) }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="operation">
          <div>
            <a-button
              v-if="info.state === 1"
              type="outline"
              status="success"
              @click="refundVisible = true"
              >退款</a-button
            >
          </div>
          <div>
            <a-button
              v-if="info.state === 1"
              type="primary"
              status="success"
              @click="printVisible = true"
              >小票打印</a-button
            >
          </div>
        </div>
      </div>
    </a-spin>
    <OrderRefund
      :visible="refundVisible"
      :money="info.amount_paid"
      :way="info.way"
      @cancel="refundVisible = false"
    />
    <OrderPrint
      :visible="printVisible"
      :info="info"
      @cancel="printVisible = false"
    />
  </a-card>
</template>

<script lang="ts" setup>
  import { inject, watch, ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { indentInfo } from '@/api/indent';
  import { thousands } from '@/utils';
  import OrderRefund from './order-refund.vue';
  import OrderPrint from './order-print.vue';

  const { indentId } = inject<any>('indent');
  const refundVisible = ref(false);
  const printVisible = ref(false);
  const info = ref<any>({} as any);
  const { loading, setLoading } = useLoading();
  async function getIndentInfo() {
    try {
      setLoading(true);
      const { data } = await indentInfo({
        id: indentId.value,
      });
      info.value = data;
    } finally {
      setLoading(false);
    }
  }

  watch(
    () => indentId.value,
    () => {
      getIndentInfo();
    }
  );
</script>

<style scoped lang="less">
  .general-card {
    min-height: 450px;
    height: calc(~'100vh - 92px');
    :deep(.arco-spin) {
      width: 100%;
    }
  }
  .operation {
    display: flex;
    justify-content: space-between;
  }
  .main-box {
    margin-top: 20px;
    display: flex;
    .commodity-info {
      flex: 1;
      min-width: 0;
      border-right: 1px solid var(--color-neutral-2);
      margin-bottom: 20px;
      .list {
        padding-right: 20px;
        height: calc(~'100vh - 312px');
        overflow-y: auto;
        .item {
          display: flex;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid var(--color-neutral-2);
          &:last-child {
            border-bottom: none;
          }
          .img {
            border: 1px solid var(--color-border);
            border-radius: 5px;
            margin-right: 10px;
          }
          .details {
            flex: 1;
            min-width: 0;
            .title {
              font-weight: 700;
              margin-bottom: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .specification {
              color: var(--color-neutral-6);
              margin-bottom: 10px;
              font-size: 12px;
              height: 18px;
              span {
                margin-right: 5px;
              }
            }
            .property {
              display: flex;
              .number {
                flex: 1;
                font-weight: 700;
              }
              .price {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
    .other-info {
      padding-left: 20px;
      flex: 1;
      min-width: 0;
      .item {
        display: flex;
        line-height: 30px;
        color: var(--color-neutral-10);
        .tt {
          flex: 1;
        }
        .value {
          flex: 1;
        }
      }
    }
    .name {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
  .top {
    border-radius: 20px;
    background-color: var(--color-neutral-1);
    display: flex;
    .state {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding: 20px 10px;
      color: #fff;
      background-color: var(--color-neutral-8);
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        margin-left: 5px;
      }
      &.finish {
        background-color: rgb(var(--green-6));
      }
      &.not {
        background-color: rgb(var(--orange-6));
      }
      &.refund {
        background-color: rgb(var(--red-6));
      }
    }
    .info {
      display: flex;
      width: 100%;
      flex: 1;
      padding: 15px 15px;
      .item-box {
        flex: 1;
        min-width: 0;
        .item {
          display: flex;
          line-height: 25px;
          .name {
            width: 70px;
            font-weight: 500;
          }
          .value {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
