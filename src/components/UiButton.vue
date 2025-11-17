<template>
  <button
    :class="['ui-button', `ui-button--${props.layout}`]"
    :disabled="props.isDisabled"
    :type="props.type"
    :data-variant="props.layout"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout: 'primary' | 'secondary';
  isDisabled: boolean;
  type: 'submit' | 'button';
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button',
});
</script>

<style scoped>
.ui-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.ui-button--primary {
  background-color: var(--color-primary);
  color: white;
}

.ui-button--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.ui-button--secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.ui-button--secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-light);
}

.ui-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>