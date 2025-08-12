<script setup>
import { reactive, ref, computed } from "vue";

const counter = ref(0);

const contact = reactive({
  name: "",
  email: "",
  age:0,
  message: "",  
  phone: "",
  complain: "",
  type: "regular",
});

</script>

<template>
 <h1>Contact Us</h1>
 <form>
  <div>
   <label for="name">Name:</label>
   <input type="text" id="name" v-model="contact.name" />
  </div>
  <div>
   <label for="email">Email:</label>      
    <input type="email" id="email" v-model="contact.email" />
  </div>
  <div>
    <label for="age">Age:</label>     
    <input type="number" id="age" v-model.number="contact.age" />
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" v-model="contact.phone" />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" v-model="contact.message"></textarea>
  </div>
  <div>
    <label for="complain">Complain:</label>
    <input type="checkbox" id="complain" v-model="contact.complain" />
  </div>
  <div>
    <label for="type">Type:</label>
    <select id="type" v-model="contact.type">
      <option value="regular">Regular</option>
      <option value="urgent">Urgent</option>
      <option value="emergency">Emergency</option>
    </select>
  </div>
  <button type="submit" @click.prevent="SayHello">Submit</button>
 </form>

 <h1>Preview</h1>
  <div>
    <p>Name: {{ contact.name }}</p>
    <p>Email: {{ contact.email }}</p>
    <p>Age: {{ contact.age }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <p>Message: {{ contact.message }}</p>
    <p>Complain: {{ contact.complain ? 'Yes' : 'No' }}</p>
    <p>Type: {{ contact.type }}</p>     
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>