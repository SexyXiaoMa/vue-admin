import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from '@/plugins/store_logger'
import Menu from './modules/menu'

Vue.use(Vuex)

const Debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Menu
  },
  strict: Debug,
  plugins: Debug ? [CreateLogger()] : []
})