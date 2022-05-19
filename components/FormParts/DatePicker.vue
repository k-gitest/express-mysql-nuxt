<template>
  <div>
      <input 
        class="form-input"
        type="date" 
        :name="name"
        :value="value" 
        @change="onChange"
        v-bind="$attrs"
      />
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
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
      onChange: function(e){
        //console.log(value)
        this.$emit('input', e.target.value)
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