import * as types from './types.js'

const mutations = {
  [types.LOGIN]: (state, data) => {
    state.token = data
  }

}

export default mutations
