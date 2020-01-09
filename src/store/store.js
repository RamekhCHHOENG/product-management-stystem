import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const URL = 'https://jsonplaceholder.typicode.com/posts';
export const store =  new Vuex.Store({
    state: {
        state: {
            posts: [],
            loading: true
          },
          actions: {
            loadData({   
              commit
            }) {
              axios.get(URL).then((response) => {
                console.log(response.data, this)
                commit('updatePosts', response.data)
                commit('changeLoadingState', false)
              })
            }
          },    
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})

new Vue({
    el: '#app',
    computed: Vuex.mapState(['posts', 'loading']),
    created() {
      //console.log(this.$store)
      this.$store.dispatch('loadData') // dispatch loading
    }
  })

