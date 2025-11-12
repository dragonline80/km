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
              <button type="button" class="view-control-btn" :class="{ active: viewMode === 'grid' }"
                @click="viewMode = 'grid'">
                <GridIcon class="icon" />
              </button>
              <button type="button" class="view-control-btn" :class="{ active: viewMode === 'list' }"
                @click="viewMode = 'list'">
                <ListIcon class="icon" />
              </button>
            </div>
          </div>
        </div>

        <!-- Video Grid -->
        <div class="subscribe-video-grid" :class="viewMode">
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

        <!-- Pagination -->
        <div class="subscribe-pagination">
          <button type="button" class="pagination-btn pagination-prev">
            <ChevronLeftIcon class="icon" />
          </button>
          <div class="pagination-numbers">
            <button type="button" class="pagination-number" :class="{ active: currentPage === 1 }"
              @click="currentPage = 1">1</button>
            <button type="button" class="pagination-number" :class="{ active: currentPage === 2 }"
              @click="currentPage = 2">2</button>
            <button type="button" class="pagination-number" :class="{ active: currentPage === 3 }"
              @click="currentPage = 3">3</button>
            <button type="button" class="pagination-number" :class="{ active: currentPage === 4 }"
              @click="currentPage = 4">4</button>
            <button type="button" class="pagination-number" :class="{ active: currentPage === 5 }"
              @click="currentPage = 5">5</button>
          </div>
          <button type="button" class="pagination-btn pagination-next">
            <ChevronRightIcon class="icon" />
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ActorImage from "@/components/actor/ActorImage.vue";
import GridIcon from "@/assets/icons/icon20/grid_red.svg";
import ListIcon from "@/assets/icons/icon20/list.svg";
import ChevronLeftIcon from "@/assets/icons/icon24/chevron_left.svg";
import ChevronRightIcon from "@/assets/icons/icon24/chevron_right.svg";

const viewMode = ref("grid");
const currentPage = ref(1);
</script>
