// import & register
const filters = [];
export default {
  install: Vue => {
    if (filters.length && filters.length > 0) {
      filters.map(item => {
        Vue.filter(item.key, item.content);
      });
    }
  }
};
