<template>
  <section class="watch-later">
    <div class="container">
      <article class="saved-video-container">
        <ArticleTitle class="saved-video-title">저장한 영상</ArticleTitle>
        <ActorList class="saved-video-list">
          <ActorItem v-for="i in 1" :key="i" videoType="time" />
        </ActorList>
      </article>
    </div>
  </section>
</template>
<script setup>
import ArticleTitle from "@/components/ArticleTitle.vue";
import ActorItem from "@/components/actor/ActorItem.vue";
import ActorList from "@/components/actor/ActorList.vue";
</script>
