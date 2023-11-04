<template>
  <input
    class="input"
    type="text"
    name=""
    id=""
    required
    pattern=".{1,}"
    autofocus
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script lang="js">
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
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
