<template>
  <div class="background">
    <img src="../pages/2.png" alt="">
  </div>
</template>

<!-- <script>
export default {
  name: "event", // Use kebab-case for the component name
};
</script> -->

<style scoped>
.background {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;    /* Center vertically */
  margin: 2%;             /* Add margin to the container */
  min-height: 50vh;       /* Ensure container has a minimum height */
  background-color: bisque;
}

.background img {
  max-width: 100%;        /* Ensure the image scales responsively */
  max-height: 70vh;       /* Prevent the image from being too tall */
  height: auto;           /* Maintain aspect ratio */
  border-radius: 10px;    /* Optional: Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for a modern look */
}
</style>
