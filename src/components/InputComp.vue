<template>
  <input
    class="input"
    type="text"
    name=""
    id=""
    required
    pattern=".{1,}"
    autofocus
    v-model="localValue"
  />
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
<style lang="scss" scoped>
.input {
  font-size: 16px;
  padding: 13px 8px;
  border: none;
  border-bottom: 1px solid rgba(70, 84, 97, 1);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  background: none;
}
</style>
