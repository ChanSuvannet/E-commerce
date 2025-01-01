<script setup lang="ts">
import { computed } from "@vue/runtime-dom";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";


// Get the current route
const route = useRoute();

// List of routes where the header should be hidden
const hiddenHeaderPaths = ["/register", "/login"];

const isHeaderHidden = computed(() => hiddenHeaderPaths.includes(route.path));


</script>


<template>
  <div :class="{ hidden: isHeaderHidden }">
    <Header />
  </div>
  <RouterView />
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
