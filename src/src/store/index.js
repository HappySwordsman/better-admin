import { createStore } from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

export default createStore({
  strict: true,
  modules: {},
  state: {},
  mutations,
  actions,
  getters,
})
