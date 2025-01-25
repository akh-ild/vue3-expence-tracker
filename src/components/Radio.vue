<script setup>
import { ref } from 'vue';

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

const input = ref(null);

defineEmits(['update:modelValue']);
defineExpose({ input });
</script>

<template>
  <div class="radio">
    <div class="label">{{ props.label }}</div>
    <input
      ref="input"
      :value="props.id"
      type="radio"
      :id="props.id"
      :name="props.name"
      :checked="modelValue === value"
      class="input-radio"
      @input="$emit('update:modelValue', props.id)"
     />
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
