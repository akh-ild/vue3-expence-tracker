<script setup>
import HistoryItem from './HistoryItem.vue';
import { useTransaction } from '@/js/useTransaction';

const { transactionList } = useTransaction();
</script>

<template>
  <div class="history">
    <div class="title">History</div>
    <div v-if="transactionList.length" class="list">
      <HistoryItem
        v-for="item in transactionList"
        :key="item.title"
        :title="item.title"
        :num="item.num"
        :type="item.type"
        class="item"
      />
    </div>
    <div v-else>No transactions yet</div>
  </div>
</template>

<style scoped>
.history {
  width: 100%;
  padding-bottom: 12px;
}
.title {
  font-size: 28px;
  padding-bottom: 8px;
}
</style>
