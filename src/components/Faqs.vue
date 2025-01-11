<script setup lang="ts">
import { mdiMenuDown } from "@mdi/js";
import { computed, ref } from "@vue/runtime-dom";
import { useFaqStore } from "../stores/faqStore";

// Access the FAQ store
const faqStore = useFaqStore();

const selectedCategory = ref<string | null>(null);
const faqSearchQuery = ref("");

// Computed property to filter the FAQs based on selected category and search query
const filteredFaqs = computed(() => {
  return faqStore.faqs.filter(
    (faq: any) =>
      (!selectedCategory.value || faq.category === selectedCategory.value) &&
      (faq.title.toLowerCase().includes(faqSearchQuery.value.toLowerCase()) ||
        faq.content.toLowerCase().includes(faqSearchQuery.value.toLowerCase()))
  );
});

// Computed property to get the unique categories from FAQs
const categories = computed(() => {
  const allCategories = faqStore.faqs.map((faq: any) => faq.category);
  return Array.from(new Set(allCategories));
});

// Active question state
const activeQuestion = ref<number | null>(null);

const form = ref({
  name: "",
  email: "",
  address: "",
  message: "",
});

const sendTelegramMessage = async () => {
  const telegramBotToken = "7593739467:AAENNf38VttIRP0VMWaq1R2Aq-uMIaF26OQ";
  const chatId = "-1002334502755";

const telegramMessage = `
New Contact Form Submission
Name     : ${form.value.name}
Email    : ${form.value.email}
Address  : ${form.value.address}
Message  : ${form.value.message}
`;

  const response = await fetch(
    `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    }
  );

  if (response.ok) {
    alert("Message sent successfully to Telegram!");
  } else {
    alert("Failed to send message.");
  }
};

const submitForm = async () => {
  try {
    await sendTelegramMessage();
    form.value = {
      name: "",
      email: "",
      address: "",
      message: "",
    };
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
</script>

<template>
  <section class="h-auto">
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

    <!-- message to admin -->
    <div class="flex justify-center items-center gap-4 mt-1 mb-2">
      <div class="flex flex-col justify-center w-full">
        <div class="flex justify-center p-5">
          <span class="p-5 rounded-lg text-3xl font-semibold"
            >Have Any Question?</span
          >
        </div>
        <span class="flex justify-center text-gray-600"
          >It is a long established fact that a reader will be distracted
          content of a page when looking.</span
        >
        <br />
      </div>
    </div>
    <div>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
    </div>
    <div>
      <div class="relative w-full h-[500px]">
        <!-- Google Map -->
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://maps.google.com/maps?width=3000&amp;height=400&amp;hl=en&amp;q=Institute%20of%20Technology%20of%20Cambodia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          style="border: 0"
          aria-hidden="false"
          tabindex="0"
        ></iframe>

        <!-- Form -->
        <!-- Form -->
        <div
          class="absolute -top-[350px] left-1/2 transform -translate-x-1/2 z-10 bg-white p-9 rounded-xl shadow-lg w-[90%] md:w-[50%]"
        >
          <form @submit.prevent="submitForm">
            <!-- Name -->
            <div class="relative z-0 w-full mb-5 group">
              <input
                v-model="form.name"
                type="text"
                name="floating_name"
                id="floating_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <!-- Email -->
            <div class="relative z-0 w-full mb-5 group">
              <input
                v-model="form.email"
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>

            <!-- Address -->
            <div class="relative z-0 w-full mb-5 group">
              <input
                v-model="form.address"
                type="text"
                name="floating_address"
                id="floating_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>

            <!-- Message -->
            <div class="relative z-0 w-full mb-5 group">
              <textarea
                v-model="form.message"
                name="floating_message"
                id="floating_message"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                for="floating_message"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg w-full sm:w-auto px-5 py-5 text-center"
              >
                Get In Touch
              </button>
            </div>
          </form>
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
.mapouter {
  position: relative;
  text-align: right;
  width: 600px;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 600px;
  height: 400px;
}
.gmap_iframe {
  width: 600px !important;
  height: 400px !important;
}
</style>
