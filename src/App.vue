<template>
  <TheSidebar />
  <main class="layout-main">
    <nav class="temp-router-links">
      <span class="temp-router-links__label">TEMP · Routes</span>
      <router-link
        v-for="link in tempRouteLinks"
        :key="link.path"
        :to="link.path"
        class="temp-router-links__item"
      >
        {{ link.label }}
      </router-link>
    </nav>
    <TheHeader />
    <router-view class="content" />
  </main>
</template>
<script setup>
import { provide, onMounted } from "vue";
import { computed } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import { useSidebar } from "@/composables/useSidebar";
import { useTheme } from "@/composables/useTheme";
import { routes } from "@/router";

const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar, toggleMobileSidebar } = useSidebar();
const { isDarkMode } = useTheme();

provide("sidebar", { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar, toggleMobileSidebar });

const tempRouteLinks = computed(() =>
  routes
    .filter(({ path }) => !path.includes(":"))
    .map(({ path, name }) => ({
      path,
      label: name ?? path,
    })),
);

// 테마 초기화
onMounted(() => {
  // useTheme에서 이미 초기화되지만, 확실하게 하기 위해
});
</script>
<style scoped>
.temp-router-links {
  position: sticky;
  top: 0;
  z-index: 1100;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.temp-router-links__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555;
}

.temp-router-links__item {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background-color: #eef2ff;
  color: #1f3aff;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.temp-router-links__item.router-link-active,
.temp-router-links__item:hover {
  background-color: #1f3aff;
  color: #fff;
}

@supports (backdrop-filter: blur(8px)) {
  .temp-router-links {
    backdrop-filter: blur(8px);
  }
}
</style>
