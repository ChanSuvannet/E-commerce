<script setup lang="ts">
import { mdiMenuDown } from "@mdi/js";
import { computed, ref } from "@vue/runtime-dom";
import AppSearchHeader from "../views/AppSearchHeader.vue";

// Search query for FAQs
const faqSearchQuery = ref("");

// FAQs data array
const faqs = ref([
  {
    title: "What is Material Tailwind?",
    content:
      "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
  },
  {
    title: "How to use Material Tailwind?",
    content:
      "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
  },
  {
    title: "What can I do with Material Tailwind?",
    content:
      "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
  },
  {
    title: "How to customize Material Tailwind components?",
    content:
      "You can customize components by extending Tailwind CSS configuration and overriding default styles.",
  },
  {
    title: "Does Material Tailwind support dark mode?",
    content:
      "Yes, Material Tailwind fully supports dark mode with easy-to-apply configurations.",
  },
]);

const filteredFaqs = computed(() => {
  return faqs.value.filter(
    (faq) =>
      faq.title.toLowerCase().includes(faqSearchQuery.value.toLowerCase()) ||
      faq.content.toLowerCase().includes(faqSearchQuery.value.toLowerCase())
  );
});

// Track the currently active accordion index
const activeQuestion = ref<number | null>(null);
</script>

<template>
  <section>
    <!-- Search Header -->
    <AppSearchHeader
      v-model="faqSearchQuery"
      title="Hello, how can we help?"
      subtitle="or select a category to quickly find the help you require"
    />

    <!-- FAQ Section -->
    <div class="px-5">
      <div class="flex gap-0">
        <div class="w-[30%]">
          <br>
          <h2 class="text-2xl font-bold text-slate-800 ">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="flex flex-col w-[70%]">
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
              <span>{{ faq.title }}</span>
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
.rotate-180 {
  transform: rotate(180deg);
}
</style>
