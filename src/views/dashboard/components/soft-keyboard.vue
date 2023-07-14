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
  <div class="box">
    <div class="item-box">
      <div class="item bold" @click="handleClick('7')">7</div>
      <div class="item bold" @click="handleClick('8')">8</div>
      <div class="item bold" @click="handleClick('9')">9</div>
      <div class="item bold red" @click="handleClick('100')">￥100</div>
      <div class="item delete" @click="handleClick('delete')">删除</div>
    </div>
    <div class="item-box">
      <div class="item bold" @click="handleClick('4')">4</div>
      <div class="item bold" @click="handleClick('5')">5</div>
      <div class="item bold" @click="handleClick('6')">6</div>
      <div class="item bold red" @click="handleClick('50')">￥50</div>
      <div class="item" @click="handleClick('empty')">清空</div>
    </div>
    <div class="item-box">
      <div class="left">
        <div class="left-box">
          <div class="item bold" @click="handleClick('1')">1</div>
          <div class="item bold" @click="handleClick('2')">2</div>
          <div class="item bold" @click="handleClick('3')">3</div>
          <div class="item bold red" @click="handleClick('20')">￥20</div>
        </div>
        <div class="left-box">
          <div class="item bold" @click="handleClick('00')">00</div>
          <div class="item bold" @click="handleClick('0')">0</div>
          <div class="item bold" @click="handleClick('.')">.</div>
          <div class="item bold red" @click="handleClick('10')">￥10</div>
        </div>
      </div>
      <div class="right">
        <div class="item confirm" @click="handleClick('confirm')">确定</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const emit = defineEmits(['key', 'confirm']);
  const money = ref('');
  const handleClick = (key: string) => {
    const number = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '00',
      '10',
      '20',
      '50',
      '100',
      '.',
    ];
    if (number.includes(key)) {
      money.value += key;
    } else if (key === 'delete') {
      money.value = money.value.slice(0, -1);
    } else if (key === 'empty') {
      money.value = '';
    }
    if (!money.value) {
      money.value = '0';
    }
    if (key === 'confirm') {
      // 进行钱柜操作
      emit('confirm', true);
    } else {
      emit('key', money);
    }
  };
</script>

<style scoped lang="less">
  .box {
    padding: 20px 20px 0 20px;
    .item-box {
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        background-color: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 2px 2px 4px var(--color-neutral-3);
        border-radius: 5px;
        &:active {
          background-color: var(--color-neutral-3);
        }
        &:last-child {
          margin-right: 0;
        }
        &.bold {
          font-weight: 700;
        }
        &.red {
          background-color: rgb(var(--red-5));
          color: #fff;
          &:active {
            background-color: rgb(var(--red-7));
          }
        }
        &.delete {
          background-color: var(--color-neutral-6);
          color: #fff;
          &:active {
            background-color: var(--color-neutral-8);
          }
        }
        &.confirm {
          background-color: #29abe2;
          color: #fff;
          &:active {
            background-color: #1a86bd;
          }
        }
      }
      .left {
        flex: 1;
        .left-box {
          display: flex;
          .item {
            flex: 1;
          }
        }
      }
      .right {
        margin-left: 10px;
        width: 92px;
        .item {
          padding: 61px 0;
        }
      }
    }
  }
</style>
