<script setup>
import Input from './Input.vue';
import Radio from './Radio.vue';

</script>

<template>
  <div class="form">
    <div class="title">Add new transaction</div>
    <Input label="Text" class="input" />
    <Input label="Amount" class="input" />
    <div class="radio-wrapper">
      <Radio label="Income" id="income" name="category" class="radio" />
      <Radio label="Expense" id="expense" name="category" class="radio" />
    </div>
    <button class="button">Add transaction</button>
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
