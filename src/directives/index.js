// import & register
const directives = [];
export default {
  install: Vue => {
    if (directives.length && directives.length > 0) {
      directives.map(item => {
        Vue.directive(item.key, item.content);
      });
    }
  }
};
