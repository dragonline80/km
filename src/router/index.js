import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/pages/demo.vue"),
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () => import("@/pages/ranking.vue"),
  },
  {
    path: "/watch-later",
    name: "watch-later",
    component: () => import("@/pages/watch-later.vue"),
  },
  {
    path: "/actor/:username",
    name: "actor-username",
    component: () => import("@/pages/actor/[username].vue"),
  },
  {
    path: "/video/:id",
    name: "video-id",
    component: () => import("@/pages/video/[id].vue"),
  },
  {
    path: "/subscribe-big",
    name: "subscribe-big",
    component: () => import("@/pages/subscribe-big.vue"),
  },
  {
    path: "/subscribe-small",
    name: "subscribe-small",
    component: () => import("@/pages/subscribe-small.vue"),
  },
  {
    path: "/subscribe-setting",
    name: "subscribe-setting",
    component: () => import("@/pages/subscribe-setting.vue"),
  },
  {
    path: "/my-profile",
    name: "my-profile",
    component: () => import("@/pages/my-profile.vue"),
  },
  {
    path: "/my-history",
    name: "my-history",
    component: () => import("@/pages/my-history.vue"),
  },
  {
    path: "/table-list",
    name: "table-list",
    component: () => import("@/pages/table-list.vue"),
  },
  {
    path: "/table-post",
    name: "table-post",
    component: () => import("@/pages/table-post.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router };
