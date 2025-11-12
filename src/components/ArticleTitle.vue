<template>
  <h3 class="article-title"><slot /></h3>
</template>
<script setup></script>
<style lang="scss" scoped>
.article-title {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px; /* 100% */
}

@media (max-width: 800px) {
  .article-title {
    padding-left: 19px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }
}
</style>
