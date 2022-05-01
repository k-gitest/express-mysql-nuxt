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
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <template v-if="users">
            <ul v-for="user in users">
              <li>{{ user.id }}</li>
              <li>{{ user.name }}</li>
              <li>{{ user.email }}</li>
            </ul v-for>
          </template v-if>
          
          <v-btn @click="api" color="pink">
            api
          </v-btn>
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
      <v-btn color="warning" type="submit" value="" @click="submitClick">送信</v-btn>
      </v-col>
    </v-form>
  </div>
      
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
  methods: {
    api: async function(){
      const hoge = await axios.get('/api')
      .then(res=>{
        return res.data
      })
      .then(data=>{
        return data
      })
      .catch(err=>{
        console.log(err)
      })
      this.users = hoge
      //console.log(hoge)
      //alert(hoge)
    },
    
    submitClick: async function () {
      const url = '/api'
      const params = {
        name: this.name,
        email: this.email,
      }
      
      const res = await axios.post(url, params)
      .then(res=>{
        console.log(res)
        this.$refs.form.reset()
        this.text = null
        this.email = null
      })
      .catch(err=>{
        console.log(err)
      })
      //console.log(res)
      /*
      this.$refs.form.reset()
      this.text = null
      this.email = null
      Object.assign(this.$data, this.$options.data.call(this))
      */
      //await axios.post(url, params);
      // alert(this.text);
    },
  },
  
  //name: 'IndexPage',
  
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
