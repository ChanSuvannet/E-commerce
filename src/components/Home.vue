<template>
  <div v-if="loading">
    <div class="w-full h-screen flex justify-center items-center z-999">
      <div class="loader"></div>
    </div>
  </div>
  <div v-if="!loading">
    <div>
      <!-- section one  -->
      <div class="flex justify-between items-center py-12 px-20">
        <div
          class="w-full md:w-[50%] flex flex-col items-center md:items-start"
        >
          <div
            class="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif text-center md:text-left mb-4"
          >
            <div class="flex flex-col gap-5">
              <span>Best Products for</span>
              <span class="text-yellow-400">Your Education</span>
            </div>
          </div>
          <div class="text-lg sm:text-xl mb-8 text-center md:text-left">
            Exclusive Discounts for Students!
          </div>
          <div class="flex gap-6 justify-center md:justify-start">
            <div
              class="inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 cursor-pointer"
            >
              20% Off
            </div>
            <div
              class="inline-block px-8 py-4 bg-[#022d5a] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#01467b] cursor-pointer"
            >
              Shop Now
            </div>
          </div>
        </div>
        <div class="w-full md:w-[50%] mt-10 md:mt-0">
          <img
            class="w-full h-auto rounded-xl bg-transparent"
            src="../assets/photo/intro.jpg"
            alt="banner"
          />
        </div>
      </div>

      <!-- section two -->
      <div>

      </div>
      <!-- section three -->
       <div>

       </div>
      <!-- section four -->
       <div>
        
       </div>
      <!-- section five -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import BestSellingBook from "../views/BestSellingBook.vue";
import BestSellingPro from "../views/BestSellingPro.vue";
import homeCard from "../views/homeCard.vue";

export default {
  components: {
    BestSellingBook,
    homeCard,
    BestSellingPro,
  },
  setup() {
    const loading = ref(true);
    // Simulate loading with setTimeout
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });

    return {
      loading,
    };
  },
};
</script>
