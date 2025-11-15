<template>
  <section class="subscribe-big">
    <div class="container">
      <article class="subscribe-container">
        <!-- Header -->
        <div class="subscribe-header">
          <h2 class="subscribe-title">구독</h2>
          <div class="subscribe-header-right">
            <span class="subscribe-management-text">구독관리</span>
            <div class="view-controls">
              <button type="button" class="view-control-btn" :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">
                <GridIcon class="icon" />
              </button>
              <button type="button" class="view-control-btn" :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">
                <ListIcon class="icon" />
              </button>
            </div>
          </div>
        </div>

        <!-- Video Grid -->
        <div v-if="false" class="subscribe-video-grid" :class="viewMode">
          <div class="subscribe-video-card" v-for="i in 8" :key="i">
            <div class="subscribe-video-thumbnail">
              <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
              <div class="subscribe-video-badge">
                <span>1위</span>
              </div>
              <ActorImage class="subscribe-profile" profile-image="/images/actor_profile.png" size="sm" type="blue" />
            </div>
            <div class="subscribe-video-content">
              <div class="subscribe-video-header">
                <div class="subscribe-channel-info">
                  <span class="subscribe-channel-name">채널이름</span>
                  <div class="subscribe-channel-status"></div>
                </div>
              </div>
              <p class="subscribe-video-title">타이틀 타이틀 타이틀 타이틀 타이틀 타이 틀 타이틀 타이틀..</p>
              <div class="subscribe-video-meta">53K views • 2 weeks ago</div>
            </div>
          </div>
        </div>
        <ActorList class="subscribe-video-list">
          <ActorItem v-for="i in 8" :key="i" videoType="ranking" />
        </ActorList>

        <!-- Pagination -->
        <div class="subscribe-pagination">
          <Pagination :current-page="currentPage" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ActorImage from "@/components/actor/ActorImage.vue";
import ActorList from "@/components/actor/ActorList.vue";
import ActorItem from "@/components/actor/ActorItem.vue";
import GridIcon from "@/assets/icons/icon20/group_red.svg";
import ListIcon from "@/assets/icons/icon20/list_white.svg";
import Pagination from "@/components/Pagination.vue";

const viewMode = ref("grid");
const currentPage = ref(1);
</script>
