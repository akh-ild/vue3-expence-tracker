<script setup>
const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <div class="radio">
    <div class="label">{{ props.label }}</div>
    <input type="radio" :id="props.id" :name="props.name" class="input-radio" />
  </div>
</template>

<style scoped>
.radio {
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;
}

.label {
  font-size: 18px;
  margin-bottom: 4px;
}

.input-text {
  width: 100%;
  height: 40px;
}
</style>
