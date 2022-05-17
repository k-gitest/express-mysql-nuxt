<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <input 
        type="radio" 
        :name="name"
        :value="option.value" 
        :checked="option.value === value"
        @change="onChange($event.target.value)"
      />
      {{ option.label }}
    </div>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      options:{
       type: Array,
       //require: true,
      },
      value:{
        type: String,
      },
      name:{
        type: String,
      }
    },
    
    mounted() {
      console.log(this.$attrs)
    },
    
    methods: {
      onChange: function(value){
        //console.log(value)
        this.$emit('input', value)
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