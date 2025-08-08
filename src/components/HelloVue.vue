<script setup>
const hello = "<h1>Hello Vue</h1>";
const classHello = "text-3xl font-bold underline";
const id = "hello";

const buttonDisabled = true;
const data={
  class:"hello",
  id:"hello",
}
</script>

<template>
  <div v-html="hello" v-bind:class="classHello"></div>
  <div v-html="hello" :class="data.class"></div>
  <button :id="id" :disabled="buttonDisabled">Click Me</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>