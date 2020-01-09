import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
const URL = 'http://localhost:3000/products';
export const store =  new Vuex.Store({
    state: {
      products: [],
      loading: true,
      flavor: 'Orange',
      loading: true,
      posts: [],
    },

    getters: {
      flavor: state => {
        return state.flavor
      },
      productList: state => {
        return state.products
      },
      getPostList: state => {
        return state.posts
      }
    },


    actions: {
      LoadPosts ({ commit }) {
        axios
          .get(URL)
          .then(r => r.data)
          .then(products => {
            commit('SET_POST', products)
          })
      }
    },
 
    mutations: {
      change(state, flavor) {
        state.flavor = flavor
      },
      SET_POST (state, products) {
        state.products = products
      }
    },
})


