<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">페이지 이동</h1>
      <div class="nav-buttons">
        <button type="button" class="nav-btn" @click="handleMovePage('/')">홈</button>
        <button type="button" class="nav-btn" @click="handleMovePage('/ranking')">랭킹</button>
        <button type="button" class="nav-btn" @click="handleMovePage('/watch-later')">나중에 볼영상</button>
        <button type="button" class="nav-btn" @click="handleMovePage('/video/1')">비디오 상세</button>
        <button type="button" class="nav-btn" @click="handleMovePage('/actor/highlight')">프로필 상세</button>
      </div>
    </div>

    <div class="modal-container">
      <!-- 로그인/회원가입 모달 -->
      <div class="auth-modal">
        <div class="modal-tabs">
          <button class="tab-button" :class="{ active: activeTab1 === 'login' }" @click="activeTab1 = 'login'">
            <span class="dot" v-if="activeTab1 === 'login'"></span>
            로그인
          </button>
          <button class="tab-button" :class="{ active: activeTab1 === 'signup' }" @click="activeTab1 = 'signup'">
            <span class="dot" v-if="activeTab1 === 'signup'"></span>
            회원가입
          </button>
        </div>

        <div class="modal-content" v-if="activeTab1 === 'login'">
          <div class="form-group">
            <label>이메일</label>
            <input type="email" v-model="loginForm.email" />
          </div>
          <div class="form-group">
            <label>비밀번호</label>
            <input type="password" v-model="loginForm.password" />
          </div>
        </div>

        <div class="modal-content" v-if="activeTab1 === 'signup'">
          <div class="form-group">
            <label>이메일</label>
            <input type="email" v-model="signupForm.email" />
          </div>
          <div class="form-group">
            <label>비밀번호</label>
            <input type="password" v-model="signupForm.password" />
          </div>
          <div class="form-group">
            <label>비밀번호 재입력</label>
            <input type="password" v-model="signupForm.passwordConfirm" />
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-cancel">Cancel</button>
          <button class="btn-ok">OK</button>
        </div>
      </div>

      <!-- 알림/활동 피드 -->
      <div class="activity-feed">
        <div class="activity-item" v-for="item in activities" :key="item.id">
          <div class="activity-content">
            <div class="activity-header">
              <h3 class="activity-title">{{ item.title }}</h3>
              <span class="activity-badge" :class="item.badgeType">{{ item.badge }}</span>
            </div>
            <p class="activity-description">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- 설정 메뉴 -->
      <div class="settings-menu">
        <button class="menu-item">
          <span class="menu-text">비밀번호 변경</span>
          <SettingIcon class="icon" />
        </button>
        <button class="menu-item">
          <span class="menu-text">로그아웃</span>
          <LogoutIcon class="icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SettingIcon from "@/assets/icons/icon20/setting.svg";
import LogoutIcon from "@/assets/icons/icon20/logout.svg";
import { useRouter } from "vue-router";

const activeTab1 = ref("login");
const router = useRouter();

function handleMovePage(path) {
  router.push(path);
}

const loginForm = ref({
  email: "",
  password: "",
});

const signupForm = ref({
  email: "",
  password: "",
  passwordConfirm: "",
});

const activities = ref([
  {
    id: 1,
    title: "댓글 [하이라이트 1화]",
    description: "23:21 여기부터 정말 애가 푹 빠졋습니다...",
    badge: "+8 포인트 지급",
    badgeType: "red",
  },
  {
    id: 2,
    title: "자막 [하이라이트 1회]",
    description: "자막 생성 완료되었습니다",
    badge: "-8 포인트 소멸",
    badgeType: "blue",
  },
  {
    id: 3,
    title: "구독완료",
    description: "하이라이트구독\n구독",
    badge: "",
    badgeType: "",
  },
  {
    id: 4,
    title: "구독완료",
    description: "하이라이트구독\n구독",
    badge: "",
    badgeType: "",
  },
  {
    id: 5,
    title: "구독완료",
    description: "",
    badge: "",
    badgeType: "",
  },
  {
    id: 6,
    title: "구독완료",
    description: "",
    badge: "",
    badgeType: "",
  },
  {
    id: 7,
    title: "구독완료",
    description: "",
    badge: "",
    badgeType: "",
  },
]);
</script>

<style scoped lang="scss">
.demo-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 40px;

  .demo-header {
    text-align: center;
    width: 100%;
    max-width: 1200px;

    .demo-title {
      font-size: 28px;
      font-weight: 600;
      color: #34373c;
      margin-bottom: 20px;
    }

    .nav-buttons {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;

      .nav-btn {
        background: #34373c;
        border: none;
        border-radius: 10px;
        padding: 12px 24px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        &:hover {
          background: #3d4147;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  .modal-container {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }
}

.auth-modal {
  width: 370px;
  background: #34373c;
  border-radius: 10px;
  padding: 28px 24px 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

  .modal-tabs {
    display: flex;
    gap: 28px;
    margin-bottom: 28px;
  }

  .tab-button {
    background: none;
    border: none;
    color: #9a9a9a;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;

    &:hover {
      color: #d0d0d0;
    }

    &.active {
      color: #fff;
    }

    .dot {
      width: 8px;
      height: 8px;
      background: #e74c3c;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }

  .modal-content {
    margin-bottom: 24px;
    min-height: 150px;
  }

  .form-group {
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }

    label {
      display: block;
      color: #a0a0a0;
      font-size: 11px;
      margin-bottom: 6px;
      font-weight: 400;
    }

    input {
      width: 100%;
      background: transparent;
      border: 1px solid #5a5a5a;
      border-radius: 5px;
      padding: 11px 14px;
      color: #e0e0e0;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
      box-sizing: border-box;

      &:focus {
        border-color: #7a7a7a;
      }

      &::placeholder {
        color: #666;
      }
    }
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding-top: 12px;
    margin-top: auto;
  }

  .btn-cancel,
  .btn-ok {
    background: none;
    border: none;
    color: #a0a0a0;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #d0d0d0;
    }
  }

  .btn-ok {
    color: #d0d0d0;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }
  }
}

// 활동 피드
.activity-feed {
  width: 370px;
  max-height: 500px;
  background: #34373c;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #5a5a5a;
    border-radius: 3px;

    &:hover {
      background: #6a6a6a;
    }
  }

  .activity-item {
    padding: 20px 24px;
    border-bottom: 1px solid #4a4a4a;

    &:last-child {
      border-bottom: none;
    }

    .activity-content {
      width: 100%;

      .activity-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 8px;
        gap: 12px;

        .activity-title {
          font-size: 13px;
          font-weight: 400;
          color: #e0e0e0;
          margin: 0;
          line-height: 1.4;
        }

        .activity-badge {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
          font-weight: 400;

          &.red {
            background: rgba(231, 76, 60, 0.15);
            color: #e74c3c;
          }

          &.blue {
            background: rgba(52, 152, 219, 0.15);
            color: #3498db;
          }
        }
      }

      .activity-description {
        font-size: 12px;
        color: #999;
        margin: 0;
        line-height: 1.5;
        white-space: pre-line;
      }
    }
  }
}

// 설정 메뉴
.settings-menu {
  width: 180px;
  background: #34373c;
  border-radius: 10px;
  padding: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

  .menu-item {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;
    background: none;
    border: none;
    border-bottom: 1px solid #34373c;
    cursor: pointer;
    transition: background 0.2s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .menu-text {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0.3px;
    }

    .menu-icon {
      color: #a0a0a0;
      flex-shrink: 0;
    }
  }
}
</style>
