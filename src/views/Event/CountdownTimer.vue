<template>
  <div class="countdown">
    <span>{{ days }} Days</span>
    <span>{{ hours }} Hours</span>
    <span>{{ minutes }} Minutes</span>
    <span>{{ seconds }} Seconds</span>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  data() {
    return {
      timer: null, // For clearing the interval
      remainingTime: 0, // Remaining time in seconds
    };
  },
  computed: {
    hours() {
      return Math.floor((this.remainingTime % (24 * 3600)) / 3600);
    },
    minutes() {
      return Math.floor((this.remainingTime % 3600) / 60);
    },
    seconds() {
      return this.remainingTime % 60;
    },
    days() {
      return Math.floor(this.remainingTime / (24 * 3600)); // Calculate days
    },
    date() {
      // Format the date (Day Month Date Year)
      const deadline = new Date("2025-01-31T00:00:00");
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return deadline.toLocaleDateString('en-US', options);
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      // Set deadline to January 1, 2025, at midnight
      const deadline = new Date("2025-01-31T00:00:00").getTime();
      this.remainingTime = Math.max(Math.floor((deadline - now) / 1000), 0);

      if (this.remainingTime <= 0) {
        clearInterval(this.timer);
      }
    },
  },
  mounted() {
    this.updateCountdown(); // Initial calculation
    this.timer = setInterval(this.updateCountdown, 1000); // Update every second
  },
  beforeUnmount() {
    clearInterval(this.timer); // Clean up the timer
  },
};
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  padding-top: 5%;
  padding-bottom: 2%;
  flex-wrap: wrap; /* Allow wrapping of items if screen size is small */
}

.countdown span {

  display: inline-block;
  margin: 0 6px;
  padding: 6px;
  background-color: #1e1f54;
  color: white;
  font-size: 32px; /* Further reduced base font size */
  border-radius: 4px;
  text-align: center;
  min-width: 50px; /* Reduced minimum width */
  flex: 1; /* Make each item flexible */
  max-width: 18%; /* Limit the maximum width */
}

/* Adjust font size for smaller screens */
@media (max-width: 768px) {
  .countdown span {
    font-size: 0.7em; /* Even smaller font for medium screens */
    min-width: 40px; /* Further reduce minimum width */
    max-width: 25%; /* Allow more items to fit */
  }
}

@media (max-width: 480px) {
  .countdown span {
    font-size: 0.6em; /* Even smaller font size for small screens */
    min-width: 30px;
    max-width: 35%; /* Allow more wrapping and fit items on small screens */
  }
}
</style>
