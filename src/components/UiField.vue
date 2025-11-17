<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field__label">{{ label }}</label>
    <div class="ui-field__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ui-field__label {
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.ui-field__content {

}
</style>