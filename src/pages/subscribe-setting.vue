<template>
  <section class="subscribe-setting">
    <div class="container">
      <article class="subscribe-setting-container">
        <!-- Header -->
        <div class="subscribe-setting-header">
          <h2 class="subscribe-setting-title">구독 관리</h2>
        </div>

        <!-- Channel List -->
        <div class="subscribe-channel-list">
          <div class="subscribe-channel-item" v-for="(channel, index) in channels" :key="index">
            <ActorImage class="subscribe-channel-avatar" profile-image="/images/actor_profile.png" size="sm" type="blue" />
            <div class="subscribe-channel-info">
              <h3 class="subscribe-channel-name">{{ channel.name }}</h3>
              <div class="subscribe-channel-date">생성일 : {{ channel.createdAt }}</div>
              <div class="subscribe-channel-description">
                <span class="description-text">
                  설명 : {{ expandedDescriptions[index] ? channel.description : getTruncatedDescription(channel.description) }}
                </span>
                <button type="button" class="description-more-btn" v-if="channel.description.length > 40" @click="toggleDescription(index)">
                  {{ expandedDescriptions[index] ? '접기' : '...더보기' }}
                </button>
              </div>
            </div>
            <div class="subscribe-channel-actions">
              <button type="button" class="subscribe-unsubscribe-btn" v-if="index === channels.length - 1" @click="unsubscribe(index)">
                <UserXIcon class="icon" />
                <span>구독취소</span>
              </button>
              <button type="button" class="subscribe-more-btn" v-else>
                <MoreVerticalIcon class="icon" />
              </button>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="subscribe-setting-divider"></div>

        <!-- Footer Action -->
        <div class="subscribe-setting-footer">
          <button type="button" class="subscribe-reset-btn" @click="resetSubscriptions">
            구독 초기화
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ActorImage from "@/components/actor/ActorImage.vue";
import MoreVerticalIcon from "@/assets/icons/icon20/more_vertical.svg";
import UserXIcon from "@/assets/icons/icon20/user_x.svg";

const channels = ref([
  {
    name: "채널이름",
    createdAt: "2025.10.09",
    description: "설명설명설명설명설명설명설명",
  },
  {
    name: "채널이름",
    createdAt: "2025.02.09",
    description: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    name: "채널이름",
    createdAt: "2025.02.09",
    description: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    name: "채널이름",
    createdAt: "2025.02.09",
    description: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
]);

const expandedDescriptions = ref({});

const getTruncatedDescription = (description) => {
  if (description.length <= 40) return description;
  return description.substring(0, 40);
};

const toggleDescription = (index) => {
  expandedDescriptions.value[index] = !expandedDescriptions.value[index];
};

const unsubscribe = (index) => {
  // 구독 취소 로직
  console.log("Unsubscribe channel:", index);
};

const resetSubscriptions = () => {
  // 구독 초기화 로직
  console.log("Reset subscriptions");
};
</script>

