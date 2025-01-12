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
  gap: 10px;
  padding:10px;
}

.countdown span {
  display: inline-block;
  margin: 0 20px;
  padding: 10px;
  background-color: #1e1f54;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  width: 20%;
  height: 10%;
  font-size: 24px;
}
</style>
