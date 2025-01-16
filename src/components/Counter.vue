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
.title {
  font-size: 32px;
}
</style>
