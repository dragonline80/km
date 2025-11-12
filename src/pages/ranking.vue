<template>
  <section class="ranking">
    <div class="container">
      <article class="ranking-video-container">
        <div class="category-container">
          <div class="category-list">
            <button type="button" class="category-item active">
              <span class="category-item-title">전체</span>
            </button>
            <button type="button" class="category-item" v-for="i in 20" :key="i">
              <span class="category-item-title">{{ 2026 - i }}</span>
            </button>
          </div>
          <button type="button" class="category-arrow-right-icon">
            <ChevronRightIcon class="icon" />
          </button>
        </div>
        <ActorList class="ranking-video-list">
          <ActorItem v-for="i in 15" :key="i" videoType="ranking" />
        </ActorList>
      </article>
    </div>
  </section>
</template>
<script setup>
import ActorList from "@/components/actor/ActorList.vue";
import ActorItem from "@/components/actor/ActorItem.vue";
import ChevronRightIcon from "@/assets/icons/icon48/chevron_right.svg";
</script>
