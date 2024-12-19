<template>
  <div class="p-4 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] w-full mb-5">
    <!-- Navigation Bar -->
    <div class="flex justify-start space-x-6">
      <router-link
        to="/home"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="getLinkClass('/home')"
      >
        <!-- Home Icon/Text -->
        <svg-icon type="mdi" :path="mdiHome" :class="getIconClass('/home')" />
        <span class="select-none">Home</span>
      </router-link>

      <router-link
        to="/shop"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="getLinkClass('/shop')"
      >
        <!-- Shop Icon/Text -->
        <svg-icon
          type="mdi"
          :path="mdiShopping"
          :class="getIconClass('/shop')"
        />
        <span class="select-none">Shop</span>
      </router-link>

      <router-link
        to="/event"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="getLinkClass('/event')"
      >
        <!-- Event Icon/Text -->
        <svg-icon type="mdi" :path="mdiEvent" :class="getIconClass('/event')" />
        <span class="select-none">Event</span>
      </router-link>

      <router-link
        to="/faqs"
        class="flex items-center space-x-2 p-2 rounded-md transition-all duration-300"
        :class="getLinkClass('/faqs')"
      >
        <!-- FAQ Icon/Text -->
        <svg-icon type="mdi" :path="mdiHelp" :class="getIconClass('/faqs')" />
        <span class="select-none">FAQs</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
mdiCalendarStar,
mdiHelpCircleOutline,
mdiHomeOutline,
mdiStoreOutline,
} from "@mdi/js";
import { useRoute } from "vue-router";

const route = useRoute();

const mdiHome = mdiHomeOutline;
const mdiShopping = mdiStoreOutline;
const mdiEvent = mdiCalendarStar;
const mdiHelp = mdiHelpCircleOutline;

const getLinkClass = (path: string) =>
  route.path === path
    ? "bg-[#022d5a] text-white"
    : "hover:bg-[#023e73] text-gray-500";

const getIconClass = (path: string) =>
  route.path === path ? "text-white" : "text-gray-400 hover:text-white";
</script>

<style scoped>
.select-none {
  user-select: none;
}

nav a {
  transition: all 0.4s ease;
}

nav a:hover {
  background-color: #023e73;
}
</style>
