<script setup>
import { ref } from 'vue';

const score=ref(40); // Example score, can be changed
</script>


<template>

<div v-show="score >50">
    <h2>Score Component</h2>
    <p>Current Score: {{ score }}</p>
</div>
<div v-if="score>90">
    Score {{ score }}  - Excellent
</div>

<div v-else-if="score>75">
    Score {{ score }}  - Good
</div>

<div v-else>
    Score {{ score }}  - Average
</div>


</template>

<style scoped>

</style>