<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <input 
        type="checkbox" 
        :id="index"
        :name="name"
        :value="option.value" 
        :checked="option.value === value[0]"
        @change="onChange"
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
        type: Array,
      },
      name:{
        type: String,
      }
    },
    
    data(){
      return{
        values:[]
      }
    },
    
    mounted() {
      console.log(this.$attrs)
      this.values.push(this.value[0])
    },
    
    methods: {
      onChange: function(e){
        if (e.target.checked) {
          console.log(e.target.checked)
          this.values.push(e.target.value)
          //this.values.push(e.target.value)
        } else {
          this.values = this.values.filter(v => v !== e.target.value)
        }
        this.$emit('input', this.values)
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