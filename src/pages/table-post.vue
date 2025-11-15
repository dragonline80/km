<template>
  <section class="table-post">
    <div class="container">
      <article class="table-post-container">
        <!-- Back Button -->

        <!-- Top User Info -->
        <div class="table-post-top">
          <h2 class="table-post-title">영상 요청</h2>
          <div class="table-post-top-content">
            <div class="table-post-top-avatar">
              <img src="/images/my_profile_small.png" alt="profile" />
            </div>
            <div class="table-post-top-info">
              <h3 class="table-post-top-name">도베르만</h3>
              <div class="table-post-top-points">600 P</div>
            </div>
          </div>
          <button type="button" class="table-post-back" @click="handleBack">
            <ChevronDoubleLeft48Icon class="icon icon-48" />
            <ChevronDoubleLeft32Icon class="icon icon-32" />
          </button>
        </div>

        <!-- Section -->
        <div class="table-post-section">
          <div class="table-post-section-divider"></div>

          <div class="table-post-section-content">
            <h2 class="table-post-title-mobile">영상 요청</h2>

            <form class="table-post-form">
              <div class="table-post-form-group">
                <label class="table-post-form-label">제목</label>
                <input type="text" class="table-post-form-input" v-model="title" placeholder="" />
              </div>

              <div class="table-post-form-group">
                <label class="table-post-form-label">내용</label>
                <textarea class="table-post-form-textarea" v-model="content" rows="6" placeholder=""></textarea>
              </div>

              <p class="table-post-notice">영상요청시 -500 P 가 소모됩니다</p>

              <div class="table-post-form-actions">
                <button type="button" class="table-post-btn-cancel" @click="handleCancel">Cancel</button>
                <button type="button" class="table-post-btn-ok" @click="handleSubmit">OK</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChevronDoubleLeft48Icon from "@/assets/icons/icon48/double_chevrons_left.svg";
import ChevronDoubleLeft32Icon from "@/assets/icons/icon32/double_chevrons_left.svg";

const title = ref("");
const content = ref("");

const handleBack = () => {
  console.log("Back");
};

const handleCancel = () => {
  console.log("Cancel");
};

const handleSubmit = () => {
  console.log("Submit", { title: title.value, content: content.value });
};
</script>
