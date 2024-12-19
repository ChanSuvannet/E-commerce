<script setup lang="ts">
import AppSearchHeaderBg from "../assets/page/app-search-header-bg.png";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  customClass: {
    type: String,
    required: false,
  },
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <!-- 👉 Search Banner  -->
  <div
    flat
    class="text-center search-header bg-slate-200 mx-2 rounded-md"
    :style="`background: url(${AppSearchHeaderBg});`"
  >
    <div>
      <h5 class="text-5xl font-weight-medium">
        {{ props.title }}
      </h5>

      <p class="mt-1">
        {{ props.subtitle }}
      </p>

      <form class="max-w-md mx-auto mt-2">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-3 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#023e73] focus:border-[#023e73]"
            placeholder="Search Articles..."
            required
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.search-header {
  padding: 6rem !important;
  background-size: cover !important;
}

// search input
.search-header-input {
  border-radius: 0.25rem !important;
  border-radius: 0.375rem !important;
  background-color: rgb(var(--v-theme-surface));
  max-inline-size: 40.125rem !important;

  .v-field__prepend-inner {
    i {
      inset-block-start: 3px !important;
    }
  }
}

@media (max-width: 37.5rem) {
  .search-header {
    padding: 1.5rem !important;
  }
}
</style>
