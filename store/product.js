export const state = () => ({
  cartTotal: 0,
  cart: {},
  products: [],
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  clearCart(state) {
    state.cart = {}
    state.cartTotal = 0
  },
  removeItem(state, item) {
    state.cartTotal -= item.count
    // Vue.delete(state.cart, item.slug)
  },
  addToCart(state, item) {
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
    commit('setProducts', products)
  },
}
