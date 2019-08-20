import ModuleList from "./list/list";
import ModuleEdit from "./edit/edit";

/**
 * @author sexyXiaoMa
 * @description 系统角色
 */
export default {
  icon: "", // 菜单以及权限验证所显示的 icon
  cname: "用户管理", // 菜单以及权限验证所显示的中文名 （*必填）
  ename: "account", // 权限验证根据 ename 生成 key （*必填）
  buttons: [], // 模块页面内按钮
  children: [ModuleList, ModuleEdit] // 子模块权限
};
