<template>
  <input 
      class="form-input" 
      :rows="rows"
      :cols="cols"
      :value="value" 
      @input="onInput"
      v-bind="$attrs"
    >
</template>

<script>
// propsで親からデータを受け取りvalueにセット、$emitで親にデータを返す
// $emitの引数はイベント名と値
// $eventで要素にアクセスする
// v-bind="$attrs"で親の属性を継承できる（src、placeholderなど）
  export default {
    inheritAttrs: false,
    props: {
      value:{
       type: String,
       //require: true,
      },
      rows:{
        type: Number,
      },
      cols:{
        type: Number,
      }
    },
    //受け取り方は複数ある
    /*
    props: {
      user: {
        type: Object,
        required: true,
        default: {}
      }
    }
    */
    //mountedやmethodsなどでも親へデータを渡せる
    
    mounted() {
      //this.$emit('childe-data', this.user)
      //$attrsの中身を見れる
      console.log(this.$attrs)
    },
    
    methods: {
      onInput: function(e){
        // v-modelを使用する場合はinput指定
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