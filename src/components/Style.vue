<script setup >
import { ref } from 'vue';
 
    const styleArray = ["red", "bold"];
    const red=ref(false);
    const bold=ref(false);  

    function toggleRed() {
        red.value = !red.value;
        if (red.value) {
            styleArray.push("red");
        } else {
            styleArray.splice(styleArray.indexOf("red"), 1);
        }           
    }   

    function toggleBold() {
        bold.value = !bold.value;
        if (bold.value) {
            styleArray.push("bold");
        } else {
            styleArray.splice(styleArray.indexOf("bold"), 1);
        }       
    }

    const style1 = {
        red: "red",
    };
    const style2 = {
        textTransform: "uppercase",
        fontWeight: "bold",
    };

</script>

<template>
  <h1 :class="{red:red,bold:bold}">Style</h1>
  <h1 :class="styleArray">Style</h1>

  <h1 :style="style1">Style</h1>
  <h1 :style="[style1,style2]">Style</h1>

  <button v-on:click="toggleRed">Red</button>
  <button v-on:click="toggleBold">Bold</button>
</template>

<style scoped>
.red {
  color: red;
}
.bold {
  font-weight: bold;
  text-transform: uppercase;
}
</style>