<template>
  <v-form @submit.prevent>
    <FormParts-TextField placeholder="name" v-model="form.name" /><br>
    <FormParts-TextField placeholder="email" v-model="form.email" /><br>
    <FormParts-TextField placeholder="password" v-model="form.password" />
    <FormParts-SelectBox :options="form.sex.select" v-model="form.sex.selected" />
    <FormParts-SubmitBtn @parent-event="submit" btnTitle="submitボタン" />
  </v-form>
</template>
<script>
// 基本的に親→子→親の順でデータを渡す
// v-model以外に:value="message" @input="message = $event"でも可能
// v-modelが使えるのはinputやtextareaなどに限られる
// .syncでもv-modelと同じ事ができる vue3で削除
  export default{
    data() {
      return {
        form: {
          name: null,
          email: null,
          password: null,
          sex: {
            select:['男', '女', 'その他'],
            selected:'男'
          }
        }
      };
    },
    // 子から受け取ったイベントでメソッドを起動
    methods: {
      submit: function(){
        console.log(this.form)
      }
    },
  
    
  }


 
</script>

<style>

</style>
