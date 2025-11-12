import { ref } from "vue";

export function useSidebar() {
  const isMobileSidebarOpen = ref(false);
  const openMobileSidebar = () => {
    isMobileSidebarOpen.value = true;
  };

  const closeMobileSidebar = () => {
    isMobileSidebarOpen.value = false;
  };

  const toggleMobileSidebar = () => {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
  };

  return {
    isMobileSidebarOpen,
    openMobileSidebar,
    closeMobileSidebar,
    toggleMobileSidebar,
  };
}
