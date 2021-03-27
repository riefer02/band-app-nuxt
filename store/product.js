export const state = () => ({
  cartTotal: 0,
  cart: {},
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  CLEAR_CART(state) {
    state.cart = {}
    state.cartTotal = 0
  },
  REMOVE_ITEM(state, item) {
    state.cartTotal -= item.count
    // Vue.delete(state.cart, item.slug)
  },
  ADD_ITEM(state, item) {
    state.cartTotal++
    if (item.name in state.cart) {
      state.cart[item.name].count++
    } else {
      const stateItem = Object.assign({}, item)
      stateItem.count = 1
      state.cart[item.name] = stateItem
    }
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    const snapshot = await this.$fire.firestore.collection('products').get()
    const products = snapshot.docs.map((doc) => doc.data())
    commit('SET_PRODUCTS', products)
  },
}
