<script setup>
import { reactive, ref, computed } from "vue";

const counter = ref(0);

const person = reactive({
  firstName: "",
  lastName: "",
});

const person2 = reactive({
  firstName: "",
  lastName: "",
});

const fullNameComputed = computed(() => {
  return person.firstName + " " + person.lastName;
});

const fullNameComputed2 = computed(() => {
  return person2.firstName + " " + person2.lastName;
});

function SayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

function increment() {
  counter.value++;
}

function changeFirstName() {
  person2.firstName = document.getElementById("firstName2").value;
}

function changeLastName() {
  person2.lastName = document.getElementById("lastName2").value;
}

// function fullName(){
//     return person.firstName + " " + person.lastName;
// }
</script>

<template>
  <div>
    <button v-on:click="increment">Increment</button>
    <div>
      {{ counter }}
    </div>
  </div>
  <form>
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" />
    </div>
    <div>
      <label for="lastName">First Name:</label>
      <input type="text" id="lastName" />
      <!-- <input type="text" id="lastName" v-model="person.lastName">    -->
    </div>
    <div>
      <p>FULL Name: {{ fullNameComputed }}</p>
    </div>
    <button v-on:click.prevent="SayHello">Click Me</button>
  </form>
  <div :style="[{ marginTop: '50px' }]">
    <label for="firstName">First Name 2 :</label>
    <input type="text" id="firstName2" @input="changeFirstName" />
  </div>
  <div>
    <label for="lastName">Last Name 2 :</label>
    <input type="text" id="lastName2" @input="changeLastName" />
    <!-- <input type="text" id="lastName" v-model="person.lastName">    -->
  </div>
  <div>
    <p>Person 2 FULL Name: {{ fullNameComputed2 }}</p>
  </div>
  <button v-on:click="counter++">Increment inline</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>