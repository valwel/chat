<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.button {
  font-size: 15px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding: 13px 40px;
  background-color: rgba(81, 136, 193, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
