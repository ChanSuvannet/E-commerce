<template>
  <section class="bg-white py-8 antialiased md:py-16 min-h-[800px]">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="">
        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Payment</h2>

        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
          <form
            action="#"
            class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8"
          >
            <div class="mb-6 grid grid-cols-2 gap-4">
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="full_name"
                  class="mb-2 block text-sm font-medium text-gray-800"
                >
                  Full name (as displayed on card)*
                </label>
                <input
                  type="text"
                  id="full_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Bonnie Green"
                  required
                />
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label
                  for="card-number-input"
                  class="mb-2 block text-sm font-medium text-gray-900"
                >
                  Card number*
                </label>
                <input
                  type="text"
                  id="card-number-input"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  required
                />
              </div>

              <div>
                <label
                  for="card-expiration-input"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Card expiration*
                </label>
                <div class="relative">
                  <div
                    class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
                  >
                    <svg
                      class="h-4 w-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    datepicker
                    datepicker-format="mm/yy"
                    id="card-expiration-input"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="12/23"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="cvv-input"
                  class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900"
                >
                  CVV*
                  <button
                    data-tooltip-target="cvv-desc"
                    data-tooltip-trigger="hover"
                    class="text-gray-400"
                  >
                    <svg
                      class="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id="cvv-desc"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                  >
                    The last 3 digits on back of card
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <input
                  type="number"
                  id="cvv-input"
                  aria-describedby="helper-text-explanation"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="•••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="flex w-full bg-[#022d5a] text-white border-[#022d5a] hover:bg-[#021d5a] border items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Pay now
            </button>
          </form>

          <div class="mt-6 grow sm:mt-8 lg:mt-0">
            <div
              class="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6"
            >
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500">
                    Original price
                  </dt>
                  <dd class="text-base font-medium text-gray-900">
                    ${{ total }}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Savings
                  </dt>
                  <dd class="text-base font-medium text-green-500">$0.00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500">
                    Store Pickup
                  </dt>
                  <dd class="text-base font-medium text-[#022d5a]">$0.00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500">Tax</dt>
                  <dd class="text-base font-medium text-[#022d5a]">$0.00</dd>
                </dl>
              </div>

              <dl
                class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2"
              >
                <dt class="text-base font-bold text-gray-900">Total</dt>
                <dd class="text-base font-bold text-[#022d5a]">${{ total }}</dd>
              </dl>
            </div>

            <div class="mt-6 flex items-center justify-center gap-8">
              <img
                class="h-8 w-auto dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                alt=""
              />
              <img
                class="hidden h-8 w-auto dark:flex"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                alt=""
              />
              <img
                class="h-8 w-auto dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                alt=""
              />
              <img
                class="hidden h-8 w-auto dark:flex"
                src="https://uat.acledainternetbank.com.kh/internetbank/resources/assets/img/logo/logo_txt.png"
                alt=""
              />
              <img
                class="hidden h-8 w-auto dark:flex"
                src="https://ibccambodia.com/wp-content/uploads/2023/09/ABA-Logo-Secondary.png.webp"
                alt=""
              />
              <img
                class="hidden h-8 w-auto dark:flex"
                src="https://ibccambodia.com/wp-content/uploads/2019/09/Wing-Bank-01-scaled.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <p class="mt-6 text-center text-gray-500 sm:mt-8 lg:text-left">
          Payment processed by
          <a
            href="#"
            title=""
            class="font-medium text-primary-700 underline hover:no-underline"
            >EduMaterial Shop</a
          >
          <a
            href="#"
            title=""
            class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          ></a>
          - Camboidia
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
export default {
  name: "Payment",
  setup() {
    const cart = ref([]);
    const discount = ref(0);
    const shippingCharge = ref(30);

    // Calculate subtotal
    const subtotal = computed(() =>
      cart.value.reduce(
        (sum, item) => sum + item.currentPrice * item.quantity,
        0
      )
    );

    // Calculate total
    const total = computed(() => subtotal.value - discount.value);

    // Load cart items from localStorage
    const loadCartFromLocalStorage = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      cart.value = storedCart;
    };

    // Save cart to localStorage whenever cart changes
    const saveCartToLocalStorage = () => {
      localStorage.setItem("cartItems", JSON.stringify(cart.value));
    };

    watch(cart, saveCartToLocalStorage, { deep: true });
    // Load cart data on component mount
    onMounted(() => {
      loadCartFromLocalStorage();
    });

    return {
      total,
    };
  },
};
</script>
