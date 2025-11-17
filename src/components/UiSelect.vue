<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    :disabled="isDisabled"
    class="ui-select"
    :data-disabled="isDisabled"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled: boolean;
  options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();
</script>

<style scoped>
.ui-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  background-color: var(--color-background);
}

.ui-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
}

.ui-select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: var(--color-background-disabled);
}
</style>