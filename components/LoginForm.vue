<template>
  <v-form @submit.prevent>
    <FormParts-TextField placeholder="name" v-model="message" />
    <FormParts-SubmitBtn @parent-event="submit" btnTitle="submitボタン" />
  </v-form>
</template>
<script>
// 基本的に親→子→親の順でデータを渡す
// v-model以外に:value="message" @input="message = $event"でも可能
// v-modelが使えるのはinputやtextareaなどに限られる
// .syncでもv-modelと同じ事ができる
  export default{
    data() {
      return {
        message: null,
      };
    },
    // 子から受け取ったイベントでメソッドを起動
    methods: {
      submit: function(){
        console.log(this.message)
      }
    },
  
    
  }


 
</script>