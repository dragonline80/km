<template>
  <div class="video-item">
    <div class="video-item-image">
      <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
      <div class="video-item-image-time">
        <span>7 min</span>
      </div>
    </div>
    <div class="video-item-content">
      <div class="video-item-header">
        <p class="video-item-title">타이틀 타이틀 타이틀 타이틀 타이틀 타이틀</p>
        <p class="video-item-actor">하이라이트</p>
      </div>
      <div class="video-item-footer">
        <p class="video-item-view-info">53K views • 2 weeks ago</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.video-item {
  display: flex;
  gap: 4px;
  background: #242730;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  padding: 3px 4px;

  .video-item-image {
    position: relative;
    width: 153px;
    height: 103px;
    aspect-ratio: 153/103;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-item-image-time {
      position: absolute;
      right: 8px;
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

  .video-item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 8px;

    .video-item-header {
      .video-item-title {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.3px;
        word-break: keep-all;
      }
      .video-item-actor {
        color: #b7b9d2;
        font-size: 10px;
        font-weight: 400;
        line-height: 13px; /* 130% */
        letter-spacing: 0.5px;
      }
    }

    .video-item-footer {
      .video-item-view-info {
        color: #808191;
        font-size: 9px;
        line-height: 12px; /* 133.333% */
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>
