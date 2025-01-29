<script setup>
import Counter from './components/Counter.vue';
import History from './components/History.vue';
import Form from './components/Form.vue';
</script>

<template>
  <div>
    <div class="container">
      <div class="title">Expense tracker</div>
      <Counter />
      <History />
      <Form />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  font-size: 32px;
  margin-bottom: 16px;
}
</style>
