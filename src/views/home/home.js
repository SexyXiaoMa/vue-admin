/**
 * @author sexyXiaoMa
 * @description 系统主页展示系统数据面板等信息
 */
export default {
  icon: "", // 菜单以及权限验证所显示的 icon
  cname: "首页", // 菜单以及权限验证所显示的中文名 （*必填）
  ename: "home", // 权限验证根据 ename 生成 key （*必填）
  level: "common", // 模块等级 core common
  buttons: [], // 模块页面内按钮
  children: [] // 子模块权限
};
