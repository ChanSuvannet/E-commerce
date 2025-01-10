<script setup lang="ts">
import { mdiMenuDown } from "@mdi/js";
import { computed, ref } from "@vue/runtime-dom";
import { useFaqStore } from "../stores/faqStore";

// Access the FAQ store
const faqStore = useFaqStore();

const selectedCategory = ref<string | null>(null);
const faqSearchQuery = ref("");

const filteredFaqs = computed(() => {
  return faqStore.faqs.filter(
    (faq: any) =>
      (!selectedCategory.value || faq.category === selectedCategory.value) &&
      (faq.title.toLowerCase().includes(faqSearchQuery.value.toLowerCase()) ||
        faq.content.toLowerCase().includes(faqSearchQuery.value.toLowerCase()))
  );
});

const categories = computed(() => {
  const allCategories = faqStore.faqs.map((faq: any) => faq.category);
  return Array.from(new Set(allCategories));
});

const activeQuestion = ref<number | null>(null);
</script>

<template>
  <section class="h-screen">
    <!-- Heading -->
    <div class="flex justify-center items-center py-5 flex-col mt-10">
      <h2 class="text-[50px] font-bold text-slate-800 moulpali-regular">
        Frequently Asked Questions
      </h2>
      <span class="font-cr-regular">
        If you can't find an answer that you're looking for, feel free to drop
        us a line.
      </span>
    </div>

    <!-- Category Buttons -->
    <div class="flex justify-center items-center gap-4 mt-1 mb-2">
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectedCategory = category"
        class="relative pt-2 pb-2 px-4 rounded-full cursor-pointer custom-button transition-transform group"
        :class="{
          'bg-gray-100': selectedCategory === category,
        }"
      >
        <span class="font-semibold relative z-10">{{ category }}</span>
        <!-- Border Effect -->
        <div
          class="absolute inset-0 border-2 border-black rounded-full transition-transform transform scale-100 group-hover:scale-[1.03]"
          :class="{ 'border-black': selectedCategory === category }"
        ></div>
      </div>

      <!-- Show All Button -->
      <div
        @click="selectedCategory = null"
        class="relative pt-2 pb-2 px-4 rounded-full cursor-pointer custom-button transition-transform group"
        :class="{
          'bg-gray-100': selectedCategory === null,
        }"
      >
        <span class="font-semibold relative z-10">Show All</span>
        <!-- Border Effect -->
        <div
          class="absolute inset-0 border-2 border-black rounded-full transition-transform transform scale-100 group-hover:scale-[1.03]"
          :class="{ 'border-black': selectedCategory === null }"
        ></div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="px-5">
      <div class="flex justify-center gap-0">
        <div class="flex flex-col w-[50%]">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="bg-gray-100 rounded-xl mt-3 px-3"
          >
            <!-- Accordion Header -->
            <button
              @click="activeQuestion = activeQuestion === index ? null : index"
              class="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span class="font-semibold">{{ faq.title }}</span>
              <span
                class="text-slate-800 transition-transform duration-300"
                :class="{ 'rotate-180': activeQuestion === index }"
              >
                <svg-icon type="mdi" :path="mdiMenuDown" class="w-4 h-4" />
              </span>
            </button>

            <!-- Accordion Content -->
            <div
              v-show="activeQuestion === index"
              class="overflow-hidden transition-all duration-300 ease-in-out"
              :style="{ maxHeight: activeQuestion === index ? '200px' : '0' }"
            >
              <div class="pb-5 text-sm text-slate-500">
                {{ faq.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Moulpali&family=Playwrite+NG+Modern+Guides&display=swap");

.rotate-180 {
  transform: rotate(180deg);
}

.custom-button {
  transition: border-width 0.3s ease;
}

.moulpali-regular {
  font-family: "Moulpali", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
