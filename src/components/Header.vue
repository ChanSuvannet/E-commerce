<template>
  <div class="flex justify-between p-5 border-b">
    <div class="flex gap-1 items-center text-2xl">
      <h1 class="font-medium text-blue-950">EduMaterial</h1>
      <h1 class="font-medium text-yellow-500">Shop</h1>
    </div>
    <div class="flex gap-3">
      <svg-icon
        type="mdi"
        :path="darkMode"
        class="hover:scale-90 cursor-pointer"
      />
      <svg-icon type="mdi" :path="shop" class="hover:scale-90 cursor-pointer" />
      <div class="font-medium hover:scale-90 cursor-pointer">Register</div>
    </div>
  </div>
  <div>
    <Navigation></Navigation>
  </div>
</template>

<script setup lang="ts">
import { mdiShoppingOutline, mdiThemeLightDark } from "@mdi/js";
import Navigation from "../views/navigation.vue";
// Define the path of the icon
const darkMode = mdiThemeLightDark;
const shop = mdiShoppingOutline;
</script>
