<script setup lang="ts">
import { computed } from "@vue/runtime-dom";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// Get the current route
const route = useRoute();

// List of routes where the header and footer should be hidden
const hiddenPaths = ["/register", "/login"];

// Computed property to check if the header should be hidden
const isHeaderHidden = computed(() => hiddenPaths.includes(route.path));

// Computed property to check if the footer should be hidden
const isFooterHidden = computed(() => hiddenPaths.includes(route.path));
</script>

<template>
  <div>
    <!-- Header -->
    <div :class="{ hidden: isHeaderHidden }">
      <Header />
    </div>

    <!-- Main Content -->
    <RouterView />

    <!-- Footer -->
    <div :class="{ hidden: isFooterHidden }">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
