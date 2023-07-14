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
    :closable="false"
    :footer="false"
    :mask-closable="false"
    width="800px"
    body-class="modal-body"
    :body-style="{ padding: '20px', backgroundColor: 'var(--color-neutral-2)' }"
    @cancel="handleCancel"
  >
    <!-- <div class="tabs-box">
      <div class="item on">账单支付</div>
      <div class="item">组合支付</div>
    </div> -->
    <div class="content">
      <div class="left">
        <a-card
          class="general-card"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '15px' }"
        >
          <div class="money-box">
            <div class="itme">
              <div class="name">应收</div>
              <div class="price">￥{{ thousands(cart.total) }}</div>
            </div>
            <div class="itme">
              <div class="name">实收</div>
              <div class="price">￥{{ thousands(String(actualPayment)) }}</div>
            </div>
            <div class="itme">
              <div class="name">找零</div>
              <div class="price red">￥{{ thousands(String(change)) }}</div>
            </div>
          </div>
        </a-card>
        <!-- 会员 -->
        <a-card
          v-if="way === 1"
          class="general-card"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '20px', marginTop: '20px', height: '265px' }"
        >
          <a-descriptions :column="2">
            <a-descriptions-item label="昵称">
              {{ cart.user.nickname }}
            </a-descriptions-item>
            <a-descriptions-item label="手机号">
              {{ cart.user.cellphone }}
            </a-descriptions-item>
            <a-descriptions-item label="会员卡余额">
              {{ cart.user.money }}
            </a-descriptions-item>
            <a-descriptions-item label="消费后余额"> 0.00 </a-descriptions-item>
          </a-descriptions>
          <a-input-search
            class="buttom"
            placeholder="点击聚焦扫码或输入支付密码"
            button-text="确认"
            search-button
          />
        </a-card>
        <!-- 扫码支付 -->
        <a-card
          v-else-if="way === 2"
          class="general-card code-box"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '20px', marginTop: '20px', height: '265px' }"
        >
          <div class="img">
            <!-- 等待客户扫码 -->
            <template v-if="payState === 0">
              <a-image height="225" :src="codeImage" :preview="false" />
              <a-input
                ref="productIdRef"
                style="opacity: 0"
                @change="handlePay"
              />
            </template>
            <!-- 等待客户支付 -->
            <template v-else-if="payState === 1">
              <div class="countdown">
                <a-countdown
                  :value="Date.now() + 60 * 1000"
                  :value-style="{ color: '#fff' }"
                  format="ss"
                  :now="Date.now()"
                  @finish="handleFinish"
                />
              </div>
              <div class="state">支付状态：等待支付</div>
              <a-button type="primary" status="danger" @click="handleCancelPay"
                >取消支付</a-button
              >
            </template>
            <!-- 支付成功-->
            <template v-else-if="payState === 2">
              <a-result status="success" title="支付成功">
                <template #extra>
                  <a-space>
                    <a-button type="primary" @click="handleCancel"
                      >确定</a-button
                    >
                  </a-space>
                </template>
              </a-result>
            </template>
            <!-- 超时支付-->
            <template v-else-if="payState === 3">
              <a-result status="error" title="长期未操作，请重新发起扫码支付">
                <template #extra>
                  <a-space>
                    <a-button type="primary" @click="handleCancelPay"
                      >返回</a-button
                    >
                  </a-space>
                </template>
              </a-result>
            </template>
            <!-- 用户取消-->
            <template v-else-if="payState === 4">
              <a-result
                status="warning"
                title="用户取消支付，请重新发起扫码支付"
              >
                <template #extra>
                  <a-space>
                    <a-button type="primary" @click="handleCancelPay"
                      >返回</a-button
                    >
                  </a-space>
                </template>
              </a-result>
            </template>
          </div>
        </a-card>
        <!-- 现金支付 -->
        <div v-else-if="way === 3"
          ><SoftKeyboard @key="handleSoftKeyboard" @confirm="handleConfirm"
        /></div>
      </div>
      <div class="right">
        <a-card
          class="general-card cancel"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '15px' }"
          @click="handleCancel"
        >
          取消
        </a-card>
        <a-card
          v-if="cart.user"
          class="general-card item-box"
          :class="{ on: way === 1 }"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '15px', marginTop: '20px' }"
          @click="handleWay(1)"
        >
          <div>会员支付</div>
        </a-card>
        <a-card
          class="general-card item-box"
          :class="{ on: way === 2 }"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '15px', marginTop: '20px' }"
          @click="handleWay(2)"
        >
          <div>扫码支付</div>
        </a-card>
        <a-card
          class="general-card item-box"
          :class="{ on: way === 3 }"
          :header-style="{ paddingBottom: '0' }"
          :body-style="{ padding: '15px', marginTop: '20px' }"
          @click="handleWay(3)"
        >
          <div>现金支付</div>
        </a-card>
        <div class="print"
          ><a-checkbox v-model="print">支付完成打印小票</a-checkbox></div
        >
      </div>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
  import { computed, ref, inject, nextTick, watch } from 'vue';
  import codeImage from '@/assets/images/code.png';
  import { thousands } from '@/utils';
  import SoftKeyboard from './soft-keyboard.vue';

  const { cart, emptyCart } = inject<any>('cart');
  const productIdRef = ref();
  const props = withDefaults(
    defineProps<{
      visible?: boolean;
    }>(),
    {
      visible: false,
    }
  );
  const emit = defineEmits(['cancel']);
  const actualPayment = ref(0);
  const change = ref(0);
  const print = ref(true);
  const way = ref(2);
  const payState = ref(0);
  const isVisible = computed(() => props.visible);
  const handleCancel = () => {
    emit('cancel', false);
  };
  const handleWay = (res: number) => {
    way.value = res;
  };
  // 倒计时结束未完成支付
  const handleFinish = () => {
    payState.value = 3;
  };
  // 扫码支付
  const handlePay = (value: string) => {
    payState.value = 1;
    // 进行支付处理
  };
  const handleCancelPay = () => {
    payState.value = 0;
    nextTick(() => {
      productIdRef.value.focus();
    });
  };
  // 现金软键盘
  const handleSoftKeyboard = (key: { value: any }) => {
    actualPayment.value = key.value;
    const changes = actualPayment.value - cart.value.total;
    if (changes > 0) {
      change.value = actualPayment.value - cart.value.total;
    } else {
      change.value = 0;
    }
  };
  // 完成支付
  const handleConfirm = (res: boolean) => {
    if (res) {
      // 创建订单
      emptyCart(true);
      handleCancel();
    }
  };
  watch(
    () => props.visible,
    (newval) => {
      if (newval === true) {
        payState.value = 0;
        way.value = 2;
        actualPayment.value = cart.value.total;
        nextTick(() => {
          if (productIdRef.value) {
            productIdRef.value.focus();
          }
        });
      }
    }
  );
</script>

<style scoped lang="less">
  .content {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    .left {
      flex: 1;
      position: relative;
      .money-box {
        display: flex;
        .itme {
          flex: 1;
          text-align: center;
          .name {
            margin-bottom: 20px;
          }
          .price {
            font-weight: 700;
            font-size: 22px;
            &.red {
              color: rgb(var(--red-6));
            }
          }
        }
      }
      .buttom {
        margin-top: 20px;
      }
      .code-box {
        .img {
          text-align: center;
          .countdown {
            width: 60px;
            height: 60px;
            border-radius: 50px;
            margin: 20px auto;
            background-color: var(--color-neutral-4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .state {
            color: var(--color-neutral-8);
            margin-bottom: 20px;
          }
        }
      }
    }
    .right {
      margin-left: 20px;
      width: 200px;
      .item-box {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
        cursor: pointer;
        &.on {
          background-color: #29abe2;
          div {
            color: #fff;
          }
        }
      }

      .cancel {
        text-align: center;
        line-height: 77px;
        font-size: 22px;
        font-weight: 500;
        cursor: pointer;
      }
      .print {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
  .tabs-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 200px;
    margin: 0 auto;
    border-radius: 20px;
    .item {
      flex: 1;
      border-radius: 20px;
      text-align: center;
      line-height: 35px;
      color: #000;
      cursor: pointer;
      &.on {
        background-color: #29abe2;
        font-weight: 700;
        color: #fff;
      }
    }
  }
</style>
