<template>
    <v-text-field type="text" placeholder="name" v-model="text" />
</template>

<script>
  export default {
    data(){
      return {
        text: null,
      }
    },
    
    props: {
      text:null,
    }
    
  }
</script>