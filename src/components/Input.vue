<script setup>
const props = defineProps({
    label: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <div class="input">
    <div class="label">{{ props.label }}</div>
    <input type="text" />
  </div>
</template>

<style scoped>
.title {
  font-size: 32px;
}
</style>
