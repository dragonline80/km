<template>
  <section class="home">
    <div class="container">
      <article class="feed-container">
        <div class="category-container">
          <div class="category-list">
            <button type="button" class="category-item active">
              <span class="category-item-title">전체</span>
            </button>
            <button type="button" class="category-item" v-for="i in 20" :key="i">
              <span class="category-item-title">태그 {{ i }}</span>
            </button>
          </div>
          <button type="button" class="category-arrow-right-icon">
            <ChevronRightIcon class="icon" />
          </button>
        </div>
        <div class="feed-list">
          <div class="feed-item main-feed-container">
            <picture class="feed-image">
              <source srcset="/images/home_main_feed.png" media="(min-width: 501px)" />
              <source srcset="/images/home_main_feed_mo.png" media="(max-width: 500px)" />
              <img src="/images/home_main_feed.png" alt="main-feed-image" />
            </picture>

            <div class="feed-content">
              <h2 class="feed-title">
                (광고)숲속의 왕자 <br />
                세것같은 중고 판매합니다
              </h2>
              <div class="feed-actor-container">
                <ActorImage profile-image="/images/home_feed_actor.png" size="sm" type="white" class="feed-actor-image" />
                <div class="feed-actor-info-container">
                  <div class="feed-actor-info">
                    <h4 class="feed-actor-name">영포티</h4>
                    <div class="feed-actor-view-info">53K views • 2 weeks ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="feed-item sub-feed-container">
            <div class="feed-image">
              <img src="/images/home_sub_feed.png" alt="sub-feed-image" />
            </div>
            <div class="feed-content">
              <h2 class="feed-title">(광고)광고</h2>
              <ul class="feed-content-list">
                <li>광고</li>
                <li>광고</li>
              </ul>
            </div>
            <div class="feed-unknown"></div>
          </div>
        </div>
      </article>
      <article class="most-viewed-video-container">
        <ArticleTitle class="most-viewed-video-title">많이본 영상</ArticleTitle>
        <ActorList class="most-viewed-video-list">
          <ActorItem v-for="i in 4" :key="i" videoType="time" />
        </ActorList>
      </article>
    </div>
  </section>
</template>
<script setup>
import ChevronRightIcon from "@/assets/icons/icon48/chevron_right.svg";
import ArticleTitle from "@/components/ArticleTitle.vue";
import ActorItem from "@/components/actor/ActorItem.vue";
import ActorImage from "@/components/actor/ActorImage.vue";
import ActorList from "@/components/actor/ActorList.vue";
</script>
