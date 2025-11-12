<template>
  <section class="actor-detail">
    <div class="container">
      <article class="actor-info-container">
        <div class="actor-info-content-container">
          <ActorImage profile-image="/images/actor_profile.png" size="lg" type="blue" />
          <div class="actor-info-content">
            <h2 class="actor-info-name">하이라이트</h2>
            <ul class="actor-info-list">
              <li class="actor-info-item">6세 이용가</li>
              <li class="actor-info-item">애니메이션</li>
              <li class="actor-info-item">스토리</li>
              <li class="actor-info-item">독후감용</li>
            </ul>
            <div class="actor-info-description pc">
              <span> 영화, 드라마, 애니메이션 등 다양한 장르의 콘텐츠를 선별하여 제작된 콘텐츠입니다. </span>
              <button type="button" class="actor-info-more">...더보기</button>
            </div>
          </div>
        </div>
        <div class="actor-info-description mo">
          <span> 설명 : 아주아주 먼옛날 </span>
          <button type="button" class="actor-info-more">...더보기</button>
        </div>
      </article>
      <article class="actor-credit-container">
        <ArticleTitle class="actor-credit-title">출연작품 (23)</ArticleTitle>
        <ActorList class="actor-credit-list">
          <ActorItem v-for="i in 15" :key="i" />
        </ActorList>
      </article>
    </div>
  </section>
</template>
<script setup>
import ActorImage from "@/components/actor/ActorImage.vue";
import ArticleTitle from "@/components/ArticleTitle.vue";
import ActorItem from "@/components/actor/ActorItem.vue";
import ActorList from "@/components/actor/ActorList.vue";
</script>
