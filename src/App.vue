<script setup>
import Counter from './components/Counter.vue';
import History from './components/History.vue';
import Form from './components/Form.vue';


</script>

<template>
  <div>
    <div class="title">Expense tracker</div>
    <Counter :expense-num="380" :income-num="1400" />
    <History class="history" />
    <Form class="form" />
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
}
</style>
