<template>
  <div>
    <PromoSection />
    <div class="slider-wrapper">
      <div class="slider" ref="slider" @scroll="handleScroll">
        <img
          id="slider1"
          src="/src/image/pro.png"
          alt="Christmas Image 1"
          class="image"
          @click="navigateTo('page1')"
        />
        <img
          id="slider2"
          src="/src/image/pro1.png"
          alt="Christmas Image 2"
          class="image"
          @click="navigateTo('page2')"
        />
        <img
          id="slider3"
          src="/src/image/x-mas.jpg"
          alt="Christmas Image 3"
          class="image"
          @click="navigateTo('page3')"
        />
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
    </div>
  </div>

  <div class="discount">
    <p>Promotion and Discount</p>
    <button>
      <ul class="countdown-list">
        <li @click="handleClick('buyOneGetOne')">Buy one get one</li>
        <li @click="handleClick('discount20')">Discount 20%</li>
        <li @click="handleClick('discount10')">Discount 10%</li>
      </ul>
    </button>
    <filtter />
  </div>
</template>

<script>
import CountdownTimer from "./CountdownTimer.vue";
import PromoSection from "./PromoSection.vue";
// import Filtter from "./filtter.vue";

export default {
  name: "Event",
  components: {
    CountdownTimer,
    PromoSection,
    // Filtter
  },
  data() {
    return {
      currentSlide: 0, // Track the current slide
    };
  },
  methods: {
    // Scroll to the specified slide index
    scrollToSlide(index) {
      const slider = this.$refs.slider;
      const width = slider.offsetWidth;
      slider.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
      this.currentSlide = index;
    },
    // Handle the scroll event to update the current slide
    handleScroll() {
      const slider = this.$refs.slider;
      const width = slider.offsetWidth;
      const index = Math.round(slider.scrollLeft / width);
      this.currentSlide = index;
    },
    // Navigate to a specific route
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10%; /* Adjust padding for responsiveness */
  width: fit-content;
}

/* Slider wrapper styling */
.slider-wrapper {
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
}

/* Slider styling */
.slider {
  display: flex;
  width: 100%; /* Full-width */
  height: auto; /* Adjust height based on content */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  -webkit-overflow-scrolling: touch; /* WebKit-based browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Hide scrollbar for all browsers */
.slider::-webkit-scrollbar {
  display: none; /* Chrome, Safari, WebKit */
}

/* Image styling inside the slider */
.slider img {
  flex: 0 0 100%; /* Full slide width */
  scroll-snap-align: start;
  object-fit: cover; /* Make the image cover the container */
  width: 100%;
  height: 90%;
  transition: transform 0.3s ease; /* Smooth zoom effect */
}

/* Optional: zoom effect on hover */
.slider img:hover {
  transform: scale(1.1); /* Slight zoom effect */
}

/* Scroll navigation dots styling */
.slider-nav {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

/* Styling for individual dots */
.slider-nav a {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #0f1253;
  opacity: 0.75;
  transition: opacity 0.3s;
  display: inline-block;
  cursor: pointer;
}

/* Active dot styling */
.slider-nav a.active {
  opacity: 1;
  background-color: #ffff;
}

/* Hover effect for dots */
.slider-nav a:hover {
  opacity: 1;
}

.discount {
  font-size: 36px;
  font-family: Arial, Helvetica, sans-serif;
  color: #0f1253;
  text-decoration: bold;
}

.countdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.countdown-list li {
  color: rgb(0, 0, 0);
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
}

/* Responsive Breakpoints */

/* For screens less than 600px */
@media (max-width: 600px) {
  .slider img {
    max-height: 250px; /* Limit the image size for smaller screens */
  }
}

/* For screens 600px to 1024px */
@media (min-width: 600px) and (max-width: 1024px) {
  .slider img {
    max-height: 400px; /* Adjust image size for medium screens */
  }
}

/* For screens greater than 1024px */
@media (min-width: 1024px) {
  .slider img {
    max-height: 600px; /* Larger images for wider screens */
  }
}
</style>
