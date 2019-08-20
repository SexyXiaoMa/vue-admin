import Vue from "vue";
import Router from "vue-router";
import Register from "@/utils/register_router.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: Register
});
