<template>
  <div class="hello">
    <v-form ref="form" @submit.prevent>
      <v-text-field type="text" placeholder="name" v-model="name" />
      <v-text-field type="email" placeholder="email" v-model="email" />
      <v-col class="text-right">
      <v-btn color="warning" type="submit" value="" @click="edit">送信</v-btn>
      </v-col>
    </v-form>
    {{id}}
  </div>
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
    };
  },
  props: ["id"],
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
  //asyncDataやcreatedだとリロードやURL直打ちでapiを呼び出せない
  //回避策としてmountedでapi呼び出す
  async mounted(){
    //編集データ呼び出し
    //await this.findId()
  },
  /*
  async fetch(){
    console.log("context")
    //await console.log(this.id)
    //await this.$store.dispatch('users/getUsersID')
  },
  */
  
  methods: {
    
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
