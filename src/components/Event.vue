<template>
  <div class="event-page">
    <PromoSection />
    <div class="flex justify-center">
      <div class="slider" ref="slider" @scroll="handleScroll">
        <img
          id="slider1"
          src="/src/image/pro.png"
          alt="Christmas Image 1 w-[400px]"
          class="image"
          @click="navigateTo('/shop')"
        />
        <img
          id="slider2"
          src="/src/image/pro1.png"
          alt="Christmas Image 2"
          class="image w-[400px]"
          @click="navigateTo('/shop')"
        />
        <img
          id="slider3"
          src="/src/image/pro2.png"
          alt="Christmas Image 3"
          class="image w-[400px]"
          @click="navigateTo('/shop')"
        />
      </div>
    </div>

    <div class="slider-nav">
      <a
        href="#slider1"
        :class="{ active: currentSlide === 0 }"
        @click.prevent="scrollToSlide(0)"
      ></a>
      <a
        href="#slider2"
        :class="{ active: currentSlide === 1 }"
        @click.prevent="scrollToSlide(1)"
      ></a>
      <a
        href="#slider3"
        :class="{ active: currentSlide === 2 }"
        @click.prevent="scrollToSlide(2)"
      ></a>
    </div>

    <!-- Discount Filter Buttons -->
    <div class="discount-buttons">
      <button class="bg-yellow-500" @click="selectDiscount('50% Off')">
        50% Off
      </button>
      <button class="bg-[#022d5a]" @click="selectDiscount('30% Off')">
        30% Off
      </button>
      <button class="bg-[#022d5a]" @click="selectDiscount('50% Off')">
        20% Off
      </button>
    </div>

    <!-- Display filtered products -->
    <div v-if="filteredProducts.length > 0" class="flex gap-6 justify-center">
      <div v-for="product in filteredProducts" :key="product.id">
        <!-- Navigate to product details on click -->
        <router-link :to="`/shop/detail/${product.id}`" class="w-full">
          <div
            class="w-full h-auto cursor-pointer space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
          >
            <div
              class="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 p-4"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="object-contain w-[150px] h-[150px] rounded-lg"
              />
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <!-- Product Title -->
              <p class="text-md font-semibold text-gray-800">
                {{ product.title }}
              </p>
              <!-- Star Ratings and Reviews -->
              <div class="flex justify-between items-center">
                <div class="stars flex">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="text-gray-400 text-sm"
                    :class="{ 'text-yellow-500': n <= product.rating }"
                  >
                    ★
                  </span>
                </div>
                <span class="text-gray-600 text-xs">
                  {{ product.reviews }} Reviews
                </span>
              </div>
              <!-- Prices and Discount -->
              <div class="flex justify-between items-center">
                <p class="mr-2 text-lg font-bold text-gray-900">
                  {{ product.currentPrice }}
                </p>
                <p class="text-sm font-medium text-gray-500 line-through">
                  {{ product.originalPrice }}
                </p>
                <p class="ml-auto text-sm font-medium text-red-500">
                  {{ product.discount }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div
          class="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex"
        >
          <h2
            class="text-[#022d5a] text-xl font-bold font-manrope leading-normal"
          >
            Comments & Feedback
          </h2>
          <div class="w-full flex-col justify-start items-start gap-8 flex">
            <!-- Comment 1 -->
            <div
              class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex"
            >
              <div
                class="w-full flex-col justify-start items-start gap-3.5 flex"
              >
                <div class="w-full justify-between items-center inline-flex">
                  <div class="justify-start items-center gap-2.5 flex">
                    <div
                      class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex"
                    >
                      <img
                        class="rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="John Smith image"
                      />
                    </div>
                    <div
                      class="flex-col justify-start items-start gap-1 inline-flex"
                    >
                      <h5
                        class="text-gray-900 text-sm font-semibold leading-snug"
                      >
                        John Smith
                      </h5>
                      <h6 class="text-gray-500 text-xs font-normal leading-5">
                        5 Days ago
                      </h6>
                    </div>
                  </div>
                  <div class="group justify-end items-center flex">
                    <div
                      class="px-5 py-2.5 rounded-xl shadow-lg border border-gray-400 hover:border-[#022d5a] transition-all duration-700 ease-in-out justify-center items-center flex"
                    >
                      <a href="#" class="">
                        <svg
                          class="group-hover:text-[#022d5a] text-gray-400 group-hover:fill-[#022d5a] fill-white transition-all duration-700 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                            stroke="currentColor"
                          />
                        </svg>
                      </a>
                      <div class="px-2 justify-center items-center flex">
                        <h5
                          class="group-hover:text-[#022d5a] text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed"
                        >
                          34
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 text-sm font-normal leading-snug">
                  This product is great! The discount was applied, and it works
                  well for my needs.
                </p>
              </div>
            </div>

            <!-- Comment 2 -->
            <div
              class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex"
            >
              <div
                class="w-full flex-col justify-start items-start gap-3.5 flex"
              >
                <div class="w-full justify-between items-center inline-flex">
                  <div class="justify-start items-center gap-2.5 flex">
                    <div
                      class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex"
                    >
                      <img
                        class="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710238051.png"
                        alt="Emma Davis image"
                      />
                    </div>
                    <div
                      class="flex-col justify-start items-start gap-1 inline-flex"
                    >
                      <h5
                        class="text-gray-900 text-sm font-semibold leading-snug"
                      >
                        Emma Davis
                      </h5>
                      <h6 class="text-gray-500 text-xs font-normal leading-5">
                        4 Days ago
                      </h6>
                    </div>
                  </div>
                  <div class="group justify-end items-center flex">
                    <div
                      class="px-5 py-2.5 rounded-xl shadow-lg border border-gray-400 hover:border-[#022d5a] transition-all duration-700 ease-in-out justify-center items-center flex"
                    >
                      <a href="#" class="">
                        <svg
                          class="group-hover:text-[#022d5a] text-gray-400 group-hover:fill-[#022d5a] fill-white transition-all duration-700 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                            stroke="currentColor"
                          />
                        </svg>
                      </a>
                      <div class="px-2 justify-center items-center flex">
                        <h6
                          class="group-hover:text-[#022d5a] text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed"
                        >
                          30
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 text-sm font-normal leading-snug">
                  The item is as expected and works great with the discount
                  applied. Happy with the purchase!
                </p>
              </div>
            </div>

            <!-- Comment Input -->
            <div class="w-full relative flex justify-between gap-2">
              <input
                type="text"
                class="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-md focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                placeholder="Leave a constructive comment..."
              />
              <a href="#" class="absolute right-6 top-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0194 1.66699V5.6556C1.69526 5.6556 1.54178 14.4163 1.69573 18.3337C1.69573 16.4818 5.84659 10.0003 10.0194 10.6414V14.63L18.3332 8.14847L10.0194 1.66699Z"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br />
  </div>
</template>

<script>
import { ProductStore } from "../stores/productStore";
import PromoSection from "../views/Event/PromoSection.vue";

export default {
  name: "Event",
  components: {
    PromoSection,
  },
  data() {
    return {
      discount: "50% Off",
      notificationMessage: "",
    };
  },
  computed: {
    filteredProducts() {
      const store = ProductStore();
      return store.filteredProducts;
    },
  },
  methods: {
    selectDiscount(discount) {
      const store = ProductStore();
      store.selectDiscount(discount);
    },
    navigateTo(path) {
      this.$router.push(path);
    },
    handleScroll() {
      // Placeholder for scroll handling logic
    },
  },
  watch: {
    discount(newValue) {
      if (!newValue) {
        this.discount = "50% Off";
      }
      const store = ProductStore();
      store.selectDiscount(this.discount);
    },
  },
  created() {
    const store = ProductStore();
    if (!store.discount) {
      store.selectDiscount("50% Off"); // Set default discount in the store
    }
  },
};
</script>

<style scoped>
/* Slider and Navigation */
.slider-wrapper {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
}

.slider {
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

/* Slider image */
.slider img {
  flex: 0 0 100%; /* Full slide width */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  scroll-snap-align: start;
  object-fit: cover; /* Make the image cover the container */
  border-radius: 10%;
  height: 100%;
  transition: transform 0.3s ease; /* Smooth zoom effect */
}

.slider img:hover {
  transform: scale(1.1); /* Only apply scale effect on hover */
}

/* Add a new class for the active state (on click) */
.slider img.active {
  filter: brightness(1.2); /* Apply brightness only when clicked */
}

.slider-nav {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  top: 1080px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.slider-nav a {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #0f1253;
  opacity: 0.75;
  transition: opacity 0.3s, background-color 0.3s ease;
  display: inline-block;
  cursor: pointer;
}

.slider-nav a.active {
  opacity: 1;
  background-color: #ffff;
}

/* Discount Buttons */
.discount-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.discount-buttons button {
  padding: 12px 20px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 150px;
  margin: 5px;
}

.discount-buttons button:hover {
  background-color: #0d3b6c;
}

/* Product Image */
.product-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Product Card */
.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-details {
  padding: 15px;
}

.product-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1.1rem;
  color: #022d5a;
  font-weight: 600;
}

.product-rating {
  display: flex;
  gap: 5px;
}

.product-rating span {
  font-size: 1.2rem;
  color: gold;
}
</style>
