<script setup>
import HistoryItem from './HistoryItem.vue';

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
  <div class="history">
    <div class="title">History</div>
    <div class="list">
      <HistoryItem title="Sneakers" num="200" type="expense" class="item" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
}
</style>
