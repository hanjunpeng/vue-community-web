import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./http/index";
import store from "./store/index";
import "@/mixin";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
