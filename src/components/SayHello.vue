<script setup>
import { reactive, ref ,computed} from 'vue';

const counter = ref(0);

const person=reactive({
  firstName:"",
  lastName:""
})

const fullNameComputed = computed(() => {
  return person.firstName + " " + person.lastName;
});

function SayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

function increment() {
  counter.value++;
}

// function fullName(){
//     return person.firstName + " " + person.lastName;
// }
</script>

<template>
    <div>
        <button v-on:click="increment"> Increment</button>
        <div>
            {{ counter }}
        </div>
    </div>
    <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" >   
    </div>
    <div>
        <label for="lastName">First Name:</label>
        <input type="text" id="lastName">   
        <!-- <input type="text" id="lastName" v-model="person.lastName">    -->
    </div>
    <div>
        <p>FULL Name: {{ fullNameComputed }}</p>
    </div>
  <button v-on:click="SayHello">Click Me</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>