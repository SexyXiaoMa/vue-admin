import ModuleRole from "./role/role";

/**
 * @author sexyXiaoMa
 * @description 系统设置模块
 */
export default {
  icon: "", // 菜单以及权限验证所显示的 icon
  cname: "设置", // 菜单以及权限验证所显示的中文名 （*必填）
  ename: "setting", // 权限验证根据 ename 生成 key （*必填）
  level: "common", // 模块等级 core common
  buttons: [], // 模块页面内按钮
  children: [ModuleRole] // 子模块权限
};
