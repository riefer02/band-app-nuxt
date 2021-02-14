export default ({ app: { router, store } }) => {
  router.afterEach((to, next) => {
    store.commit('SET_LOAD_STATE', true)
    store.commit('SET_NAV_DRAWER', false)
  })
}
