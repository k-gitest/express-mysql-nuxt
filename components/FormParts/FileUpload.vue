<template>
  <input 
      class="form-input" 
      type="file"
      @change="onChange"
      v-bind="$attrs"
    />
</template>

<script>
// propsで親からデータを受け取りvalueにセット、$emitで親にデータを返す
// $emitの引数はイベント名と値
// $eventで要素にアクセスする
// v-bind="$attrs"で親の属性を継承できる（src、placeholderなど）
  export default {
    inheritAttrs: false,
    props: {
      /*
      value:{
       type: Object,
       //require: true,
      },
      */
      btnTitle: {
        type: String,
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
      onChange: function(e){
        console.log(e.target.value)
        console.log(typeof e.target.files[0])
        // v-modelを使用する場合はinput指定
        this.$emit('input', e.target.files[0])
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
    color:#000;
  }
</style>