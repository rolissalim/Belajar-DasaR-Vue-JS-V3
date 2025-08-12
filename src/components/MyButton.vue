<script setup>
import { useAttrs } from 'vue';

const props = defineProps({
    name: {
        type: String,
        default: 'Default Name'
    },
    contoh: {
        type: String,
        default: 'Contoh'
    }
});

defineOptions({
    inheritAttrs: true // inherit attributes diturunkan atau tidak
}); 

const attrs = useAttrs();

console.log(attrs);

</script>

<template>
    <button>My Button {{ attrs.name }}</button>
</template>


<style scoped>

</style>