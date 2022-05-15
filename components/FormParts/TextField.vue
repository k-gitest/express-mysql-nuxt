<template>
  <input 
      class="form-input" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
    >
</template>

<script>
// propsで親からデータを受け取りvalueにセット、$emitで親にデータを返す
// $emitの引数はイベント名と値
// $eventで要素にアクセスする
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