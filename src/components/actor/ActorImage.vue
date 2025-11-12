<template>
  <div class="actor-info-image" :class="size">
    <img :src="profileImage" alt="actor-profile" />
    <div class="certification-icon">
      <CertificationCheckBoxIcon50Blue v-if="size === 'lg' && type === 'blue'" class="icon pc" />
      <CertificationCheckBoxIcon24Blue v-if="size === 'lg' && type === 'blue'" class="icon mo" />

      <CertificationCheckBoxIcon16Blue v-if="size === 'sm' && type === 'blue'" class="icon pc" />
      <CertificationCheckBoxIcon24Blue v-if="size === 'sm' && type === 'blue'" class="icon mo" />

      <CertificationCheckBoxIcon16White v-if="size === 'sm' && type === 'white'" class="icon" />
    </div>
  </div>
</template>
<script setup>
import CertificationCheckBoxIcon50Blue from "@/assets/icons/icon50/checkbox_blue.svg";
import CertificationCheckBoxIcon16Blue from "@/assets/icons/icon16/checkbox_blue.svg";
import CertificationCheckBoxIcon24Blue from "@/assets/icons/icon24/checkbox_blue.svg";
import CertificationCheckBoxIcon16White from "@/assets/icons/icon16/checkbox_white.svg";

defineProps({
  size: {
    type: String,
    default: "lg",
  },
  type: {
    type: String,
    default: "blue",
  },
  profileImage: {
    type: String,
    default: "/images/actor_profile.png",
  },
});
</script>
<style lang="scss" scoped>
.actor-info-image {
  position: relative;
  aspect-ratio: 1/1;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &.lg {
    width: 190px;
    height: 190px;
  }

  &.sm {
    width: 60px;
    height: 60px;
  }

  .mo {
    display: none;
  }

  img {
    width: 85%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }

  .certification-icon {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 800px) {
    &.lg {
      width: 91px;
      height: 91px;
    }
    .pc {
      display: none;
    }
    .mo {
      display: block;
    }
  }
  @media (max-width: 450px) {
    &.sm {
      width: 86px;
      height: 86px;
    }

    .mo {
      display: block;
    }
    .pc {
      display: none;
    }
  }
}
</style>
