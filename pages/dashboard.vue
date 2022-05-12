<template>
  <div class="container">
    <div>
      <h1>ダッシュボード</h1>
      <p>ログイン状態：{{$auth.loggedIn}}</p>
      <p>ユーザー名：{{$auth.user.name}}</p>
      <p>メールアドレス：{{$auth.user.email}}</p>
      <div v-if="$auth.loggedIn">
        <v-btn @click="$auth.logout()" color="pink">ログアウト</v-btn>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  //ログイン後のアクセス制限
  middleware: 'auth'
}

/*
import Vue from "vue";
export default Vue.extend({
  data () {
    return {}
  },
  //ログイン後のアクセス制限
  middleware: "auth",
});
*/
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 5%;
}
p {
  margin-bottom: 3%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>