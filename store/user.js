export const state = () => ({
  userData: {},
})

export const mutations = {
  SET_USER_DATA: (state, val) => (state.userData = val),
}

export const getters = {
  user: (state) => state.userData,
}
