<template>

  <v-card>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="index" color="pink">
        index
      </v-btn>
    </v-card-actions>
    
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
          <!--
          <template v-for="user in users">
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td><v-btn :to="{ name: 'users-id', params: { id: user.id }}" nuxt color="pink">編集</v-btn></td>
            <td><v-btn @click="destroy(user.id)" color="pink">削除</v-btn></td>
          </tr>
          </template>
          -->
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
    
  </v-card>

</template>
<script>
export default{
  data(){
    return {
      name: null,
      email: null,
      users: null,
    }
  },
  
  async fetch({store}){
    console.log('boke')
    await ('users/getUsers')
  },

  computed:{
    
  },
  
  methods:{
    index(){
      
    },
    
    create(){
      
    }
  },
}
</script>
<style>
  
</style>