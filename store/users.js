import axios from 'axios'

export const state = () => ({
  users: [],
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
}

export const actions = {
  getUsers: async function({commit}){
    console.log('hogehoge')
    //const url = process.env.API_URL + '/api'
    const url = '/api'
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
}
  
  