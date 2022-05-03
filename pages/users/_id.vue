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
          <v-btn color="warning" type="submit" value="" @click="create">送信</v-btn>
          </v-col>
        </v-form>
      </div>
      
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
      users: null,
    };
  },
  
  async asyncData({params, route}){
    console.log(route.path, route.name, params.id)
    const url = '/api/users/1'
    //const params = {id:1}
    await axios.get(url)
    .then(res=>{
      return res.data
    })
    .then(data => {
      console.log(data)
      //this.users = res.data
      //console.log(users)
      //this.name = "hoge1"
    })
    .catch(err => {
      console.log(err)
    })
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
    
    //編集
    edit: async function(id){
      const url = '/api'
      const params = ''
      await axios.put(url, params)
      .then(res => {
        
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
    
    /*
    async created() {
      show:async function(){
        const url = '/api'
        const params = {id:id}
        await axios.get(url, params)
        .then(res => {
          this.users = res.data
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    */
    
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
