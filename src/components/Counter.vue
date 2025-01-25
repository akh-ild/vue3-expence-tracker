<script setup>
import { useCounter } from '@/js/useCounter';

const { incomeSum, expenseSum } = useCounter();
</script>

<template>
  <div class="counter">
    <div class="counter-income">
      <div class="title">Income</div>
      <div class="number">${{ incomeSum }}</div>
    </div>
    <div class="counter-expense">
      <div class="title">Expense</div>
      <div class="number">${{ expenseSum }}</div>
    </div>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;
}
.counter-income, .counter-expense {
  border: 1px solid #ccc;
  padding: 12px;
  width: 50%;
}

.counter-expense {
  .number {
    color: red;
  }
}

.counter-income {
  .number {
    color: green;
  }
}

.title {
  font-size: 24px;
}
.number {
  font-size: 18px;
}
</style>
