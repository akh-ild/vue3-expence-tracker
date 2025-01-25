<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: '',
    },
})

const input = ref(null);

defineEmits(['update:modelValue']);
defineExpose({ input });
</script>

<template>
  <div class="input">
    {{ message }}
    <div class="label">{{ props.label }}</div>
    <input
      ref="input"
      :value="modelValue"
      :type="type"
      class="input-field"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.input {
  width: 100%;
}

.label {
  font-size: 18px;
  margin-bottom: 4px;
}

.input-field {
  width: 100%;
  height: 40px;
  padding: 4px 12px;
}
</style>
