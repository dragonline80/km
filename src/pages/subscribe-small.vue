<template>
  <section class="subscribe-small">
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

        <!-- Video List -->
        <div class="subscribe-video-list">
          <div class="subscribe-video-item" v-for="i in 4" :key="i">
            <div class="subscribe-video-thumbnail">
              <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
              <div v-if="false" class="subscribe-video-badge">
                <span>1</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2L7.5 4.5L10 5L8 7L8.5 9.5L6 8.5L3.5 9.5L4 7L2 5L4.5 4.5L6 2Z" fill="white" />
                </svg>
              </div>
            </div>
            <div class="subscribe-video-content">
              <p class="subscribe-video-title">제목 제목제목 제목제목 제목제목 제목제목 제목제목 제목제목...</p>
              <div class="subscribe-channel-header">
                <ActorImage class="subscribe-profile" profile-image="/images/actor_profile.png" size="sm" type="blue" />
                <div class="subscribe-channel-right">
                  <div class="subscribe-channel-info">
                    <span class="subscribe-channel-name">채널이름</span>
                    <div class="subscribe-channel-status"></div>
                  </div>
                  <div class="subscribe-video-meta">53K views • 2 weeks ago</div>
                </div>
              </div>
            </div>
            <button type="button" class="subscribe-more-btn">
              <MoreVerticalIcon class="icon" />
            </button>
          </div>
        </div>

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
import GridIcon from "@/assets/icons/icon20/group_white.svg";
import ListIcon from "@/assets/icons/icon20/list_red.svg";
import Pagination from "@/components/Pagination.vue";
import MoreVerticalIcon from "@/assets/icons/icon20/more_vertical.svg";

const viewMode = ref("grid");
const currentPage = ref(1);
</script>
