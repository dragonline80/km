<template>
  <section class="my-profile">
    <div class="container">
      <article class="my-profile-container">
        <!-- Top User Info -->
        <div class="my-profile-top">
          <div class="my-profile-top-avatar">
            <img src="/images/header_profile.png" alt="profile" />
          </div>
          <div class="my-profile-top-info">
            <h3 class="my-profile-top-name">도베르만</h3>
            <div class="my-profile-top-points">600 P</div>
          </div>
        </div>

        <!-- Profile Change Section -->
        <div class="my-profile-section">
          <div class="my-profile-section-divider"></div>
          <div class="my-profile-section-header">
            <h2 class="my-profile-section-title">프로필 변경</h2>
          </div>

          <div class="my-profile-section-content">
            <div class="my-profile-image-section">
              <div class="my-profile-current-image">
                <img src="/images/header_profile.png" alt="current profile" />
              </div>
              <div class="my-profile-image-actions">
                <button type="button" class="my-profile-attach-btn" @click="handleAttachImage">
                  이미지 첨부
                </button>
                <div class="my-profile-avatar-grid">
                  <button
                    type="button"
                    class="my-profile-avatar-item"
                    v-for="(avatar, index) in avatars"
                    :key="index"
                    :class="{ active: selectedAvatar === index }"
                    @click="selectAvatar(index)"
                  >
                    <img :src="avatar" alt="avatar" />
                  </button>
                </div>
              </div>
            </div>

            <div class="my-profile-form-section">
              <div class="my-profile-form-group">
                <label class="my-profile-form-label">닉네임</label>
                <input
                  type="text"
                  class="my-profile-form-input"
                  v-model="nickname"
                  placeholder="닉네임"
                />
              </div>
              <div class="my-profile-form-group">
                <label class="my-profile-form-label">아이디(변경불가)</label>
                <input
                  type="text"
                  class="my-profile-form-input disabled"
                  v-model="userId"
                  disabled
                  placeholder="아이디"
                />
              </div>
              <div class="my-profile-form-actions">
                <button type="button" class="my-profile-btn-cancel" @click="handleCancelProfile">
                  Cancel
                </button>
                <button type="button" class="my-profile-btn-ok" @click="handleSaveProfile">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Password Change Section -->
        <div class="my-profile-section">
          <div class="my-profile-section-divider"></div>
          <div class="my-profile-section-header">
            <h2 class="my-profile-section-title">비밀번호 변경</h2>
          </div>

          <div class="my-profile-section-content">
            <div class="my-profile-form-section">
              <div class="my-profile-form-group">
                <label class="my-profile-form-label">현재 비밀번호</label>
                <input
                  type="password"
                  class="my-profile-form-input"
                  v-model="currentPassword"
                  placeholder="현재 비밀번호"
                />
              </div>
              <div class="my-profile-form-group">
                <label class="my-profile-form-label">변경할 비밀번호</label>
                <input
                  type="password"
                  class="my-profile-form-input"
                  v-model="newPassword"
                  placeholder="변경할 비밀번호"
                />
              </div>
              <div class="my-profile-form-group">
                <label class="my-profile-form-label">변경할 비밀번호 재입력</label>
                <input
                  type="password"
                  class="my-profile-form-input"
                  v-model="confirmPassword"
                  placeholder="변경할 비밀번호 재입력"
                />
              </div>
              <div class="my-profile-form-actions">
                <button type="button" class="my-profile-btn-cancel" @click="handleCancelPassword">
                  Cancel
                </button>
                <button type="button" class="my-profile-btn-ok" @click="handleSavePassword">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Deletion Section -->
        <div class="my-profile-section">
          <div class="my-profile-section-divider"></div>
          <div class="my-profile-section-content">
            <div class="my-profile-form-section">
              <div class="my-profile-form-actions">
                <button type="button" class="my-profile-btn-delete" @click="handleDeleteAccount">
                  계정삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const nickname = ref("도베르만");
const userId = ref("sddee123");
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const selectedAvatar = ref(0);

const avatars = ref([
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
  "/images/header_profile.png",
]);

const selectAvatar = (index) => {
  selectedAvatar.value = index;
};

const handleAttachImage = () => {
  console.log("Attach image");
};

const handleCancelProfile = () => {
  console.log("Cancel profile");
};

const handleSaveProfile = () => {
  console.log("Save profile", { nickname: nickname.value, avatar: selectedAvatar.value });
};

const handleCancelPassword = () => {
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
};

const handleSavePassword = () => {
  console.log("Save password");
};

const handleDeleteAccount = () => {
  console.log("Delete account");
};
</script>

