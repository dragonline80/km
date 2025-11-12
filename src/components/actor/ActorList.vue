<template>
  <div class="actor-list"><slot /></div>
</template>
<script setup></script>

<style lang="scss" scoped>
.actor-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 26px;
  column-gap: 18px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    .actor-credit-item-status {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
