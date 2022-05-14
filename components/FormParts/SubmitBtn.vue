<template>
  <v-btn color="pink" @click="childEvent">{{btnTitle}}</v-btn>
</template>
<script>
  export default {
    props: {
      btnTitle: null,
    },
    
    methods: {
      childEvent(){
        this.$emit('parent-event')
      }
    },
  }
</script>