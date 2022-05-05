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
          <!--
          <template v-if="users">
            <ul v-for="user in users">
              <li>{{ user.id }}</li>
              <li>{{ user.name }}</li>
              <li>{{ user.email }}</li>
            </ul v-for>
          </template v-if>
          -->
          
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
      
    </v-col>
  </v-row>
</template>
<script>
  
</script>
<style>
  
</style>