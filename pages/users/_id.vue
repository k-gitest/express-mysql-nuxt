<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
      </v-card>
      
      <div class="hello">
        <v-form ref="form" @submit.prevent>
          <v-text-field type="text" placeholder="name" v-model="name" />
          <v-text-field type="email" placeholder="email" v-model="email" />
          <v-col class="text-right">
          <v-btn color="warning" type="submit" value="" @click="edit">送信</v-btn>
          </v-col>
        </v-form>
      </div>
      
      <template v-if="user">
      {{ user }}
      </template>
      
      <Id :id="user" />
      
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios"
/*
//axios共通設定
const myApi = axios.create({
  baseURL: "http://localhost:5000/meibo",
  responseType: "json"
})
*/

export default {
  data() {
    return {
      name: null,
      email: null,
      //users: null,
      id: null,
    };
  },
  //watchQuery: ['users'],
  /*
  async asyncData({params}){
    const id = parseInt(params.id)
    console.log("vue:"+typeof id)
    const url = `/api/users/${params.id}`
    console.log(url)
    return await axios.get(url)
    .then(res=>{
      //console.log(res.data)
      //console.log(res.data.id, res.data.name, res.data.email)
      //return users = res.data
      return {users:res.data}
    })
    .catch(err => {
      console.log(err)
    })
  },
  */
  
  async created(){
    
    /*
    //console.log(this.$route.params.id)
    if(this.$route.params.id){
      const id = parseInt(this.$route.params.id)
      const url = `/api/users/${id}`
      console.log(url)
      await axios.get(url)
      .then(res=>{
        //console.log(res.data)
        //console.log(res.data.id, res.data.name, res.data.email)
        //return users = res.data
        this.users = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
    
    await console.log("created:"+this.users.id)
    this.name = await this.users.name
    this.email = await this.users.email
*/
  },
  async fetch({store,params}){
    //console.log(process.env.API_URL)
    //console.log(this.id)
    //await console.log(params)
    const items = params.id
    await store.dispatch('users/getUsersID',{items})
  },
  //asyncDataやcreatedだとリロードやURL直打ちでapiを呼び出せない
  //回避策としてmountedでapi呼び出す
  async mounted(){
    //編集データ呼び出し
    await this.findId()
  },
  
  computed:{
    user: function(){
     return this.$store.state.users.user
    }
  },
  
  methods: {
    //一覧表示
    index: async function(){
      const hoge = await axios.get('/api')
      .then(res=>{
        return res.data
      })
      .then(data=>{
        this.users = data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    
    //新規登録
    create: async function () {
      const url = '/api'
      const params = {
        name: this.name,
        email: this.email,
      }
      
      await axios.post(url, params)
      .then(res=>{
        //フォーム初期化
        this.$refs.form.reset()
        this.text = null
        this.email = null
        //dataの初期設定に戻す
        //Object.assign(this.$data, this.$options.data.call(this))
        //一覧更新
        this.index()
      })
      .catch(err=>{
        console.log(err)
      })
    },
    
    //編集データ呼び出し
    //更新後に戻る為にmethodsにする
    findId: async function(){
      if(this.$route.params.id){
        const id = parseInt(this.$route.params.id)
        const url = `/api/users/${id}`
        //console.log(url)
        await axios.get(url)
        .then(res=>{
          //console.log(res.data)
          //console.log(res.data.id, res.data.name, res.data.email)
          //return users = res.data
          this.users = res.data
        })
        .catch(err => {
          console.log(err)
        })
      }
      
      //await console.log("created:"+this.users.id)
      this.name = await this.users.name
      this.email = await this.users.email
    },
    
    //更新
    edit: async function(){
      const url = '/api/users/:id'
      const params = {
        id: this.users.id,
        name: this.name,
        email: this.email
      }
      await axios.put(url, params)
      .then(res => {
        this.findId()
      })
      .catch(err => {
        console.log(err)
      })
      
    },
    
    //削除
    destroy: async function(id){
      const url = '/api'
      const params = {
        id: id
      }
      //axiosでdeleteを送る場合は第2引数でオブジェクト渡し
      await axios.delete(url,{data:params})
      .then(res => {
        //一覧更新
        this.index()
      })
      .catch(err => {
        console.log(err)
      })
    },

    
  },
  
}
</script>

<style>
  ul{
    list-style-type: none;
    margin:0 important;
    padding:0;
  }
  li{
    margin:0;
  }
</style>
