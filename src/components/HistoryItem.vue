<script setup>
const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'expense', // income
    },
  })
</script>

<template>
  <div :class="`history-item-${props.type}`" class="history-item">
    <div class="title">{{props.title}}</div>
    <div class="num">${{ props.num }}</div>
  </div>
</template>

<style scoped>
.history-item {
  border: 1px solid #ccc;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  border-right: 8px solid transparent;
}

.history-item-expense {
  border-right-color: red;
}

.history-item-income {
  border-right-color: green;
}

.title {
  font-size: 16px;
}
</style>
