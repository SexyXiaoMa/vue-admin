const FILES = require.context(".", true, /\.js$/);
const modules = {};

FILES.keys().forEach(key => {
  if (
    key === "./index.js" ||
    /(types|actions|getters|mutations).js$/.test(key)
  ) {
    return;
  }
  modules[key.replace(/^(.*\/)|(\.js)/g, "")] = FILES(key).default;
});

export default modules;
