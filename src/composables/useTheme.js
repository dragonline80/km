import { ref, watch, onMounted } from "vue";

const isDarkMode = ref(true);

const applyTheme = (dark) => {
  if (typeof document === "undefined") return;

  if (dark) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
};

export function useTheme() {
  // localStorage에서 테마 설정 불러오기
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDarkMode.value = savedTheme === "dark";
    } else {
      // 기본값은 다크모드
      isDarkMode.value = true;
    }
    applyTheme(isDarkMode.value);
  });

  // 초기 테마 적용 (서버 사이드 렌더링 대비)
  if (typeof document !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDarkMode.value = savedTheme === "dark";
    }
    applyTheme(isDarkMode.value);
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme(isDarkMode.value);
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  };

  watch(isDarkMode, (newValue) => {
    applyTheme(newValue);
  });

  return {
    isDarkMode,
    toggleTheme,
  };
}
