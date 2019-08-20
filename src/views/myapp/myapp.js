import ModuleHome from "@/views/myapp/home/home.js";
import ModuleSetting from "@/views/myapp/setting/setting.js";

/**
 * @author sexyXiaoMa
 * @description 主配置
 */
export default {
  icon: "", // 菜单以及权限验证所显示的 icon
  cname: "应用", // 菜单以及权限验证所显示的中文名 （*必填）
  ename: "myapp", // 权限验证根据 ename 生成 key （*必填）
  buttons: [], // 模块页面内按钮
  children: [ModuleHome, ModuleSetting] // 子模块权限
};
