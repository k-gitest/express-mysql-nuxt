import axios from 'axios'

export const state = () => ({
  users: [],
  user: [],
})
  
export const getters = {
  users: function(state){
    // filter関数で配列から取り出す
    return state.users.filter(user => user.age < 30 )
  },
}

export const mutations = {
  setUsers: function(state, posts){
    state.users = posts
  },
  
  getUser: function(state, posts){
    state.user = posts
  }
  
}

export const actions = {
  getUsers: async function({commit}){
    console.log('hogehoge')
    //fetchとmethodsでprocess.env.API_URLが異なる
    //fetchの場合process.env.API_URLがundefinedになる
    //const url = process.env.API_URL + '/api'
    const url = '/api'
    console.log(url)
    //console.log(process.env.API_URL, process.env.BASE_URL)
    //return await axios.get('https://jsonplaceholder.typicode.com/users')
    return await axios.get(url)
    .then(res => {
        commit('setUsers', res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },
  
  getUsersID: async function({commit}, {items}){
    console.log(items)
    //const url = process.env.API_URL + '/api/users/' + parseInt(items)
    const url = process.env.API_URL + '/users/' + items
    return await axios.get(url)
    .then(res=>{
      commit('getUser', res.data)
    })
    .catch(err=>console.log(err))
  },
  
  
}
  
  