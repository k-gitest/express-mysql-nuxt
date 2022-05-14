<template>

  <v-card>
    <p>Userコンポーネント</p>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="index" color="pink">
        index
      </v-btn>
    </v-card-actions>
    
    <template v-if="users.length > 0">
      {{users}}
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
            <td><v-btn @click="destroy(user.id)" color="pink">削除</v-btn></td>
          </tr>
          </template>
          
        </tbody>
      </table>
    </template>
    
    <div class="hello">
      <v-form ref="form" @submit.prevent>
        <v-text-field type="text" placeholder="name" v-model="name" />
        <v-text-field type="email" placeholder="email" v-model="email" />
        <v-col class="text-right">
        <v-btn color="warning" type="submit" value="" @click="create">送信</v-btn>
        </v-col>
      </v-form>
    </div>
    <!--
    {{ users }}
    -->
  </v-card>

</template>
<script>
import axios from 'axios'

export default{
  data(){
    return {
      name: null,
      email: null,
      //users: null,
    }
  },
  
  //store.dispatchなどはpages配下でしか使用できない
  //components配下ではthis.$store.dispatchを使用する
  /*
  async fetch(){
    //console.log('boke')
    //await this.$store.dispatch('users/getUsers')
    await this.index()
  },
  */
  
  computed:{
    users: function(){
      return this.$store.state.users.users
    }
  },
  
  methods:{
    index: async function(){
      console.log('hoge')
      await this.$store.dispatch('users/getUsers')
    },
    /*
    async index(){
      await this.$store.dispatch('users/getUsers')
    },
    */
    
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
  
</style>