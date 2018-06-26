import * as types from './types.js'

const mutations = {
  [types.LOGIN]: (state, data) => {
    console.log(data)
    console.log(data.admin)
    state.admin = data.admin
  }

}

export default mutations
