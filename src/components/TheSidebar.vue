<template>
  <div>
    <!-- 사이드바 -->
    <div class="sidebar-overlay" :class="{ active: isMobileSidebarOpen }" @click="closeMobileSidebar"></div>
    <nav class="sidebar" :class="{ collapsed: isCollapsed, 'mobile-open': isMobileSidebarOpen }">
      <div class="sidebar-header-desktop">
        <button type="button" class="sidebar-toggle" @click="toggleSidebar">
          <SidebarToggleIcon class="icon" />
        </button>
        <h1 class="sidebar-title" v-show="!isCollapsed">Max</h1>
      </div>
      <div class="sidebar-header-mobile">
        <CommentProfileImage profileImage="/images/header_profile.png" size="54px" class="sidebar-profile-image" />
        <div class="sidebar-profile-container">
          <div class="sidebar-profile">
            <p class="sidebar-profile-name">만수르</p>
            <button class="sidebar-profile-change-password" type="button">비밀번호 변경</button>
          </div>
        </div>
      </div>
      <div class="sidebar-group">
        <div class="sidebar-group-item">
          <p class="sidebar-group-item-title" v-show="!isCollapsed">MENU</p>
          <div class="sidebar-menu">
            <button type="button" class="sidebar-menu-item active">
              <div class="sidebar-menu-item-icon">
                <HomeIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">홈</span>
            </button>
            <button type="button" class="sidebar-menu-item">
              <div class="sidebar-menu-item-icon">
                <ArrowRightIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">순위</span>
            </button>
            <button type="button" class="sidebar-menu-item">
              <div class="sidebar-menu-item-icon">
                <DownloadIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">나중에 볼영상</span>
            </button>
            <button type="button" class="sidebar-menu-item">
              <div class="sidebar-menu-item-icon">
                <PaperDonwloadIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">구독</span>
            </button>
          </div>
        </div>
        <div class="sidebar-group-item">
          <p class="sidebar-group-item-title" v-show="!isCollapsed">CATEGORY</p>
          <div class="sidebar-menu">
            <button type="button" class="sidebar-menu-item">
              <div class="sidebar-menu-item-icon">
                <HomeIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">자막 요청</span>
            </button>
            <button type="button" class="sidebar-menu-item">
              <div class="sidebar-menu-item-icon">
                <HomeIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">도움말</span>
            </button>
            <button type="button" class="sidebar-menu-item login">
              <div class="sidebar-menu-item-icon">
                <LogoutIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">로그아웃</span>
            </button>
            <button type="button" class="sidebar-menu-item logout">
              <div class="sidebar-menu-item-icon">
                <LogoutIcon class="icon" />
              </div>
              <span class="sidebar-menu-item-title" v-show="!isCollapsed">로그인</span>
            </button>
          </div>
        </div>
      </div>
      <div class="sidebar-footer" v-show="!isCollapsed && !isMobileSidebarOpen">
        <button type="button" class="night-mode-toggle" @click="toggleTheme">
          <div class="toggle-switch">
            <div class="toggle-track" :class="{ active: isDarkMode }">
              <div class="toggle-thumb"></div>
            </div>
          </div>
          <span class="toggle-label">{{ isDarkMode ? "Night mode" : "Light mode" }}</span>
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref, inject } from "vue";

import SidebarToggleIcon from "@/assets/icons/icon48/align_justify.svg";
import HomeIcon from "@/assets/icons/icon16/home.svg";
import DownloadIcon from "@/assets/icons/icon16/download.svg";
import PaperDonwloadIcon from "@/assets/icons/icon16/paper_download.svg";
import ArrowRightIcon from "@/assets/icons/icon12/arrow_right.svg";
import CommentProfileImage from "@/components/comment/CommentProfileImage.vue";
import LogoutIcon from "@/assets/icons/icon19/logout.svg";
import { useRouter } from "vue-router";
import { useTheme } from "@/composables/useTheme";

const isCollapsed = ref(false);
const { isMobileSidebarOpen, closeMobileSidebar } = inject("sidebar");
const { isDarkMode, toggleTheme } = useTheme();

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>
