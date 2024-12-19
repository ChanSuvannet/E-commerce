<template>
  <div class="flex justify-between p-5 border-b">
    <!-- Branding Section -->
    <div class="flex gap-1 items-center text-2xl">
      <h1 class="font-medium text-blue-950">EduMaterial</h1>
      <h1 class="font-medium text-yellow-500">Shop</h1>
    </div>

    <!-- Navigation Section -->
    <div class="flex gap-3 items-center">
      <svg-icon
        type="mdi"
        :path="darkMode"
        class="hover:scale-90 cursor-pointer"
      />
      <svg-icon type="mdi" :path="shop" class="hover:scale-99 cursor-pointer" />

      <!-- Conditional Button for Register/Profile -->
      <div
        v-if="!userId"
        @click="navigateToRegister"
        class="font-medium hover:scale-90 cursor-pointer px-3 pt-2 pb-2 bg-[#022d5a] rounded-md text-white"
      >
        Register
      </div>
      <div
        v-else
        class="font-medium hover:scale-90 cursor-pointer px-3 pt-2 pb-2 bg-[#023e73] rounded-md text-white"
      >
        Profile
      </div>
    </div>
  </div>
  <Navigation />
</template>

<script setup lang="ts">
import { mdiShoppingOutline, mdiThemeLightDark } from "@mdi/js";
import { ref } from "@vue/runtime-dom";
import { useRouter } from "vue-router";
import Navigation from "../views/navigation.vue";
const router = useRouter();
// Define the path of the icons
const darkMode = mdiThemeLightDark;
const shop = mdiShoppingOutline;
const navigateToRegister = () => {
  router.push("/register");
};

// User authentication state
const userId = ref(localStorage.getItem("userId") || null);
</script>
