<script setup>
import { reactive, ref, computed, watch, watchEffect, onWatcherCleanup } from "vue";
const productID = ref("");
const product = ref(null);
watch(productID, async (newValue) => {
  if (newValue) {
    const response = await fetch(`/product${newValue}.json`);
    product.value = await response.json();
  } else {
    product.value = null;
  }
},
{

    immediate: false, // tidak langsung trigger
    deep: true, // tidak perlu karena productID bukan objek reaktif
    // flush: "post", // setelah DOM update
    // flush: 'sync', // sebelum DOM update
    // flush: 'pre', // sebelum DOM update, tapi tidak disarankan
    // flush: 'post', // setelah DOM update, default
    // flush: 'sync', // sebelum DOM update, tidak disarankan
    // flush: 'pre', // sebelum DOM update, tidak disarankan
    // flush: 'post', // setelah DOM update, default
    // flush: 'sync', // sebelum DOM update, tidak disarankan
    // flush: 'pre', // sebelum DOM update, tidak disarankan
    // flush: 'post', // setelah DOM update, default
    // flush: 'sync', // sebelum DOM update, tidak disarankan
    // flush: 'pre', // sebelum DOM update, tidak disarankan
    // flush: 'post', // setelah DOM update, default
    // flush: 'sync', // sebelum DOM update, tidak disarankan

    once: false, // hanya sekali  trigger
});

// code lebih baik menggunakan watchEffect
// watchEffect digunakan untuk reaktifitas yang lebih dinamis
// watchEffect akan otomatis menjalankan ulang ketika ada perubahan pada reactive data yang digunakan di dalamnya
// Ini akan membuat kode lebih bersih dan mudah dipahami
// Namun, perlu diingat bahwa watchEffect akan selalu dijalankan ulang ketika ada perubahan pada reactive data yang digunakan di dalamnya,
// sehingga bisa menyebabkan performa yang lebih rendah jika tidak digunakan dengan hati-hati.
watchEffect(async() => {
  console.log(`Product ID changed to: ${productID.value}`);
  onWatcherCleanup(() => {
    console.log("Cleanup function called");
  });
  
  if (product.value) {
        const response = await fetch(`/product${newValue}.json`);
        product.value = await response.json();
  } else {
    console.log("No product selected");
  }
});// untuk debug, tidak perlu dihapus  
</script>

<template>
  <label for="productID">Product ID:</label>
  <select id="productID" v-model="productID">
    <option value="">Select a product</option>
    <option value="1">Product 1</option>
    <option value="2">Product 2</option>
    <option value="3">Product 3</option>
  </select>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>Price: ${{ product.price }}</p>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>