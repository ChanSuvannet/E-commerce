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
        @click="toggleTheme"
      />
      <!-- Shop Icon -->
      <Icon class="hover:scale-90 cursor-pointer" />
      <!-- Register Button -->
      <div
        class="font-medium hover:scale-90 cursor-pointer"
        @click="navigateToRegister"
      >
        Register
      </div>
    </div>
  </div>
  <Navigation />
</template>

<script setup lang="ts">
import { mdiShoppingOutline, mdiThemeLightDark } from "@mdi/js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navigation from "../views/navigation.vue";
import Icon from "./Shop/Icon.vue";

// Define the path of the icons
const darkMode = mdiThemeLightDark;
const shop = mdiShoppingOutline;

// Router instance for navigation
const router = useRouter();
const navigateToRegister = () => {
  router.push("/register");
};

// Theme toggle function (example implementation)
const isDarkMode = ref(false);
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark", isDarkMode.value);
};

// User authentication state
const userId = ref(localStorage.getItem("userId") || null);
</script>
