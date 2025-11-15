<template>
  <div class="actor-credit-item">
    <div class="actor-credit-item-image">
      <div class="actor-credit-item-image-container">
        <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
        <div class="actor-credit-item-image-badge" v-if="videoType === 'ranking'">
          <span>1위</span>
        </div>
        <div class="actor-credit-item-image-time" v-if="videoType === 'time'">
          <span>7 min</span>
        </div>
      </div>
    </div>
    <div class="actor-credit-item-content">
      <ActorImage class="actor-profile" profile-image="/images/actor_profile.png" size="sm" type="blue" />
      <div class="actor-credit-item-title-container">
        <h4 class="actor-credit-item-title">채널이름</h4>
        <div class="actor-credit-item-status"></div>
      </div>
      <div class="actor-credit-item-description-container">
        <p class="actor-credit-item-description">
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
        </p>
      </div>
      <div class="actor-credit-item-view-info">53K views • 2 weeks ago</div>
    </div>
  </div>
</template>
<script setup>
import ActorImage from "@/components/actor/ActorImage.vue";

defineProps({
  videoType: {
    type: String,
    default: "none",
  },
});
</script>
<style lang="scss" scoped>
.actor-credit-item {
  border-radius: 20px;
  overflow: hidden;
  background: #242730;

  .actor-credit-item-image {
    width: 100%;

    aspect-ratio: 52/35;
    .actor-credit-item-image-container {
      position: relative;
      height: min-content;

      .actor-credit-item-image-badge {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 74px;
        height: 74px;
        background: #ff5f57;
        clip-path: polygon(0 75%, 0 0, 100% 100%, 25% 100%);

        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: inline-block;
          width: 30px;
          transform: translate(-35%, 50%);
          color: #fff;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 13px;
          font-weight: 700;
          line-height: 26px; /* 200% */
          letter-spacing: 0.3px;
        }
      }
      .actor-credit-item-image-time {
        position: absolute;
        left: 8px;
        bottom: 8px;
        background: rgb(36 39 48 / 50%);
        border-radius: 12px;
        padding: 0px 8px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          color: #fff;
          font-size: 10px;
          font-weight: 500;
          line-height: 10px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
  .actor-credit-item-content {
    position: relative;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;

    .actor-profile {
      position: absolute;
      top: 0;
      right: 20px;
      transform: translateY(-45%);
    }
    .actor-credit-item-title-container {
      display: flex;
      align-items: center;
      gap: 48px;
      padding-bottom: 12px;

      .actor-credit-item-title {
        color: #b7b9d2;
        font-size: 13px;
        line-height: 13px; /* 100% */
        letter-spacing: 0.5px;
      }
      .actor-credit-item-status {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #22b07d;
      }
    }

    .actor-credit-item-description-container {
      padding-bottom: 16px;
      .actor-credit-item-description {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.3px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .actor-credit-item-view-info {
      color: #808191;
      font-size: 12px;
      line-height: 12px; /* 100% */
      letter-spacing: 0.5px;
    }

    @media (max-width: 1200px) {
      .actor-credit-item-status {
        display: none;
      }
    }
    @media (max-width: 450px) {
      .actor-credit-item-title-container {
        order: 1;
        padding-bottom: 8px;
      }
      .actor-credit-item-description-container {
        order: 3;
        padding-bottom: 0;
      }
      .actor-credit-item-view-info {
        order: 2;
        padding-bottom: 8px;
      }
    }
  }
}

body {
  &.light-mode {
    .actor-credit-item-content {
      .actor-credit-item-title-container {
        .actor-credit-item-title {
          color: #0f1023;
        }
      }

      .actor-credit-item-description-container {
        .actor-credit-item-description {
          color: #000;
        }
      }
    }
  }
}
</style>
