<script setup>
import { ref } from "vue";

const items = ref([
  { id: 1, text: "Learn Vue.js", completed: false },
  { id: 2, text: "Build a Todo App", completed: true },
  { id: 3, text: "Deploy the App", completed: false },
]);
</script>

<template>
  <h1>Todo List</h1>
  <ol>
    <li v-for="item in items" :key="item.id">
      <div>
        {{ item.text }} -
        <span v-if="item.completed">Completed</span>
        <span v-else>Not Completed</span>
      </div>

      <!-- Menampilkan semua key-value dari item -->
      <ul>
        <li v-for="(value, key) in item" :key="key">{{ key }} - {{ value }}</li>
      </ul>
    </li>
  </ol>

  <ol>
    <li v-for="item in items" :key="item.id">
      <span>
        {{ item.text }} -
        <span v-if="item.completed">Completed</span>
        <span v-else>Not Completed</span>
      </span>
    </li>
  </ol>

  <ul v-for="item in items" :key="item.id">
    <li v-for="(value, key) in item" :key="key">
      <span> {{ key }} - {{ value }} </span>
    </li>
  </ul>

  <h1>use condition</h1>
  <template  v-for="item in items" :key="item.id">
   <ul  v-if="item.completed">
    <li v-for="(value, key) in item" :key="key">
      <span> {{ key }} - {{ value }} </span>
    </li>
  </ul>

  </template>
  
  <div v-for="n in 10" :key="n">
    <h1>Hello {{ n }}</h1>
  </div>
</template>
