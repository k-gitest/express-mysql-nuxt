<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
          <div>
            <p>ログイン状態：{{$auth.loggedIn}}</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <!--
          <template v-if="users">
            <ul v-for="user in users">
              <li>{{ user.id }}</li>
              <li>{{ user.name }}</li>
              <li>{{ user.email }}</li>
            </ul v-for>
          </template v-if>
          -->
          
          <v-btn nuxt to="/login" color="pink">
            Login
          </v-btn>
          
          <v-btn @click="index" color="pink">
            index
          </v-btn>
          
          <template v-if="users">
          <table style="width:100%;">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="user in users">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td><v-btn :to="{ name: 'users-id', params: { id: user.id }}" nuxt color="pink">編集</v-btn></td>
                <!--
                <td><nuxt-link :to="{ name: 'users-id', params: { id: user.id }}">
            {{ user.name }}
          </nuxt-link>
          </td>
          -->
                <td><v-btn @click="destroy(user.id)" color="pink">削除</v-btn></td>
              </tr>
              </template>
            </tbody>
          </table>
          </template>

        </v-card-actions>
        
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
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
      
      <User />
      
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      name: null,
      email: null,
      users: null,
    };
  },
  
  /*
  //store.dispatchなどはpages配下で使用できる
  //componentes配下では使用できない
  async fetch({store}){
    console.log('indexhoge')
    await store.dispatch('users/getUsers')
  },
  */
  /*
  //this.$store.dispatchなどはpagesでもcomponentsでも使用できる
  async fetch(){
    console.log('bokeboke')
    await this.$store.dispatch('users/getUsers')
  },
  */
  
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
