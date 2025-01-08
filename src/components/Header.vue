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
      <div class="p-2 bg-gray-100 rounded-full">
        <Icon class="hover:scale-95 cursor-pointer" />
      </div>

      <!-- Dynamic User Section -->
      <div class="flex items-center gap-2">
        <template v-if="userId">
          <!-- User Profile Icon -->
          <img
            :src="userProfilePicture"
            alt="User Profile"
            class="w-8 h-8 rounded-full cursor-pointer hover:scale-90"
            @click="goToAccount"
          />
        </template>
        <template v-else>
          <!-- Sign In and Sign Up Buttons -->
          <button
            class="px-3 pt-2 pb-2 border rounded-xl hover:scale-95"
            @click="goToSignIn"
          >
            Sign In
          </button>
          <button
            class="px-3 pt-2 pb-2 border rounded-xl hover:scale-95 text-white bg-[#022d5a]"
            @click="goToSignUp"
          >
            Sign Up
          </button>
        </template>
      </div>
    </div>
  </div>
  <Navigation />
</template>

<script setup lang="ts">
import { mdiThemeLightDark } from "@mdi/js";
import { ref } from "@vue/runtime-dom";
import { useRouter } from "vue-router";
import Navigation from "../views/navigation.vue";
import Icon from "./Shop/Icon.vue";

// Define the path of the icons
const darkMode = mdiThemeLightDark;

// Router instance for navigation
const router = useRouter();

// Theme toggle function
const isDarkMode = ref(false);
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark", isDarkMode.value);
};

// User authentication state
const userId = ref(localStorage.getItem("userId") || null);

// User profile picture (default image if no profile picture is available)
const userProfilePicture = ref(
  localStorage.getItem("userProfilePicture") ||
    "https://via.placeholder.com/150"
);

// Navigation actions
const goToSignIn = () => {
  router.push("/login");
};

const goToSignUp = () => {
  router.push("/register");
};

const goToAccount = () => {
  router.push("/account");
};
</script>
