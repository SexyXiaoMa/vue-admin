import ModuleLogin from "./login/login";
import ModuleNoFoundPage from "./default/default";

/**
 * @author sexyXiaoMa
 * @description 系统核心模块 (登录，404 ...)
 */
export default {
  icon: "", // 菜单以及权限验证所显示的 icon
  cname: "基础", // 菜单以及权限验证所显示的中文名 （*必填）
  ename: "base", // 权限验证根据 ename 生成 key （*必填）
  level: "core", // 模块等级 core common
  buttons: [], // 模块页面内按钮
  children: [ModuleLogin, ModuleNoFoundPage] // 子模块
};
