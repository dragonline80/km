<template>
  <div class="comment-profile-image">
    <img :src="profileImage" alt="user-profile" />
  </div>
</template>
<script setup>
defineProps({
  profileImage: {
    type: String,
    default: "/images/actor_profile.png",
  },
  size: {
    type: String,
    default: "32px",
  },
});
</script>
<style lang="scss" scoped>
.comment-profile-image {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
