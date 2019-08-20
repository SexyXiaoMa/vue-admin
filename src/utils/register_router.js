/**
 * @author sexyXiaoMa
 * @description 路由注册
 */

// 基础路由
import Login from "@/views/base/login/login";
import Default from "@/views/base/default/default";
import Denied from "@/views/base/denied/denied";

// 应用路由
import router from "./collect_router";

let routes = [
  {
    // 登录路由
    path: "/login",
    name: "login",
    component: Login
  },
  {
    // 默认路由
    path: "/default",
    name: "default",
    component: Default
  },
  {
    // 权限不足路由
    path: "/permission_denied",
    name: "permission_denied",
    component: Denied
  },
  {
    // 默认路由
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    // 路由不存在
    path: "*",
    redirect: {
      name: "default"
    }
  }
];

// 叠加应用路由
routes.push(router);

export default routes;
