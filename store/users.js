export const state = () => ({
      message: 'Hello Vuex',
      users: [
              {name: 'John', email:'john@example.com', age:22},
            {name: 'Merry', email: 'merry@facebook.com',age:33},
            {name: 'Ken', email: 'ken@amazon.com',age:29}
          ],
      count: 0,
      t_users: [],
  })
  
  export const getters = {
    users: function(state){
        // filter関数で配列から取り出す
        return state.users.filter(user => user.age < 30 )
    },
    double: function(state){
        return state.count**2
    }
  }
  
  export const mutations = {
      increment: function(state, num){
          //カウント更新処理 payload用の引数も用意できる
          state.count = state.count + num
      },
  
      increment_act: function(state){
          state.count++
      },
  
      setUsers: function(state, posts){
          state.t_users = posts
      },
  
      mouse: function(state){
          state.sample = state.sample + state.mes
      }
  
  }
  
  export const actions = {
      incrementOne: function(context){
          //contextのcommitを使用してmutationsを起動する
          context.commit('increment_act')
  
          //非同期テスト 3秒後にカウントが増える
          setTimeout(() => {
              context.commit('increment_act')
          }, 3000)
      },
      /*contextの中でcommitしか使わないのであればES6のDestructuringで短縮もできる
      incrementOne: function({commit}){
          commit('increment_act')
      }
      */

      // axiosを使用する場合
      // 外部データを読み込む場合、stateに空の配列、mutationsにデータ受け取りの引数を設定する。

      getUsers:async function({commit}){
  
          // @nuxtjs/axiosを使用する場合
          const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
              //console.log(posts)
              commit('setUsers', posts)
  
          /*
          // 通常のaxiosを使用する場合
          return axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response  => {
              commit('setUsers', response.data)
          })
          */
      },
      textTest: function({commit}){
          commit('mouse')
      }
  }
  
  