<template>
  <div class="bg-gray-800 text-white">
    <!-- Navigation Bar -->
    <nav class="flex justify-between p-4">
      <router-link
        to="/home"
        class="flex items-center space-x-2"
        :class="{ 'bg-red-500': $route.path === '/home' }"
      >
        <!-- Home Icon/Text -->
        <svg-icon type="mdi" :path="mdiHome" class="text-white" />
        <span>Home</span>
      </router-link>

      <router-link
        to="/shop"
        class="flex items-center space-x-2"
        :class="{ 'bg-red-500': $route.path === '/shop' }"
      >
        <!-- Shop Icon/Text -->_
        <svg-icon type="mdi" :path="mdiShopping" class="text-white" />
        <span>Shop</span>
      </router-link>

      <router-link
        to="/event"
        class="flex items-center space-x-2"
        :class="{ 'bg-red-500': $route.path === '/event' }"
      >
        <!-- Event Icon/Text -->
        <svg-icon type="mdi" :path="mdiEvent" class="text-white" />
        <span>Event</span>
      </router-link>

      <router-link
        to="/faqs"
        class="flex items-center space-x-2"
        :class="{ 'bg-red-500': $route.path === '/faqs' }"
      >
        <!-- FAQ Icon/Text -->
        <svg-icon type="mdi" :path="mdiHelp" class="text-white" />
        <span>FAQs</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon"; // Import SvgIcon for rendering SVG icons


</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

nav a {
  padding: 10px 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.bg-red-500 {
  background-color: #f56565;
}
</style>
