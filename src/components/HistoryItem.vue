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
  <div class="history">
    <div class="title">{{props.title}}</div>
    <div class="num">${{ props.num }}</div>
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
}
</style>
