<script setup>
import Input from './Input.vue';

</script>

<template>
  <div class="form">
    <div class="title">Add new transaction</div>
    <Input label="Text" class="input" />
    <Input label="Amount" class="input" />
    <button class="button">Add transaction</button>
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
}
</style>
