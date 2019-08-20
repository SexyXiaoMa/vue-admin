/**
 * @author sexyXiaoMa
 * @description 路由注册
 */

// 基础路由
import Login from "@/views/base/login/login";
import Default from "@/views/base/default/default";

// 应用路由
import router from "./collect_router";

let routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/404",
    name: "default",
    component: Default
  },
  {
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    path: "*",
    redirect: {
      name: "default"
    }
  }
];

// 叠加应用路由
routes.push(router);

export default routes;
