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
          <v-btn @click="api" color="pink">
            api
          </v-btn>
          <template v-if="hoge">
            {{ hoge }}
          </template v-if>
          
        </v-card-actions>
        <v-card-actions>
          
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
      
  <div class="hello">
    <v-form action>
      <v-text-field type="text" placeholder="text" v-model="text" />
      <v-col class="text-right">
      <v-btn color="warning" type="submit" value="" @click="submitClick">decide</v-btn>
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
      text: null,
      hoge: null,
    };
  },
  methods: {
    api: async function(){
      const hoge = await axios.get('https://localhost-travel-3.paiza-user-free.cloud:3000/api')
      .then(res=>{
        return res.data
      })
      .then(data=>{
        return data
      })
      .catch(err=>{
        console.log(err)
      })
      this.hoge = hoge
      console.log(hoge)
      alert(hoge)
    },
    
    submitClick: async function () {
      await this.$axios.$post("/api", { foo: this.text });
      // alert(this.text);
    },
  },
  
  name: 'IndexPage',
  
}
</script>
