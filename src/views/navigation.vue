<template>
  <div class="p-4 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
    <!-- Navigation Bar -->
    <nav class="flex justify-start space-x-6">
      <router-link
        to="/home"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="{
          'bg-[#022d5a] text-white': $route.path === '/home',
          'hover:bg-[#023e73]': $route.path !== '/home'
        }"
      >
        <!-- Home Icon/Text -->
        <svg-icon type="mdi" :path="mdiHome" :class="{'text-white': $route.path === '/home', 'text-gray-400': $route.path !== '/home'}" />
        <span class="select-none">Home</span> <!-- Prevent text selection -->
      </router-link>

      <router-link
        to="/shop"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="{
          'bg-[#022d5a] text-white': $route.path === '/shop',
          'hover:bg-[#023e73]': $route.path !== '/shop'
        }"
      >
        <!-- Shop Icon/Text -->
        <svg-icon type="mdi" :path="mdiShopping" :class="{'text-white': $route.path === '/shop', 'text-gray-400': $route.path !== '/shop'}" />
        <span class="select-none">Shop</span> <!-- Prevent text selection -->
      </router-link>

      <router-link
        to="/event"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="{
          'bg-[#022d5a] text-white': $route.path === '/event',
          'hover:bg-[#023e73]': $route.path !== '/event'
        }"
      >
        <!-- Event Icon/Text -->
        <svg-icon type="mdi" :path="mdiEvent" :class="{'text-white': $route.path === '/event', 'text-gray-400': $route.path !== '/event'}" />
        <span class="select-none">Event</span> <!-- Prevent text selection -->
      </router-link>

      <router-link
        to="/faqs"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="{
          'bg-[#022d5a] text-white': $route.path === '/faqs',
          'hover:bg-[#023e73]': $route.path !== '/faqs'
        }"
      >
        <!-- FAQ Icon/Text -->
        <svg-icon type="mdi" :path="mdiHelp" :class="{'text-white': $route.path === '/faqs', 'text-gray-400': $route.path !== '/faqs'}" />
        <span class="select-none">FAQs</span> <!-- Prevent text selection -->
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarStar, mdiHelpCircleOutline, mdiHomeOutline, mdiStoreOutline } from "@mdi/js";

const mdiHome = mdiHomeOutline;
const mdiShopping = mdiStoreOutline;
const mdiEvent = mdiCalendarStar;
const mdiHelp = mdiHelpCircleOutline;
</script>

<style scoped>
/* Prevent text selection on active items */
.select-none {
  user-select: none;
}

/* Ensure a smooth color transition when hovering or changing active states */
nav a {
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #023e73;
}
</style>
