<template>
  <input 
      class="form-input" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
    >
</template>

<script>
  export default {
    props: ['value'],
    
  }
</script>
<style>
  .form-input{
    background: #fff;
    border: solid 1px #ccc;
  }
</style>