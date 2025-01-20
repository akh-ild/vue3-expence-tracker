<script setup>
const props = defineProps({
    incomeNum: {
      type: Number,
      default: 0,
    },
    expenseNum: {
      type: Number,
      default: 0,
    },
  })
</script>

<template>
  <div class="counter">
    <div class="counter-income">
      <div class="title">Income</div>
      <div class="number">${{ props.incomeNum }}</div>
    </div>
    <div class="counter-expense">
      <div class="title">Expense</div>
      <div class="number">${{ props.expenseNum }}</div>
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
