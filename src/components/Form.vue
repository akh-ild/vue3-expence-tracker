<script setup>
import Input from './Input.vue';
import Radio from './Radio.vue';

import { addTransaction } from '@/js/addTransaction';

const { transactionName, transactionAmount, transactionType, addTransactionItem } = addTransaction();
</script>

<template>
  <div class="form">
    <div class="title">Add new transaction</div>
    <Input v-model="transactionName" label="Text" class="input" />
    <Input v-model="transactionAmount" label="Amount" type="number" class="input" />
    <div class="radio-wrapper">
      <Radio
        v-model="transactionType"
        label="Income"
        id="income"
        name="category"
        class="radio"
      />
      <Radio
        v-model="transactionType"
        label="Expense"
        id="expense"
        name="category"
        class="radio"
        />
    </div>
    <button class="button" @click="addTransactionItem">
      Add transaction
    </button>
  </div>
</template>

<style scoped>
.form {
  width: 100%;
}

.title {
  font-size: 28px;
  padding-bottom: 8px;
}

.radio-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 12px;
}

.button {
  width: 100%;
  height: 40px;
  margin-top: 12px;
  font-size: 18px;
}
</style>
