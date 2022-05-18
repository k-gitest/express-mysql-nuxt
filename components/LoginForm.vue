<template>
  <v-form @submit.prevent>
    <FormParts-TextField placeholder="name" v-model="form.name" /><br>
    <FormParts-TextField placeholder="email" v-model="form.email" /><br>
    <FormParts-TextField placeholder="password" v-model="form.password" />
    <FormParts-SelectBox :options="form.address.selects" v-model="form.address.selected" />
    <FormParts-RadioBtn name="sex_radio" :options="form.sex.checks" v-model="form.sex.checked" />
    <FormParts-CheckBox name="salary_check" :options="form.salary.checks" v-model="form.salary.checked" />
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
          address: {
            selects:['東京', '千葉', '神奈川'],
            selected:'東京',
          },
          sex: {
            checks:[
              {label:'男', value:'男'},
              {label:'女', value:'女'},
              {label:'その他', value:'その他'}
              ],
            checked:'男',
          },
          salary: {
            checks:[
              {label:'月給', value:'月給'},
              {label:'年俸', value:'年俸'},
              {label:'その他', value:'その他'}
              ],
            checked:['月給'],
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
