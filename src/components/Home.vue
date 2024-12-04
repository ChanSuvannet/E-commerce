<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the homepage of your application.</p>
    <p>Current count: {{ count }}</p>
    <button @click="incrementCount">Example</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define a reactive variable
const count = ref(0)

// Define a method to update the reactive variable
const incrementCount = () => {
  count.value++
}
</script>

<style scoped>
/* Add your styles here */
button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
