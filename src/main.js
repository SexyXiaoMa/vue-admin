import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import Store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount("#app");
