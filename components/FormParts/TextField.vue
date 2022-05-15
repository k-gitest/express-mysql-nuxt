<template>
  <input 
      class="form-input" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
</template>

<script>
// propsで親からデータを受け取りvalueにセット、$emitで親にデータを返す
// $emitの引数はイベント名と値
// $eventで要素にアクセスする
// v-bind="$attrs"で親の属性を継承できる（src、placeholderなど）
  export default {
    props: ['value'],
    
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
    //mountedなどでも親へデータを渡せる
    /*
    mounted() {
      this.$emit('childe-data', this.user)
      //$attrsの中身を見れる
      console.log(this.$attrs)
    }
    */
    
  }
</script>

<style>
  .form-input{
    background: #fff;
    border: solid 1px #ccc;
  }
</style>