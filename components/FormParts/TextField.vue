<template>
  <v-form @submit.prevent>
    <v-text-field type="text" placeholder="name" v-model="name" />
    <v-text-field type="email" placeholder="email" v-model="email" />
    <!--
    <v-text-field type="email" placeholder="password" v-model="user.password" />
    -->
    <v-col class="text-right">
      <v-btn color="warning" type="submit" value="" @click="loginUser">ログイン</v-btn>
    </v-col>
  </v-form>
</template>

<script>
  export default {
    data(){
      return {
        //user: null,
        name: null,
        email: null,
      }
    },
    
    methods: {
      loginUser: function(){
        
      }
    }
    
  }
</script>