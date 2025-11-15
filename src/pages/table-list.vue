<template>
  <section class="table-list">
    <div class="container">
      <article class="table-list-container">
        <header class="table-list-header">
          <div class="table-list-header-left">
            <h2 class="table-list-title">자료요청</h2>
            <span class="table-list-count">총 {{ requests.length }}건</span>
          </div>
          <button type="button" class="table-list-link">영상요청</button>
        </header>

        <div class="table-list-desktop">
          <div class="table-list-row table-list-row--head">
            <div class="table-list-cell table-list-cell--title">Title</div>
            <div class="table-list-cell table-list-cell--author">글쓴이</div>
            <div class="table-list-cell table-list-cell--status">상태</div>
            <div class="table-list-cell table-list-cell--time">업데이트</div>
          </div>
          <div class="table-list-row" v-for="(request, index) in requests" :key="index">
            <div class="table-list-cell table-list-cell--title">
              <img :src="request.avatar" :alt="`${request.author} 프로필 이미지`" class="table-list-avatar" />
              <div class="table-list-text">
                <p class="table-list-request-title">{{ request.title }}</p>
                <p class="table-list-request-desc">{{ request.description }}</p>
              </div>
            </div>
            <div class="table-list-cell table-list-cell--author">
              <span class="table-list-author">{{ request.author }}</span>
            </div>
            <div class="table-list-cell table-list-cell--status">
              <div class="table-list-status" :class="`table-list-status--${request.status}`">
                <component :is="statusIconMap[request.status]" class="status-icon" />
              </div>
            </div>
            <div class="table-list-cell table-list-cell--time">
              <span>{{ request.timeAgo }}</span>
            </div>
          </div>
        </div>

        <div class="table-list-mobile">
          <div class="table-list-card" v-for="(request, index) in requests" :key="`mo-${index}`">
            <div class="table-list-card-left">
              <img :src="request.avatar" :alt="`${request.author} 프로필 이미지`" class="table-list-card-avatar" />
              <div class="table-list-card-info">
                <div class="table-list-card-title">
                  <span>{{ request.title }}</span>
                  <div class="table-list-status" :class="`table-list-status--${request.status}`">
                    <component :is="statusIconMap[request.status]" class="status-icon" />
                  </div>
                </div>
                <p class="table-list-card-desc">{{ request.description }}</p>
              </div>
            </div>
            <div class="table-list-card-right">
              <span class="table-list-card-author">{{ request.author }}</span>
              <span class="table-list-card-time">{{ request.timeAgo }}</span>
            </div>
          </div>
        </div>

        <Pagination :current-page="currentPage" />
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

import CheckIcon from "@/assets/icons/icon20/circel_green_check.svg";
import DownloadIcon from "@/assets/icons/icon22/cricle_download.svg";
import Pagination from "@/components/Pagination.vue";

const requests = ref([
  {
    title: "요청합니다",
    description: "요청드립니다 찾기가 너무 힘드네요 ㅠ",
    author: "취취취",
    status: "completed",
    timeAgo: "3시간전",
    avatar: "/images/actor_profile.png",
  },
  {
    title: "바다상어주",
    description: "이거 영어 자막이랑 같이올려주세요 ....",
    author: "취취취",
    status: "pending",
    timeAgo: "3시간전",
    avatar: "/images/actor_user1.png",
  },
]);

const currentPage = ref(1);
const totalPages = 5;
const pages = computed(() => Array.from({ length: totalPages }, (_, index) => index + 1));

const statusIconMap = {
  completed: CheckIcon,
  pending: DownloadIcon,
};

const goToPage = (page) => {
  if (page < 1 || page > totalPages) return;
  currentPage.value = page;
};

const goPrevPage = () => {
  if (currentPage.value === 1) return;
  currentPage.value -= 1;
};

const goNextPage = () => {
  if (currentPage.value === totalPages) return;
  currentPage.value += 1;
};
</script>
