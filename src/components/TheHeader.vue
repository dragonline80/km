<template>
  <header class="header">
    <div class="container">
      <!-- Desktop Header -->
      <div class="header-desktop">
        <div class="header-left search-container">
          <input type="text" class="search-input" placeholder="Search" />
          <div class="search-icon">
            <Search12Icon class="icon" />
          </div>
        </div>
        <div class="header-right">
          <div class="profile-container" @click="toggleProfileDropdown">
            <div class="profile-image">
              <img src="/images/header_profile.png" alt="profile" />
            </div>
            <span class="profile-name">도베르만</span>
            <div class="profile-icon">
              <ChevronUpIcon v-if="isProfileDropdownOpen" class="icon" />
              <ChevronDownIcon v-else class="icon" />
            </div>
            <!-- Profile Dropdown Menu -->
            <div class="profile-dropdown" v-if="isProfileDropdownOpen">
              <div class="profile-dropdown-menu">
                <button type="button" class="profile-dropdown-item" @click="handleMenuClick('personal')">
                  <span class="menu-text">개인정보</span>
                  <SettingIcon class="menu-icon" />
                </button>
                <button type="button" class="profile-dropdown-item" @click="handleMenuClick('activity')">
                  <span class="menu-text">활동내역</span>
                  <NotificationIcon class="menu-icon" />
                </button>
                <button type="button" class="profile-dropdown-item" @click="handleMenuClick('logout')">
                  <span class="menu-text">로그아웃</span>
                  <LogoutIcon class="menu-icon" />
                </button>
              </div>
            </div>
          </div>
          <div class="notification-icon call">
            <NotificationIcon class="icon" />
          </div>
        </div>
      </div>

      <!-- Mobile Header -->
      <div class="header-mobile">
        <button type="button" class="menu-icon" @click="toggleMobileSidebar">
          <MenuIcon class="icon" />
        </button>
        <div class="logo">Max</div>
        <div class="search-icon">
          <Search20Icon class="icon" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { inject } from "vue";
import Search12Icon from "@/assets/icons/icon12/search.svg";
import Search20Icon from "@/assets/icons/icon20/search.svg";
import ChevronDownIcon from "@/assets/icons/icon20/chevron_down.svg";
import ChevronUpIcon from "@/assets/icons/icon20/chevron_up.svg";
import NotificationIcon from "@/assets/icons/icon20/notification.svg";
import SettingIcon from "@/assets/icons/icon20/setting.svg";
import LogoutIcon from "@/assets/icons/icon20/logout.svg";
import MenuIcon from "@/assets/icons/icon30/align_justify.svg";

const { toggleMobileSidebar } = inject("sidebar");
const isProfileDropdownOpen = ref(false);

const toggleProfileDropdown = () => {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value;
};

const handleMenuClick = (action) => {
  console.log("Menu clicked:", action);
  isProfileDropdownOpen.value = false;
  // 여기에 실제 라우팅 또는 액션 로직 추가
};

const closeDropdownOnClickOutside = (event) => {
  const profileContainer = event.target.closest(".profile-container");
  const dropdown = event.target.closest(".profile-dropdown");
  if (!profileContainer && !dropdown && isProfileDropdownOpen.value) {
    isProfileDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdownOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdownOnClickOutside);
});
</script>
