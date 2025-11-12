<template>
  <section class="table-post">
    <div class="container">
      <article class="table-post-container">
        <header class="table-post-header">
          <button type="button" class="table-post-back">
            <ChevronDoubleLeftIcon class="icon" />
          </button>
          <div class="table-post-profile">
            <img src="/images/actor_user1.png" alt="도베르만 프로필 이미지" class="table-post-avatar" />
            <div class="table-post-profile-info">
              <span class="table-post-name">도베르만</span>
              <span class="table-post-point">600 P</span>
            </div>
          </div>
        </header>

        <div class="table-post-divider"></div>

        <section class="table-post-body">
          <h2 class="table-post-title">영상 요청</h2>

          <form class="table-post-form">
            <label class="table-post-field">
              <span class="table-post-label">제목</span>
              <input type="text" placeholder="" />
            </label>

            <label class="table-post-field">
              <span class="table-post-label">내용</span>
              <textarea rows="6" placeholder=""></textarea>
            </label>

            <p class="table-post-notice">영상요청시 -500 P 가 소모됩니다</p>

            <div class="table-post-actions">
              <button type="button" class="table-post-btn table-post-btn--cancel">Cancel</button>
              <button type="button" class="table-post-btn table-post-btn--confirm">OK</button>
            </div>
          </form>
        </section>
      </article>
    </div>
  </section>
</template>

<script setup>
import ChevronDoubleLeftIcon from "@/assets/icons/icon48/chevron_right.svg";
</script>


