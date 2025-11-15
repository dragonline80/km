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
                <div class="my-history-comment-profile">
                  <img src="/images/my_profile_003.png" alt="commenter-profile" />
                </div>
                <div class="my-history-comment-info">
                  <div class="my-history-comment-info-header">
                    <span class="my-history-commenter-name">헬로우</span>
                    <span class="my-history-comment-time">8시간 전</span>
                  </div>
                  <p class="my-history-comment-text">
                    <a href="#" class="my-history-comment-timestamp">56:23</a>
                    내용 내용 내용
                  </p>
                  <div class="my-history-comment-actions">
                    <div class="my-history-comment-actions-control">
                      <button type="button" class="my-history-like-btn">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button" class="my-history-dislike-btn">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                      <button type="button" class="my-history-reply-btn">Reply</button>
                    </div>
                    <div class="my-history-comment-actions-replies">
                      <button type="button" class="my-history-replies-link">
                        <ChevronDownBlueIcon />
                        <span>6개 댓글</span>
                      </button>
                    </div>
                  </div>
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
                <div class="my-history-comment-profile">
                  <img src="/images/my_profile_003.png" alt="commenter-profile" />
                </div>
                <div class="my-history-comment-info">
                  <div class="my-history-comment-info-header">
                    <span class="my-history-commenter-name">헬로우</span>
                    <span class="my-history-comment-time">8시간 전</span>
                  </div>
                  <p class="my-history-comment-text">
                    <a href="#" class="my-history-comment-timestamp">56:23</a>
                    내용 내용 내용
                  </p>
                  <div class="my-history-comment-actions">
                    <div class="my-history-comment-actions-control">
                      <button type="button" class="my-history-like-btn">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button" class="my-history-dislike-btn">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                      <button type="button" class="my-history-reply-btn">Reply</button>
                    </div>
                    <div class="my-history-comment-actions-replies">
                      <button type="button" class="my-history-replies-link">
                        <ChevronDownBlueIcon />
                        <span>6개 댓글</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="my-history-more-btn">80개 더보기</button>
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
import ThumbsUp14Icon from "@/assets/icons/icon14/thumbs_up.svg";
import ThumbsDown14Icon from "@/assets/icons/icon14/thumbs_down.svg";
import ChevronDownBlueIcon from "@/assets/icons/icon14/chevron_down_blue.svg";

// No specific script logic needed for this static display
</script>
