<template>
  <section class="my-history">
    <div class="container">
      <article class="my-history-container">
        <!-- Top User Info -->
        <div class="my-history-top">
          <div class="my-history-top-avatar">
            <img src="/images/header_profile.png" alt="profile" />
          </div>
          <div class="my-history-top-info">
            <h3 class="my-history-top-name">도베르만</h3>
            <div class="my-history-top-points">600 P</div>
          </div>
        </div>

        <!-- My Comments Section -->
        <div class="my-history-section">
          <h2 class="my-history-section-title">내가쓴 댓글</h2>
          <div class="my-history-comment-list">
            <div class="my-history-comment-item" v-for="i in 1" :key="i">
              <div class="my-history-comment-video-area">
                <div class="my-history-video-thumbnail">
                  <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
                </div>
                <div class="my-history-video-details">
                  <p class="my-history-video-title">제목제목 제목제목 제목제목 제목 제목 제목제목...</p>
                  <span class="my-history-channel-name">채널이름</span>
                  <div class="my-history-video-meta">53K views • 2 weeks ago</div>
                </div>
              </div>
              <div class="my-history-comment-details-area">
                <div class="my-history-comment-header">
                  <div class="my-history-comment-profile">
                    <img src="/images/actor_profile.png" alt="commenter-profile" />
                  </div>
                  <span class="my-history-commenter-name">헬로우</span>
                  <span class="my-history-comment-time">8시간 전</span>
                </div>
                <p class="my-history-comment-text">
                  <a href="#" class="my-history-comment-timestamp">56:23</a>
                  내용 내용 내용
                </p>
                <div class="my-history-comment-actions">
                  <button type="button" class="my-history-like-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.6667 5.33333C14.6667 4.00001 13.6667 2.66667 12.3334 2.66667C11.0001 2.66667 10.0001 3.33334 9.33341 4.33334L8.00008 6.00001L6.66675 4.33334C6.00008 3.33334 5.00008 2.66667 3.66675 2.66667C2.33341 2.66667 1.33341 4.00001 1.33341 5.33333C1.33341 7.33334 3.33341 9.00001 8.00008 13.3333C12.6667 9.00001 14.6667 7.33334 14.6667 5.33333Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>203</span>
                  </button>
                  <button type="button" class="my-history-dislike-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.33341 10.6667C1.33341 12 2.33341 13.3333 3.66675 13.3333C5.00008 13.3333 6.00008 12.6667 6.66675 11.6667L8.00008 10L9.33341 11.6667C10.0001 12.6667 11.0001 13.3333 12.3334 13.3333C13.6667 13.3333 14.6667 12 14.6667 10.6667C14.6667 8.66666 12.6667 6.99999 8.00008 2.66666C3.33341 6.99999 1.33341 8.66666 1.33341 10.6667Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button type="button" class="my-history-reply-btn">Reply</button>
                  <a href="#" class="my-history-replies-link">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.00003 7.09418L10.0084 2.08584L8.83086 0.906677L5.00003 4.74001L1.17003 0.906677L-0.00830078 2.08501L5.00003 7.09418Z"
                        fill="currentColor" />
                    </svg>
                    <span>6개 댓글</span>
                  </a>
                </div>
                <div class="my-history-comment-bonus">
                  <span class="my-history-bonus-points">+100 포인트 지급</span>
                  <span class="my-history-bonus-special">특정시간언급 특별보너스 지급</span>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="my-history-more-btn">80개 더보기</button>
        </div>

        <!-- Liked Comments Section -->
        <div class="my-history-section">
          <h2 class="my-history-section-title">좋아요 누른 댓글</h2>
          <div class="my-history-comment-list">
            <div class="my-history-comment-item" v-for="i in 1" :key="i">
              <div class="my-history-comment-video-area">
                <div class="my-history-video-thumbnail">
                  <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
                </div>
                <div class="my-history-video-details">
                  <p class="my-history-video-title">제목제목 제목제목 제목제목 제목 제목 제목제목...</p>
                  <span class="my-history-channel-name">채널이름</span>
                  <div class="my-history-video-meta">53K views • 2 weeks ago</div>
                </div>
              </div>
              <div class="my-history-comment-details-area">
                <div class="my-history-comment-header">
                  <div class="my-history-comment-profile">
                    <img src="/images/actor_profile.png" alt="commenter-profile" />
                  </div>
                  <span class="my-history-commenter-name">헬로우</span>
                  <span class="my-history-comment-time">8시간 전</span>
                </div>
                <p class="my-history-comment-text">
                  <a href="#" class="my-history-comment-timestamp">56:23</a>
                  내용 내용 내용
                </p>
                <div class="my-history-comment-actions">
                  <button type="button" class="my-history-like-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.6667 5.33333C14.6667 4.00001 13.6667 2.66667 12.3334 2.66667C11.0001 2.66667 10.0001 3.33334 9.33341 4.33334L8.00008 6.00001L6.66675 4.33334C6.00008 3.33334 5.00008 2.66667 3.66675 2.66667C2.33341 2.66667 1.33341 4.00001 1.33341 5.33333C1.33341 7.33334 3.33341 9.00001 8.00008 13.3333C12.6667 9.00001 14.6667 7.33334 14.6667 5.33333Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>203</span>
                  </button>
                  <button type="button" class="my-history-dislike-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.33341 10.6667C1.33341 12 2.33341 13.3333 3.66675 13.3333C5.00008 13.3333 6.00008 12.6667 6.66675 11.6667L8.00008 10L9.33341 11.6667C10.0001 12.6667 11.0001 13.3333 12.3334 13.3333C13.6667 13.3333 14.6667 12 14.6667 10.6667C14.6667 8.66666 12.6667 6.99999 8.00008 2.66666C3.33341 6.99999 1.33341 8.66666 1.33341 10.6667Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button type="button" class="my-history-reply-btn">Reply</button>
                  <a href="#" class="my-history-replies-link">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.00003 7.09418L10.0084 2.08584L8.83086 0.906677L5.00003 4.74001L1.17003 0.906677L-0.00830078 2.08501L5.00003 7.09418Z"
                        fill="currentColor" />
                    </svg>
                    <span>6개 댓글</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="my-history-more-btn">20개 더보기</button>
        </div>

        <!-- Liked Videos Section -->
        <div class="my-history-section">
          <h2 class="my-history-section-title">좋아요 누른 영상</h2>
          <div class="my-history-video-list">
            <div class="my-history-video-item" v-for="i in 2" :key="i">
              <div class="my-history-video-thumbnail">
                <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
              </div>
              <div class="my-history-video-details">
                <p class="my-history-video-title">설명설명설명설명설명설명설명설명설명설명설명설명설...</p>
                <span class="my-history-channel-name">채널이름</span>
                <div class="my-history-video-meta">53K views • 2 weeks ago</div>
              </div>
            </div>
          </div>
          <button type="button" class="my-history-more-btn">613개 더보기</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed for this static display
</script>
