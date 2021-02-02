export const state = () => ({
  isLoading: true,
})

export const mutations = {
  SET_LOAD_STATE(state, newState) {
    return (state.isLoading = newState)
  },
}
