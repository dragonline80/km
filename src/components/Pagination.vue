<template>
  <div class="pagination-container">
    <button type="button" class="pagination-btn pagination-arrow pagination-prev">
      <ArrowLeftIcon class="icon" />
    </button>
    <div class="pagination-numbers">
      <button type="button" class="pagination-btn pagination-number" :class="{ active: currentPage === 1 }" @click="currentPage = 1">
        1
      </button>
      <button type="button" class="pagination-btn pagination-number" :class="{ active: currentPage === 2 }" @click="currentPage = 2">
        2
      </button>
      <button type="button" class="pagination-btn pagination-number" :class="{ active: currentPage === 3 }" @click="currentPage = 3">
        3
      </button>
      <button type="button" class="pagination-btn pagination-number" :class="{ active: currentPage === 4 }" @click="currentPage = 4">
        4
      </button>
      <button type="button" class="pagination-btn pagination-number" :class="{ active: currentPage === 5 }" @click="currentPage = 5">
        5
      </button>
    </div>
    <button type="button" class="pagination-btn pagination-arrow pagination-next">
      <ArrowRightIcon class="icon" />
    </button>
  </div>
</template>
<script setup>
import ArrowLeftIcon from "@/assets/icons/icon18/arrow_left.svg";
import ArrowRightIcon from "@/assets/icons/icon18/arrow_right.svg";

const currentPage = defineModel("currentPage", {
  type: Number,
  required: true,
});
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;

  .pagination-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #404040;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s;

    &.pagination-arrow {
      &:hover {
        opacity: 0.7;
      }

      .icon {
        width: 18px;
        height: 18px;
      }
    }
    &.pagination-number {
      &:hover {
        background: #3c3c3c;
      }

      &.active {
        background: #d9d9d9;
        color: #000000;
      }
    }
  }

  .pagination-numbers {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 800px) {
    padding: 0 20px 40px;
  }
}

body {
  &.light-mode {
    .pagination-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding-bottom: 40px;

      .pagination-btn {
        width: 40px;
        height: 40px;
        display: flex;
        font-size: 12px;
        align-items: center;
        justify-content: center;
        background: #404040;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        transition: all 0.2s;

        &.pagination-arrow {
          &:hover {
            opacity: 0.7;
          }

          .icon {
            width: 18px;
            height: 18px;
          }
        }
        &.pagination-number {
          &:hover {
            background: #3c3c3c;
          }

          &.active {
            background: #cdcdcd;
            color: #000000;
          }
        }
      }
    }
  }
}
</style>
