<template>
  <select
    :value="value"
    @change="onChange($event.target.value)"
    v-bind="$attrs"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :selected="option === value"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      value:{
       type: String,
       //require: true,
      }
    },
    
    mounted() {
      console.log(this.$attrs)
    },
    
    methods: {
      onChange: function(value){
        this.$emit('change', value)
      }
    }
    
  }
</script>

<style scope>
  .form-input{
    background: #fff;
    border: solid 1px #ccc;
    width:100%;
    margin:0 0 1rem 0;
    padding: 0.2rem;
  }
</style>