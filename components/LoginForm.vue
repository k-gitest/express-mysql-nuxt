<template>
  <v-form @submit.prevent>
    <FormParts-TextField v-model="message" />
    <FormParts-SubmitBtn @parent-event="submit" btnTitle="submitボタン" />
  </v-form>
</template>
<script>
  export default{
    data() {
      return {
        message: null,
      };
    },
    
    methods: {
      submit: function(){
        console.log(this.message)
      }
    },
  
    
  }


 
</script>