export const state = () => ({
  cartTotal: 0,
  cart: [],
  products: [],
  product: {},
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  CLEAR_CART(state) {
    state.cart = {}
    state.cartTotal = 0
  },
  REMOVE_ITEM(state, item) {
    state.cartTotal -= item.count
  },
  SET_CART(state, payload) {
    state.cart = payload
  },
  SET_CART_TOTAL(state, payload) {
    state.cartTotal = payload
  },
}

export const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
  cart: (state) => state.cart,
  cartTotal: (state) => state.cartTotal,
}

export const actions = {
  addToCart({ commit, getters }, payload) {
    const { size, quantity, name } = payload.data
    let cart = getters.cart
    let cartTotal = getters.cartTotal
    // Check if item exists in cart
    const itemToUpdate = cart.filter(
      (i) => i.data.name === name && i.data.size === size
    )
    if (!itemToUpdate.length > 0) {
      // Add to cart if unique
      cart.push(payload)
      commit('SET_CART', cart)

      cartTotal = cartTotal + payload.data.quantity
      commit('SET_CART_TOTAL', cartTotal)
    } else {
      // Update item in cart
      const item = itemToUpdate[0]
      item.data.quantity += quantity
      cart = cart.map((i) => {
        if (i.id === item.id) {
          i.data = item.data
          return i
        } else {
          return i
        }
      })
      commit('SET_CART', cart)
      cartTotal = cartTotal + quantity
      commit('SET_CART_TOTAL', cartTotal)
    }
  },
  removeFromCart({ commit, getters }, id) {
    const cart = []
    if (id) {
      for (let index = 0; index < getters.cart.length; index++) {
        const element = getters.cart[index]
        if (element.id !== id) {
          cart.push(element)
        }
      }
    }
    commit('setCart', cart)
  },

  async fetchProducts({ commit }) {
    const snapshot = await this.$fire.firestore.collection('products').get()
    const products = snapshot.docs.map((doc) => doc.data())
    commit('SET_PRODUCTS', products)
  },
}
