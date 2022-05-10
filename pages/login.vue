<template>
<div>
  <div>
  <h1>ログインユーザ</h1>
  <v-form @submit.prevent>
    <v-text-field type="text" placeholder="name" v-model="user.name" />
    <v-text-field type="email" placeholder="email" v-model="user.email" />
    <v-text-field type="email" placeholder="password" v-model="user.password" />
    <v-col class="text-right">
      <v-btn color="warning" type="submit" value="" @click="loginUser">ログイン</v-btn>
    </v-col>
  </v-form>
  
  <!--
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="user.email">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" v-model="user.password">
    </div>
    <button type="submit">ログイン</button>
  </form>
  -->
  
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        user:{
          name: null,
          email: null,
          password: null
        }
      }
    },
    methods:{
      loginUser(){
        //localはnuxt.config.jsのendpointsで追加したstrategiesのlocalに対応
        //送信先はnuxtcofig.jsで設定したloginのurl
        //console.log(this.user)
        this.$auth.loginWith('local',{
          data: this.user
        })
        .then(res=>{
          console.log(res.data)
        })
      },
    }
  }
</script>
