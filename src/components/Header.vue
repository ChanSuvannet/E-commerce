<template>
  <div class="flex justify-between p-5 border-b">
    <!-- Branding Section -->
    <div class="flex gap-1 items-center text-2xl">
      <h1 class="font-medium text-blue-950">EduMaterial</h1>
      <h1 class="font-medium text-yellow-500">Shop</h1>
    </div>

    <!-- Navigation Section -->
    <div class="flex gap-3 items-center">
      <!-- Theme Toggle -->
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
      <div class="relative flex items-center gap-2">
        <template v-if="authToken">
          <!-- User Profile Icon -->
          <img
            id="avatarButton"
            type="button"
            @click="toggleDropdown"
            :src="userProfilePicture"
            class="w-10 h-10 rounded-full cursor-pointer"
            alt="User Profile"
          />

          <!-- Dropdown Menu -->
          <div
            v-if="showDropdown"
            id="userDropdown"
            class="absolute top-12 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <div class="px-4 py-3 text-sm text-gray-900">
              <div class="text-lg">{{ username }}</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700"
              aria-labelledby="avatarButton"
            >
              <li>
                <div
                  class="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiCreditCardOutline"
                    class="w-5 h-5 text-gray-700"
                  />
                  <a href="#" class="text-sm text-gray-700"> Payment </a>
                </div>
              </li>
            </ul>
            <div class="py-1">
              <div
                class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-50"
                @click="logout"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiLogout"
                  class="w-5 h-5 text-gray-700"
                />
                <span class="text-sm text-gray-700"> Logout </span>
              </div>
            </div>
          </div>
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
import { mdiCreditCardOutline, mdiLogout, mdiThemeLightDark } from "@mdi/js";
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

// Authentication state
const authToken = ref(sessionStorage.getItem("authToken") || null);

// User details from `userData` in localStorage
const userData = JSON.parse(localStorage.getItem("userData") || "{}");
const username = ref(userData.username || "Guest");
const email = ref(userData.email || "guest@example.com");
const userProfilePicture = ref(
  userData.userProfilePicture ||
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
);

// Dropdown visibility
const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Navigation actions
const goToSignIn = () => {
  router.push("/login");
};

const goToSignUp = () => {
  router.push("/register");
};

const logout = () => {
  sessionStorage.clear();
  localStorage.clear();
  authToken.value = null;
  router.push("/login");
};
</script>

<style scoped>
/* Add styles as necessary */
</style>
