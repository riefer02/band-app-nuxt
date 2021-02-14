export const state = () => ({
  isLoading: true,
  drawerOpen: false,
})

export const mutations = {
  SET_LOAD_STATE(state, newState) {
    return (state.isLoading = newState)
  },
  TOGGLE_NAV_DRAWER(state) {
    return (state.drawerOpen = !state.drawerOpen)
  },
  SET_NAV_DRAWER(state, payload) {
    return (state.drawerOpen = payload)
  },
}
