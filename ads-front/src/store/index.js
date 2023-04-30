import { createStore, createLogger } from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state = {
  campaignList: [],
  campaignDetail: {
    id: null,
    selectedColumns: ['date', 'cost', 'costPerResult', 'cpc', 'impressions', 'ctr', 'clicks', 'resultRate', 'result', 'cpa', 'cvr', 'conversions', 'reach', 'costPer1000People', 'frequency'],
    campaignHistory: [],
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})