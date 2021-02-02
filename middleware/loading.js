export default ({ app: { router, store } }) => {
  router.afterEach((to, next) => {
    store.commit('SET_LOAD_STATE', true)
  })
}
