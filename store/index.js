export const state = () => ({
  isLoading: false,
})

export const mutations = {
  SET_LOAD_STATE(state, newState) {
    state.isLoading = newState
  },
}
