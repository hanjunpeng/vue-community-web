import Vue from "vue";
import Router from "vue-router";
import store from "./store/index";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "home",
      meta: {
        title: "商城首页"
      }
    },
    {
      path: "/home",
      meta: {
        title: "商城首页"
      },
      component: () => import("./components/Base/BaseWrap.vue"),
      children: [
        {
          path: "/",
          meta: {
            title: "商城首页"
          },
          component: () => import("./views/home/index.vue")
        },
        {
          path: "/classify",
          meta: {
            title: "全部分类"
          },
          component: () => import("./views/classify/index.vue")
        },
        {
          path: "/cart",
          meta: {
            title: "购物车"
          },
          component: () => import("./views/cart/index.vue")
        },
        {
          path: "/my",
          meta: {
            title: "我的"
          },
          component: () => import("./views/my/index.vue")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.commit("setMenuActive", to.path);
  next();
});
export default router;
