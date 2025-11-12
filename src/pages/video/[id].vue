<template>
  <section class="video-detail">
    <div class="container" ref="$container">
      <div class="video-content-container">
        <div class="video-container">
          <div class="video-content">
            <img src="/images/video_thumbnail.png" alt="video-thumbnail" />
          </div>
          <div class="video-control-container" ref="$videoControlContainer">
            <div class="video-timeline">
              <div class="video-timeline-progress"></div>
            </div>
            <div class="video-control">
              <div class="video-timeline-time">
                <span>17:34</span>
                <span>/</span>
                <span>59:32</span>
              </div>
              <div class="video-timeline-control-buttons">
                <button type="button">
                  <VolumeUpIcon class="icon" />
                </button>
                <button type="button">
                  <FilterIcon class="icon" />
                </button>
                <button type="button">
                  <CategoryIcon class="icon" />
                </button>
              </div>
            </div>
          </div>

          <div class="video-info">
            <h3 class="video-title">타이틀 타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀</h3>
            <p class="video-title-view-info">
              <span>5.1K views • 2 weeks ago</span>
              <button type="button">...더보기</button>
            </p>

            <div class="video-info-content">
              <div class="actor-profile">
                <ActorImage profile-image="/images/actor_profile.png" size="sm" type="blue" />
                <p class="actor-name">하이라이트</p>
              </div>
              <div class="video-info-buttons">
                <div class="video-info-thumbs-buttons">
                  <button type="button">
                    <ThumbsUp19Icon class="icon" />
                    <span>5.1K</span>
                  </button>
                  <div class="video-info-thumbs-buttons-divider"></div>
                  <button type="button">
                    <ThumbsDown19Icon class="icon" />
                  </button>
                </div>
                <button type="button" class="video-info-bookmark-button">
                  <BookmarkIcon class="icon" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            <div class="video-description">
              <p class="video-description-view-info">222,952 views 9 hours ago</p>
              <p class="video-description-content">
                <span>
                  나이제한 6세 <br />
                  수렵의 날에 생긴일
                </span>
                <button type="button" class="video-description-more">...더보기</button>
              </p>
            </div>

            <div class="video-comment-container" @click="open">
              <p class="video-comment-text">Comments <span>157</span></p>
              <div class="video-comment-profile">
                <CommentProfileImage profile-image="/images/actor_profile.png" size="24px" />
                <p class="video-comment-profile-text">
                  2:39 여기가 진정한 하이라이트 <br />
                  닌까 여기부터
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="video-tablet-container">
          <VideoItem v-for="i in 6" :key="i" />
        </div>
        <div class="video-moblie-container">
          <ActorList class="actor-list">
            <ActorItem v-for="i in 6" :key="i" />
          </ActorList>
        </div>
        <div class="comment-container">
          <div class="comment-header">
            <div class="comment-view-info">
              <p class="comment-view-info-text">550 Comments</p>
              <button type="button" class="comment-view-info-sort-button">
                <BarChart2Icon class="icon" />
                <span>Sort by</span>
              </button>
            </div>
            <div class="comment-create">
              <CommentProfileImage profile-image="/images/header_profile.png" class="comment-create-profile" />
              <div class="comment-create-input">
                <input type="text" placeholder="댓글을 입력하세요" />
              </div>
            </div>
          </div>
          <div class="comment-content">
            <div class="comment-list">
              <!-- NOTE: 단일 댓글 -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@헬로우</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span class="comment-content-item-time">56:25</span>
                      <span> 여기 두더지</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                </div>
              </div>
              <!-- NOTE: 하위 댓글 포함 (닫힘) -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user2.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@훈선생</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span> 두더지 토끼</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                  <div class="comment-children">
                    <div class="comment-children-view">
                      <ChevronDownBlueIcon class="icon" />
                      <span>6개 댓글</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- NOTE: 하위 댓글 포함 (열림) -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user2.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@훈선생</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span class="comment-content-item-time">26:23</span>
                      <span> 내용내용</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>201</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                  <div class="comment-children">
                    <div class="comment-children-view active">
                      <ChevronDownBlueIcon class="icon" />
                      <span>2개 댓글</span>
                    </div>
                    <div class="comment-list">
                      <div class="comment-item">
                        <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                        <div class="comment-info">
                          <div class="comment-item-header">
                            <p class="comment-item-header-name">@헬로우</p>
                            <p class="comment-item-header-time">8시간 전</p>
                          </div>
                          <div class="comment-item-content">
                            <span class="comment">
                              <span> 감사합니다</span>
                            </span>
                          </div>
                          <div class="comment-item-footer">
                            <div class="video-info-thumbs-buttons">
                              <button type="button">
                                <ThumbsUp14Icon class="icon" />
                                <span>1</span>
                              </button>
                              <button type="button">
                                <ThumbsDown14Icon class="icon" />
                              </button>
                            </div>
                            <button type="button" class="comment-item-reply-button">Reply</button>
                          </div>
                        </div>
                      </div>
                      <div class="comment-item">
                        <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                        <div class="comment-info">
                          <div class="comment-item-header">
                            <p class="comment-item-header-name">@헬로우</p>
                            <p class="comment-item-header-time">8시간 전</p>
                          </div>
                          <div class="comment-item-content">
                            <span class="comment">
                              <span> 감사요</span>
                            </span>
                          </div>
                          <div class="comment-item-footer">
                            <div class="video-info-thumbs-buttons">
                              <button type="button">
                                <ThumbsUp14Icon class="icon" />
                                <span>1</span>
                              </button>
                              <button type="button">
                                <ThumbsDown14Icon class="icon" />
                              </button>
                            </div>
                            <button type="button" class="comment-item-reply-button">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-related-container">
        <VideoItem v-for="i in 15" :key="i" />
      </div>
    </div>
    <SwipeModal
      ref="$swipeModal"
      v-model="isOpen"
      :snap-point="bottomSheetState.snapPoint"
      :is-backdrop="false"
      :is-scrollLock="true"
      :style="{ maxHeight: bottomSheetState.maxHeight }"
    >
      <div class="swipe-modal-content" @click.stop :style="{ height: height + 'px' }">
        <div class="comment-container">
          <div class="comment-header">
            <div class="comment-view-info">
              <p class="comment-text">Comments <span>157</span></p>
            </div>
          </div>
          <div class="comment-create">
            <CommentProfileImage profile-image="/images/header_profile.png" class="comment-create-profile" />
            <div class="comment-create-input">
              <input type="text" placeholder="댓글을 입력하세요" />
            </div>
          </div>
          <div class="comment-content">
            <div class="comment-list">
              <!-- NOTE: 단일 댓글 -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@헬로우</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span class="comment-content-item-time">56:25</span>
                      <span> 여기 두더지</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                </div>
              </div>
              <!-- NOTE: 하위 댓글 포함 (닫힘) -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user2.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@훈선생</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span> 두더지 토끼</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>203</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                  <div class="comment-children">
                    <div class="comment-children-view">
                      <ChevronDownBlueIcon class="icon" />
                      <span>6개 댓글</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- NOTE: 하위 댓글 포함 (열림) -->
              <div class="comment-item">
                <CommentProfileImage profile-image="/images/actor_user2.png" class="comment-profile" />
                <div class="comment-info">
                  <div class="comment-item-header">
                    <p class="comment-item-header-name">@훈선생</p>
                    <p class="comment-item-header-time">8시간 전</p>
                  </div>
                  <div class="comment-item-content">
                    <span class="comment">
                      <span class="comment-content-item-time">26:23</span>
                      <span> 내용내용</span>
                    </span>
                  </div>
                  <div class="comment-item-footer">
                    <div class="video-info-thumbs-buttons">
                      <button type="button">
                        <ThumbsUp14Icon class="icon" />
                        <span>201</span>
                      </button>
                      <button type="button">
                        <ThumbsDown14Icon class="icon" />
                      </button>
                    </div>
                    <button type="button" class="comment-item-reply-button">Reply</button>
                  </div>
                  <div class="comment-children">
                    <div class="comment-children-view active">
                      <ChevronDownBlueIcon class="icon" />
                      <span>2개 댓글</span>
                    </div>
                    <div class="comment-list">
                      <div class="comment-item">
                        <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                        <div class="comment-info">
                          <div class="comment-item-header">
                            <p class="comment-item-header-name">@헬로우</p>
                            <p class="comment-item-header-time">8시간 전</p>
                          </div>
                          <div class="comment-item-content">
                            <span class="comment">
                              <span> 감사합니다</span>
                            </span>
                          </div>
                          <div class="comment-item-footer">
                            <div class="video-info-thumbs-buttons">
                              <button type="button">
                                <ThumbsUp14Icon class="icon" />
                                <span>1</span>
                              </button>
                              <button type="button">
                                <ThumbsDown14Icon class="icon" />
                              </button>
                            </div>
                            <button type="button" class="comment-item-reply-button">Reply</button>
                          </div>
                        </div>
                      </div>
                      <div class="comment-item">
                        <CommentProfileImage profile-image="/images/actor_user1.png" class="comment-profile" />
                        <div class="comment-info">
                          <div class="comment-item-header">
                            <p class="comment-item-header-name">@헬로우</p>
                            <p class="comment-item-header-time">8시간 전</p>
                          </div>
                          <div class="comment-item-content">
                            <span class="comment">
                              <span> 감사요</span>
                            </span>
                          </div>
                          <div class="comment-item-footer">
                            <div class="video-info-thumbs-buttons">
                              <button type="button">
                                <ThumbsUp14Icon class="icon" />
                                <span>1</span>
                              </button>
                              <button type="button">
                                <ThumbsDown14Icon class="icon" />
                              </button>
                            </div>
                            <button type="button" class="comment-item-reply-button">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwipeModal>
  </section>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import ActorImage from "@/components/actor/ActorImage.vue";
import ThumbsUp19Icon from "@/assets/icons/icon19/thumbs_up.svg";
import ThumbsDown19Icon from "@/assets/icons/icon19/thumbs_down.svg";
import BookmarkIcon from "@/assets/icons/icon19/bookmark.svg";
import BarChart2Icon from "@/assets/icons/icon24/bar_chart2.svg";
import VideoItem from "@/components/video/VideoItem.vue";
import CommentProfileImage from "@/components/comment/CommentProfileImage.vue";
import ThumbsUp14Icon from "@/assets/icons/icon14/thumbs_up.svg";
import ThumbsDown14Icon from "@/assets/icons/icon14/thumbs_down.svg";
import ChevronDownBlueIcon from "@/assets/icons/icon14/chevron_down_blue.svg";
import VolumeUpIcon from "@/assets/icons/icon20/volume_up.svg";
import FilterIcon from "@/assets/icons/icon20/filter.svg";
import CategoryIcon from "@/assets/icons/icon20/category.svg";
import ActorList from "@/components/actor/ActorList.vue";
import ActorItem from "@/components/actor/ActorItem.vue";

import SwipeModal from "@takuma-ru/vue-swipe-modal";
const isOpen = ref(false);
const $container = ref(null);
const $videoControlContainer = ref(null);
const $swipeModal = ref(null);
const height = ref(0);
let animationFrameId = null;

const bottomSheetState = reactive({
  snapPoint: "auto",
  maxHeight: "100%",
});
const open = () => {
  isOpen.value = true;

  let containerTop = 0;

  if ($container.value) {
    containerTop = $container.value.getBoundingClientRect().top;
    bottomSheetState.maxHeight = `calc(100% - ${containerTop}px)`;
  }

  if ($videoControlContainer.value) {
    const rect = $videoControlContainer.value.getBoundingClientRect();
    bottomSheetState.snapPoint = `calc(100% - ${rect.bottom - containerTop}px)`;
  }
};

function watchBottom() {
  const rect = $swipeModal.value.$el.getBoundingClientRect();
  const safeHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const currentHeight = safeHeight - rect.top - 36;
  if (currentHeight !== height.value) {
    height.value = currentHeight;
  }
  animationFrameId = requestAnimationFrame(watchBottom);
}

onMounted(() => {
  watchBottom();
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>
<style lang="scss" scoped>
:deep(.swipe-modal) {
  &.modal-style {
    border-radius: 0;
  }
}
</style>
