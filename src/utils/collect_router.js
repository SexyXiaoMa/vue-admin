import System from "@/views/myapp/myapp.js";
import Store from "@/store/store.js";
import Layout from "@/views/layout.vue";

/**
 * @author sexyXiaoMa
 * @description Collect configuration files to generate routing configuration files
 * @description 通过页面配置文件生成路由配置
 */
const BASE_URL = "/myapp", // 基础 url
  BASE_KID = "myapp"; // 基础 ID
let routers = System.children.concat(); // 深拷贝 modules 配置

// 设置 node path
let setPath = node => {
  node.path = node.ename;
  return node;
};
// 设置 node 是否显示 (控制菜单显示与否)
let setShow = node => {
  if (node.show === undefined) node.show = true;
  return node;
};
// 设置 node 的文件路径以及 key
let setFilePathAndKey = node => {
  if (node.fid) {
    node.file_path = `${node.fid}/${node.ename}`;
    node.key = `${node.kid}_${node.ename}`;
  } else {
    node.file_path = BASE_URL ? `${BASE_URL}/${node.ename}` : `/${node.ename}`;
    node.key = `${BASE_KID}_${node.ename}`;
  }
  // 根据 config 生成 router name
  node.name = node.key;
  return node;
};

// 设置 component
let setComponent = node => {
  // lazy load module
  node.component = () => import(`@/views${node.file_path}/${node.path}.vue`);
  return node;
};

// 设置 router meta
let setMeta = node => {
  // 路由存储字段
  node.meta = {
    title: node.cname,
    router_key: node.key
  };
  switch (node.level) {
    case "core":
    case "common":
      node.meta.is_check_auth = false;
      break;
    default:
      node.meta.is_check_auth = node.authorization;
      break;
  }
  return node;
};

// 处理 按钮级别权限
let setButton = node => {
  // 页面按钮生成 key
  node.button_keys = [];
  if (node.buttons && node.buttons.length > 0) {
    node.buttons.map(child => {
      child.is_authorization = true;
      if (!child.key) {
        child.key = `${node.key}_${child.ename}`;
        child.path = "/BUTTON_NULL"; // vue-router node must use path
        child.type = "button";
        node.button_keys.push(child.key);
      }
    });
  }
  /* （为了性能优化，减少循环次数）这种情况下 router 会将页面内部按钮作默认为路由, 但没有真实路由, 所以理论上不影响使用。 */
  if (node.key && node.buttons && node.buttons.length > 0) {
    if (node.children) {
      node.children = node.children.concat(node.buttons);
    } else {
      node.children = node.buttons;
    }
  }
  return node;
};

/**
 * @method
 * @description 深度优先遍历
 * @param {Object/Array} obj
 */
const deepMapRouter = data => {
  let node = {};
  // 类型判断
  data.constructor === Array ? (node.children = data) : (node = data);
  let stack = []; //同来存放将来要访问的节点
  stack.push(node);
  while (stack.length !== 0) {
    let child = stack.pop(); //正在访问的节点
    let childrens = child.children;
    // 存在 ename 证明其必然存在 key
    if (child.ename) {
      // 解析路由
      [
        setPath,
        setShow,
        setFilePathAndKey,
        setMeta,
        setButton,
        setComponent
      ].reduce((x, f) => f(x), child);
      // 节点处理完再清除不必要的数据
      delete child.fid;
      delete child.kid;
      delete child.ename;
    }
    if (childrens && childrens.length > 0) {
      childrens.map(children => {
        children.$f = child; // 存入父节点供子节点使用
        children.fid = child.file_path || child.ename; // 记录 children base file_path
        children.kid = child.key || child.ename; // 设置 children base key
        if (child.level) children.level = child.level; // 继承父元素的 level
        stack.push(children);
      });
    }
  }
};

// 初始化
(function init() {
  deepMapRouter(routers); // 全量 Menu List, 用于 Menu 渲染
  // 全量权限数据
  Store.dispatch("setMenu", routers.concat());
})();

export default {
  path: "/myapp",
  component: Layout,
  redirect: routers[0].file_path,
  children: routers
};
